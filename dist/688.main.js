(self.webpackChunkultimate_tic_tac_toe=self.webpackChunkultimate_tic_tac_toe||[]).push([[688],{8688:(n,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>o});var e=t(7294),a=(t(5574),t(758));function r(){return e.createElement("div",{className:"h-full"},e.createElement("div",{className:"container left"},e.createElement("div",{className:"stick"}),e.createElement("div",{className:"ball"})),e.createElement("div",{className:"container"},e.createElement("div",{className:"stick"}),e.createElement("div",{className:"ball"})),e.createElement("div",{className:"container"},e.createElement("div",{className:"stick"}),e.createElement("div",{className:"ball"})),e.createElement("div",{className:"container"},e.createElement("div",{className:"stick"}),e.createElement("div",{className:"ball"})),e.createElement("div",{className:"container right"},e.createElement("div",{className:"stick"}),e.createElement("div",{className:"ball"})),e.createElement("p",{className:"text-xl text-center mt-4 text-gray-500"},"-Waiting-"))}const o=function(n){return e.createElement("div",{className:"w-screen h-screen"},e.createElement(a.Z,null),e.createElement("div",{className:"flex flex-col text-center h-full w-full"},e.createElement("div",{className:"flex-grow"}),e.createElement("div",{className:"flex flex-row text-center w-full"},e.createElement("div",{className:"flex-grow"}),e.createElement("div",{className:"container-main"},e.createElement(r,null)),e.createElement("div",{className:"flex-grow"})),e.createElement("div",{className:"flex-grow"})))}},2256:(n,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>r});var e=t(3645),a=t.n(e)()((function(n){return n[1]}));a.push([n.id,".stick {\n    width: 2px;\n    height: calc(100% - calc(.2*33vmin));\n    background-color: gray;\n    text-align: center;\n    margin: auto;\n}\n.ball {\n    width: calc(.2*33vmin);\n    height: calc(.2*33vmin);\n    border-radius: 50%;\n    background-color: #3B82F6;\n    text-align: center;\n    margin: auto;\n}\n.container {\n    text-align: center;\n    width: auto;\n    display: inline-block;\n    transform-origin: 50% 0%;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    height: 100%;\n}\n\n.left {\n    -webkit-animation-name: swingLeft;\n            animation-name: swingLeft;\n}\n\n.right {\n    -webkit-animation-name: swingRight;\n            animation-name: swingRight;\n}\n.mid {\n    -webkit-animation-name: swingMid;\n            animation-name: swingMid;\n}\n\n@-webkit-keyframes swingLeft {\n    0% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n                animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n    }\n    25% {\n        transform: rotate(25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    50% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    75% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    100% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n}\n\n@keyframes swingLeft {\n    0% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n                animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n    }\n    25% {\n        transform: rotate(25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    50% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    75% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    100% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n}\n\n@-webkit-keyframes swingRight {\n    0% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    25% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    50% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,.2,1);\n                animation-timing-function: cubic-bezier(0,0.2,.2,1);\n    }\n    75% {\n        transform: rotate(-25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    100% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n}\n\n@keyframes swingRight {\n    0% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    25% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n    50% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,.2,1);\n                animation-timing-function: cubic-bezier(0,0.2,.2,1);\n    }\n    75% {\n        transform: rotate(-25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    100% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n}\n\n@-webkit-keyframes swingMid {\n    0% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n                animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n    }\n    25% {\n        transform: rotate(25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    50% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,.2,1);\n                animation-timing-function: cubic-bezier(0,0.2,.2,1);\n    }\n    75% {\n        transform: rotate(-25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    100% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n}\n\n@keyframes swingMid {\n    0% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n                animation-timing-function: cubic-bezier(0,0.2,0.2, 1);\n    }\n    25% {\n        transform: rotate(25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    50% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: cubic-bezier(0,0.2,.2,1);\n                animation-timing-function: cubic-bezier(0,0.2,.2,1);\n    }\n    75% {\n        transform: rotate(-25deg);\n        -webkit-animation-timing-function: cubic-bezier(0.2,0,1,.2);\n                animation-timing-function: cubic-bezier(0.2,0,1,.2);\n    }\n    100% {\n        transform: rotate(0deg);\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n    }\n}\n\n.container-main {\n    height: 33vmin;\n    width: 33vmin;\n}",""]);const r=a},5574:(n,i,t)=>{"use strict";var e=t(3379),a=t.n(e),r=t(2256),o=a()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||n.hot.invalidate){var m=r.default.locals;n.hot.accept(2256,(i=>{r=t(2256),function(n,i,t){if(!n&&i||n&&!i)return!1;var e;for(e in n)if(n[e]!==i[e])return!1;for(e in i)if(!n[e])return!1;return!0}(m,r.default.locals)?(m=r.default.locals,o(r.default)):n.hot.invalidate()}))}n.hot.dispose((function(){o()})),r.default.locals}}]);