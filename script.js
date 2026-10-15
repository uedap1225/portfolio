const data = portfolioData;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function render(){
  $("brandName").textContent=data.profile.name; $("profileName").textContent=data.profile.name; $("profileInitials").textContent=data.profile.initials; $("profileRole").textContent=data.profile.role; $("footerName").textContent=data.profile.name; $("year").textContent=new Date().getFullYear();
  $("heroEyebrow").textContent=data.hero.eyebrow; $("heroLine1").textContent=data.hero.line1; $("heroLine2").textContent=data.hero.line2; $("heroText").textContent=data.hero.text; $("focusText").textContent=data.hero.focus;
  $("heroTags").innerHTML=data.hero.tags.map(t=>`<span>${esc(t)}</span>`).join("");
  $("heroStats").innerHTML=data.hero.stats.map(s=>`<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("");
  $("worksGrid").innerHTML=data.works.map((w,i)=>`<article class="work"><div class="visual ${w.image?"has-image":""}" ${w.image?`style="background-image:url('${esc(w.image)}')"`:""}><span class="index">${String(i+1).padStart(2,"0")}</span></div><div class="work-body"><span class="category">${esc(w.category)}</span><h3>${esc(w.title)}</h3><p>${esc(w.description)}</p><div class="techs">${(w.tech||[]).map(t=>`<span class="tech">${esc(t)}</span>`).join("")}</div>${w.detailUrl||w.movieUrl?`<div class="links">${w.detailUrl?`<a href="${esc(w.detailUrl)}" target="_blank" rel="noopener">DETAIL →</a>`:""}${w.movieUrl?`<a href="${esc(w.movieUrl)}" target="_blank" rel="noopener">MOVIE →</a>`:""}</div>`:""}</div></article>`).join("");
  $("skillsGrid").innerHTML=data.skills.map(s=>`<div class="skill"><h3>${esc(s.name)}</h3><p>${esc(s.description)}</p><div class="bar"><i style="width:${Math.max(0,Math.min(100,s.level))}%"></i></div></div>`).join("");
  $("timeline").innerHTML=data.achievements.map(a=>`<div class="timeline-item"><div class="year">${esc(a.year)}</div><div><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></div><span class="label">${esc(a.label)}</span></div>`).join("");
  $("aboutTitle").textContent=data.about.title; $("aboutText").textContent=data.about.text;
  $("detailGrid").innerHTML=[["School",data.profile.school],["Course",data.profile.course],["Role",data.profile.role],["Location",data.profile.location]].map(x=>`<div class="detail"><small>${x[0]}</small><strong>${esc(x[1])}</strong></div>`).join("");
  $("contactText").textContent=data.contact.text;
  const c=[[data.contact.email&&"Email",data.contact.email&&`mailto:${data.contact.email}`],[data.contact.githubUrl&&"GitHub",data.contact.githubUrl],[data.contact.xUrl&&"X / Twitter",data.contact.xUrl],[data.contact.websiteUrl&&"Website",data.contact.websiteUrl]].filter(x=>x[0]);
  $("contactActions").innerHTML=c.length?c.map((x,i)=>`<a class="btn ${i?"secondary":"primary"}" href="${esc(x[1])}" ${x[1].startsWith("http")?'target="_blank" rel="noopener"':""}>${x[0]}</a>`).join(""):"";
}
render();
$("menuButton").onclick=()=>$("nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>$("nav").classList.remove("open"));
