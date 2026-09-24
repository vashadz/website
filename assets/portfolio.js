(() => {
  'use strict';
  const {projects,categories,sketches}=window.PORTFOLIO;
  const byId=new Map(projects.map(p=>[p.id,p]));
  const sketchById=new Map(sketches.map(s=>[s.id,s]));
  const categoryName=id=>categories.find(c=>c.id===id)?.label||'';
  const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const reader=document.querySelector('#project-reader'),content=document.querySelector('#reader-content');
  const grid=document.querySelector('#project-grid'),cards=[...document.querySelectorAll('.project-card')];
  const baseTitle=document.title;
  const aliases={f_thesis:'mirrored-realms',data_posters:'data-posters',bilt:'biltcard','saint-martin':'iconem','masterworks-clock':'clock','oliver-wyman':'oliverwyman','david-mallet':'david-mallett'};
  let activeProject=null,previousFocus=null,discipline='all',layout='grid',expanded=false,selectedSketch='modigliani';
  let motionPaused=matchMedia('(prefers-reduced-motion: reduce)').matches;
  try{const saved=localStorage.getItem('vh-motion-paused');if(saved!==null)motionPaused=saved==='true';}catch{}
  const ambient=[...document.querySelectorAll('video.ambient')],visibleVideos=new Set(),visibleFrames=new Set();
  function syncFilmButton(v){const b=v.closest('.project-card')?.querySelector('.film-toggle');if(b){b.textContent=v.paused?'Play ▷':'Pause Ⅱ';b.setAttribute('aria-label',(v.paused?'Play':'Pause')+' '+v.getAttribute('aria-label'));}}
  function reconcileVideo(v){if(motionPaused||document.hidden||reader.open||!visibleVideos.has(v)||v.dataset.userPaused==='true')v.pause();else{if(!v.src)v.src=v.dataset.src;v.play().catch(()=>{});}syncFilmButton(v);}
  function framePreference(frame){frame.contentWindow?.postMessage({type:'vh-motion',paused:motionPaused||document.hidden||!visibleFrames.has(frame)||(reader.open&&!reader.contains(frame))},location.origin);}
  const videoObserver=new IntersectionObserver(entries=>{for(const e of entries){e.isIntersecting?visibleVideos.add(e.target):visibleVideos.delete(e.target);reconcileVideo(e.target);}},{threshold:.15});
  const frameObserver=new IntersectionObserver(entries=>{for(const e of entries){e.isIntersecting?visibleFrames.add(e.target):visibleFrames.delete(e.target);framePreference(e.target);}},{threshold:.1});
  function observeFrames(root=document){root.querySelectorAll('iframe[src^="sketches/"]').forEach(f=>{frameObserver.observe(f);f.addEventListener('load',()=>framePreference(f));});}
  function applyMotion(){document.body.classList.toggle('motion-paused',motionPaused);const b=document.querySelector('#motion-toggle');b.textContent=motionPaused?'Resume motion':'Pause motion';b.setAttribute('aria-pressed',String(motionPaused));ambient.forEach(reconcileVideo);document.querySelectorAll('iframe[src^="sketches/"]').forEach(framePreference);}
  ambient.forEach(v=>{videoObserver.observe(v);v.addEventListener('play',()=>syncFilmButton(v));v.addEventListener('pause',()=>syncFilmButton(v));v.closest('.project-card').querySelector('.film-toggle').addEventListener('click',()=>{if(v.paused){v.dataset.userPaused='false';if(!v.src)v.src=v.dataset.src;v.play().catch(()=>{});}else{v.dataset.userPaused='true';v.pause();}});});
  document.querySelector('#motion-toggle').addEventListener('click',()=>{motionPaused=!motionPaused;try{localStorage.setItem('vh-motion-paused',String(motionPaused));}catch{}applyMotion();});
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{motionPaused=e.matches;applyMotion();});
  document.addEventListener('visibilitychange',applyMotion);
  window.addEventListener('message',e=>{if(e.origin!==location.origin||e.data?.type!=='vh-sketch-ready')return;const f=[...document.querySelectorAll('iframe')].find(f=>f.contentWindow===e.source);if(f)framePreference(f);});
  observeFrames();applyMotion();

  function applyCollection(updateURL=false){
    let seen=0,total=0;
    for(const card of cards){const match=discipline==='all'||card.dataset.category===discipline;if(match)total++;const show=match&&(expanded||layout==='list'||discipline!=='all'||seen<12);card.hidden=!show;if(show)seen++;}
    grid.classList.toggle('is-list',layout==='list');grid.classList.toggle('is-filtered',discipline!=='all');
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===discipline)));
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===layout)));
    document.querySelector('#collection-status').textContent=(discipline==='all'?'All disciplines':categoryName(discipline))+' / '+(seen===total?total+' projects':seen+' of '+total+' projects');
    document.querySelector('#show-all').hidden=seen===total;
    if(updateURL){const u=new URL(location.href);discipline==='all'?u.searchParams.delete('discipline'):u.searchParams.set('discipline',discipline);u.searchParams.delete('profile');history.replaceState(history.state,'',u);}
  }
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{discipline=b.dataset.filter;expanded=false;applyCollection(true);}));
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{layout=b.dataset.view;applyCollection();}));
  document.querySelector('#show-all').addEventListener('click',()=>{expanded=true;applyCollection();cards[12]?.querySelector('a')?.focus({preventScroll:true});});

  function mediaMarkup(m){
    const label=m.caption||activeProject.title;
    let visual='';
    if(m.kind==='vimeo')visual=`<div class="vimeo-stage"><iframe src="https://player.vimeo.com/video/${esc(m.id)}?dnt=1&amp;title=0&amp;byline=0&amp;portrait=0" title="${esc(activeProject.title)}: complete film" width="${m.width}" height="${m.height}" style="aspect-ratio:${m.width}/${m.height}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><a class="media-source" href="https://vimeo.com/${esc(m.id)}" target="_blank" rel="noopener">Open on Vimeo ↗</a>`;
    else if(m.kind==='sketch')visual=`<div class="live-art"><iframe src="sketches/${esc(m.id)}/index.html" title="${esc(activeProject.title)}: live artwork" style="aspect-ratio:${m.width}/${m.height}"></iframe></div>`;
    else if(m.kind==='video')visual=`<video controls playsinline preload="metadata" poster="${esc(m.poster)}" aria-label="${esc(label)}"><source src="${esc(m.src)}" type="video/mp4"></video>`;
    else visual=`<a href="${esc(m.src)}" target="_blank" rel="noopener" aria-label="Open full-size image: ${esc(label)}"><img src="${esc(m.src)}" ${m.width?`width="${m.width}" height="${m.height}"`:''} alt="${esc(label)}" loading="lazy" decoding="async"></a>`;
    return `<figure class="reader-media ${esc(m.layout||'')} ${m.kind==='vimeo'?'cinema':''}">${visual}${m.caption?`<figcaption>${esc(m.caption)}</figcaption>`:''}</figure>`;
  }
  function sketchWorkbench(){return `<div class="sketch-workbench"><div class="sketch-menu" role="group" aria-label="Choose a sketch">${sketches.map((s,i)=>`<button data-sketch="${s.id}" aria-pressed="false"><span>${String(i+1).padStart(2,'0')}</span>${esc(s.title)}</button>`).join('')}</div><div><div id="sketch-screen" class="sketch-screen"></div><div class="sketch-controls"><h3 id="sketch-title"></h3><button id="sketch-restart">Restart ↻</button><a id="sketch-source" target="_blank" rel="noopener">View source ↗</a></div><p id="sketch-hint" aria-live="polite"></p></div></div>`;}
  function disposeMedia(){content.querySelectorAll('video').forEach(v=>v.pause());content.querySelectorAll('iframe[src^="sketches/"]').forEach(f=>{frameObserver.unobserve(f);visibleFrames.delete(f);});content.replaceChildren();}
  function openProject(id,push=true){
    id=aliases[id]||id;const p=byId.get(id);if(!p)return false;
    if(!reader.open)previousFocus=document.activeElement;
    disposeMedia();activeProject=p;
    const candidates=projects.filter(x=>discipline==='all'||x.category===discipline);
    const next=candidates[(candidates.findIndex(x=>x.id===p.id)+1)%candidates.length]||projects[0];
    content.innerHTML=`<header class="reader-heading"><div><p class="section-kicker">${esc(p.type)}</p><h1 id="reader-title" tabindex="-1">${esc(p.title)}</h1></div><div class="reader-facts">${p.facts.map(f=>`<p>${esc(f)}</p>`).join('')}</div></header><div class="reader-lead">${p.sketchbook?sketchWorkbench():p.media[0]?mediaMarkup(p.media[0]):''}</div><section class="reader-description"><h2>About the project</h2><div><p>${esc(p.description)}</p>${p.note?`<p class="reader-note">${esc(p.note)}</p>`:''}${p.link?`<a class="text-link" href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>`:''}</div></section>${p.media.length>1?`<div class="reader-gallery">${p.media.slice(1).map(mediaMarkup).join('')}</div>`:''}<div class="reader-end"><button data-close-reader>All projects ↑</button><button data-next-project="${next.id}"><span>Next project</span>${esc(next.title)} ↗</button></div>`;
    document.querySelector('#reader-category').textContent=categoryName(p.category);
    document.title=p.title+' | Vasiliki Hadzikosta';
    document.body.classList.add('modal-open');if(!reader.open)reader.showModal();reader.scrollTop=0;
    if(p.sketchbook)selectSketch(new URL(location.href).searchParams.get('sketch')||selectedSketch,false);
    observeFrames(content);applyMotion();
    if(push){const u=new URL(location.href);u.searchParams.delete('profile');u.searchParams.delete('sketch');u.searchParams.set('project',id);history.pushState({projectModal:true},'',u);}
    return true;
  }
  function finishClose(){disposeMedia();if(reader.open)reader.close();activeProject=null;document.title=baseTitle;document.body.classList.remove('modal-open');applyMotion();if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});}
  function closeProject(){if(history.state?.projectModal)history.back();else{const u=new URL(location.href);u.searchParams.delete('project');u.searchParams.delete('sketch');history.replaceState(null,'',u);finishClose();}}
  reader.addEventListener('cancel',e=>{e.preventDefault();closeProject();});
  function selectSketch(id,updateURL=true){
    const s=sketchById.get(id)||sketches[0];selectedSketch=s.id;const screen=document.querySelector('#sketch-screen');if(!screen)return;
    screen.querySelectorAll('iframe').forEach(f=>{frameObserver.unobserve(f);visibleFrames.delete(f);});
    document.querySelectorAll('[data-sketch]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sketch===s.id)));
    screen.innerHTML=s.external?`<div class="sketch-external"><h3>${esc(s.title)}</h3><p>${esc(s.hint)}</p><a class="text-link" href="https://editor.p5js.org/vashadz/full/${s.p5}" target="_blank" rel="noopener">Open camera sketch ↗</a></div>`:`<iframe src="sketches/${s.id}/index.html" title="${esc(s.title)}: interactive sketch"></iframe>`;
    document.querySelector('#sketch-title').textContent=s.title;document.querySelector('#sketch-hint').textContent=s.hint;document.querySelector('#sketch-source').href=`https://editor.p5js.org/vashadz/sketches/${s.p5}`;document.querySelector('#sketch-restart').hidden=!!s.external;observeFrames(screen);
    if(updateURL){const u=new URL(location.href);u.searchParams.set('sketch',s.id);history.replaceState(history.state,'',u);}
  }
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-close-reader]')){closeProject();return;}
    const next=e.target.closest('[data-next-project]');if(next){openProject(next.dataset.nextProject,false);const u=new URL(location.href);u.searchParams.set('project',next.dataset.nextProject);u.searchParams.delete('sketch');history.replaceState(history.state,'',u);document.querySelector('#reader-title').focus({preventScroll:true});return;}
    const link=e.target.closest('[data-project]');if(link&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey){e.preventDefault();openProject(link.dataset.project);return;}
    const sketch=e.target.closest('[data-sketch]');if(sketch){selectSketch(sketch.dataset.sketch);return;}
    if(e.target.closest('#sketch-restart'))selectSketch(selectedSketch,false);
  });
  function applyRoute(){const params=new URL(location.href).searchParams;discipline=categories.some(c=>c.id===params.get('discipline'))?params.get('discipline'):'all';applyCollection();const id=params.get('project')||(params.get('sketch')?'p5-studies':null);if(id){if(!openProject(id,false)&&reader.open)finishClose();}else if(reader.open)finishClose();}
  window.addEventListener('popstate',applyRoute);applyRoute();
})();
