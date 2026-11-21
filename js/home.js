$("#news").innerHTML=NEWS.map(n=>`<article><time>${n[0]}</time><div><h3>${n[1]}</h3>${n[2]}</div></article>`).join("");

// Numbers count up once, when they scroll into view
document.querySelectorAll(".count").forEach(el=>{
  const to=+el.dataset.to;
  const run=()=>{const t0=performance.now(),d=1800;const step=t=>{const p=Math.min((t-t0)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e).toLocaleString();if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window)){el.textContent=to.toLocaleString();return}
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){run();o.disconnect()}},{threshold:.5}).observe(el);
});