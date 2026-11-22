// Events page: poster cards. The event details live in js/config.js (EVENTS).
const M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],D=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const hm=t=>{const m=/(\d+):?(\d*)\s*(AM|PM)?/i.exec(t||"");if(!m)return"080000";let h=+m[1];if(m[3]){h=h%12;if(/pm/i.test(m[3]))h+=12}return pad(h)+pad(+m[2]||0)+"00"};
const esc=s=>String(s||"").replace(/,/g,"\\,");
const evics=e=>{const day=e.date.replace(/-/g,"");return"BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:"+Date.now()+"@gutsy\n"+(e.time?"DTSTART;TZID=Africa/Kampala:"+day+"T"+hm(e.time)+"\nDURATION:PT3H":"DTSTART;VALUE=DATE:"+day)+"\nSUMMARY:"+esc(e.name)+"\nLOCATION:"+esc(e.place)+"\nEND:VEVENT\nEND:VCALENDAR"};
const I={d:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',t:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',p:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',x:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>'};
const row=(k,txt)=>txt?`<li><svg class="ico" viewBox="0 0 24 24">${I[k]}</svg>${txt}</li>`:"";
const cutoff=Date.now()-864e5,isPast=e=>new Date(e.date+"T00:00:00Z")<cutoff;
const list=[...EVENTS.filter(e=>!isPast(e)).sort((a,b)=>a.date.localeCompare(b.date)),...EVENTS.filter(isPast).sort((a,b)=>b.date.localeCompare(a.date))];
$("#evl").innerHTML=list.map((e,i)=>{
  const d=new Date(e.date+"T00:00:00Z"),past=isPast(e);
  const nice=D[d.getUTCDay()]+", "+d.getUTCDate()+" "+M[d.getUTCMonth()]+" "+d.getUTCFullYear();
  const extra=(e.extra||[]).map(x=>`<li><svg class="ico" viewBox="0 0 24 24">${I.x}</svg><span><b>${x[0]}:</b> ${x[1]}</span></li>`).join("");
  return `<article class="evc${past?" past":""}"><div class="evc-poster">${e.poster?`<img src="${e.poster}" alt="${e.name} poster" loading="lazy">`:"Poster coming soon"}</div>
  <div class="evc-info"><h3>${e.name}${past?' <span class="tag">Past</span>':""}</h3><ul>${row("d",nice)}${row("t",e.time)}${row("p",e.place)}${extra}</ul>
  <div class="evc-btns">${e.link?`<a class="btn" href="${e.link}" target="_blank" rel="noopener">${e.linkText||"More info"}</a>`:""}${past?"":`<button class="btn soft" data-e="${i}">Add to calendar</button>`}</div></div></article>`}).join("");
document.querySelectorAll("[data-e]").forEach(b=>b.onclick=()=>dl(evics(list[b.dataset.e]),"event.ics"));