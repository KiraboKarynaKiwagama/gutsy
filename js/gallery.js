// gallery
let cat="All",vis=[],cur=0;
function gal(){vis=PHOTOS.filter(p=>cat=="All"||p[2]==cat);$("#gal").innerHTML=vis.map((p,i)=>`<figure data-i="${i}" tabindex="0">${p[0]?`<img src="${p[0]}" alt="${p[1]}" loading="lazy">`:"Photo coming soon"}<figcaption>${p[1]}</figcaption></figure>`).join("")}
function gfil(){const cs=["All",...new Set(PHOTOS.map(p=>p[2]))];$("#gf").innerHTML=cs.map(c=>`<button class="tab" aria-selected="${c==cat}" data-c="${c}">${c}</button>`).join("")+`<button class="btn soft" id="addp">Add photos</button>`;$("#addp").onclick=()=>$("#up").click()}
$("#gf").onclick=e=>{const b=e.target.closest("[data-c]");if(b){cat=b.dataset.c;gfil();gal()}};
$("#up").onchange=e=>{[...e.target.files].forEach(f=>PHOTOS.unshift([URL.createObjectURL(f),f.name.replace(/\.[^.]+$/,""),"Social"]));cat="All";gfil();gal()};
function lb(i){cur=(i+vis.length)%vis.length;const p=vis[cur];$("#lbc").innerHTML=(p[0]?`<img src="${p[0]}" alt="${p[1]}">`:`<div class="ph">Photo coming soon</div>`)+`<p>${p[1]}</p>`;$("#lb").classList.add("on")}
$("#gal").onclick=e=>{const f=e.target.closest("figure");if(f)lb(+f.dataset.i)};
$("#gal").onkeydown=e=>{if(e.key=="Enter"){const f=e.target.closest("figure");if(f)lb(+f.dataset.i)}};
$("#lb .x").onclick=()=>$("#lb").classList.remove("on");$("#lb .pv").onclick=()=>lb(cur-1);$("#lb .nx").onclick=()=>lb(cur+1);
document.onkeydown=e=>{if(!$("#lb").classList.contains("on"))return;if(e.key=="Escape")$("#lb").classList.remove("on");if(e.key=="ArrowLeft")lb(cur-1);if(e.key=="ArrowRight")lb(cur+1)};
gfil();gal();