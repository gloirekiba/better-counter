(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},25:function(e,n,t){"use strict";t.r(n);var a,o,r,c,l,i,u,d,b,m,s,f,p,g,x,j,h,O,w,E,v,C,y,k,S,z,F,U,D,q,I=t(0),J=t.n(I),N=t(10),X=t(1),A=t(2),B=Object(A.a)(a||(a=Object(X.a)(['\n  *,\n  ::before,\n  ::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n  padding: 1em 0;\n  color: #333;\n  font-family: "Poppins", sans-serif;\n  background-color: #ecf0f3;\n  }\n\n  button {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  }\n\n  button:disabled {\n    cursor: not-allowed ;\n  }\n']))),M=t(4),P=t(3),R=t(29),G=["white","aqua","azure","beige","rebeccapurple","tomato","aliceblue","antiquewhite","aquamarine","bisque","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","tan","cornsilk","yellowgreen"],H=A.b.div(o||(o=Object(X.a)(["\n  display: flex;\n  gap: 0.4em;\n  margin-top: 1em;\n  padding: 1em 0;\n  overflow-x: scroll;\n"]))),K=A.b.button(r||(r=Object(X.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.101);\n"]))),L=A.b.span(c||(c=Object(X.a)([""]))),Q=function(e){var n=e.setColor,t=e.defaultColor,a=Object(I.useState)(t),o=Object(P.a)(a,2),r=o[0],c=o[1];return J.a.createElement(H,null,G.map(function(e,t){return J.a.createElement(K,{onClick:function(e){return function(e){var t=e.value;n(t),c(t)}(e.target)},key:t,type:"button",style:{backgroundColor:e},title:e,value:e},e===r&&J.a.createElement(L,null,"\u2714"))}))},T=A.b.div(l||(l=Object(X.a)(["\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  animation: anim 0.4s 0s forwards;\n  @keyframes anim {\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n"]))),V=A.b.div(i||(i=Object(X.a)(["\n  position: fixed;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -20%);\n  width: 95%;\n  max-width: 600px;\n  padding: 2em;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);\n"]))),W=A.b.h3(u||(u=Object(X.a)(["\n  font-size: 2.5rem;\n  margin-bottom: 1em;\n  text-transform: capitalize;\n"]))),Y=A.b.form(d||(d=Object(X.a)([""]))),Z=A.b.input(b||(b=Object(X.a)(["\n  width: 100%;\n  font-size: 2.3rem;\n  border: none;\n  padding: 0.3em 0;\n  border-bottom: 2px solid #4444446a;\n  outline: none;\n  background-color: transparent;\n"]))),$=A.b.div(m||(m=Object(X.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em;\n  margin-top: 50px;\n"]))),_=A.b.button(s||(s=Object(X.a)(["\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n"]))),ee=function(e){var n=e.addCounter,t=e.setShowForm,a=Object(I.useState)(""),o=Object(P.a)(a,2),r=o[0],c=o[1],l=Object(I.useState)("white"),i=Object(P.a)(l,2),u=i[0],d=i[1];return Object(I.useEffect)(function(){document.body.style.overflow="hidden"}),J.a.createElement(T,null,J.a.createElement(V,null,J.a.createElement(W,null,"Add Counter"),J.a.createElement(Y,{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(n(r,u),c(""))}},J.a.createElement(Z,{onChange:function(e){var n=e.target;c(n.value)},value:r,type:"text",placeholder:"Counter name",autoFocus:!0}),J.a.createElement(Q,{setColor:d,defaultColor:u}),J.a.createElement($,null,J.a.createElement(_,{type:"button",onClick:function(){return document.body.style.overflow="auto",void t(!1)}},"Close"),J.a.createElement(_,{type:"submit"},"Save")))))},ne=A.b.div(f||(f=Object(X.a)(["\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  animation: anim 0.4s 0s forwards;\n  @keyframes anim {\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n"]))),te=A.b.div(p||(p=Object(X.a)(["\n  position: fixed;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -20%);\n  width: 95%;\n  max-width: 600px;\n  padding: 2em;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);\n"]))),ae=A.b.h3(g||(g=Object(X.a)(["\n  font-size: 2.5rem;\n  margin-bottom: 1em;\n  text-transform: capitalize;\n"]))),oe=A.b.form(x||(x=Object(X.a)([""]))),re=A.b.input(j||(j=Object(X.a)(["\n  width: 100%;\n  font-size: 2.3rem;\n  border: none;\n  padding: 0.3em 0;\n  border-bottom: 2px solid #4444446a;\n  outline: none;\n  background-color: transparent;\n"]))),ce=A.b.div(h||(h=Object(X.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em;\n  margin-top: 50px;\n"]))),le=A.b.button(O||(O=Object(X.a)(["\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n\n  :first-child {\n    margin-right: auto;\n    color: tomato;\n  }\n"]))),ie=function(e){var n=e.counter,t=e.editCounter,a=e.deleteCounter,o=e.setShowForm,r=Object(I.useState)(n.name),c=Object(P.a)(r,2),l=c[0],i=c[1],u=Object(I.useState)(n.color),d=Object(P.a)(u,2),b=d[0],m=d[1],s=Object(I.useState)(!0),f=Object(P.a)(s,2),p=f[0],g=f[1];function x(){o(!1),document.body.style.overflow="auto"}return Object(I.useEffect)(function(){document.body.style.overflow="hidden"},[]),J.a.createElement(ne,null,J.a.createElement(te,null,J.a.createElement(ae,null,"Edit Counter"),J.a.createElement(oe,{onSubmit:function(e){e.preventDefault(),x(),t(n.id,{id:n.id,name:l,color:b,count:n.count,lastUpdate:n.lastUpdate})}},J.a.createElement(re,{onChange:function(e){return function(e){var n=e.value;i(n),""===n.trim()?g(!1):g(!0)}(e.target)},value:l,type:"text",placeholder:"Counter name",autoFocus:!0}),J.a.createElement(Q,{setColor:m,defaultColor:b}),J.a.createElement(ce,null,J.a.createElement(le,{type:"button",onClick:function(){x(),a(n.id)}},"Delete"),J.a.createElement(le,{type:"button",onClick:x},"Close"),J.a.createElement(le,{disabled:!p,type:"submit"},"Save")))))},ue=function(e){var n=e.context,t=void 0===n?"create":n,a=e.addCounter,o=e.counter,r=e.editCounter,c=e.deleteCounter,l=e.setShowForm;return J.a.createElement(J.a.Fragment,null,"create"===t?J.a.createElement(ee,{addCounter:a,setShowForm:l}):J.a.createElement(ie,{counter:o,editCounter:r,deleteCounter:c,setShowForm:l}))},de=t(28),be=A.b.div(w||(w=Object(X.a)(["\n  display: flex;\n  justify-content: space-between;\n  transform: translateX(-50%);\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);\n  animation: anim 0.4s 0s forwards;\n  @keyframes anim {\n    to {\n      transform: translateX(0);\n    }\n  }\n"]))),me=A.b.button(E||(E=Object(X.a)(["\n  padding: 0.1em 0.6em;\n  font-size: 5rem;\n  font-weight: 400;\n"]))),se=A.b.div(v||(v=Object(X.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1em;\n  text-align: center;\n  cursor: cell;\n"]))),fe=A.b.span(C||(C=Object(X.a)(["\n  font-size: 1.6rem;\n  font-weight: 500;\n  word-break: break-all;\n"]))),pe=A.b.span(y||(y=Object(X.a)(["\n  font-size: 3em;\n"]))),ge=A.b.span(k||(k=Object(X.a)(["\n  font-size: 1.6rem;\n"]))),xe=A.b.span(S||(S=Object(X.a)([""]))),je=function(e){var n=e.counter,t=e.updateCount,a=e.editCounter,o=e.deleteCounter,r=0===n.count,c=Object(I.useState)(!1),l=Object(P.a)(c,2),i=l[0],u=l[1];function d(e){t(n.id,e)}return J.a.createElement(J.a.Fragment,null,i&&J.a.createElement(ue,{context:"edit",counter:n,editCounter:a,deleteCounter:o,setShowForm:u}),J.a.createElement(be,{style:{backgroundColor:n.color}},J.a.createElement(me,{onClick:function(){return d(-1)},disabled:r},"\u2212"),J.a.createElement(se,{onClick:function(){return u(!0)}},J.a.createElement(fe,null,n.name),J.a.createElement(pe,null,n.count),J.a.createElement(ge,null,J.a.createElement(xe,{role:"img","aria-label":"clock"},"\ud83d\udd50")," ",n.lastUpdate?Object(de.a)(new Date(n.lastUpdate),new Date,{addSuffix:!0}):"never")),J.a.createElement(me,{onClick:function(){return d(1)}},"+")))},he=A.b.div(z||(z=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n"]))),Oe=function(e){var n=e.counters,t=e.updateCount,a=e.editCounter,o=e.deleteCounter;return J.a.createElement(he,null,n.map(function(e){return J.a.createElement(je,{key:e.id,counter:e,updateCount:t,deleteCounter:o,editCounter:a})}))},we=A.b.div(F||(F=Object(X.a)(["\n  width: 95%;\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),Ee=A.b.h3(U||(U=Object(X.a)(["\n  font-size: 4em;\n  font-weight: 400;\n  text-align: center;\n"]))),ve=A.b.strong(D||(D=Object(X.a)(["\n  font-weight: 700;\n"]))),Ce=A.b.button(q||(q=Object(X.a)(["\n  position: fixed;\n  right: 5%;\n  bottom: 10%;\n  width: 60px;\n  height: 60px;\n  padding: 0.5em;\n  font-size: 2.3rem;\n  font-weight: 700;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);\n"]))),ye=function(){var e=Object(I.useState)([]),n=Object(P.a)(e,2),t=n[0],a=n[1],o=Object(I.useState)(!1),r=Object(P.a)(o,2),c=r[0],l=r[1];return Object(I.useEffect)(function(){var e=JSON.parse(localStorage.getItem("better-counter-clone"));e&&a(e)},[]),Object(I.useEffect)(function(){localStorage.setItem("better-counter-clone",JSON.stringify(t))},[t]),J.a.createElement(J.a.Fragment,null,c&&J.a.createElement(ue,{context:"create",addCounter:function(e,n){a([].concat(Object(M.a)(t),[{id:Object(R.a)(),name:e,count:0,color:n,lastUpdate:null}]))},setShowForm:l}),J.a.createElement(we,null,0===t.length?J.a.createElement(Ee,null,"No counter found, click the ",J.a.createElement(ve,null,"(+)")," button bellow to add"):J.a.createElement(Oe,{counters:t,updateCount:function(e,n){var o=Object(M.a)(t),r=o.find(function(n){return n.id===e});r.count+=n,0===r.count?r.lastUpdate=null:r.lastUpdate=(new Date).toISOString(),a(o)},editCounter:function(e,n){var o=Object(M.a)(t),r=o.find(function(n){return n.id===e});r=Object.assign(r,n),a(o)},deleteCounter:function(e){var n=Object(M.a)(t);n.forEach(function(t,a){return t.id===e&&n.splice(a,1)}),a(n)}}),!c&&J.a.createElement(Ce,{onClick:function(){return l(!0)}},"+")))};Object(N.createRoot)(document.getElementById("root")).render(J.a.createElement(I.StrictMode,null,J.a.createElement(B,null),J.a.createElement(ye,null)))}},[[14,1,2]]]);
//# sourceMappingURL=main.64e7859c.chunk.js.map