(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n,a=c(10),s=c.n(a),r=c(9),i=c(18),o=c(7),l=c(16),d=c(17),u=c(4);!function(e){e.SET="currentTodo/SET",e.REMOVE="currentTodo/REMOVE"}(n||(n={}));var j,h=function(e){return{type:n.SET,payload:e}},b=function(){return{type:n.REMOVE}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET:return Object(u.a)({},t.payload);case n.REMOVE:return null;default:return e}};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(j||(j={}));var f=function(e){return{type:"changeStatus",payload:e}},m=function(e){return{type:"changeQuery",payload:e}},x={query:"",status:j.ALL},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeStatus":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload});case"changeQuery":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});default:return e}},v=c(19),y=function(e){return{type:"todos/ADD",payload:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?Object(v.a)(t.payload):e},g=Object(o.combineReducers)({currentTodo:O,filter:p,todos:N}),E=Object(o.createStore)(g,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),T=c(11),L=c(3),k=c(6),w=c.n(k),C=c(0),A=(c(28),c(29),c(12)),S=c.n(A),D=r.b,M=r.c,V=c(1),I=function(e){var t=e.todos,c=M((function(e){return e.currentTodo})),n=D();return Object(V.jsxs)(V.Fragment,{children:[!t.length&&Object(V.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(V.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"#"}),Object(V.jsx)("th",{children:Object(V.jsx)("span",{className:"icon",children:Object(V.jsx)("i",{className:"fas fa-check"})})}),Object(V.jsx)("th",{children:"Title"}),Object(V.jsx)("th",{children:" "})]})}),Object(V.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,s=e.completed,r=(null===c||void 0===c?void 0:c.id)===t;return Object(V.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":r}),children:[Object(V.jsx)("td",{className:"is-vcentered",children:t}),Object(V.jsx)("td",{className:"is-vcentered",children:s&&Object(V.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(V.jsx)("i",{className:"fas fa-check"})})}),Object(V.jsx)("td",{className:"is-vcentered is-expanded",children:Object(V.jsx)("p",{className:S()({"has-text-success":s,"has-text-danger":!s}),children:a})}),Object(V.jsx)("td",{className:"has-text-right is-vcentered",children:Object(V.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return n(h(e))},children:Object(V.jsx)("span",{className:"icon",children:Object(V.jsx)("i",{className:S()("far",{"fa-eye-slash":r,"fa-eye":!r})})})})})]},t)}))})]})]})},P=function(){var e=M((function(e){return e.filter})),t=D(),c=e.status,n=e.query,a=n.length||c!==j.ALL;return Object(V.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(V.jsx)("p",{className:"control",children:Object(V.jsx)("span",{className:"select",children:Object(V.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){switch(e.target.value){case j.ALL:t(f(j.ALL));break;case j.ACTIVE:t(f(j.ACTIVE));break;case j.COMPLETED:t(f(j.COMPLETED))}},children:[Object(V.jsx)("option",{value:"all",children:"All"}),Object(V.jsx)("option",{value:"active",children:"Active"}),Object(V.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(V.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(V.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){var c=e.target.value;t(m(c))}}),Object(V.jsx)("span",{className:"icon is-left",children:Object(V.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(V.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(V.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t(m("")),t(f(j.ALL))}})})]})]})},R=(c(31),function(){return Object(V.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(V.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var q=function(e){return _("/users/".concat(e))},B=function(){var e=Object(C.useState)(null),t=Object(L.a)(e,2),c=t[0],n=t[1],a=M((function(e){return e.currentTodo})),s=D(),r=Object(C.useState)(!1),i=Object(L.a)(r,2),o=i[0],l=i[1],d=a,u=d.id,j=d.title,h=d.completed,O=d.userId,f=function(){var e=Object(T.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(O);case 3:t=e.sent,n(t),l(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(C.useEffect)((function(){f()}),[]);var m=!c&&!o;return Object(V.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(V.jsx)("div",{className:"modal-background"}),m?Object(V.jsx)(R,{}):Object(V.jsxs)("div",{className:"modal-card",children:[Object(V.jsxs)("header",{className:"modal-card-head",children:[Object(V.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(u)}),Object(V.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(b())}})]}),Object(V.jsxs)("div",{className:"modal-card-body",children:[Object(V.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(V.jsxs)("p",{className:"block","data-cy":"modal-user",children:[h?Object(V.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(V.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",o?Object(V.jsx)("p",{className:"notification is-warning",children:"Can`t load user from server"}):Object(V.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},F=function(){var e=M((function(e){return e.todos})),t=M((function(e){return e.currentTodo})),c=M((function(e){return e.filter})),n=D(),a=Object(C.useState)(!1),s=Object(L.a)(a,2),r=s[0],i=s[1],o=function(){var e=Object(T.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("/todos");case 3:t=e.sent,n(y(t)),i(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(C.useEffect)((function(){o()}));var l=function(e,t){var c=e,n=t.query,a=t.status;return n&&(c=c.filter((function(e){var t=n.toLowerCase();return e.title.toLowerCase().includes(t)}))),a===j.ACTIVE&&(c=c.filter((function(e){return!e.completed}))),a===j.COMPLETED&&(c=c.filter((function(e){return e.completed}))),c}(e,c),d=!e.length&&!r;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"section",children:Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("div",{className:"box",children:[Object(V.jsx)("h1",{className:"title",children:"Todos:"}),Object(V.jsx)("div",{className:"block",children:Object(V.jsx)(P,{})}),Object(V.jsxs)("div",{className:"block",children:[d?Object(V.jsx)(R,{}):Object(V.jsx)(I,{todos:l}),r&&Object(V.jsx)("p",{className:"notification is-warning",children:"Can`t load todos from server"})]})]})})}),t&&Object(V.jsx)(B,{})]})},J=function(){return Object(V.jsx)(r.a,{store:E,children:Object(V.jsx)(i.a,{children:Object(V.jsx)(F,{})})})};s.a.render(Object(V.jsx)(J,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.82d2c75b.chunk.js.map