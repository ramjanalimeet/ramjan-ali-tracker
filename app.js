(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();
const hdr=$('#hdr'),prog=$('.progress'),mcta=$('.mcta');let last=0;
const onScroll=()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
hdr.classList.toggle('scrolled',y>10);
hdr.classList.toggle('hide',y>last&&y>400&&!document.body.classList.contains('menu-open'));last=y;
if(prog)prog.style.width=(h>0?y/h*100:0)+'%';
if(mcta)mcta.classList.toggle('on',y>500&&y<h-700);};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const mb=$('.menu-btn');
mb.addEventListener('click',()=>{const o=document.body.classList.toggle('menu-open');mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')});
addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('menu-open')){document.body.classList.remove('menu-open');mb.setAttribute('aria-expanded','false')}});
if('IntersectionObserver' in window&&!reduce){
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
$$('.rv').forEach(el=>io.observe(el));
}else{$$('.rv').forEach(el=>el.classList.add('in'))}
$$('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)$$('.faq details').forEach(o=>o!==d&&(o.open=false))}));
const toast=m=>{const t=$('.toast');t.textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),2600)};
$$('[data-copy]').forEach(b=>b.addEventListener('click',async e=>{e.preventDefault();try{await navigator.clipboard.writeText(b.dataset.copy);toast('Email copied')}catch{toast(b.dataset.copy)}}));
const lead=$('#lead');
if(lead){
const opened=Date.now();
const hp=document.createElement('div');hp.setAttribute('aria-hidden','true');hp.style.cssText='position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden';
hp.innerHTML='<label>Leave this empty<input name="company_url" tabindex="-1" autocomplete="off"></label>';lead.append(hp);
const NOTIFY='https://formsubmit.co/ajax/raakash.meet@gmail.com';
const live=location.hostname==='ramjan-akash.vercel.app';
lead.addEventListener('submit',async e=>{e.preventDefault();
const d=Object.fromEntries(new FormData(lead));
if(!d.name.trim()||!/^\S+@\S+\.\S+$/.test(d.email)){toast('Please add your name and a valid email');return}
const btn=lead.querySelector('button[type=submit]'),label=btn.textContent;btn.disabled=true;btn.textContent='Sending…';
const payload={...d,t:opened,page:location.pathname};
const save=fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(async r=>{const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||'Could not send');return j});
const notify=(live&&!d.company_url)?fetch(NOTIFY,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({
_subject:'New lead: '+(d.business||d.name)+' ('+d.trade+')',_template:'table',_captcha:'false',
_autoresponse:'Thanks for requesting a free Local SEO audit. I have your details and will reply within 24 hours with your findings. If you want to talk sooner, book a time here: https://cal.com/ramjanalimeet/book-a-call - Ramjan Ali Akash',
name:d.name,email:d.email,business:d.business||'-',website:d.site||'-',trade:d.trade,service_area:d.area||'-',message:d.message||'-',dashboard:'https://ramjan-akash.vercel.app/dashboard'})}).catch(()=>null):Promise.resolve(null);
const [s]=await Promise.allSettled([save,notify]);
if(s.status==='fulfilled'){
const done=document.createElement('div');done.className='form-done';done.setAttribute('role','status');
done.innerHTML='<h3 style="font-size:24px">Thanks, your request is in.</h3><p class="muted" style="margin:10px 0 18px">I will review your business and reply within 24 hours.</p><a class="btn btn-dark" href="/book-a-call">Book a call now →</a>';
lead.replaceChildren(done);
}else{btn.disabled=false;btn.textContent=label;toast(s.reason&&s.reason.message||'Something went wrong. Please email me instead.')}
});}
})();
