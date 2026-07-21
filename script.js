
const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(25px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'ease-out',fill:'forwards'});reveal.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('section article,.section-title,.intro-text,.resume-copy,.resume-paper').forEach(el=>{el.style.opacity=0;reveal.observe(el)});

// animation enhancements
document.querySelectorAll('section,.card,.skill-card,.project-card,.timeline-card').forEach(e=>e.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

document.querySelectorAll('[data-count]').forEach(el=>{
 let target=+el.dataset.count,start=0;
 const obs=new IntersectionObserver(en=>{
  if(!en[0].isIntersecting)return;
  obs.disconnect();
  const step=()=>{start+=Math.max(1,target/50);if(start>=target){el.textContent=target+'+';return;}el.textContent=Math.floor(start);requestAnimationFrame(step)}
  step();
 });
 obs.observe(el);
});

document.querySelectorAll('.card,.skill-card,.project-card').forEach(card=>{
 card.addEventListener('mousemove',e=>{
  const r=card.getBoundingClientRect();
  card.style.backgroundImage=`radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(0,212,255,.10), transparent 35%)`;
 });
 card.addEventListener('mouseleave',()=>card.style.backgroundImage='');
});
