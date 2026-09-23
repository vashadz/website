(() => {
  'use strict';
  const {projects,sketches}=window.PORTFOLIO;
  const byId=new Map(projects.map(p=>[p.id,p]));
  const sketchById=new Map(sketches.map(p=>[p.id,p]));
  const page=document.body.dataset.page;
  const reader=document.querySelector('#project-reader');
  const index=document.querySelector('#work-index');
  const content=document.querySelector('#reader-content');
  const baseTitle=document.title;
  const aliases={'data_posters':'data-posters','bilt':'biltcard','saint-martin':'iconem','clock':'clock','masterworks-clock':'clock','oliver-wyman':'oliverwyman','david-mallet':'david-mallett'};
  const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const groupURL=p=>p.group==='notebook'?'notebook.html':'index.html';
  let activeProject=null;
  let previousFocus=null;
  let motionPaused=matchMedia('(prefers-reduced-motion: reduce)').matches;
  try{const saved=localStorage.getItem('vh-motion-paused');if(saved!==null)motionPaused=saved==='true';}catch{}
  const mediaQuery=matchMedia('(prefers-reduced-motion: reduce)');
  const ambient=[...document.querySelectorAll('video.ambient')];
  const visibleVideos=new Set();
  const lock=()=>document.body.classList.toggle('modal-open',reader.open||index.open);
  const syncFilmButton=video=>{
    const button=video.closest('.visual')?.querySelector('.film-toggle');
    if(!button)return;
    const paused=video.paused;
    button.innerHTML=paused?'Play <span aria-hidden="true">▷</span>':'Pause <span aria-hidden="true">Ⅱ</span>';
    button.setAttribute('aria-label',(paused?'Play':'Pause')+' preview');
  };
  function loadVideo(v){if(!v.getAttribute('src')&&v.dataset.src)v.src=v.dataset.src;}
  function reconcileVideo(v){
    if(motionPaused||document.hidden||reader.open||index.open||!visibleVideos.has(v)||v.dataset.userPaused==='true')v.pause();
    else{loadVideo(v);v.play().catch(()=>syncFilmButton(v));}
    syncFilmButton(v);
  }
  const videoObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){entry.isIntersecting?visibleVideos.add(entry.target):visibleVideos.delete(entry.target);reconcileVideo(entry.target);}
  },{threshold:.2});
  ambient.forEach(v=>{
    videoObserver.observe(v);
    v.addEventListener('play',()=>syncFilmButton(v));v.addEventListener('pause',()=>syncFilmButton(v));
    v.addEventListener('error',()=>{const b=v.closest('.visual').querySelector('.film-toggle');if(b)b.hidden=true;});
    v.closest('.visual').querySelector('.film-toggle')?.addEventListener('click',()=>{
      if(v.paused){v.dataset.userPaused='false';loadVideo(v);v.play().catch(()=>{});}else{v.dataset.userPaused='true';v.pause();}
    });
  });
  function applyMotionPreference(){
    document.body.classList.toggle('motion-paused',motionPaused);
    const b=document.querySelector('#motion-toggle');
    if(b){b.textContent=motionPaused?'Resume motion':'Pause motion';b.setAttribute('aria-pressed',String(motionPaused));}
    ambient.forEach(reconcileVideo);
    document.querySelectorAll('iframe[src^="sketches/"]').forEach(frame=>frame.contentWindow?.postMessage({type:'vh-motion',paused:motionPaused},location.origin));
  }
  document.querySelector('#motion-toggle')?.addEventListener('click',()=>{
    motionPaused=!motionPaused;try{localStorage.setItem('vh-motion-paused',String(motionPaused));}catch{}applyMotionPreference();
  });
  mediaQuery.addEventListener('change',event=>{motionPaused=event.matches;applyMotionPreference();});
  document.addEventListener('visibilitychange',()=>ambient.forEach(reconcileVideo));
  window.addEventListener('message',event=>{if(event.origin===location.origin&&event.data?.type==='vh-sketch-ready')event.source?.postMessage({type:'vh-motion',paused:motionPaused},location.origin);});
  applyMotionPreference();

  function mediaMarkup(m){
    const alt=m.caption||activeProject.title;
    const dimensions=m.width&&m.height?`width="${m.width}" height="${m.height}"`:'';
    const visual=m.kind==='video'?`<video controls playsinline preload="metadata" poster="${esc(m.poster)}" aria-label="${esc(alt)}"><source src="${esc(m.src)}" type="video/mp4">Your browser does not support this video. <a href="${esc(m.src)}">Open the film</a>.</video>`:`<a href="${esc(m.src)}" target="_blank" rel="noopener" aria-label="Open full-size image: ${esc(alt)}"><img ${dimensions} src="${esc(m.src)}" alt="${esc(alt)}" loading="lazy" decoding="async"></a>`;
    return `<figure class="reader-media ${esc(m.layout||'')}">${visual}${m.caption?`<figcaption>${esc(m.caption)}</figcaption>`:''}</figure>`;
  }
  function openProject(id,push=true){
    id=aliases[id]||id;
    const p=byId.get(id);if(!p)return false;
    if(p.group!==page){location.href=groupURL(p)+'?project='+encodeURIComponent(id);return true;}
    activeProject=p;previousFocus=document.activeElement;
    if(index.open)index.close();
    content.innerHTML=`<div class="reader-intro"><p class="eyebrow">${esc(p.type)}</p><h2 id="reader-title">${esc(p.title)}</h2><div class="reader-copy"><div><p class="description">${esc(p.description)}</p>${p.note?`<p class="reader-note">${esc(p.note)}</p>`:''}${p.link?`<a class="text-link" href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>`:''}</div><div class="reader-facts">${p.facts.map(f=>`<p>${esc(f)}</p>`).join('')}</div></div></div><div class="reader-gallery">${p.media.map(mediaMarkup).join('')}</div><div class="reader-end"><p>Stay a little longer.</p><button data-close-reader>Back to ${page==='notebook'?'the notebook':'selected work'} ↗</button></div>`;
    document.querySelector('#reader-category').textContent=page==='notebook'?'From the notebook':'Selected work';
    document.title=p.title+' | Vasiliki Hadzikosta';
    if(!reader.open)reader.showModal();reader.scrollTop=0;lock();ambient.forEach(reconcileVideo);
    if(push){const u=new URL(location.href);u.searchParams.delete('profile');u.searchParams.set('project',id);history.pushState({projectModal:true},'',u);}
    return true;
  }
  function finishClose(){
    content.querySelectorAll('video').forEach(v=>{v.pause();v.removeAttribute('src');v.querySelectorAll('source').forEach(s=>s.removeAttribute('src'));v.load();});
    if(reader.open)reader.close();content.innerHTML='';activeProject=null;document.title=baseTitle;lock();ambient.forEach(reconcileVideo);
    if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});
  }
  function closeProject(){
    if(history.state?.projectModal){history.back();}
    else{const u=new URL(location.href);u.searchParams.delete('project');history.replaceState(null,'',u);finishClose();}
  }
  reader.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
  document.addEventListener('click',event=>{
    const close=event.target.closest('[data-close-reader]');if(close){closeProject();return;}
    const link=event.target.closest('a[data-project]');
    if(link&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){event.preventDefault();openProject(link.dataset.project);}
  });
  window.addEventListener('popstate',()=>{
    const id=new URL(location.href).searchParams.get('project');if(id)openProject(id,false);else if(reader.open)finishClose();
  });
  document.querySelectorAll('[data-open-index]').forEach(button=>button.addEventListener('click',()=>{index.showModal();lock();ambient.forEach(reconcileVideo);}));
  const shortcut=document.createElement('button');shortcut.className='index-shortcut';shortcut.textContent='Index ＋';shortcut.hidden=true;shortcut.setAttribute('aria-label','Open project index');document.body.append(shortcut);
  shortcut.addEventListener('click',()=>{index.showModal();lock();ambient.forEach(reconcileVideo);});
  const updateShortcut=()=>shortcut.hidden=window.scrollY<750;
  window.addEventListener('scroll',updateShortcut,{passive:true});updateShortcut();
  document.querySelector('[data-close-index]').addEventListener('click',()=>index.close());
  index.addEventListener('close',()=>{lock();ambient.forEach(reconcileVideo);});
  document.querySelectorAll('[data-index-filter]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('[data-index-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    document.querySelectorAll('.index-row').forEach(row=>row.hidden=button.dataset.indexFilter!=='all'&&row.dataset.group!==button.dataset.indexFilter);
  }));
  document.querySelectorAll('[data-compare]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('[data-compare]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    const im=document.querySelector('#comparison-image');im.src=`assets/editorial/oliver-${button.dataset.compare}.jpg`;im.alt=(button.dataset.compare==='after'?'Redesigned':'Original')+' Oliver Wyman case presentation';
  }));

  let selectedSketch='grid';
  function selectSketch(id,updateURL=true){
    const s=sketchById.get(id);if(!s||!document.querySelector('#sketch-screen'))return;
    selectedSketch=id;
    document.querySelectorAll('[data-sketch]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sketch===id)));
    const screen=document.querySelector('#sketch-screen');
    if(s.external){screen.innerHTML=`<div class="sketch-external"><p class="eyebrow">Camera &amp; gesture</p><h3>Slit-scan</h3><p>${esc(s.hint)}</p><a href="https://editor.p5js.org/vashadz/full/${s.p5}" target="_blank" rel="noopener">Open camera sketch ↗</a></div>`;}
    else{const src=s.remote?`https://editor.p5js.org/vashadz/full/${s.p5}`:`sketches/${id}/index.html`;screen.innerHTML=`<iframe src="${src}" title="${esc(s.title)}: interactive sketch" ${s.remote?'allow="autoplay"':''}></iframe>`;}
    document.querySelector('#sketch-title').textContent=s.title;
    document.querySelector('#sketch-hint').textContent=s.hint;
    document.querySelector('#sketch-source').href=`https://editor.p5js.org/vashadz/sketches/${s.p5}`;
    document.querySelector('#sketch-restart').hidden=Boolean(s.external);
    if(updateURL){const u=new URL(location.href);u.searchParams.set('sketch',id);u.searchParams.delete('project');history.replaceState(null,'',u);}
  }
  document.querySelectorAll('[data-sketch]').forEach(button=>button.addEventListener('click',()=>selectSketch(button.dataset.sketch)));
  document.querySelector('#sketch-restart')?.addEventListener('click',()=>selectSketch(selectedSketch,false));
  if(document.querySelector('#clock-time')){
    const updateTime=()=>document.querySelector('#clock-time').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})+' / Your local time';updateTime();setInterval(updateTime,1000);
  }
  const params=new URL(location.href).searchParams;
  if(params.get('profile')==='design-engineer'){location.replace('notebook.html');return;}
  if(params.get('project'))openProject(params.get('project'),false);
  if(params.get('sketch'))selectSketch(params.get('sketch'),false);
})();
