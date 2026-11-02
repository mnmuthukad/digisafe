(function(){
var K="dsk_user",d=document;
function get(){try{return JSON.parse(localStorage.getItem(K))}catch(e){return null}}
function set(u){try{localStorage.setItem(K,JSON.stringify(u))}catch(e){}}
function nameFrom(e){var n=e.split("@")[0].replace(/[._-]+/g," ").trim();return n.replace(/\b\w/g,function(c){return c.toUpperCase()})||e}
var ml=d.documentElement.lang==="ml",u=get();
/* nav: show Dashboard + Logout when signed in */
var li=d.querySelector(".btn-login"),re=d.querySelector(".btn-reg");
if(u&&li&&re){li.textContent=ml?"ഡാഷ്ബോർഡ്":"Dashboard";li.href="dashboard";re.textContent=ml?"ലോഗൗട്ട്":"Log out";re.href="#";re.addEventListener("click",function(e){e.preventDefault();try{localStorage.removeItem(K)}catch(x){}location.href="./"})}
/* forms */
var f=d.querySelector("form[data-auth]");
if(f){
 if(u)location.replace("dashboard");
 f.addEventListener("submit",function(e){
  e.preventDefault();
  var err=f.querySelector(".auth-err"),em=f.elements.email.value.trim(),pw=f.elements.password.value,nm=f.elements.name?f.elements.name.value.trim():"";
  function bad(k,el){err.textContent=f.dataset[k];f.querySelectorAll(".fld").forEach(function(x){x.classList.remove("bad")});el&&el.closest(".fld").classList.add("bad");el&&el.focus()}
  if(f.dataset.auth==="register"&&!nm)return bad("eName",f.elements.name);
  if(!/^\S+@\S+\.\S+$/.test(em))return bad("eMail",f.elements.email);
  if(!pw)return bad("ePass",f.elements.password);
  if(f.dataset.auth==="register"&&f.elements.confirm.value!==pw)return bad("eMatch",f.elements.confirm);
  set({email:em,name:nm||nameFrom(em)});
  location.href="dashboard";
 });
}
/* dashboard guard */
var D=d.querySelector("[data-dash]");
if(D){
 if(!u){location.replace("login")}
 else{
  d.querySelectorAll("[data-user-name]").forEach(function(n){n.textContent=u.name});
  d.querySelectorAll("[data-user-email]").forEach(function(n){n.textContent=u.email});
  var lo=d.querySelector("[data-logout]");lo&&lo.addEventListener("click",function(){try{localStorage.removeItem(K)}catch(x){}location.href="./"});
  D.hidden=false;
 }
}
})();
