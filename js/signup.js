$("#shopg").onclick=e=>{const c=e.target.closest(".card");if(!c)return;document.querySelectorAll("#shopg .card").forEach(x=>x.classList.remove("sel"));c.classList.add("sel");$("#item").value=c.dataset.i};
$("#shopf").onsubmit=e=>{e.preventDefault();const d=fd(e.target);wa(`Kit order: ${d.i}, size ${d.z}, for ${d.n}`)};
