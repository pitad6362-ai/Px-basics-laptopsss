const body=document.body;
const langBtn=document.getElementById('langBtn');
const themeBtn=document.getElementById('themeBtn');
const contactModal=document.getElementById('contactModal');
const email='Pitad6362@gmail.com';
let language='es';
function setLanguage(next){language=next;document.documentElement.lang=next;document.querySelectorAll('[data-es][data-en]').forEach(el=>{el.innerHTML=el.dataset[next]});langBtn.textContent=next==='es'?'EN':'ES';}
langBtn.addEventListener('click',()=>setLanguage(language==='es'?'en':'es'));
themeBtn.addEventListener('click',()=>{body.classList.toggle('dark');themeBtn.textContent=body.classList.contains('dark')?'☀':'☾';});
function openModal(){contactModal.classList.add('open');contactModal.setAttribute('aria-hidden','false');}
function closeModal(){contactModal.classList.remove('open');contactModal.setAttribute('aria-hidden','true');}
document.getElementById('contactBtn').addEventListener('click',openModal);
document.getElementById('priceContact').addEventListener('click',openModal);
document.getElementById('closeModal').addEventListener('click',closeModal);
document.getElementById('modalBackdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('copyEmail').addEventListener('click',async()=>{const feedback=document.getElementById('copyFeedback');try{await navigator.clipboard.writeText(email);feedback.textContent=language==='es'?'Correo copiado.':'Email copied.';}catch{feedback.textContent=email;}});
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));
