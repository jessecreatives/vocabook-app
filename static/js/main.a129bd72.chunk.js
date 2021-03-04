(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{18:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(21),l=n.n(c),o=n(9),s=n(3),r={languages:[{id:"jp",name:"\u65e5\u672c\u8a9e",definition:"\u5b9a\u7fa9",example:"\u4f8b\u6587",formWordLabel:"\u65b0\u5358\u8a9e",formDefinitionLabel:"\u5b9a\u7fa9",formExampleLabel:"\u4f8b\u6587",formDefinitionHelp:"\u5f8c\u3067\u3082\u8ffd\u52a0\u53ef\u80fd\u3067\u3059\u3002",formExampleHelp:"\u5f8c\u3067\u3082\u8ffd\u52a0\u53ef\u80fd\u3067\u3059\u3002",words:[{id:0,title:"\u5e78\u305b",pronounce:"\u3057\u3042\u308f\u305b",definitions:[{id:"definition1",value:"\u3068\u3066\u3082\u6c17\u6301\u3061\u3044\u3044"},{id:"definition2",value:"\u5b09\u3057\u3044\u3053\u3068"}],examples:[{id:"example1",value:"\u79c1\u306f\u5e78\u305b\u306b\u611f\u3058\u3066\u3044\u307e\u3059\u3002"},{id:"example2",value:"\u7f8e\u5473\u3057\u3044\u3082\u306e\u3092\u98df\u3079\u3066\u5e78\u305b\uff01"}]},{id:1,title:"\u6210\u529f\u3059\u308b",pronounce:"\u305b\u3044\u3053\u3046\u3059\u308b",definitions:[{id:"definition1",value:"\u671b\u3093\u3067\u3044\u308b\u7d50\u679c\u3092\u5f97\u308b\u3053\u3068"}],examples:[{id:"example1",value:"\u79c1\u306f\u5fc5\u305a\u6210\u529f\u3059\u308b\u3093\u3060\uff01"},{id:"example2",value:"\u6210\u529f\u3057\u305f\u4eba\u3005\u306e\u5171\u901a\u70b9"}]}]},{id:"en",name:"English",definition:"Definitions",example:"Examples",formWordLabel:"New Word",formDefinitionLabel:"Definitions",formExampleLabel:"Examples",formDefinitionHelp:"You can add more definitions later.",formExampleHelp:"You can add more examples later.",words:[{id:0,title:"pretext",pronounce:"pri-tekst",definitions:[{id:"definition1",value:"a reason given in justification of a course of action that is not the real reason."}],examples:[{id:"example1",value:"the rebels had the perfect pretext for making their move"},{id:"example2",value:"That was just a pretext"}]},{id:1,title:"hard",pronounce:"ha-d",definitions:[{id:"definition1",value:"solid, firm, and rigid; not easily broken, bent, or pierced."},{id:"definition2",value:"done with a great deal of force or strength."},{id:"definition3",value:"with a great deal of effort."},{id:"definition4",value:"so as to be solid or firm."}],examples:[{id:"example1",value:"the rebels had the perfect pretext for making their move"},{id:"example2",value:"That was just a pretext"},{id:"example3",value:"the rebels had the perfect pretext for making their move"},{id:"example4",value:"That was just a pretext"}]}]}]},d={jp:{newVocabFormLegend:"\u65b0\u5358\u8a9e\u8ffd\u52a0",title:"\u5358\u8a9e",pronounce:"\u767a\u97f3",definition:"\u5b9a\u7fa9",example:"\u4f8b\u6587",submit:"\u8ffd\u52a0"},en:{newVocabFormLegend:"New Vocabulary",title:"vocabulary",pronounce:"pronounce",definition:"definition",example:"example",submit:"Add"}},j=(n(18),n(0));function m(){return Object(j.jsx)("nav",{className:"text-center",children:Object(j.jsxs)("div",{className:"container position-relative py-3",children:[Object(j.jsx)("h1",{className:"fs1 navbar-brand text-center secondary en",children:"VocaBook"}),Object(j.jsx)("button",{className:"material-icons secondary settings",children:"settings"})]})})}var b=function(e){var t=e.label,n=e.name,i=e.onClick;return Object(j.jsxs)("button",{type:"button",className:"d-flex flex-row align-items-center justify-content-between fs4 btn btn-lg btn-light accent",name:n,onClick:i,children:[t,Object(j.jsx)("span",{className:"material-icons",children:"keyboard_arrow_right"})]})},u=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:"add-btn d-flex flex-row align-items-center justify-content-center btn btn-lg btn-light p-1",onClick:t,children:Object(j.jsx)("span",{className:"material-icons add",children:"add_circle"})})};function x(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)("div",{className:"bg-white container",children:Object(j.jsxs)("ul",{className:"container",children:[r.languages.map((function(e){var t=e.id;return Object(j.jsx)("li",{className:"mb-5",children:Object(j.jsx)(o.b,{className:"fs3",to:"/lang/".concat(t),children:Object(j.jsx)(b,{label:e.name,name:"",onClick:function(){return console.log("Hi")}})})},t)})),Object(j.jsx)("li",{children:Object(j.jsx)(u,{})})]})})]})}var f=n(15),p=n(14),O=n(2),h=n(8);function v(e){var t=e.lang;return Object(j.jsx)("nav",{className:"text-center",children:Object(j.jsxs)("div",{className:"container position-relative py-3",children:[Object(j.jsx)("ul",{className:"navbar-nav",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/",children:Object(j.jsx)("button",{className:"material-icons fs2 secondary back",children:"keyboard_backspace"})})})}),Object(j.jsx)("h1",{className:"fs1 navbar-brand text-center secondary en",children:t.name}),Object(j.jsx)("button",{className:"material-icons settings secondary",children:"settings"})]})})}function g(e){var t=e.words,n=e.onClick,i=e.onClickAddVocab;return Object(j.jsx)("div",{className:"col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-4",children:Object(j.jsx)("div",{className:"bg-white",children:Object(j.jsxs)("ul",{children:[t.map((function(e){return Object(j.jsx)("li",{className:"mb-5",children:Object(j.jsx)(b,{label:e.title,name:e.id,onClick:n})},e.title)})),Object(j.jsx)("li",{children:Object(j.jsx)(u,{onClick:i})})]})})})}var N=n(23);function k(e){var t=e.meta,n=e.lang,a=e.activeWord,c=e.children,l=e.handleOnDelete,o=(Object(N.a)(e,["meta","lang","activeWord","children","handleOnDelete"]),Object(i.useState)(!1)),s=Object(h.a)(o,2),r=s[0],d=s[1];return Object(j.jsx)("div",{className:"detail col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-8",children:Object(j.jsxs)("div",{className:"bg-white position-relative",children:[r?Object(j.jsx)("h2",{onBlur:function(){return d(!1)},children:c}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"d-flex flex-row align-items-end mb-5",children:[Object(j.jsx)("h2",{className:"mb-0 fs1 mr-5",onClick:function(){return d(!0)},children:a.title}),Object(j.jsx)("p",{className:"mb-0",onClick:function(){return d(!0)},children:a.pronounce})]}),Object(j.jsxs)("div",{className:"mb-5",children:[Object(j.jsx)("p",{className:"font-bold",children:t[n.id].definition}),a.definitions.map((function(e,t){return Object(j.jsxs)("p",{onClick:function(){return d(!0)},children:[t+1,". ",e.value]},e.id)}))]}),Object(j.jsxs)("div",{className:"mb-5",children:[Object(j.jsx)("p",{className:"font-bold",children:t[n.id].example}),a.examples.map((function(e,t){return Object(j.jsxs)("p",{onClick:function(){return d(!0)},children:[t+1,". ",e.value]},e.id)}))]})]}),Object(j.jsx)("button",{type:"button",className:"material-icons highlight position-absolute",onClick:function(){return l(a)},children:"delete"})]})})}function y(e){var t=e.meta,n=e.lang,a=e.onSubmitNewVocab,c=e.onCloseModal,l=Object(i.useState)({title:"",pronounce:"",definition1:"",definition2:"",definition3:"",example1:"",example2:"",example3:""}),o=Object(h.a)(l,2),s=o[0],r=o[1];return Object(j.jsx)("div",{className:"custom-modal",children:Object(j.jsxs)("div",{className:"modal-inner bg-white",children:[Object(j.jsx)("button",{className:"material-icons close",onClick:c,children:"close"}),Object(j.jsx)("form",{onSubmit:function(){var e=[{id:"definition1",value:s.definition1},{id:"definition2",value:s.definition2},{id:"definition3",value:s.definition3}],t=[{id:"example1",value:s.example1},{id:"example2",value:s.example2},{id:"example3",value:s.example3}],n={title:s.title,pronounce:s.pronounce,definitions:e,examples:t};a(n)},children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{className:"text-center fs2 font-bold mb-5",children:t[n.id].newVocabFormLegend}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"title",children:t[n.id].title}),Object(j.jsx)("input",{type:"text",id:"title",className:"form-control",value:s.title,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{title:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"pronounce",children:t[n.id].pronounce}),Object(j.jsx)("input",{type:"text",id:"pronounce",className:"form-control",value:s.pronounce,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{pronounce:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"definition1",children:[t[n.id].definition,"1"]}),Object(j.jsx)("input",{type:"text",id:"definition1",className:"form-control",value:s.definition1,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{definition1:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"definition2",children:[t[n.id].definition,"2"]}),Object(j.jsx)("input",{type:"text",id:"definition2",className:"form-control",value:s.definition2,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{definition2:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"definition3",children:[t[n.id].definition,"3"]}),Object(j.jsx)("input",{type:"text",id:"definition3",className:"form-control",value:s.definition3,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{definition3:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"example1",children:[t[n.id].example,"1"]}),Object(j.jsx)("input",{type:"text",id:"example1",className:"form-control",value:s.example1,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{example1:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"example2",children:[t[n.id].example,"2"]}),Object(j.jsx)("input",{type:"text",id:"example2",className:"form-control",value:s.example2,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{example2:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"example3",children:[t[n.id].example,"3"]}),Object(j.jsx)("input",{type:"text",id:"example3",className:"form-control",value:s.example3,onChange:function(e){return r(Object(O.a)(Object(O.a)({},s),{},{example3:e.target.value}))}})]}),Object(j.jsx)("button",{type:"submit",className:"btn fs4",children:t[n.id].submit})]})})]})})}function C(){var e=Object(s.f)().id,t=r.languages.find((function(t){return t.id===e})),n=Object(i.useState)({id:null,title:"",pronounce:"",definitions:[],examples:[]}),a=Object(h.a)(n,2),c=a[0],l=a[1],o=Object(i.useState)(t.words),m=Object(h.a)(o,2),b=m[0],u=m[1];Object(i.useEffect)((function(){u(b.map((function(e){return e.id===c.id?Object(O.a)(Object(O.a)({},e),c):e})))}),[c]);var x=Object(i.useState)(!1),N=Object(h.a)(x,2),C=N[0],w=N[1],F=Object(i.useState)(!1),D=Object(h.a)(F,2),S=D[0],E=D[1],L=function(e){l(Object(O.a)(Object(O.a)({},c),{},Object(p.a)({},e.target.name,e.target.value)))},V=function(e){l(Object(O.a)(Object(O.a)({},c),{},{definitions:Object(f.a)(c.definitions.map((function(t){return t.id===e.target.name?Object(O.a)(Object(O.a)({},t),{},{value:e.target.value}):t})))}))},W=function(e){l(Object(O.a)(Object(O.a)({},c),{},{examples:Object(f.a)(c.examples.map((function(t){return t.id===e.target.name?Object(O.a)(Object(O.a)({},t),{},{value:e.target.value}):t})))}))};return Object(j.jsxs)(j.Fragment,{children:[S&&Object(j.jsx)(y,{meta:d,lang:t,onSubmitNewVocab:function(e){var t=Object(O.a)(Object(O.a)({},e),{},{id:b.length});u([].concat(Object(f.a)(b),[t])),E(!1)},onCloseModal:function(){E(!1)}}),Object(j.jsx)(v,{lang:t}),Object(j.jsxs)("div",{className:"row container position-relative",children:[Object(j.jsx)(g,{words:b,onClick:function(e){var t=b.find((function(t){return t.id.toString()===e.target.name})),n=t.id,i=t.title,a=t.pronounce,c=t.definitions,o=t.examples;l({id:n,title:i,pronounce:a,definitions:c,examples:o}),w(!0),e.preventDefault()},onClickAddVocab:function(e){e.preventDefault(),E(!0)}}),C&&Object(j.jsx)(k,{meta:d,lang:t,activeWord:c,handleOnDelete:function(e){w(!1),u(b.filter((function(t){return t.id!==e.id})))},children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"form-group align-items-start",children:[Object(j.jsx)("label",{htmlFor:"title",children:d[t.id].title}),Object(j.jsx)("input",{type:"text",name:"title",value:c.title,onChange:L})]}),Object(j.jsxs)("div",{className:"form-group align-items-start",children:[Object(j.jsx)("label",{htmlFor:"pronounce",children:d[t.id].pronounce}),Object(j.jsx)("input",{type:"text",name:"pronounce",value:c.pronounce,onChange:L})]}),Object(j.jsxs)("div",{className:"form-group align-items-start",children:[Object(j.jsx)("label",{htmlFor:"definitions",children:d[t.id].definition}),Object(j.jsx)("div",{className:"d-flex flex-column",children:c.definitions.map((function(e){return Object(j.jsx)("input",{type:"text",name:e.id,value:e.value,onChange:V},e.id)}))})]}),Object(j.jsxs)("div",{className:"form-group align-items-start",children:[Object(j.jsx)("label",{htmlFor:"examples",children:d[t.id].example}),Object(j.jsx)("div",{className:"d-flex flex-column",children:c.examples.map((function(e){return Object(j.jsx)("input",{type:"text",name:e.id,value:e.value,onChange:W},e.id)}))})]})]})})]})]})}var w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",children:Object(j.jsx)(x,{})}),Object(j.jsx)(s.a,{path:"/lang/:id",children:Object(j.jsx)(C,{})})]})})})};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a129bd72.chunk.js.map