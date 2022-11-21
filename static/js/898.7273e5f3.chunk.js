"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[898],{898:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,s,c,u,d,l,p,h=t(2791),f=t(1405),x=t(6916),m=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},j=function(n){return n.filter},v=(0,x.P1)([m,j],(function(n,e){return n.filter((function(n){var t,r;return null===(t=n.name)||void 0===t||null===(r=t.toLowerCase())||void 0===r?void 0:r.includes(e.toLowerCase())}))})),w=t(208),Z=t(168),y=t(6444),k=y.ZP.div(r||(r=(0,Z.Z)(["\n  border: 1px solid black;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  margin-top: 10px;\n  background: #afb4eb;\n"]))),P=y.ZP.button(i||(i=(0,Z.Z)(["\n  width: 80px;\n  height: auto;\n  padding: 3px;\n  border-radius: 15px;\n  border: transparent;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: #6363e7d4;\n  }\n"]))),C=y.ZP.p(o||(o=(0,Z.Z)(["\n  margin: 0;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.16;\n"]))),z=t(3329),A=function(n){var e=n.id,t=n.name,r=n.number,i=(0,f.I0)();return(0,z.jsxs)(k,{children:[(0,z.jsxs)(C,{children:[t,": ",r]}),(0,z.jsx)(P,{type:"buttom",onClick:function(){return i((0,w.GK)(e))},children:"Delete"})]})},F=y.ZP.ul(a||(a=(0,Z.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  justify-items: center;\n"]))),I=function(){var n=(0,f.v9)(v);return(0,z.jsx)(F,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,z.jsx)("li",{children:(0,z.jsx)(A,{id:e,name:t,number:r})},e)}))})},N=t(5705),_=(0,y.ZP)(N.l0)(s||(s=(0,Z.Z)(["\n  width: 100%;\n  display: block;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),q=y.ZP.label(c||(c=(0,Z.Z)(["\n  width: 100%;\n  font-size: 24px;\n  font-weight: 500;\n"]))),L=(0,y.ZP)(N.gN)(u||(u=(0,Z.Z)(["\n  border-radius: 10px;\n  padding: 5px 15px;\n  font-size: 18px;\n  font-weight: 500;\n  flex-wrap: wrap;\n\n  height: 100%;\n  width: 90%;\n  margin: 15px 0;\n  outline: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    border-color: blue;\n  }\n"]))),D=y.ZP.button(d||(d=(0,Z.Z)(["\n  width: 150px;\n  height: 30px;\n  background: white;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 10px;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    border-color: blue;\n    background-color: #6363e7d4;\n  }\n"]))),J=function(){var n=(0,f.I0)(),e=(0,f.v9)(m);return(0,z.jsx)(N.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){(0,r.resetForm)(),e.find((function(n){return n.name===t.name}))?alert("".concat(t.name," is already in contakts")):n((0,w.uK)(t))},children:(0,z.jsxs)(_,{autoComplete:"off",children:[(0,z.jsx)(q,{htmlFor:"name",children:"Name"}),(0,z.jsx)(L,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,z.jsx)(q,{htmlFor:"name",children:"Number"}),(0,z.jsx)(L,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,z.jsx)(D,{type:"submit",children:"Add contact"})]})})},K=t(1429),T=y.ZP.label(l||(l=(0,Z.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  display: block;\n  text-align: center;\n"]))),B=y.ZP.input(p||(p=(0,Z.Z)(["\n  margin-left: 20px;\n  border-radius: 10px;\n\n  padding: 5px 15px;\n  outline: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    border-color: blue;\n  }\n"]))),E=function(){var n=(0,f.I0)(),e=(0,f.v9)(j);return(0,z.jsxs)(T,{children:["Find contacts by name",(0,z.jsx)(B,{type:"text",value:e,onChange:function(e){e.preventDefault(),n((0,K.T)(e.currentTarget.value))}})]})};function G(){var n=(0,f.I0)(),e=(0,f.v9)(b),t=(0,f.v9)(g);return(0,h.useEffect)((function(){n((0,w.yF)())}),[n]),(0,z.jsxs)("div",{children:[(0,z.jsx)("h1",{children:"Phonebook"}),(0,z.jsx)(J,{}),(0,z.jsx)("h2",{children:"Contacts"}),(0,z.jsx)(E,{}),e&&!t&&(0,z.jsx)("b",{children:"Request in progress..."}),(0,z.jsx)(I,{})]})}}}]);
//# sourceMappingURL=898.7273e5f3.chunk.js.map