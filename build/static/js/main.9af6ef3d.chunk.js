(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(11),l=a.n(c),i=a(167),s=a(166),u=a(78),m=Object(u.a)({palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#fff"}},secondary:{main:"#f44330",light:"#ff795b",dark:"#b90005",contrastText:"#000000"},typography:{dt:{textTransform:"uppercase"}}}),p=(a(98),a(15)),d=a(13),f=a(9),h=a.n(f),b=a(14),g=a(6),E=a(146),v=a(148),j=a(149),O=a(150),x=a(151),y=Object(r.createContext)({token:null,isLoggedIn:!1,userId:null,login:function(){},logout:function(){}}),w=function(e){var t=Object(r.useState)(!1),a=Object(g.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(!1),s=Object(g.a)(i,2),u=s[0],m=s[1],p=Object(r.useState)(),f=Object(g.a)(p,2),h=f[0],b=f[1],E=Object(d.g)(),v=Object(r.useCallback)((function(e,t,a){m(t),l(e);var n=a||new Date((new Date).getTime()+72e5);b(n),localStorage.setItem("user",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),j=Object(r.useCallback)((function(){m(null),b(null),l(null),localStorage.removeItem("user"),E.push("/")}),[E]);return Object(r.useEffect)((function(){if(u&&h){var e=h.getTime()-(new Date).getTime();n=setTimeout(j,e)}else clearTimeout(n)}),[u,j,h]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&e.token&&new Date(e.expiration)>new Date&&v(e.userId,e.token,new Date(e.expiration))}),[v]),o.a.createElement(y.Provider,{value:{token:u,login:v,logout:j,userId:c}},e.children)},k=Object(E.a)((function(e){return{base:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},title:{color:e.palette.contrastText,textTransform:"capitalize"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},image:{width:"100%",height:"auto"}}})),C=function(e){var t=e.profiles,a=void 0===t?[]:t,n=e.userId,c=Object(r.useContext)(y).agentId,l=k(),i=Object(v.a)((function(e){return e.breakpoints.down("xs")})),s=Object(v.a)((function(e){return e.breakpoints.between(678,960)})),u=Object(v.a)((function(e){return e.breakpoints.between(600,960)}));return a.length?o.a.createElement("div",{className:l.base},o.a.createElement(j.a,{cellHeight:i?350:s?300:230,cols:i?1:u?2:4,spacing:24,className:l.gridList},a.map((function(e){return o.a.createElement(O.a,{key:e._id},o.a.createElement("img",{className:l.image,src:e.mainImg.startsWith("https")?"".concat(e.mainImg):"https://agency-app-node.herokuapp.com"+"/".concat(e.mainImg),alt:e.name.first}),o.a.createElement(p.b,{to:"/profiles/".concat(e._id),id:e._id,agent:e.agent},o.a.createElement(x.a,{title:"".concat(e.name.first," ").concat(e.name.last),classes:{root:l.titleBar,title:l.title}})))})))):o.a.createElement("div",null,o.a.createElement("h2",null," No profiles found. "),n===c&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Create one?"),o.a.createElement(p.b,{to:"/profiles/new"},o.a.createElement("button",null,"Create Profile"))))},N=a(16),S=a(152),T=a(153),I=Object(E.a)((function(e){var t;return{root:(t={flexGrow:1,paddingTop:100,minHeight:500},Object(N.a)(t,e.breakpoints.up("md"),{maxWidth:"80%"}),Object(N.a)(t,e.breakpoints.up("xs"),{maxWidth:"90%"}),Object(N.a)(t,"margin","auto"),t)}}));function D(e){var t=I();return o.a.createElement(S.a,{maxWidth:"lg"},o.a.createElement(T.a,{container:!0,className:t.root},o.a.createElement(T.a,{item:!0,xs:12},e.children)))}var A=a(172),z=a(170);function F(e){return o.a.createElement(z.a,Object.assign({elevation:6,variant:"filled"},e))}var P=Object(E.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function q(e){var t=P();return o.a.createElement("div",{className:t.root},o.a.createElement(A.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!!e.error,autoHideDuration:6e3,onClose:e.onClear},o.a.createElement(F,{onClose:e.onClear,severity:"error"},e.errorMessage)))}var B=a(156),M=a(157),H=Object(E.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function _(e){var t=H();return o.a.createElement("div",null,o.a.createElement(B.a,{className:t.backdrop,open:e.open},o.a.createElement(M.a,{color:"inherit"})))}var L=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(null),l=Object(g.a)(c,2),i=l[0],s=l[1],u=Object(r.useState)(),m=Object(g.a)(u,2),p=m[0],d=m[1];return Object(r.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(null),n(!0),e.prev=2,e.next=5,fetch("https://agency-app-node.herokuapp.com/api/profiles");case 5:return t=e.sent,e.next=8,t.json();case 8:if(a=e.sent,t.ok){e.next=11;break}throw new Error(a.message);case 11:d(a.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),s(e.t0.message);case 17:n(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement(D,null,a&&o.a.createElement(_,{open:a}),o.a.createElement(q,{error:i,errorMessage:i,onClear:function(){s(null)}}),!a&&p&&o.a.createElement(C,{profiles:p}))},W=(a(103),a(104),function(e){return o.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),R=function(e){return o.a.createElement("li",{className:"user-item"},o.a.createElement(W,{className:"user-item__content"},o.a.createElement(p.b,{to:"/users/".concat(e.id,"/profiles")},o.a.createElement("div",{className:"user-item__info"},o.a.createElement("h2",{style:{textTransform:"capitalize"}},e.name),o.a.createElement("h3",{style:{textTransform:"capitalize"}},e.description),o.a.createElement("p",null,e.email)))))},G=(a(105),function(e){var t=e.items;return t.length?o.a.createElement(D,null,o.a.createElement("ul",{className:"users-list"},t.map((function(e){return o.a.createElement(R,{key:e._id,id:e._id,name:e.name,description:e.location,email:e.email})})))):o.a.createElement(W,{className:"center"},o.a.createElement("h2",null,"No users found"))}),J=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(null),l=Object(g.a)(c,2),i=l[0],s=l[1],u=Object(r.useState)(null),m=Object(g.a)(u,2),p=m[0],d=m[1];return Object(r.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,fetch("https://agency-app-node.herokuapp.com/api/users");case 4:return t=e.sent,e.next=7,t.json();case 7:if(a=e.sent,t.ok){e.next=10;break}throw new Error(a.message||t.statusText);case 10:console.log(a),d(a.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),s(e.t0.message);case 18:n(!1);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(_,{open:a}),i&&o.a.createElement(q,{error:i,errorMessage:i,onClear:function(){s(null)}}),!a&&p&&o.a.createElement(G,{items:p}))},U=function(){var e=Object(d.h)().id,t=Object(r.useState)(!1),a=Object(g.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(null),i=Object(g.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)(),p=Object(g.a)(m,2),f=p[0],E=p[1];return Object(r.useEffect)((function(){(function(){var t=Object(b.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.prev=1,t.next=4,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/user/".concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:if(n=t.sent,a.ok){t.next=10;break}throw new Error(n.message||a.statusText);case 10:console.log(n),E(n.data),c(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0),c(!1),u(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),o.a.createElement(D,null,n&&o.a.createElement(_,{open:n}),!n&&f&&o.a.createElement(C,{profiles:f,userId:e}),s&&o.a.createElement(q,{error:s,errorMessage:s,onClear:function(){u(null)}}))},K=a(160),V=a(161),Y=a(154),Z=a(58),Q=a(173),X=a(76),$=a.n(X),ee=a(158),te=a(159),ae=Object(E.a)((function(e){return{root:Object(N.a)({display:"flex",listStyle:"none",flexDirection:"column",justifyContent:"center",alignItems:"center"},e.breakpoints.up("md"),{flexDirection:"row",justifyContent:"center"})}})),ne=function(e){var t=Object(r.useContext)(y),a=t.token,n=t.logout,c=t.userId;console.log("Nav logged in? ",a),console.log(c,"userId");var l=ae();return o.a.createElement(ee.a,{className:l.root},o.a.createElement(te.a,{button:!0},o.a.createElement(p.c,{to:"/",exact:!0},"Talent")),o.a.createElement(te.a,{button:!0},o.a.createElement(p.c,{to:"/users",exact:!0},"Agents")),!!a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{button:!0},o.a.createElement(p.c,{to:"/users/".concat(c,"/profiles")},"My Profiles")),o.a.createElement(te.a,{button:!0},o.a.createElement(p.c,{to:"/profiles/new"},"Add Profile")),o.a.createElement(te.a,{button:!0,onClick:n},"Logout")),!a&&o.a.createElement(te.a,{button:!0},o.a.createElement(p.c,{to:"/auth"},"LogIn")))},re=Object(E.a)((function(e){return{root:{flexGrow:1,zIndex:10},appbar:{position:"sticky"},bar:{height:100},menuButton:Object(N.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),title:{flexGrow:1},list:{width:250},nav:Object(N.a)({},e.breakpoints.down("sm"),{display:"none"})}})),oe=function(e){var t=Object(r.useState)(!1),a=Object(g.a)(t,2),n=a[0],c=a[1],l=re();return o.a.createElement("div",{className:l.root},o.a.createElement(K.a,{className:l.appBar},o.a.createElement(Q.a,{anchor:"left",open:n,onClose:function(){return c(!1)}},o.a.createElement("div",{className:l.list,role:"presentation",onClick:function(){return c(!1)},onKeyDown:function(){return c(!1)}},o.a.createElement(ne,null))),o.a.createElement(V.a,{className:l.bar},o.a.createElement(Y.a,{edge:"start",className:l.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return c(!n)}},o.a.createElement($.a,null)),o.a.createElement(Z.a,{className:l.title,variant:"h5",noWrap:!0},o.a.createElement(p.b,{to:"/"},"IMG MANAGEMENT")),o.a.createElement("div",{className:l.nav},o.a.createElement(ne,null)))))},ce=a(163),le=a(77),ie=a.n(le),se=a(162),ue=Object(E.a)((function(e){return{root:{display:"flex",justifyContent:"flex-end",alignItems:"center"},content:{paddingTop:"24px",textAlign:"right"},name:{textAlign:"right",textTransform:"capitalize",paddingRight:"16px"},contact:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),me=function(e){var t=Object(r.useContext)(y).userId,a=ue();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,{component:"h4",variant:"h4",className:a.name},e.name.first," ",e.name.last),o.a.createElement("div",{className:a.root},t===e.agent&&o.a.createElement(se.a,{component:"dl",className:a.contact},o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Email"),o.a.createElement(Z.a,{component:"dd",variant:"body1"},e.email),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Phone"),o.a.createElement(Z.a,{component:"dd",variant:"body1"},e.phone),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Notes"),o.a.createElement(Z.a,{component:"dd",variant:"body2"},e.notes)),o.a.createElement(se.a,{className:a.content},o.a.createElement("dl",null,o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Height"),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.height," cm"),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Bust"),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.bust," cm"),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Waist"),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.waist," cm"),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Hips"),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.hips," cm"),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Shoes"),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.shoes),o.a.createElement(Z.a,{component:"dt",variant:"h6"},"Hair"),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.hair),o.a.createElement(Z.a,{component:"dd",variant:"h5"},e.eyes)))))},pe=Object(E.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:(t={flexWrap:"nowrap"},Object(N.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(N.a)(t,"transform","translateZ(0)"),Object(N.a)(t,e.breakpoints.up("lg"),{paddingTop:e.spacing(10)}),Object(N.a)(t,"paddingTop",e.spacing(5)),t),delete:{position:"absolute",right:0,top:0,color:e.palette.primary.light}}})),de=function(e){var t=e.profile,a=e.profileId,n=e.setError,c=pe(),l=Object(v.a)((function(e){return e.breakpoints.down("xs")})),i=Object(r.useContext)(y),s=i.token,u=i.userId,m=t.photos,p=Object(r.useState)(m),d=Object(g.a)(p,2),f=d[0],E=d[1],x=function(){var e=Object(b.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a,"id"),e.next=4,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(a,"/photo/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},method:"DELETE"});case 4:if(r=e.sent,console.log("response",r),r.ok){e.next=8;break}throw new Error(r.message);case 8:E((function(e){return e.filter((function(e){return e._id!==t}))})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),n(e.t0.message||"Something went wrong");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),w=t.mainImg;return o.a.createElement("div",{className:c.root},o.a.createElement(j.a,{className:c.gridList,cellHeight:630},o.a.createElement(O.a,{cols:l?2:1},o.a.createElement(me,t)),o.a.createElement(O.a,{cols:l?2:1},o.a.createElement("img",{src:w.startsWith("https")?"".concat(w):"https://agency-app-node.herokuapp.com"+"/".concat(t.mainImg),alt:"".concat(t.name.first," ")})),f.map((function(e,a){return o.a.createElement(O.a,{key:a,cols:l?2:1},o.a.createElement("img",{src:e.path.startsWith("https")?"".concat(e.path):"https://agency-app-node.herokuapp.com"+"/".concat(e.path),alt:e.name}),u===t.agent&&o.a.createElement(ce.a,{className:c.delete,onClick:function(){return x(e._id)},"aria-label":"delete photo"},o.a.createElement(ie.a,null)))}))))},fe=a(48),he=a(168),be=Object(E.a)((function(e){return{formRow:{display:"flex",margin:e.spacing(1)},input:{display:"none"}}})),ge=function(e){var t=e.profile,a=be(),n=o.a.createRef(),c=Object(r.useContext)(y).token,l=Object(r.useState)(!1),i=Object(g.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)(),p=Object(g.a)(m,2),d=p[0],f=p[1],E=function(){var e=Object(b.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),a.persist(),e.prev=2,u(!0),(r=new FormData).append("mainImg",n.current.files[0]),console.log(Object.fromEntries(r),"data"),e.next=9,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(t._id,"/updatecover"),{method:"PUT",body:r,headers:{Authorization:"Bearer "+c}});case 9:if((o=e.sent).ok){e.next=12;break}throw new Error(o.message||o.statusText);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.dir(e.t0),f(e.t0.message||"Something went wrong");case 18:u(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,s&&o.a.createElement(_,{open:s}),d&&o.a.createElement(q,{error:d,errorMessage:d,onClear:function(){f(null)}}),o.a.createElement("form",{encType:"multipart/form-data",action:"/profiles/:id/updateCover",method:"put",className:a.formRow,onSubmit:E},o.a.createElement("input",{accept:".jpg,.jpeg,.png",name:"mainImg",id:"file",className:a.input,type:"file",ref:n,required:!0}),o.a.createElement("label",{htmlFor:"file"},o.a.createElement(ce.a,{component:"span"},"Change Cover ")),o.a.createElement(ce.a,{type:"submit",variant:"outlined"},"Send")))},Ee=Object(E.a)((function(e){return{buttonGroup:{display:"flex",margin:e.spacing(1)},input:{display:"none"}}})),ve=function(e){var t=e.profile,a=e.error,n=e.setError,c=Ee(),l=o.a.createRef(),i=Object(r.useState)(!1),s=Object(g.a)(i,2),u=s[0],m=s[1],p=Object(r.useContext)(y).token,d=function(){var e=Object(b.a)(h.a.mark((function e(a){var r,o,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a.preventDefault(),a.persist(),r=l.current.files,console.log(r),e.prev=5,m(!0),o=new FormData,c=0;c<r.length;c++)o.append("photos",r[c]);return console.log(Object.fromEntries(o),"dataObj"),e.next=12,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(t._id),{method:"POST",body:o,headers:{Authorization:"Bearer "+p}});case 12:if((i=e.sent).ok){e.next=15;break}throw new Error(i.message||i.statusText);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),n(e.t0.message||"Something went wrong");case 21:m(!1);case 22:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{action:"/profiles/:id/upload",method:"post",encType:"multipart/form-data",className:c.buttonGroup,onSubmit:d},o.a.createElement("input",{accept:".jpg,.jpeg,.png",name:"photos",id:"files",className:c.input,multiple:!0,type:"file",ref:l,required:!0}),o.a.createElement("label",{htmlFor:"files"},o.a.createElement(ce.a,{component:"span"},"Add Photos")),o.a.createElement(ce.a,{type:"submit",variant:"outlined"},"Send")),u&&o.a.createElement(_,{open:u}),a&&o.a.createElement(q,{error:a,errorMessage:a,onClear:function(){n(null)}}))},je=Object(E.a)((function(e){return{formRow:{margin:e.spacing(1),display:"flex",justifyContent:"space-around"},root:{marginTop:"auto",padding:"1rem",width:"90%",borderRadius:"6px",background:"white"},form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%"}},button:{margin:e.spacing(1)},name:{textTransform:"capitalize"}}})),Oe=function(e){var t=je(),a=e.profile,n=Object(r.useContext)(y).token,c=Object(r.useState)({height:"",bust:"",waist:"",hips:"",shoes:"",email:"",phone:"",notes:""}),l=Object(g.a)(c,2),i=l[0],s=l[1],u=Object(r.useState)({}),m=Object(g.a)(u,2),p=m[0],d=m[1],f=Object(r.useState)(!1),E=Object(g.a)(f,2),v=E[0],j=E[1],O=Object(r.useState)(null),x=Object(g.a)(O,2),w=x[0],k=x[1];console.log(i);var C=function(e){var t=e.target,a=t.name,n=t.value,r=Object(fe.a)(Object(fe.a)({},i),{},Object(N.a)({},a,n));s(r);var o=Object(fe.a)(Object(fe.a)({},p),{},Object(N.a)({},a,n));d(o)};console.log(i);var S=function(){var e=Object(b.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(i),console.log(p),e.prev=3,j(!0),e.next=7,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(a._id),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},method:"PUT",body:JSON.stringify(p)});case 7:if((r=e.sent).ok){e.next=10;break}throw new Error(r.message||r.statusText);case 10:console.log(r),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),k(e.t0.message||"Something went wrong");case 17:j(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:t.root},v&&o.a.createElement(_,{open:v}),o.a.createElement("h2",{className:t.name},a.name.first," ",a.name.last),o.a.createElement("div",{className:t.formRow},o.a.createElement(ge,{profile:a}),o.a.createElement(ve,{profile:a})),o.a.createElement("form",{onSubmit:S,className:t.form},o.a.createElement(he.a,{name:"height",label:"Height (cm)",type:"number",value:i.height,onChange:C,placeholder:String(a.height),variant:"outlined"}),o.a.createElement(he.a,{id:"bust",name:"bust",label:"Bust",type:"number",value:i.bust,onChange:C,placeholder:String(a.hips),variant:"outlined"}),o.a.createElement(he.a,{id:"waist",name:"waist",label:"Waist",type:"number",value:i.waist,onChange:C,placeholder:String(a.waist),variant:"outlined"}),o.a.createElement(he.a,{id:"hips",name:"hips",label:"Hips",type:"number",value:i.hips,onChange:C,placeholder:String(a.hips),variant:"outlined"}),o.a.createElement(he.a,{id:"shoes",name:"shoes",label:"Shoes",type:"number",value:i.shoes,onChange:C,placeholder:String(a.shoes),variant:"outlined"}),o.a.createElement(he.a,{id:"email",name:"email",label:"Email",type:"email",value:i.email,onChange:C,placeholder:a.email,variant:"outlined"}),o.a.createElement(he.a,{id:"phone",name:"phone",label:"Phone",type:"tel",value:i.phone,onChange:C,placeholder:String(a.phone),variant:"outlined"}),o.a.createElement(he.a,{id:"notes",name:"notes",label:"Notes",placeholder:a.notes,value:i.notes,onChange:C,variant:"outlined",multiline:!0}),o.a.createElement("div",{className:t.formRow},o.a.createElement(ce.a,{type:"submit",variant:"contained",color:"primary",size:"large",className:t.button,"aria-label":"save"},"Save"),o.a.createElement(ce.a,{variant:"contained",color:"primary",size:"large",className:t.button,onClick:e.cancelHandler},"Cancel"),o.a.createElement(ce.a,{variant:"contained",color:"primary",size:"large",className:t.button,onClick:e.viewHandler,"aria-label":"view"},"View"))),w&&o.a.createElement(q,{error:w,errorMessage:w,onClear:function(){k(null)}}))},xe=a(171),ye=a(114),we=Object(E.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"70%",margin:"auto"},paper:{backgroundColor:e.palette.background.paper,boxShadow:5,padding:e.spacing(2,4,3),display:"flex",flexDirection:"column",alignItems:"center"}}}));function ke(e){var t=we();return o.a.createElement("div",null,o.a.createElement(xe.a,{"aria-labelledby":e.header,className:t.modal,open:e.open,onClose:e.onClose,closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:1e3}},o.a.createElement(ye.a,{in:e.open},o.a.createElement("div",{className:t.paper},o.a.createElement("h2",null,e.header),o.a.createElement("div",null,e.children),o.a.createElement("footer",null,e.footer)))))}var Ce=Object(E.a)((function(e){return{button:{margin:e.spacing(1)}}})),Ne=function(){var e=Ce(),t=Object(r.useContext)(y),a=t.userId,n=t.token,c=Object(d.h)().id,l=Object(r.useState)(!1),i=Object(g.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)(null),p=Object(g.a)(m,2),f=p[0],E=p[1],v=Object(r.useState)(),j=Object(g.a)(v,2),O=j[0],x=j[1],w=Object(d.g)(),k=function(){P(!1)};Object(r.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(null),u(!0),e.prev=2,e.next=5,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(c));case 5:return t=e.sent,console.log(c,"profileId"),console.log(t),e.next=10,t.json();case 10:if(a=e.sent,t.ok){e.next=13;break}throw new Error(a.message);case 13:x(a.data),u(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),u(!1),E(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}})()()}),[c]);var C=Object(r.useState)(!0),N=Object(g.a)(C,2),S=N[0],T=N[1],I=function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(null),u(!0),e.prev=2,e.next=5,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(c));case 5:return t=e.sent,e.next=8,t.json();case 8:if(a=e.sent,t.ok){e.next=11;break}throw new Error(a.message);case 11:x(a.data),u(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),u(!1),E(e.t0.message);case 19:T(!0);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),A=Object(r.useState)(!1),z=Object(g.a)(A,2),F=z[0],P=z[1],B=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://agency-app-node.herokuapp.com/api"+"/profiles/".concat(c),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},method:"DELETE"});case 3:if(t=e.sent,w.push("/users/".concat(a,"/profiles")),t.ok){e.next=7;break}throw new Error(t.message||t.statusText);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),E(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(D,null,s&&o.a.createElement(_,{open:s}),f&&o.a.createElement(q,{error:f,errorMessage:f,onClear:function(){E(null)}}),S?o.a.createElement(o.a.Fragment,null,o.a.createElement(ke,{open:F,onClose:k,header:"Are you sure?",footer:o.a.createElement(o.a.Fragment,null,o.a.createElement(ce.a,{variant:"outlined",onClick:k,className:e.button},"Cancel"),o.a.createElement(ce.a,{className:e.button,variant:"contained",color:"secondary",onClick:B},"Delete"))}),!s&&O&&o.a.createElement(de,{profile:O,profileId:c,setError:E})):o.a.createElement(Oe,{profile:O,cancelHandler:function(){T(!0)},viewHandler:I}),O&&O.agent===a&&S&&o.a.createElement("div",{className:"profile-item__actions"},o.a.createElement(ce.a,{className:e.button,onClick:function(){T(!1)},variant:"outlined"},"Edit"),o.a.createElement(ce.a,{className:e.button,onClick:function(){P(!0)}},"Delete")))},Se=(a(107),Object(E.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%"}},input:{display:"none"},button:{margin:e.spacing(1),width:"100%"}}}))),Te=function(){var e=Se(),t=Object(r.useContext)(y),a=t.userId,n=t.token;console.log(a);var c=Object(r.useState)(),l=Object(g.a)(c,2),i=l[0],s=l[1],u=Object(d.g)(),m=function(){var e=Object(b.a)(h.a.mark((function e(t){var r,o,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.persist(),r=t.target,e.prev=3,(o=new FormData(r)).append("agent",a),console.log(Object.fromEntries(o),"data"),e.next=9,fetch("https://agency-app-node.herokuapp.com/api/profiles",{method:"POST",body:o,headers:{Authorization:"Bearer "+n}});case 9:if((c=e.sent).ok){e.next=12;break}throw new Error(c.message||c.statusText);case 12:console.log(c),u.push("/"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0),s(e.t0.message||"Something went wrong");case 20:r.reset();case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(D,null,o.a.createElement("div",{className:"profile-form"},o.a.createElement("form",{encType:"multipart/form-data",className:e.root,action:"/profiles",method:"POST",onSubmit:m},o.a.createElement(he.a,{required:!0,id:"firstName",name:"name.first",label:"First Name",variant:"outlined"}),o.a.createElement(he.a,{id:"lastName",name:"name.last",label:"Last Name",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"eyes",name:"eyes",label:"Eyes",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"hair",name:"hair",label:"Hair",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"height",name:"height",label:"Height (cm)",type:"number",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"bust",name:"bust",label:"Bust",type:"number",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"waist",name:"waist",label:"Waist",type:"number",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"hips",name:"hips",label:"Hips",type:"number",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"shoes",name:"shoes",label:"Shoes",type:"number",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"email",name:"email",label:"Email",type:"email",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"phone",name:"phone",label:"Phone",type:"tel",variant:"outlined",required:!0}),o.a.createElement(he.a,{id:"notes",name:"notes",label:"Notes",variant:"outlined",multiline:!0}),o.a.createElement("div",null,o.a.createElement("input",{accept:".jpg,.jpeg,.png",className:e.input,id:"contained-button-file",type:"file",name:"mainImg"}),o.a.createElement("label",{htmlFor:"contained-button-file"},o.a.createElement(ce.a,{className:e.button,variant:"outlined",size:"large",component:"span"},"Upload Photo"))),o.a.createElement(ce.a,{type:"submit",variant:"contained",color:"primary",size:"large",className:e.button},"Create Profile")),o.a.createElement(q,{error:i,errorMessage:i,onClear:function(){s(null)}})))},Ie=(a(108),Object(E.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"80%"}},input:{display:"none"},button:{margin:e.spacing(1),width:"100%"}}}))),De=function(){var e=Ie(),t=Object(d.g)(),a=Object(r.useContext)(y).login,n=Object(r.useState)(!0),c=Object(g.a)(n,2),l=c[0],i=c[1],s=Object(r.useState)(!1),u=Object(g.a)(s,2),m=u[0],p=u[1],f=Object(r.useState)(null),E=Object(g.a)(f,2),v=E[0],j=E[1],O=function(){var e=Object(b.a)(h.a.mark((function e(n){var r,o,c,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=Object.fromEntries(new FormData(n.target)),p(!0),!l){e.next=27;break}return e.prev=4,e.next=7,fetch("https://agency-app-node.herokuapp.com/api/users/login",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)});case 7:return o=e.sent,e.next=10,o.json();case 10:if(c=e.sent,o.ok){e.next=13;break}throw new Error(o.message||o.statusText);case 13:console.log(c.userId),a(c.userId,c.token),t.push("/"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0),j(e.t0.message||"Something went wrong");case 22:return e.prev=22,p(!1),e.finish(22);case 25:e.next=48;break;case 27:return e.prev=27,e.next=30,fetch("https://agency-app-node.herokuapp.com/api/users/signup",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)});case 30:return i=e.sent,e.next=33,i.json();case 33:if(s=e.sent,i.ok){e.next=36;break}throw new Error(i.message||i.statusText);case 36:console.log(s),a(s.userId,s.token),t.push("/"),e.next=45;break;case 41:e.prev=41,e.t1=e.catch(27),console.log(e.t1),j(e.t1.message||"Something went wrong");case 45:return e.prev=45,p(!1),e.finish(45);case 48:case"end":return e.stop()}}),e,null,[[4,18,22,25],[27,41,45,48]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(W,{className:"authentication"},m&&o.a.createElement(_,{open:m}),v&&o.a.createElement(q,{error:v,errorMessage:v,onClear:function(){j(null)}}),o.a.createElement("h2",null,"Login Required"),o.a.createElement("hr",null),o.a.createElement("form",{className:e.root,onSubmit:O},!l&&o.a.createElement(he.a,{variant:"outlined",id:"name",name:"name",label:"Your Name",required:!0}),!l&&o.a.createElement(he.a,{variant:"outlined",id:"location",name:"location",label:"Your City",required:!0}),o.a.createElement(he.a,{variant:"outlined",id:"email",name:"email",type:"email",label:"Email",required:!0,autoComplete:"email"}),o.a.createElement(he.a,{variant:"outlined",id:"password",name:"password",type:"password",label:"Password",required:!0,autoComplete:"on"}),o.a.createElement(ce.a,{type:"submit",variant:"contained",color:"primary",className:e.button},l?"Login":"New Account"),o.a.createElement(ce.a,{variant:"outlined",onClick:function(){i((function(e){return!e}))}},"Switch to ",l?"Register":"Login")))},Ae=a(169),ze=a(164),Fe=a(165),Pe=Object(E.a)((function(e){return{root:{paddingTop:50,paddingBottom:20},list:Object(N.a)({display:"flex",listStyle:"none",flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"space-between"})}}));function qe(e){return o.a.createElement(te.a,Object.assign({button:!0,component:"a"},e))}var Be=function(){var e=Pe(),t=Object(r.useState)(!1),a=Object(g.a)(t,2),n=a[0],c=a[1],l=o.a.createElement(Z.a,{component:"div"},o.a.createElement(Ae.a,{pt:2},"Images used in this repository are for demo purposes only."),o.a.createElement(Ae.a,{pb:5},"They are not my own and I hold no rights to them."));return o.a.createElement("div",{className:e.root},o.a.createElement(ze.a,{variant:"middle"}),o.a.createElement(ke,{open:n,onClose:function(e){c(!1)},header:"Disclaimer",children:l}),o.a.createElement(ee.a,{className:e.list},o.a.createElement(qe,{href:"https://github.com/nataliakiselev"},o.a.createElement(Fe.a,{style:{textAlign:"center"},primary:"\u24b8 2020 NATALIA KISELEV"})),o.a.createElement(te.a,{button:!0,style:{textAlign:"center "},onClick:function(){c(!0)}},o.a.createElement(Fe.a,{primary:"DISCLAIMER"})),o.a.createElement(qe,{href:"#footer"},o.a.createElement(Fe.a,{style:{textAlign:"center"},primary:"CONTACT US"}))))},Me=function(e){var t=e.type,a=void 0===t?"private":t,n=Object(r.useContext)(y).token;return console.log("token",n),"private"!==a||n?o.a.createElement(d.b,e):o.a.createElement(d.a,{to:"/login"})},He=(a(109),function(){return o.a.createElement(p.a,null,o.a.createElement(w,null,o.a.createElement(oe,null),o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/"},o.a.createElement(L,null)),o.a.createElement(d.b,{exact:!0,path:"/users"},o.a.createElement(J,null)),o.a.createElement(d.b,{exact:!0,path:"/users/:id/profiles"},o.a.createElement(U,null)),o.a.createElement(Me,{exact:!0,path:"/profiles/new"},o.a.createElement(Te,null)),o.a.createElement(d.b,{path:"/profiles/:id"},o.a.createElement(Ne,null)),o.a.createElement(d.b,{path:"/auth"},o.a.createElement(De,null)),o.a.createElement(d.a,{to:"/auth"}))),o.a.createElement(Be,null))});l.a.render(o.a.createElement(s.a,{theme:m},o.a.createElement(i.a,null),o.a.createElement(He,null)),document.getElementById("root"))},91:function(e,t,a){e.exports=a(110)},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.9af6ef3d.chunk.js.map