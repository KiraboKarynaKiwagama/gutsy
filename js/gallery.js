// events
const M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
$("#evl").innerHTML=EVENTS.map((e,i)=>{const d=new Date(e[0]);return`<div class="ev"><div class="dt">${d.getUTCDate()}<small>${M[d.getUTCMonth()]}</small></div><div><h3>${e[1]}</h3>${e[2]}</div><button class="btn soft" data-e="${i}">Add to calendar</button></div>`}).join("");
document.querySelectorAll("[data-e]").forEach(b=>b.onclick=()=>{const e=EVENTS[b.dataset.e];dl(ics(e[1],e[0].replace(/-/g,"")+"T080000"),"event.ics")});
