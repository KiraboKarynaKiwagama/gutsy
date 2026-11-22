/* SETTINGS FILE: edit the values below, nothing else needs touching. */
/* ===== EDIT THESE ===== */
const WA="256700000000"; // club WhatsApp number, no + or spaces
const SOCIAL=[["Instagram","https://www.instagram.com/gutsybunch","<rect x='3' y='3' width='18' height='18' rx='5'/><circle cx='12' cy='12' r='4'/><circle cx='17.3' cy='6.7' r='.6'/>"],
["WhatsApp","https://wa.me/"+WA,"<path d='M3 21l1.6-4.6A9 9 0 1 1 8 19.4z'/><path d='M9 8.5c0 3.5 3 6.5 6.500 6.500l1-1.800-2-1-1 1c-1-.5-2-1.500-2.500-2.500l1-1-1-2z'/>"],
["Strava","#","<path d='M8 13l4-8 4 8'/><path d='M10.500 17l1.500 3 1.500-3z'/>"],
["Facebook","#","<path d='M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9z'/>"],
["TikTok","#","<path d='M14 4v10.500a3.500 3.500 0 1 1-3.500-3.500'/><path d='M14 4c.3 2.500 2 4 5 4.200'/>"],
["YouTube","#","<rect x='2.500' y='5.500' width='19' height='13' rx='4'/><path d='M10 9.500v5l4.500-2.500z'/>"],
["X","#","<path d='M4 4l16 16M20 4L4 20'/>"]];
const RUNS=[["Tuesday",2,18,"6:00 PM","Oryx Petrol Station, Naalya","After-work easy miles and intervals.","TU","20261124T180000",["5 km","8 km","Intervals"]],
["Thursday",4,18,"6:00 PM","Oryx Petrol Station, Naalya","Tempo and hill work.","TH","20261126T180000",["6 km","10 km","Hills"]],
["Saturday",6,6,"6:00 AM","Metroplex Shopping Centre, Naalya","The long run, then coffee.","SA","20261121T060000",["8 km","12 km","16 km","Coffee after"]]];
const GROUPS=[["Easy","7:00+/km","No-drop. A leader finishes with the last runner. Start here if you’re new.","3 to 5 km","First-timers and returning runners"],
["Steady","6:00/km","5 to 8 km at a conversational pace.","5 to 8 km","Regulars building fitness"],
["Quick","5:00/km","8 to 12 km with a pacer.","8 to 12 km","Runners training for 10K or half marathon"],
["Fast","under 4:30/km","Structured sessions on Tuesday and Thursday.","8 to 12 km","Racers chasing times"]];
const EVENTS=[
 {poster:"images/events/half-marathon-2027.jpeg", name:"Gutsy Half Marathon 2027", date:"2027-01-23", time:"", place:"Metroplex, Naalya", link:"https://bit.ly/3X5L7Cn", linkText:"Register now",
  extra:[["Race fee","UGX 70,000"]]},
 {poster:"images/events/end-of-year-dinner.jpeg", name:"End-of-Year Dinner", date:"2026-12-12", time:"", place:"Kabira Country Club", link:"https://wa.me/256782048520", linkText:"RSVP on WhatsApp",
  extra:[["Per person","UGX 150,000"],["Pay by","Sunday, 6 December"],["Dress code","Casual, all white"],["RSVP","+256 782 048 520"],["Airtel Money","dial *185#, merchant code 4381410"],["MTN MoMo","merchant code 749391"]]},
 {poster:"images/events/stanchart-nairobi.jpeg", name:"Road to StanChart Nairobi Marathon", date:"2026-10-25", time:"", place:"Nairobi, Kenya", link:"", linkText:"",
  extra:[["Team","Gutsy Bunch 2026"]]},
 {poster:"images/events/berlin-marathon.jpeg", name:"BMW Berlin Marathon", date:"2026-09-27", time:"", place:"Berlin, Germany", link:"", linkText:"",
  extra:[["Distance","42.195 km"]]}
];
// PHOTOS: ["images/your-photo.jpg","Caption","Category"]. Leave "" for an empty slot.
const PHOTOS=[
    ["images/saturday-run.png","Saturday run","Runs"],
    ["images/long-runs.png","Long run","Runs"],
    ["images/tusker-run.png","Tuskerlight Run","Races"],
    ["images/cancer-run.png","Rotary Cancer Run","Causes"],
    ["images/international-run.png","International Run","Races"],
    ["","Comrades","Races"],
    ["","Tuesday session","Runs"],
    ["","Team photo","Social"]];
const NEWS=[["21 Nov","Welcome to our new site","Runs continue as normal: Tuesday and Thursday 6 PM, Saturday 6 AM."],["Sample","Weather policy","Cancellations are posted in WhatsApp."]];

const KIT=[
 {img:"images/kit/blue-tee.jpg", name:"Blue club tee", price:"UGX 40,000", note:"Comes in S, M, L, XL. 100% cotton."},
 {img:"images/kit/orange-tee.jpg", name:"Orange club tee", price:"UGX 40,000", note:"Comes in S, M, L, XL. 100% cotton."}
];

/* ===== END EDIT ===== */