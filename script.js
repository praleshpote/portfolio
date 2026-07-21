
const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(25px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'ease-out',fill:'forwards'});reveal.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('section article,.section-title,.intro-text,.resume-copy,.resume-paper').forEach(el=>{el.style.opacity=0;reveal.observe(el)});
