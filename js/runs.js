tabs($("#rtabs"),RUNS,r=>r[0],r=>{
  $("#rpanel").innerHTML=`<h3>${r[3]} · ${r[4]}</h3><p>${r[5]}</p><div class="chips">${(r[8]||[]).map(c=>`<span>${c}</span>`).join("")}</div><button class="btn sun">Add to my calendar</button>`;
  $("#rpanel button").onclick=()=>dl(ics("Gutsy "+r[0]+" run",r[7],r[6]),"gutsy-"+r[0].toLowerCase()+".ics")
},RUNS.indexOf(nxt()[1]));
tabs($("#gtabs"),GROUPS,g=>g[0],g=>$("#gpanel").innerHTML=`<h3>${g[0]} <small>${g[1]}</small></h3><p>${g[2]}</p><div class="chips">${g[3]?`<span>${g[3]}</span>`:""}<span>Best for: ${g[4]||"everyone"}</span></div>`,0);
$("#pb").onclick=()=>{const k=+$("#pd").value,m=+$("#pt").value;if(!k||!m){$("#pout").textContent="Enter a distance and a time.";return}const p=m/k,f=x=>Math.floor(x)+":"+pad(Math.round(x%1*60)%60);$("#pout").textContent=f(p)+"/km · "+(k/m*60).toFixed(1)+" km/h · 10K in "+f(p*10)+" min"};