(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(22),l=t.n(c),r=t(28),i=(t(67),t(68),t(69),t(36)),m=t.n(i),d=t(49),s=t.n(d),u=t(20),f=t(29),p=t(50),h=t(38),w=t(130),b=t(129),g=t(132),k=t(110),v=t(131),E=["kelly","Richard"],j=[{id:1,name:"john",age:24,type:"a1"},{id:2,name:"mike",age:50,type:"a1"},{id:3,name:"kelly",age:50,type:"a2"}],y=function(){var e=Object(n.useState)("female"),a=Object(h.a)(e,2),t=a[0],c=a[1];var l=Object(n.useState)({}),r=Object(h.a)(l,2),i=r[0],m=r[1];return o.a.createElement("div",null,o.a.createElement(b.a,{"aria-label":"Gender",name:"gender1",value:t,onChange:function(e){c(e.target.value)}},E.map(function(e,a){return o.a.createElement(g.a,{value:e,control:o.a.createElement(w.a,null),label:e})})),o.a.createElement(k.a,null,j.map(function(e,a){return o.a.createElement(g.a,{control:o.a.createElement(v.a,{onChange:(t=e.name,function(e){m(Object(p.a)({},i,Object(f.a)({},t,e.target.checked)))}),value:e.name}),label:e.name});var t})),Object.keys(i).map(function(e,a){return i[e]&&e}))},O=function(){return Object(n.useEffect)(function(){m.a.get("/auth/apilogin/?account=lora_jack&password=lora_170602").then(function(e){var a=e.data[0].retVal;localStorage.setItem("sid",a)});var e="d87760ce79558d469abfa350f5b680c6f09b999d",a="19572b16df36a50441386459949e303d3bbffbfc";"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?document.cookie="SID=".concat(e,"&UID=").concat("lora_jack","&NID=").concat(a):document.cookie="SID=".concat(e,"&UID=").concat("lora_jack","&NID=").concat(a,";domain=.").concat(window.location.hostname,";path=/")}),Object(n.useEffect)(function(){m()({method:"post",url:"/backend/".concat("managerlogin"),headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},data:s.a.stringify({sid:localStorage.getItem("sid"),data:JSON.stringify([{account:"owen",password:"owen",langid:"tw"}])})}).then(function(e){console.log(e)})}),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(r.b,{to:"/",className:"App-link"},"Home"),o.a.createElement(r.b,{to:"/material",className:"App-link"},"material"),o.a.createElement(u.a,{path:"/material/",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(r.a,{basename:"/"},o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,a,t){e.exports=t(109)},67:function(e,a,t){},68:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},69:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.b33dee42.chunk.js.map