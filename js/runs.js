[["s1",412],["s2",58],["s3",231]].forEach(([id,v])=>{let c=0;const t=setInterval(()=>{c+=Math.ceil(v/40);if(c>=v){c=v;clearInterval(t)}$("#"+id).textContent=c},30)});
$("#news").innerHTML=NEWS.map(n=>`<article><time>${n[0]}</time><div><h3>${n[1]}</h3>${n[2]}</div></article>`).join("");
