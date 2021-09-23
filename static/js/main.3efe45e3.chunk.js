(this.webpackJsonpcars=this.webpackJsonpcars||[]).push([[0],[,,,,,,,,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(8),o=r.n(n),c=r(6),s=r(2),i=r(3),l=r(5),d=r(4),u=(r(13),r(0)),h=function(){return Object(u.jsx)("h1",{className:"header",children:"Cars Table"})},f=(r(15),r(16),function(e){var t=e.displayedElements,r=e.sorted,a=e.revSorted,n=e.onSorted,o=e.onDeleted,c=e.onChoose,s=[{type:"brand",label:"Brand"},{type:"model",label:"Model"},{type:"power",label:"Power, Hp"}].map((function(e){var t=e.type,o=e.label,c=r===t?a?"sort down":"sort up":"sort";return Object(u.jsx)("th",{className:c,onClick:function(){return n(t)},children:o},o)})),i=t.map((function(e){var t=e.image,r=e.brand,a=e.model,n=e.power,s=e.chosen,i=e.id,l=s?" chosen":"";return Object(u.jsxs)("tr",{className:l,children:[Object(u.jsxs)("td",{className:"img-fit",children:[Object(u.jsx)("img",{src:t,alt:"cars"}),Object(u.jsx)("button",{className:"delete",onClick:function(){return o(a)},children:"Delete car"}),Object(u.jsx)("button",{className:"choose",onClick:function(){return c(a)},children:"Choose car"})]}),Object(u.jsx)("td",{children:r}),Object(u.jsx)("td",{children:a}),Object(u.jsx)("td",{children:n})]},i)}));return Object(u.jsx)("div",{className:"table-container",children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Image"}),s]})}),Object(u.jsx)("tbody",{children:i})]})})}),j=[{id:"SLR McLaren68",brand:"Mercedes-Benz",model:"SLR McLaren",image:"https://www.auto-data.net/images/f97/Mercedes-Benz-SLR-McLaren-C199-Roadster_1.jpg",power:650,chosen:!1},{id:"A826",brand:"Audi",model:"A8",image:"https://www.auto-data.net/images/f27/audi-a8-d5.jpg",power:460,chosen:!1},{id:"LS65",brand:"Lexus",model:"LS",image:"https://www.auto-data.net/images/f41/Lexus-LS-V-facelift-2020_1.jpg",power:416,chosen:!1},{id:"Veyron45",brand:"Bugatti",model:"Veyron",image:"https://s0.rbk.ru/v6_top_pics/media/img/3/51/754788634378513.jpeg",power:1200,chosen:!1},{id:"California T55",brand:"Ferrari",model:"California T",image:"https://topgearrussia.ru/data/topgear/upload/2014-04/06/image-6f1172fd.jpg",power:560,chosen:!1}],p=(r(17),function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={trim:""},e.onChangeTrim=function(t){var r=t.target.value.toLowerCase();e.setState({trim:r}),e.props.onToggleTrim(r)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state.trim;return Object(u.jsx)("div",{className:"search-panel",children:Object(u.jsx)("input",{type:"text",value:e,placeholder:"Search car",onChange:this.onChangeTrim})})}}]),r}(a.Component)),m=(r(18),function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={image:{value:"",hasError:!1},brand:{value:"",hasError:!1},model:{value:"",hasError:!1},power:{value:"",hasError:!1}},e.inputsAtr=[{dataType:"image",placeholder:"Enter URL of car image (png, jpg)"},{dataType:"brand",placeholder:"Enter brand"},{dataType:"model",placeholder:"Enter model"},{dataType:"power",placeholder:"Enter power, Hp"}],e.onChangeInfo=function(t){var r=t.target.dataset.type,a=t.target.value,n={};n[r]={value:a},e.setState(n)},e.onAddCar=function(){var t=Object.keys(e.state),r=!1;if(t.forEach((function(t){if(""===e.state[t].value){r=!0;var a={};a[t]={value:"",hasError:!0},e.setState(a)}})),!r){var a={};t.forEach((function(t){a[t]=e.state[t].value;var r={};r[t]={value:""},e.setState(r)})),a.chosen=!1,a.id=a.model+Math.floor(100*Math.random()),console.log(a),e.props.addCar(a)}},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.inputsAtr.map((function(t){var r=t.dataType,a=t.placeholder,n=(t.notMatchTypeImg,e.state[r].hasError?"error":"");return Object(u.jsx)("input",{type:"text",className:n,placeholder:a,"data-type":r,onChange:e.onChangeInfo,value:e.state[r].value},r)}));return Object(u.jsxs)("div",{className:"add-car-panel",children:[Object(u.jsx)("h1",{children:"Add your car"}),Object(u.jsx)("div",{className:"inputs-container",children:t}),Object(u.jsx)("button",{onClick:this.onAddCar,children:"Add car"})]})}}]),r}(a.Component)),b=(r(19),function(e){var t=e.filter,r=e.onFilter,a=[{name:"all",label:"All cars"},{name:"chosen",label:"Chosen cars"}].map((function(e){var a=e.name,n=e.label,o=t===a?"btn active":"btn";return Object(u.jsx)("button",{className:o,onClick:function(){return r(a)},children:n},a)}));return Object(u.jsx)("div",{className:"filter-panel",children:a})}),v=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={cars:j,sorted:null,revSorted:!0,trim:"",filter:"all"},e.onSorted=function(t){var r=e.state.sorted;r!==t&&e.setState((function(){var r="power"!==t?"sort":"sortNum";return{cars:e.sort(r,t),sorted:t,revSorted:!1}})),t===r&&e.setState((function(r){var a=r.revSorted;return{cars:e.sort("reverse",t),revSorted:!a}}))},e.sort=function(t,r){var a=e.state.cars;switch(t){case"sort":return Object(c.a)(a).sort((function(e,t){return e[r]===t[r]?0:e[r]>t[r]?1:-1}));case"sortNum":return Object(c.a)(a).sort((function(e,t){return e[r]-t[r]}));case"reverse":return Object(c.a)(a).reverse();default:return a}},e.onToggleTrim=function(t){e.setState({trim:t})},e.toggleTrim=function(e,t){return""===t?e:e.filter((function(e){var r=e.brand,a=e.model,n=e.power;return"".concat(r," ").concat(a," ").concat(n).toLowerCase().indexOf(t)>-1}))},e.addCar=function(t){e.setState((function(e){var r=e.cars;return{cars:[t].concat(Object(c.a)(r))}}))},e.deleteItem=function(t){e.setState((function(e){return{cars:e.cars.filter((function(e){return e.model!==t}))}}))},e.chooseItem=function(t){e.setState((function(e){return{cars:e.cars.map((function(e){return e.model===t&&(e.chosen=!e.chosen),e}))}}))},e.toggleFilter=function(t){e.setState({filter:t})},e.filtering=function(t){return"chosen"===e.state.filter?t.filter((function(e){return e.chosen})):t},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state,t=e.cars,r=e.sorted,a=e.revSorted,n=e.trim,o=e.filter,c=this.toggleTrim(this.filtering(t),n);return Object(u.jsxs)("div",{className:"cars",children:[Object(u.jsx)(h,{}),Object(u.jsx)(p,{onToggleTrim:this.onToggleTrim}),Object(u.jsx)(m,{addCar:this.addCar}),Object(u.jsx)(b,{filter:o,onFilter:this.toggleFilter}),Object(u.jsx)(f,{displayedElements:c,sorted:r,revSorted:a,onSorted:this.onSorted,onDeleted:this.deleteItem,onChoose:this.chooseItem})]})}}]),r}(a.Component);o.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3efe45e3.chunk.js.map