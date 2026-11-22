/* Shared by every page: menu, social icons, next-run countdown, calendar helpers */
const $=s=>document.querySelector(s),pad=n=>String(n).padStart(2,"0");
const wa=t=>open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank");
$("#burger").onclick=()=>$("#links").classList.toggle("on");$("#links").onclick=()=>$("#links").classList.remove("on");
$("#soc").innerHTML=SOCIAL.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener" aria-label="${s[0]}" title="${s[0]}"><svg viewBox="0 0 24 24">${s[2]}</svg></a>`).join("");
const fd=f=>Object.fromEntries(new FormData(f));
// next run (East Africa Time = UTC+3)
function nxt(){const n=Date.now(),e=new Date(n+108e5);let b;for(let d=0;d<8;d++)for(const r of RUNS){const t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+d,r[2]-3);if(t>n&&new Date(t+108e5).getUTCDay()==r[1]&&(!b||t<b[0]))b=[t,r]}return b}
function tick(){const[b,r]=nxt(),s=Math.floor((b-Date.now())/1e3),d=Math.floor(s/86400);$("#nx-day").textContent=r[0]+", "+r[3];$("#nx-cd").textContent=(d?d+"d ":"")+pad(Math.floor(s%86400/3600))+"h "+pad(Math.floor(s%3600/60))+"m "+pad(s%60)+"s";$("#nx-place").textContent="Meet at "+r[4]}
if($("#nx-day")){tick();setInterval(tick,1e3)}
// tabs
function tabs(box,list,label,show,start){box.innerHTML=list.map((x,i)=>`<button class="tab" role="tab" aria-selected="${i==start}" data-i="${i}">${label(x)}</button>`).join("");
const pick=i=>{box.querySelectorAll(".tab").forEach((b,j)=>b.setAttribute("aria-selected",j==i));show(list[i])};box.onclick=e=>{const b=e.target.closest(".tab");if(b)pick(+b.dataset.i)};pick(start)}
function ics(t,d,rr){return"BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:"+Date.now()+"@gutsy\nDTSTART;TZID=Africa/Kampala:"+d+"\nDURATION:PT1H30M\n"+(rr?"RRULE:FREQ=WEEKLY;BYDAY="+rr+"\n":"")+"SUMMARY:"+t+"\nLOCATION:Naalya, Kampala\nEND:VEVENT\nEND:VCALENDAR"}
function dl(x,n){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([x],{type:"text/calendar"}));a.download=n;a.click()}

// Custom dropdown lists: restyles the list of options on every <select> (the real select stays inside, so forms still work)
document.querySelectorAll("select").forEach(sel=>{
  const box=document.createElement("div");box.className="dd";
  const btn=document.createElement("button");btn.type="button";btn.className="dd-btn";btn.setAttribute("aria-haspopup","listbox");
  const list=document.createElement("ul");list.className="dd-list";list.setAttribute("role","listbox");
  const show=()=>{btn.textContent=sel.options[sel.selectedIndex].text;[...list.children].forEach((li,i)=>li.setAttribute("aria-selected",i==sel.selectedIndex))};
  [...sel.options].forEach((o,i)=>{const li=document.createElement("li");li.textContent=o.text;li.setAttribute("role","option");
    li.onclick=e=>{e.preventDefault();sel.selectedIndex=i;sel.dispatchEvent(new Event("change",{bubbles:true}));show();box.classList.remove("open")};list.appendChild(li)});
  btn.onclick=()=>{document.querySelectorAll(".dd.open").forEach(d=>d!==box&&d.classList.remove("open"));box.classList.toggle("open")};
  sel.classList.add("dd-native");sel.tabIndex=-1;
  sel.parentNode.insertBefore(box,sel);box.append(btn,list,sel);show();
});
document.addEventListener("click",e=>{if(!e.target.closest(".dd"))document.querySelectorAll(".dd.open").forEach(d=>d.classList.remove("open"))});
document.addEventListener("keydown",e=>{if(e.key=="Escape")document.querySelectorAll(".dd.open").forEach(d=>d.classList.remove("open"))});