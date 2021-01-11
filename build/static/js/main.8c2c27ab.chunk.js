(this["webpackJsonpalkotest-frontend"]=this["webpackJsonpalkotest-frontend"]||[]).push([[0],{40:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n(6),a=n.n(i),o=(n(40),n(5)),s=n.n(o),l=n(9),u=n(12),d=n.n(u);console.log("backend url=".concat("http://alko-react-app.herokuapp.com/api/"));var j="http://alko-react-app.herokuapp.com/api/",h=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(j+"drinks");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(j+"nondrinks");case 2:return t=e.sent,e.abrupt("return",t.data.nondrinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(j+"date");case 2:return t=e.sent,e.abrupt("return",t.data.date);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={drinks:[],nondrinks:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ITEMS":return t.data;default:return e}},x=function(e){return{type:"SET_LIST_SIZE",data:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST_SIZE":return t.data;default:return e}},g=n(8),k={method:"price",toggleAlcoholic:!0,toggleOrder:!0,searchFilter:""},m=function(e){return{type:"method",data:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"method":return Object(g.a)(Object(g.a)({},e),{},{method:t.data.toLowerCase()});case"toggleAlcoholic":return Object(g.a)(Object(g.a)({},e),{},{toggleAlcoholic:!e.toggleAlcoholic});case"toggleOrder":return Object(g.a)(Object(g.a)({},e),{},{toggleOrder:!e.toggleOrder});case"filterSearch":return Object(g.a)(Object(g.a)({},e),{},{searchFilter:t.data});default:return e}},w=n(3),I=n(29),L=n(30),S=Object(L.a)([function(e){return e.sortOptions},function(e){return e.items.drinks},function(e){return e.listSize}],(function(e,t,n){switch(t=t.filter((function(t){return t.name.toLowerCase().includes(e.searchFilter)})),e.toggleAlcoholic){case!0:t=t.filter((function(e){return 0!==e.alcohol}));break;case!1:t=t.filter((function(e){return 0===e.alcohol}))}switch(e.method){case"price":t=t.sort((function(e,t){return t.price-e.price}));break;case"alcohol":t=t.sort((function(e,t){return t.alcohol-e.alcohol}));break;case"name":t=t.sort((function(e,t){return e.name.localeCompare(t.name)})).reverse();break;case"pple":t=t.sort((function(e,t){return t.priceperethanolL-e.priceperethanolL}));break;case"ppl":t=t.sort((function(e,t){return t.priceperL-e.priceperL}));break;case"size":t=t.sort((function(e,t){return t.size-e.size}));break;case"id":t=t.sort((function(e,t){return t.id-e.id}))}return e.toggleOrder&&(t=t.reverse()),t=t.slice(0,n)})),C=(n(65),function(e){var t=e.drink;return Object(r.jsxs)("div",{className:"drinkContainer",style:{},children:[Object(r.jsx)("div",{className:"drinkChildDiv drinkImg",children:Object(r.jsx)("img",{src:t.imgUrl,alt:t.name,crossOrigin:"anonymous"})}),Object(r.jsx)("div",{className:"drinkChildDiv drinkTable",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:"2",children:t.name})})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"price:"}),Object(r.jsxs)("td",{children:[t.price.toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"alcohol:"}),Object(r.jsxs)("td",{children:[t.alcohol,"%"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"manufacturer:"}),Object(r.jsx)("td",{children:t.manufacturer})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"volume:"}),Object(r.jsxs)("td",{children:[t.size," L"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"price per L of ethanol:"}),Object(r.jsxs)("td",{children:[isNaN(t.priceperethanolL)?t.priceperethanolL:t.priceperethanolL.toFixed(2),isNaN(t.priceperethanolL)?"":"\u20ac"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"type:"}),Object(r.jsx)("td",{children:t.type})]})]})]})}),Object(r.jsx)("div",{className:"drinkChildDiv drinkDescription",children:t.description})]})}),T=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.listSize})),n=Object(w.c)(S);return Object(r.jsx)("div",{id:"drinkList",children:Object(r.jsx)(I.a,{dataLength:n.length,next:function(){e(x(t+20))},hasMore:!0,endMessage:Object(r.jsx)("h1",{children:"this is the end"}),children:n.map((function(e){return Object(r.jsx)(C,{drink:e},e.id)}))})})},N=n(34),E=(n(66),function(){var e=Object(w.b)(),t=[{value:"name",label:"name"},{value:"price",label:"price"},{value:"alcohol",label:"alcohol content"},{value:"pple",label:"price per litre of pure ethanol"},{value:"ppl",label:"price per litre"},{value:"size",label:"size"},{value:"id",label:"id"}];return Object(r.jsxs)("div",{children:["order by:",Object(r.jsx)(N.a,{defaultValue:t.filter((function(e){return"pple"===e.value})),options:t,onChange:function(t){return function(t){e(m(t.value)),e(x(20))}(t)}})]})}),z=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.sortOptions.toggleAlcoholic}));return Object(r.jsxs)("div",{children:["alcohol?",Object(r.jsx)("button",{onClick:function(){return e({type:"toggleAlcoholic"}),void e(x(20))},children:t?"yes":"no"})]})},A=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.sortOptions.toggleOrder}));return Object(r.jsxs)("div",{children:["order: ",t?"ascending":"descending",Object(r.jsx)("button",{onClick:function(){return e({type:"toggleOrder"}),void e(x(20))},children:"toggle"})]})},D=function(){var e=Object(w.b)();return Object(r.jsxs)("div",{children:["search",Object(r.jsx)("input",{type:"text",onChange:function(t){return(n=t).preventDefault(),void e({type:"filterSearch",data:n.target.value});var n}})]})},_=function(){var e=Object(w.c)((function(e){return e.date})),t=new Date(e);return Object(r.jsxs)("div",{children:["Information last fetched: ",t.toLocaleString()]})},F=function(){return Object(r.jsxs)("div",{id:"menuContainer",children:[Object(r.jsx)(_,{}),Object(r.jsx)(E,{}),Object(r.jsx)(A,{}),Object(r.jsx)(z,{}),Object(r.jsx)(D,{})]})},M=n(31),J=n.n(M),U=function(){var e=Object(w.b)();return Object(r.jsx)(J.a,{showUnder:2500,style:{position:"fixed",bottom:0,right:0,left:0,height:"40px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"dodgerblue"},onHide:function(){return e(x(20))},duration:400,children:Object(r.jsx)("span",{style:{color:"white"},children:"back to top"})})},Z=[],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_DATE":return t.data;default:return e}},H=function(){var e=Object(w.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=e.sent,console.log("drinks: ".concat(n.length)),e.next=6,b();case 6:r=e.sent,console.log("non-drinks: ".concat(r.length)),t({type:"INIT_ITEMS",data:{drinks:n,nondrinks:r}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,console.log("last fetched: ".concat(JSON.stringify(n))),t({type:"INIT_DATE",data:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(x(20)),e(m("pple"))}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{}),Object(r.jsx)(T,{}),Object(r.jsx)(U,{})]})},R=n(10),V=n(32),W=n(33),q=Object(R.combineReducers)({listSize:v,items:O,sortOptions:y,date:B}),G=Object(R.createStore)(q,Object(W.composeWithDevTools)(Object(R.applyMiddleware)(V.a)));a.a.render(Object(r.jsx)(w.a,{store:G,children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.8c2c27ab.chunk.js.map