(function(){
var R=document.getElementById("dash");if(!R)return;
var d=document,ml=d.documentElement.lang==="ml",SK="dsk_state",UK="dsk_user";
var T=ml?{
n:["അവലോകനം","എന്റെ കോഴ്‌സുകൾ","ബാഡ്ജുകൾ","പ്രൊഫൈൽ","ക്രമീകരണങ്ങൾ"],out:"ലോഗൗട്ട്",
hi:"വീണ്ടും സ്വാഗതം,",sub:"നിങ്ങളുടെ പഠനത്തിന്റെ നിലവിലെ അവസ്ഥ ഇതാ.",
st:["പൂർത്തിയായ പാഠങ്ങൾ","ക്വിസ് മികച്ച സ്കോർ","ബാഡ്ജുകൾ","കോഴ്‌സ് പുരോഗതി"],
cont:"പഠനം തുടരൂ",start:"കോഴ്‌സ് തുടങ്ങാം",resume:"തുടരൂ",review:"കോഴ്‌സ് വീണ്ടും കാണൂ",
act:"സമീപകാല പ്രവർത്തനം",noact:"ഇതുവരെ ഒന്നുമില്ല. കോഴ്‌സ് തുടങ്ങിയാൽ പ്രവർത്തനങ്ങൾ ഇവിടെ കാണാം.",
al:"പാഠം പൂർത്തിയാക്കി",aq:"ക്വിസ് എഴുതി",ab:"ബാഡ്ജ് നേടി",
cn:"തട്ടിപ്പ് തിരിച്ചറിയാം: ഡിജിറ്റൽ സുരക്ഷാ അടിസ്ഥാനങ്ങൾ",cd:"റേയും റോഗും ഒപ്പമുള്ള സൗജന്യ ഡെമോ കോഴ്‌സ്. മൂന്ന് ചെറു പാഠങ്ങളും ഒരു ക്വിസും, ആകെ ഏകദേശം 10 മിനിറ്റ്.",lc:"3 പാഠങ്ങൾ + ക്വിസ്",demo:"ഡെമോ കോഴ്‌സ്",
back:"എല്ലാ കോഴ്‌സുകളും",lesson:"പാഠം",quiz:"ക്വിസ്",mark:"പൂർത്തിയായി എന്ന് അടയാളപ്പെടുത്തൂ",done:"പൂർത്തിയായി",next:"അടുത്തത്",kp:"പ്രധാന കാര്യങ്ങൾ",
qt:"പഠിച്ചത് പരിശോധിക്കാം",qd:"ഓരോ ചോദ്യത്തിനും ഒരു ഉത്തരം തിരഞ്ഞെടുക്കൂ.",sb:"ഉത്തരങ്ങൾ സമർപ്പിക്കൂ",ans:"ആദ്യം എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകൂ.",sc:"നിങ്ങളുടെ സ്കോർ",ok:"ശരി",no:"ശരിയല്ല",right:"ശരിയായ ഉത്തരം:",retake:"ക്വിസ് വീണ്ടും എഴുതൂ",
bt:"നിങ്ങളുടെ ബാഡ്ജുകൾ",bl:"ലോക്ക്ഡ്",
B:[["ആദ്യ ചുവട്","ആദ്യ പാഠം പൂർത്തിയാക്കൂ."],["കോഴ്‌സ് പൂർത്തിയായി","മൂന്ന് പാഠങ്ങളും പൂർത്തിയാക്കൂ."],["തട്ടിപ്പ് തിരിച്ചറിയുന്നയാൾ","ക്വിസിൽ 3-ൽ കുറഞ്ഞത് 2 നേടൂ."],["കൂർമ്മ ദൃഷ്ടി","ക്വിസിൽ 3-ൽ 3 നേടൂ."]],
p:"നിങ്ങളുടെ പ്രൊഫൈൽ",pn:"പൂർണ്ണ നാമം",pe:"ഇമെയിൽ",pp:"ഫോൺ (ഓപ്ഷണൽ)",po:"സ്കൂൾ / സ്ഥാപനം (ഓപ്ഷണൽ)",pc:"അവതാർ നിറം",save:"മാറ്റങ്ങൾ സേവ് ചെയ്യൂ",saved:"മാറ്റങ്ങൾ സേവ് ചെയ്തു.",pv:"പേരും ശരിയായ ഇമെയിലും നൽകൂ.",
s:"ക്രമീകരണങ്ങൾ",sa:"രൂപം",dk:"ഡാർക്ക് തീം",tips:"സുരക്ഷാ നുറുങ്ങുകൾ ഇമെയിലിൽ അയക്കൂ",tipsd:"ഡെമോ ക്രമീകരണം. ഒന്നും അയക്കില്ല.",pw:"പാസ്‌വേഡ് മാറ്റുക",pw1:"പുതിയ പാസ്‌വേഡ്",pw2:"പുതിയ പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക",pwb:"പാസ്‌വേഡ് പുതുക്കൂ",pwe:"പാസ്‌വേഡ് നൽകി അതേപോലെ ആവർത്തിക്കൂ.",pwo:"പാസ്‌വേഡ് പുതുക്കി.",dz:"നിങ്ങളുടെ ഡാറ്റ",rs:"എന്റെ പുരോഗതി റീസെറ്റ് ചെയ്യൂ",rsc:"എല്ലാ പാഠങ്ങളും ക്വിസ് ഫലങ്ങളും ബാഡ്ജുകളും റീസെറ്റ് ചെയ്യട്ടേ?",rsd:"പുരോഗതി റീസെറ്റ് ചെയ്തു.",da:"അക്കൗണ്ട് ഇല്ലാതാക്കൂ",dac:"നിങ്ങളുടെ അക്കൗണ്ടും ഈ ബ്രൗസറിൽ സേവ് ചെയ്ത എല്ലാം ഇല്ലാതാക്കട്ടേ?",
dn:"ഡെമോ മോഡ്: നിങ്ങളുടെ ഡാറ്റ ഈ ബ്രൗസറിൽ മാത്രമാണ് സേവ് ചെയ്യുന്നത്."
}:{
n:["Overview","My courses","Badges","Profile","Settings"],out:"Log out",
hi:"Welcome back,",sub:"Here is where you are in your learning.",
st:["Lessons done","Quiz best","Badges","Course progress"],
cont:"Continue learning",start:"Start course",resume:"Resume",review:"Review course",
act:"Recent activity",noact:"Nothing yet. Start the course to see your activity here.",
al:"Completed lesson",aq:"Took the quiz",ab:"Earned badge",
cn:"Spot the Scam: Digital Safety Basics",cd:"A free demo course with Ray and Rogue. Three short lessons and a quiz, about 10 minutes in total.",lc:"3 lessons + quiz",demo:"Demo course",
back:"All courses",lesson:"Lesson",quiz:"Quiz",mark:"Mark as complete",done:"Completed",next:"Next",kp:"Key points",
qt:"Check what you learned",qd:"Pick one answer for each question.",sb:"Submit answers",ans:"Answer every question first.",sc:"Your score",ok:"Correct",no:"Not quite",right:"Right answer:",retake:"Retake quiz",
bt:"Your badges",bl:"Locked",
B:[["First step","Complete your first lesson."],["Course finished","Complete all three lessons."],["Scam spotter","Score at least 2 of 3 on the quiz."],["Sharp eye","Score 3 of 3 on the quiz."]],
p:"Your profile",pn:"Full name",pe:"Email",pp:"Phone (optional)",po:"School or organisation (optional)",pc:"Avatar colour",save:"Save changes",saved:"Changes saved.",pv:"Enter your name and a valid email.",
s:"Settings",sa:"Appearance",dk:"Dark theme",tips:"Email me safety tips",tipsd:"Demo setting. Nothing is sent.",pw:"Change password",pw1:"New password",pw2:"Confirm new password",pwb:"Update password",pwe:"Enter a password and repeat it the same way.",pwo:"Password updated.",dz:"Your data",rs:"Reset my progress",rsc:"Reset all lessons, quiz results and badges?",rsd:"Progress reset.",da:"Delete account",dac:"Delete your account and everything saved in this browser?",
dn:"Demo mode: your data is saved only in this browser."};
var LS=ml?[
{t:"എന്താണ് സോഷ്യൽ എഞ്ചിനീയറിംഗ്",b:"തട്ടിപ്പുകാർ യന്ത്രങ്ങളെയല്ല, മനുഷ്യരെയാണ് കബളിപ്പിക്കുന്നത്. തിടുക്കം, വ്യാജ വിശ്വാസം, ഭയം എന്നിവയാണ് അവരുടെ പ്രധാന ആയുധങ്ങൾ.",p:["തിടുക്കം: “ഉടൻ ചെയ്യൂ, അല്ലെങ്കിൽ…”","അധികാരം: ബാങ്കിൽനിന്നോ പോലീസിൽനിന്നോ എന്ന ഭാവം","രഹസ്യം: “ആരോടും പറയരുത്”"]},
{t:"നിർത്തൂ, ഉറപ്പാക്കൂ",b:"സംശയം തോന്നിയാൽ ഒന്ന് നിർത്തൂ. കോളിലോ സന്ദേശത്തിലോ വന്ന നമ്പറിൽ തിരിച്ചുവിളിക്കരുത്. നിങ്ങൾക്ക് മുൻപേ അറിയാവുന്ന ഔദ്യോഗിക നമ്പറിൽ വിളിക്കൂ.",p:["ഒടിപി, പിൻ, പാസ്‌വേഡ് എന്നിവ ആരോടും പറയരുത്","വീഡിയോ കോളിലൂടെ പോലീസ് ആരെയും അറസ്റ്റ് ചെയ്യില്ല","ലിങ്ക് തുറക്കും മുൻപ് അയച്ചയാളെ പരിശോധിക്കൂ"]},
{t:"തട്ടിപ്പിന് ഇരയായാൽ",b:"പേടിക്കേണ്ട. വേഗത്തിൽ പ്രവർത്തിക്കുക എന്നതാണ് പ്രധാനം. ആദ്യ മണിക്കൂറുകളിൽ അറിയിച്ചാൽ പണം തിരികെ ലഭിക്കാനുള്ള സാധ്യത കൂടും.",p:["1930 ൽ വിളിക്കൂ","cybercrime.gov.in ൽ പരാതി നൽകൂ","ബാങ്കിനെ ഉടൻ അറിയിക്കൂ; സ്ക്രീൻഷോട്ടുകൾ സൂക്ഷിക്കൂ"]}
]:[
{t:"What social engineering is",b:"Scammers trick people, not machines. Their main tools are urgency, false trust and fear.",p:["Urgency: “Do it now or else…”","Authority: pretending to be your bank or the police","Secrecy: “Don’t tell anyone”"]},
{t:"Pause and verify",b:"If something feels off, stop. Don’t call back the number that contacted you. Call an official number you already know.",p:["Never share an OTP, PIN or password with anyone","The police don’t arrest anyone over a video call","Check who sent a link before you open it"]},
{t:"If it happens to you",b:"Don’t panic. Acting fast is what matters. Reporting within the first hours gives the best chance of getting money back.",p:["Call 1930","Report at cybercrime.gov.in","Tell your bank at once and keep screenshots"]}];
var QZ=ml?[
{q:"10 മിനിറ്റിനകം അക്കൗണ്ട് ബ്ലോക്ക് ആകും, ഒടിപി പറയൂ എന്ന് ഒരാൾ ഫോണിൽ പറയുന്നു. നിങ്ങൾ എന്ത് ചെയ്യും?",o:["വേഗം ഒടിപി പറയും","കട്ട് ചെയ്ത് ബാങ്കിന്റെ ഔദ്യോഗിക നമ്പറിൽ വിളിക്കും","പിന്നീട് വിളിക്കാൻ പറഞ്ഞ് അപ്പോൾ ഒടിപി നൽകും"],a:1},
{q:"ആർക്കാണ് നിങ്ങളുടെ ഒടിപി ചോദിക്കാൻ അവകാശം?",o:["ബാങ്കിന്","പോലീസിന്","ആർക്കുമില്ല"],a:2},
{q:"ഓൺലൈൻ തട്ടിപ്പിൽ പണം നഷ്ടപ്പെട്ടാൽ ആദ്യം എന്ത് ചെയ്യണം?",o:["പണം തിരികെ വരുമോ എന്ന് കാത്തിരിക്കും","1930 ൽ വിളിച്ച് ബാങ്കിനെ ഉടൻ അറിയിക്കും","സമൂഹമാധ്യമത്തിൽ പോസ്റ്റ് ചെയ്യും"],a:1}
]:[
{q:"A caller says your account will be blocked in 10 minutes unless you share the OTP. What do you do?",o:["Share the OTP quickly","Hang up and call the bank on its official number","Ask them to call back, then share it"],a:1},
{q:"Who is allowed to ask for your OTP?",o:["Your bank","The police","Nobody"],a:2},
{q:"You lost money to online fraud. What is your first move?",o:["Wait to see if it comes back","Call 1930 and tell your bank at once","Post about it on social media"],a:1}];
var COL=["linear-gradient(135deg,#6366F1,#8B5CF6)","linear-gradient(135deg,#F59E0B,#EF4444)","linear-gradient(135deg,#06B6D4,#6366F1)","linear-gradient(135deg,#10B981,#06B6D4)","linear-gradient(135deg,#EC4899,#8B5CF6)"];
var IC={home:"M3 11l9-8 9 8v10h-6v-6H9v6H3z",book:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 5v16",award:"M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14 7 22l5-3 5 3-1.5-8",user:"M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8",gear:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2",out:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",ck:"M5 12l5 5 9-10"};
function I(n){return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="'+IC[n]+'"/></svg>'}
function E(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function ld(k,f){try{var v=JSON.parse(localStorage.getItem(k));return v||f}catch(e){return f}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
var user=ld(UK,null);if(!user)return;
var def={done:[],quiz:null,act:[],bd:[],prof:{phone:"",org:"",color:0},tips:true};
var S=ld(SK,def);for(var k in def)if(!(k in S))S[k]=def[k];
var VW=["overview","courses","course","badges","profile","settings"];
var view=(location.hash||"").slice(1),cur=0,retake=false;if(VW.indexOf(view)<0)view="overview";
function save(){sv(SK,S)}
function log(k,v){S.act.unshift({k:k,v:v,t:Date.now()});S.act=S.act.slice(0,12)}
function award(){var q=S.quiz?S.quiz.best:0,c=[S.done.length>=1,S.done.length>=3,q>=2,q>=3],n=[];c.forEach(function(ok,i){if(ok&&S.bd.indexOf(i)<0){S.bd.push(i);log("b",i);n.push(T.B[i][0])}});return n}
function pct(){return Math.round((S.done.length+(S.quiz?1:0))/4*100)}
function nextStep(){for(var i=0;i<3;i++)if(S.done.indexOf(i)<0)return i;return S.quiz?0:3}
function ini(n){return (n.trim().split(/\s+/).slice(0,2).map(function(w){return w.charAt(0)}).join("")||"?").toUpperCase()}
function av(s){return '<span class="dx-av" style="width:'+s+'px;height:'+s+'px;background:'+COL[S.prof.color%COL.length]+'">'+E(ini(user.name))+'</span>'}
function toast(m){var t=d.getElementById("dxt");if(!t){t=d.createElement("div");t.id="dxt";t.className="dx-toast";t.setAttribute("role","status");d.body.appendChild(t)}t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove("on")},2800)}
function bar(p){return '<div class="dx-bar" role="progressbar" aria-valuenow="'+p+'" aria-valuemin="0" aria-valuemax="100"><i style="width:'+p+'%"></i></div>'}
function go(v){if(location.hash==="#"+v){view=v;render()}else location.hash=v}
function cta(){var p=pct();return p===0?T.start:p===100?T.review:T.resume}
function vOv(){
 var q=S.quiz?S.quiz.best+" / 3":"—",p=pct();
 var st=[S.done.length+" / 3",q,S.bd.length+" / 4",p+"%"];
 var a=S.act.length?'<ul class="dx-act">'+S.act.map(function(x){var m=x.k==="l"?T.al+": "+LS[x.v].t:x.k==="q"?T.aq+": "+x.v+" / 3":T.ab+": "+T.B[x.v][0];return '<li><span>'+E(m)+'</span><time>'+new Date(x.t).toLocaleDateString(ml?"ml-IN":"en-IN",{day:"numeric",month:"short"})+'</time></li>'}).join("")+'</ul>':'<p class="dx-empty">'+T.noact+'</p>';
 return '<h1>'+T.hi+' '+E(user.name.split(" ")[0])+'</h1><p class="dx-sub">'+T.sub+'</p><div class="dx-stats">'+st.map(function(s,i){return '<div class="dx-stat"><b>'+s+'</b><span>'+T.st[i]+'</span></div>'}).join("")+'</div><div class="dx-card dx-hero"><div><span class="dx-tag">'+T.demo+'</span><h2>'+T.cn+'</h2>'+bar(p)+'<p class="dx-sub">'+T.cont+' · '+p+'%</p></div><button class="btn btn-primary" data-act="open" data-i="'+nextStep()+'">'+cta()+'</button></div><h2 class="dx-h">'+T.act+'</h2><div class="dx-card">'+a+'</div>'}
function vCo(){var p=pct();return '<h1>'+T.n[1]+'</h1><div class="dx-card dx-course"><img src="'+(ml?"../":"")+'assets/img/both.webp" alt="" width="140" height="117"><div><span class="dx-tag">'+T.demo+'</span><h2>'+T.cn+'</h2><p class="dx-sub">'+T.cd+'</p><p class="dx-meta">'+T.lc+'</p>'+bar(p)+'<button class="btn btn-primary" data-act="open" data-i="'+nextStep()+'">'+cta()+'</button></div></div>'}
function vCourse(){
 var steps=LS.map(function(l,i){return {t:T.lesson+" "+(i+1)+": "+l.t,ok:S.done.indexOf(i)>-1}}).concat([{t:T.quiz+": "+T.qt,ok:!!S.quiz}]);
 var side='<ol class="dx-steps">'+steps.map(function(s,i){return '<li><button type="button" data-act="step" data-i="'+i+'"'+(i===cur?' aria-current="step"':'')+'><span class="dx-ck'+(s.ok?' on':'')+'">'+(s.ok?I("ck"):i+1)+'</span>'+E(s.t)+'</button></li>'}).join("")+'</ol>';
 var main;
 if(cur<3){var l=LS[cur],ok=S.done.indexOf(cur)>-1;
  main='<span class="dx-tag">'+T.lesson+' '+(cur+1)+' / 3</span><h2>'+l.t+'</h2><p class="dx-body">'+l.b+'</p><h3>'+T.kp+'</h3><ul class="checks">'+l.p.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul><div class="dx-row">'+(ok?'<span class="dx-done">'+I("ck")+T.done+'</span>':'<button class="btn btn-primary" data-act="mark" data-i="'+cur+'">'+T.mark+'</button>')+'<button class="btn btn-ghost" data-act="step" data-i="'+(cur+1)+'">'+T.next+'</button></div>'}
 else if(S.quiz&&!retake){
  main='<span class="dx-tag">'+T.quiz+'</span><h2>'+T.sc+': '+S.quiz.last+' / 3</h2>'+QZ.map(function(q,i){var r=S.quiz.ans[i]===q.a;return '<div class="dx-res '+(r?'ok':'no')+'"><b>'+(i+1)+'. '+q.q+'</b><span>'+(r?T.ok:T.no+'. '+T.right+' '+q.o[q.a])+'</span></div>'}).join("")+'<div class="dx-row"><button class="btn btn-primary" data-act="retake">'+T.retake+'</button></div>'}
 else{
  main='<span class="dx-tag">'+T.quiz+'</span><h2>'+T.qt+'</h2><p class="dx-sub">'+T.qd+'</p>'+QZ.map(function(q,i){return '<fieldset class="dx-q"><legend>'+(i+1)+'. '+q.q+'</legend>'+q.o.map(function(o,j){return '<label class="dx-opt"><input type="radio" name="q'+i+'" value="'+j+'"><span>'+o+'</span></label>'}).join("")+'</fieldset>'}).join("")+'<div class="dx-row"><button class="btn btn-primary" data-act="submit">'+T.sb+'</button></div>'}
 return '<button class="dx-back" data-act="courses">← '+T.back+'</button><h1>'+T.cn+'</h1><div class="dx-cgrid"><div class="dx-card">'+side+'</div><div class="dx-card dx-lesson">'+main+'</div></div>'}
function vBd(){return '<h1>'+T.bt+'</h1><div class="dx-bgrid">'+T.B.map(function(b,i){var on=S.bd.indexOf(i)>-1;return '<div class="dx-card dx-badge'+(on?' on':'')+'"><span class="dx-medal">'+I("award")+'</span><h3>'+b[0]+'</h3><p>'+b[1]+'</p>'+(on?'':'<small>'+T.bl+'</small>')+'</div>'}).join("")+'</div>'}
function vPr(){return '<h1>'+T.p+'</h1><form class="dx-card dx-form" data-form="profile" novalidate><div class="dx-me big">'+av(72)+'</div><label class="fld"><span>'+T.pn+'</span><input name="name" value="'+E(user.name)+'" autocomplete="name"></label><label class="fld"><span>'+T.pe+'</span><input name="email" type="email" value="'+E(user.email)+'" autocomplete="email"></label><label class="fld"><span>'+T.pp+'</span><input name="phone" type="tel" value="'+E(S.prof.phone)+'" autocomplete="tel"></label><label class="fld"><span>'+T.po+'</span><input name="org" value="'+E(S.prof.org)+'"></label><fieldset class="dx-sw"><legend>'+T.pc+'</legend>'+COL.map(function(c,i){return '<label><input type="radio" name="color" value="'+i+'"'+(S.prof.color===i?' checked':'')+'><span style="background:'+c+'"></span></label>'}).join("")+'</fieldset><p class="auth-err" role="alert"></p><button class="btn btn-primary" type="submit">'+T.save+'</button></form>'}
function vSe(){var dk=d.documentElement.dataset.theme==="dark";return '<h1>'+T.s+'</h1><div class="dx-card"><h2 class="dx-h2">'+T.sa+'</h2><label class="dx-tg"><input type="checkbox" data-act="dark"'+(dk?' checked':'')+'><span>'+T.dk+'</span></label><label class="dx-tg"><input type="checkbox" data-act="tips"'+(S.tips?' checked':'')+'><span>'+T.tips+'<small>'+T.tipsd+'</small></span></label></div><form class="dx-card dx-form" data-form="pw" novalidate><h2 class="dx-h2">'+T.pw+'</h2><label class="fld"><span>'+T.pw1+'</span><input name="p1" type="password" autocomplete="new-password"></label><label class="fld"><span>'+T.pw2+'</span><input name="p2" type="password" autocomplete="new-password"></label><p class="auth-err" role="alert"></p><button class="btn btn-primary" type="submit">'+T.pwb+'</button></form><div class="dx-card"><h2 class="dx-h2">'+T.dz+'</h2><div class="dx-row"><button class="btn btn-ghost" data-act="reset">'+T.rs+'</button><button class="btn btn-ghost dx-danger" data-act="del">'+T.da+'</button></div></div>'}
function render(){
 user=ld(UK,user);var nav=["overview","courses","badges","profile","settings"],ic=["home","book","award","user","gear"],on=view==="course"?"courses":view;
 var body={overview:vOv,courses:vCo,course:vCourse,badges:vBd,profile:vPr,settings:vSe}[view]();
 R.innerHTML='<div class="dx"><aside class="dx-side"><div class="dx-me">'+av(48)+'<div><b>'+E(user.name)+'</b><small>'+E(user.email)+'</small></div></div><nav class="dx-nav" aria-label="Dashboard">'+nav.map(function(n,i){return '<a href="#'+n+'"'+(n===on?' aria-current="page"':'')+'>'+I(ic[i])+T.n[i]+'</a>'}).join("")+'</nav><button class="dx-out" data-act="logout">'+I("out")+T.out+'</button></aside><div class="dx-main">'+body+'<p class="dx-demo">'+T.dn+'</p></div></div>'}
addEventListener("hashchange",function(){var v=location.hash.slice(1);view=VW.indexOf(v)<0?"overview":v;render();scrollTo(0,0)});
R.addEventListener("click",function(e){var b=e.target.closest("[data-act]");if(!b||b.type==="checkbox")return;var a=b.dataset.act,i=+b.dataset.i;
 if(a==="open"){cur=i;retake=false;go("course")}
 else if(a==="courses")go("courses");
 else if(a==="step"){cur=Math.min(i,3);retake=false;render()}
 else if(a==="mark"){if(S.done.indexOf(i)<0){S.done.push(i);log("l",i)}var n=award();save();render();toast(n.length?T.ab+": "+n[0]:T.done)}
 else if(a==="retake"){retake=true;render()}
 else if(a==="submit"){var ans=[],sc=0,ok=true;QZ.forEach(function(q,k){var c=R.querySelector('input[name="q'+k+'"]:checked');if(!c)ok=false;else{ans.push(+c.value);if(+c.value===q.a)sc++}});
  if(!ok)return toast(T.ans);S.quiz={best:Math.max(sc,S.quiz?S.quiz.best:0),last:sc,ans:ans};log("q",sc);var n2=award();save();retake=false;render();toast(n2.length?T.ab+": "+n2[0]:T.sc+": "+sc+" / 3")}
 else if(a==="reset"){if(confirm(T.rsc)){S.done=[];S.quiz=null;S.act=[];S.bd=[];save();render();toast(T.rsd)}}
 else if(a==="del"){if(confirm(T.dac)){try{localStorage.removeItem(UK);localStorage.removeItem(SK)}catch(x){}location.href="./"}}
 else if(a==="logout"){try{localStorage.removeItem(UK)}catch(x){}location.href="./"}});
R.addEventListener("change",function(e){var a=e.target.dataset.act;
 if(a==="dark"){var t=e.target.checked?"dark":"light";d.documentElement.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(x){}}
 else if(a==="tips"){S.tips=e.target.checked;save();toast(T.saved)}});
R.addEventListener("submit",function(e){e.preventDefault();var f=e.target,err=f.querySelector(".auth-err"),g=f.dataset.form;
 if(g==="profile"){var n=f.elements.name.value.trim(),m=f.elements.email.value.trim();
  if(!n||!/^\S+@\S+\.\S+$/.test(m)){err.textContent=T.pv;return}
  var c=f.querySelector('input[name="color"]:checked');S.prof={phone:f.elements.phone.value.trim(),org:f.elements.org.value.trim(),color:c?+c.value:0};
  user={name:n,email:m};sv(UK,user);save();render();toast(T.saved)}
 else if(g==="pw"){var p=f.elements.p1.value;if(!p||p!==f.elements.p2.value){err.textContent=T.pwe;return}f.reset();err.textContent="";toast(T.pwo)}});
render();
})();
