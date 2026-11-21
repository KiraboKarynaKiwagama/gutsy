$("#news").innerHTML=NEWS.map(n=>`<article><time>${n[0]}</time><div><h3>${n[1]}</h3>${n[2]}</div></article>`).join("");

// Numbers count up once, when they scroll into view
document.querySelectorAll(".count").forEach(el=>{
  const to=+el.dataset.to;
  const run=()=>{const t0=performance.now(),d=1800;const step=t=>{const p=Math.min((t-t0)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e).toLocaleString();if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window)){el.textContent=to.toLocaleString();return}
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){run();o.disconnect()}},{threshold:.5}).observe(el);
});

// Home page photos: the first 3 gallery photos (empty slots fill in if you have fewer)
const snapPics=[...PHOTOS.filter(p=>p[0]),...PHOTOS.filter(p=>!p[0])].slice(0,3);
$("#snap").innerHTML=snapPics.map(p=>`<a class="snap" href="gallery.html"><div class="ph">${p[0]?`<img src="${p[0]}" alt="${p[1]}">`:"Photo coming soon"}</div><span>${p[1]}</span></a>`).join("");