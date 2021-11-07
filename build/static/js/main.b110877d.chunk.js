(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__3O0AP",label:"Filter_label__2sYpB",input:"Filter_input__m7rEU"}},16:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":4591256},{"id":"id-2","name":"Hermione Kline","number":4438912},{"id":"id-3","name":"Eden Clements","number":6451779},{"id":"id-4","name":"Annie Copeland","number":2279126}]')},28:function(t,e,n){},3:function(t,e,n){t.exports={form:"ContactForm_form__2ksRw",label:"ContactForm_label__1lEip",input:"ContactForm_input__1vEV_",submitButton:"ContactForm_submitButton__Ob2wD"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=n(2),s=n(4),l=n(15),u=n(17),b="contacts/Add",m="contacts/Delete",d="contacts/changeFilter",j=n(16),p=Object(s.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case b:var c=t.map((function(t){return t.name}));return c.includes(a.name)?(alert("".concat(a.name," is already exist")),t):[a].concat(Object(u.a)(t));case m:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===d?a:t}}),f=Object(s.combineReducers)({contacts:p}),h=Object(s.createStore)(f,Object(l.composeWithDevTools)()),_=(n(28),n(9)),O=n.n(_),v=n(13),x=n(32),C=n(3),N=n.n(C),g=n(1);var y=Object(o.b)(null,(function(t){return{onSubmit:function(e,n){return t(function(t,e){return{type:b,payload:{id:Object(x.a)(),name:t,number:e}}}(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(v.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(v.a)(o,2),l=s[0],u=s[1],b=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":u(a);break;default:return}},m=function(){i(""),u("")};return Object(g.jsxs)("form",{className:N.a.form,onSubmit:function(t){t.preventDefault(),e(r,l),m()},children:[Object(g.jsxs)("label",{className:N.a.label,children:["Name",Object(g.jsx)("input",{className:N.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:r,onChange:b,required:!0})]}),Object(g.jsxs)("label",{className:N.a.label,children:["Number",Object(g.jsx)("input",{className:N.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:l,onChange:b,required:!0})]}),Object(g.jsx)("button",{className:N.a.submitButton,type:"submit",children:"Add contact"})]})})),A=n(5),B=n.n(A);var F=Object(o.b)((function(t){var e=t.contacts,n=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter);return{contacts:n}}),(function(t){return{onDelete:function(e){return t({type:m,payload:e})}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(g.jsx)(g.Fragment,{children:0!==e.length?Object(g.jsx)("ul",{className:B.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(g.jsxs)("li",{className:B.a.contactItem,children:[Object(g.jsxs)("p",{className:B.a.contactInfo,children:[a,": ",c]}),Object(g.jsx)("button",{className:B.a.deleteButton,id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))}):Object(g.jsx)("p",{className:B.a.notification,children:"There are no contacts yet..."})})})),k=n(10),w=n.n(k);var L=Object(o.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t((n=e.currentTarget.value,{type:d,payload:n}));var n}}}))((function(t){var e=t.value,n=t.onChange;return Object(g.jsx)("div",{className:w.a.filter,children:Object(g.jsxs)("label",{className:w.a.label,children:["Find contacts by name",Object(g.jsx)("input",{className:w.a.input,type:"text",value:e,onChange:n})]})})}));function S(){return Object(g.jsxs)("div",{className:O.a.app,children:[Object(g.jsx)("h1",{className:O.a.title,children:"Phonebook"}),Object(g.jsx)(y,{}),Object(g.jsx)("h2",{className:O.a.title,children:"Contacts"}),Object(g.jsx)(L,{}),Object(g.jsx)(F,{})]})}i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{store:h,children:Object(g.jsx)(S,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={contactList:"ContactList_contactList__3BZX4",contactItem:"ContactList_contactItem__3i0UU",contactInfo:"ContactList_contactInfo__13nWf",deleteButton:"ContactList_deleteButton__14vBR",notification:"ContactList_notification__16gl5"}},9:function(t,e,n){t.exports={app:"App_app__2FXkr",title:"App_title__1tiiA"}}},[[30,1,2]]]);
//# sourceMappingURL=main.b110877d.chunk.js.map