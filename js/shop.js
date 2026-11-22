// Kit page: cards are built from the KIT list in js/config.js
$("#shopg").innerHTML=KIT.map((k,i)=>`<div class="card kit${i?"":" sel"}" data-i="${k.name}"><div class="kit-img">${k.img?`<img src="${k.img}" alt="${k.name}" loading="lazy">`:"Photo coming soon"}</div><h3>${k.name}</h3>${k.price?`<p class="kit-p">${k.price}</p>`:""}${k.note?`<p class="note">${k.note}</p>`:""}</div>`).join("");
if(KIT.length)$("#item").value=KIT[0].name;
$("#shopg").onclick=e=>{const c=e.target.closest(".card");if(!c)return;document.querySelectorAll("#shopg .card").forEach(x=>x.classList.remove("sel"));c.classList.add("sel");$("#item").value=c.dataset.i};
$("#shopf").onsubmit=e=>{e.preventDefault();const d=fd(e.target);wa(`Kit order: ${d.i}, size ${d.z}, for ${d.n}`)};