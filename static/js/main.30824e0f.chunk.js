(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),r=n.n(a),s=(n(27),n(28),n(2)),i=n.n(s),o=n(3),l=n(5),j=(n(30),"https://api.unsplash.com");function u(e,t){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(i.a.mark((function e(t,n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(j,"/search?query=").concat(n,"&client_id=").concat(t),e.abrupt("return",fetch(c).then((function(e){return e.json()})).then((function(e){return[null,e]})).catch((function(e){return[e,null]})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(i.a.mark((function e(t,n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(j,"/photos/").concat(n,"?client_id=").concat(t),e.abrupt("return",fetch(c).then((function(e){return e.json()})).then((function(e){return[null,e]})).catch((function(e){return[e,null]})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(i.a.mark((function e(t,n,c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/search?query=").concat(n,"&client_id=").concat(t,"&page=").concat(c),e.abrupt("return",fetch(a).then((function(e){return e.json()})).then((function(e){return[null,e]})).catch((function(e){return[e,null]})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=n(22),x=n(11),O=n(1);var v=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),j=s[0],b=s[1],d=Object(c.useState)(!1),h=Object(l.a)(d,2),m=h[0],v=h[1],g="UTe_8na_9zX7UPXkvsbB5pIZuYC1U2rHbpWqrNnsL4E",N=Object(c.useState)(),y=Object(l.a)(N,2),k=y[0],w=y[1],S=Object(c.useState)(2),_=Object(l.a)(S,2),C=_[0],E=_[1],I=Object(c.useState)(!1),L=Object(l.a)(I,2),q=L[0],z=L[1],B=Object(f.a)({mode:"onChange"}).handleSubmit,F=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c,a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),E(C+1),e.next=4,p(g,n,C);case 4:t=e.sent,c=Object(l.a)(t,2),c[0],a=c[1],r=a.photos.results,s=k,r.map((function(e){return s.push(e)})),w(s),z(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(j||"Random");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){localStorage.setItem("key",g),function(){var e=Object(o.a)(i.a.mark((function e(){var t,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,u(g,n);case 3:t=e.sent,c=Object(l.a)(t,2),c[0],a=c[1],w(a.photos.results),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(O.jsxs)("div",{children:[Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light nav-bar",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarButtonsExample",children:[Object(O.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(O.jsx)("li",{className:"nav-item",children:"Dashboard"})}),Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-link px-3 me-2",children:"Login"}),Object(O.jsx)("button",{type:"button",className:"btn btn-primary me-3",children:"Sign up for free"})]})]})})}),Object(O.jsx)("div",{className:"s130 d-flex justify-content-center h-100",children:Object(O.jsx)("form",{onSubmit:B(U),children:Object(O.jsxs)("div",{className:"inner-form",children:[Object(O.jsx)("div",{className:"input-field first-wrap",children:Object(O.jsx)("input",{id:"search",type:"text",placeholder:"What type of image are you looking for?",style:{paddingLeft:"10px"},onChange:function(e){b(e.target.value)}})}),Object(O.jsx)("div",{className:"input-field second-wrap",children:Object(O.jsx)("button",{className:"btn-search",type:"button",onClick:U,children:"SEARCH"})})]})})}),Object(O.jsx)("div",{children:n?Object(O.jsx)("div",{className:"justify-content-center",children:m?Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)("div",{className:"spinner-border text-primary",role:"status"})}):Object(O.jsx)("div",{className:"justify-content-center",children:0!==k.length?Object(O.jsxs)("div",{className:"container cont",children:[Object(O.jsx)("div",{className:"row",children:k.map((function(e){var t=e.id;return Object(O.jsx)("div",{className:"col-md-3 col-sm-4 col-xs-6 img-div justify-content-center",children:Object(O.jsx)(x.b,{to:"/".concat(t),children:Object(O.jsx)("img",{className:"img-responsive img-size",src:e.urls.regular,alt:"loading..."})})},t)}))}),Object(O.jsx)("div",{children:q?Object(O.jsx)("div",{className:"d-flex justify-content-center spinnerload",children:Object(O.jsx)("div",{className:"spinner-border text-primary",role:"status"})}):Object(O.jsx)("div",{className:"text-center load",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary",onClick:F,children:"Load more Images"})})})]}):Object(O.jsxs)("div",{className:"alert alert-danger",children:[Object(O.jsx)("strong",{children:"Oops!"})," Cannot find what you are looking for."]})})}):Object(O.jsx)(O.Fragment,{})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsxs)("footer",{className:"text-center text-white fcolor footer",children:[Object(O.jsx)("div",{className:"container pt-4",children:Object(O.jsxs)("section",{className:"mb-4",children:[Object(O.jsx)("a",{className:"btn btn-link btn-floating btn-lg text-dark m-1",href:"https://www.linkedin.com/in/neeraj-kumar-/","data-mdb-ripple-color":"dark",target:"_blank",children:Object(O.jsx)("i",{className:"fab fa-linkedin"})}),Object(O.jsx)("a",{className:"btn btn-link btn-floating btn-lg text-dark m-1",href:"https://github.com/neeraj2021",role:"button","data-mdb-ripple-color":"dark",target:"_blank",children:Object(O.jsx)("i",{className:"fab fa-github"})})]})}),Object(O.jsx)("div",{className:"text-center text-dark p-3 section",children:Object(O.jsx)("a",{href:"mailto:neerajkmahawar2017@gmail.com",target:"_blank",className:"text-dark",children:"neerajkmahawar2017@gmail.com"})})]})]})},g=n(4);n(37);var N=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],u=s[1],b=Object(g.f)(),h=function(){for(var e="",t=b.pathname,n=t.length-1;"/"!==t[n];)e+=t[n],n--;return e=e.split("").reverse().join("")};return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t=h(),e.next=4,d(localStorage.getItem("key"),t);case 4:n=e.sent,c=Object(l.a)(n,2),c[0],r=c[1],console.log(r),a(r.urls.raw),u(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),j?Object(O.jsx)("div",{className:"spinner-border text-primary spinner-position"}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"box",children:Object(O.jsx)("img",{src:n,className:"imgSize",alt:""})})})};var y=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(g.c,{children:[Object(O.jsx)(g.a,{exact:!0,path:"/",component:v}),Object(O.jsx)(g.a,{exact:!0,path:"/:id",component:N})]})})};r.a.render(Object(O.jsx)(x.a,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.30824e0f.chunk.js.map