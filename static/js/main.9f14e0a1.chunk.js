(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__3O0AP",label:"Filter_label__2sYpB",input:"Filter_input__m7rEU"}},16:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":4591256},{"id":"id-2","name":"Hermione Kline","number":4438912},{"id":"id-3","name":"Eden Clements","number":6451779},{"id":"id-4","name":"Annie Copeland","number":2279126}]')},28:function(t,e,n){},3:function(t,e,n){t.exports={form:"ContactForm_form__2ksRw",label:"ContactForm_label__1lEip",input:"ContactForm_input__1vEV_",submitButton:"ContactForm_submitButton__Ob2wD"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(2),s=(n(28),n(9)),l=n.n(s),u=n(13),b=n(32),m="contacts/Add",d="contacts/Delete",j="contacts/changeFilter",p=n(3),f=n.n(p),h=n(1);var _=Object(i.b)(null,(function(t){return{onSubmit:function(e,n){return t(function(t,e){return{type:m,payload:{id:Object(b.a)(),name:t,number:e}}}(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),l=s[0],b=s[1],m=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}},d=function(){o(""),b("")};return Object(h.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault(),e(r,l),d()},children:[Object(h.jsxs)("label",{className:f.a.label,children:["Name",Object(h.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:r,onChange:m,required:!0})]}),Object(h.jsxs)("label",{className:f.a.label,children:["Number",Object(h.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:l,onChange:m,required:!0})]}),Object(h.jsx)("button",{className:f.a.submitButton,type:"submit",children:"Add contact"})]})})),O=n(5),v=n.n(O);var x=Object(i.b)((function(t){var e=t.contacts,n=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter);return{contacts:n}}),(function(t){return{onDelete:function(e){return t({type:d,payload:e})}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(h.jsx)(h.Fragment,{children:0!==e.length?Object(h.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:v.a.contactItem,children:[Object(h.jsxs)("p",{className:v.a.contactInfo,children:[a,": ",c]}),Object(h.jsx)("button",{className:v.a.deleteButton,id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))}):Object(h.jsx)("p",{className:v.a.notification,children:"There are no contacts yet..."})})})),C=n(10),g=n.n(C);var N=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t((n=e.currentTarget.value,{type:j,payload:n}));var n}}}))((function(t){var e=t.value,n=t.onChange;return Object(h.jsx)("div",{className:g.a.filter,children:Object(h.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(h.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})})}));function y(){return Object(h.jsxs)("div",{className:l.a.app,children:[Object(h.jsx)("h1",{className:l.a.title,children:"Phonebook"}),Object(h.jsx)(_,{}),Object(h.jsx)("h2",{className:l.a.title,children:"Contacts"}),Object(h.jsx)(N,{}),Object(h.jsx)(x,{})]})}var A=n(4),B=n(15),F=n(17),k=n(16),w=Object(A.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case m:var c=t.map((function(t){return t.name}));return c.includes(a.name)?(alert("".concat(a.name," is already exist")),t):[a].concat(Object(F.a)(t));case d:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===j?a:t}}),L=Object(A.combineReducers)({contacts:w}),S=Object(A.createStore)(L,Object(B.composeWithDevTools)());console.log(S.getState()),o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(i.a,{store:S,children:Object(h.jsx)(y,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={contactList:"ContactList_contactList__3BZX4",contactItem:"ContactList_contactItem__3i0UU",contactInfo:"ContactList_contactInfo__13nWf",deleteButton:"ContactList_deleteButton__14vBR",notification:"ContactList_notification__16gl5"}},9:function(t,e,n){t.exports={app:"App_app__2FXkr",title:"App_title__1tiiA"}}},[[30,1,2]]]);
//# sourceMappingURL=main.9f14e0a1.chunk.js.map