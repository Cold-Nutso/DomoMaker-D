(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("domoMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,o,a)=>{const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),m=await r.json();document.getElementById("domoMessage").classList.add("hidden"),m.error&&t(m.error),m.redirect&&(window.location=m.redirect),a&&a(m)},hideError:()=>{document.getElementById("domoMessage").classList.add("hidden")}}}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var m=t[a]={exports:{}};return e[a](m,m.exports,o),m.exports}(()=>{const e=o(603),t=async()=>{const e=await fetch("/getDomos"),t=await e.json();ReactDOM.render(React.createElement(m,{domos:t.domos}),document.getElementById("domos"))},a=o=>{o.preventDefault(),e.hideError();const a=o.target.querySelector("#domoName").value,r=o.target.querySelector("#domoAge").value,m=o.target.querySelector("#domoFood").value,d=o.target.querySelector("#_csrf").value;return!a&&r&&m?(e.handleError("Name field is required!"),!1):a&&!r&&m?(e.handleError("Age field is required!"),!1):a&&r&&!m?(e.handleError("Food field is required!"),!1):a&&r&&m?(e.sendPost(o.target.action,{name:a,age:r,food:m,_csrf:d},t),!1):(e.handleError("All fields are required!"),!1)},r=e=>React.createElement("form",{id:"domoForm",onSubmit:a,name:"domoForm",action:"/maker",method:"POST",className:"domoForm"},React.createElement("label",{htmlFor:"name"},"Name: "),React.createElement("input",{id:"domoName",type:"text",name:"name",placeholder:"Domo"}),React.createElement("label",{htmlFor:"age"},"Age: "),React.createElement("input",{id:"domoAge",type:"number",min:"0",name:"age",placeholder:"20"}),React.createElement("label",{htmlFor:"food"},"Favorite Food: "),React.createElement("input",{id:"domoFood",type:"text",name:"food",placeholder:"nikujaga"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"makeDomoSubmit",type:"submit",value:"Make Domo"})),m=e=>{if(0===e.domos.length)return React.createElement("div",{className:"domoList"},React.createElement("h3",{className:"emptyDomo"},"No Domos Yet!"));const t=e.domos.map((e=>React.createElement("div",{key:e.id,className:"domo"},React.createElement("img",{src:"/assets/img/domoface.jpeg",alt:"domo face",className:"domoFace"}),React.createElement("h3",{className:"domoName"}," Name: ",e.name," "),React.createElement("h3",{className:"domoAge"}," Age: ",e.age," "),React.createElement("h3",{className:"domoFood"}," Favorite Food: ",e.food," "))));return React.createElement("div",{className:"domoList"},t)};window.onload=async()=>{const e=await fetch("/getToken"),o=await e.json();ReactDOM.render(React.createElement(r,{csrf:o.csrfToken}),document.getElementById("makeDomo")),ReactDOM.render(React.createElement(m,{domos:[]}),document.getElementById("domos")),t()}})()})();