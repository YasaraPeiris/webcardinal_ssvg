import{i as n}from"./p-8fa78097.js";import{V as e,b as t,d as r,f as o,h as a,g as i}from"./p-cfeaffc4.js";const c=new Map;function u(n){let o=n.hasAttribute(e)?n.getAttribute(e):null;if(!o&&n.hasAttribute(t)&&(console.warn(`Attribute ${t} is deprecated for binding! Use the ${e} key attribute instead.`,n),o=n.getAttribute(t)),!o)return"";if(!o.startsWith(r)){const e=n.tagName.toLowerCase();return console.error([`Invalid chain found for ${e} (chain: "${o}")!`,`A valid chain must start with "${r}".`].join("\n")),""}return o}function f(n,e){return n=n.split("@").join(""),e=e.split("@").join(""),n&&e?`@${n}.${e}`:e?"@"+e:n?"@"+n:"@"}function s(n,e,t){c.set(n,{chain:e,changeHandler:t})}function l(n,e,t){c.set(n,{expression:e,changeHandler:t})}function d(n,e){const t=n=>{if(n.childNodes.length>0)for(const r of n.childNodes){if(c.has(r)){const n=c.get(r);n.chain?e.offChange(n.chain,n.changeHandler):e.offChangeExpressionChain(n.expression,n.changeHandler),c.delete(r)}t(r)}};t(n)}function p(n,e,t){let r=null;for(;n;){if(n.matches(e)){r=n;break}if(t&&n.matches(t))break;n=n.parentElement}return r}function y(n,{key:e,value:t}){if(!o.includes(e))if(["innerHTML","innerText"].includes(e)&&console.warn(`Model property "${e}" can be short handed, try "${e.substr(5).toLowerCase()}" instead!\n`,"target element:",n),["data-tag","data-view-model"].includes(e)&&console.warn(`Model property "${e}" can be shorthanded, try "${e.substr(5)}" instead!\n`,"target model:",n.getAttribute("data-model")),function(n){return["value","innerText","innerHTML"].includes(n)}(e=function(n){switch(n){case"model":return"data-view-model";case"tag":return"data-tag";case"text":return"innerText";case"html":return"innerHTML";default:return n}}(e))){if("INPUT"===n.tagName&&"file"===n.getAttribute("type")&&"value"===e)return;n[e]=t}else if("class"!==e)"boolean"!=typeof t?"string"!=typeof t?"object"!=typeof t||(n[e]=t):n.setAttribute(e,t):t?n.setAttribute(e,""):n.removeAttribute(e);else{if(""===t)return void(n.className="");if("string"==typeof t)return void n.classList.add(t);if("object"==typeof t){for(const[e,r]of Object.entries(t))r?n.classList.add(e):n.classList.remove(e);return}}}function h(n,e){return"input"===n.tagName.toLowerCase()&&"checkbox"===n.getAttribute("type")&&"checked"===e||"value"===e}function v(n,o,c=r,u=null){n.tagName.startsWith(a.toUpperCase())||Array.from(n.attributes).forEach((a=>{const f=a.nodeName;let d=a.nodeValue;if(f===e||f===t)return;if(!d.startsWith(c))return;if(d=d.slice(1),u&&(d=j(u,d)),n.webcModelChains||(n.webcModelChains={}),n.webcModelChains[f]=d,y(n,{key:f,value:o.getChainValue(d)}),i.includes(n.tagName.toLowerCase()))return;c===r&&h(n,f)&&k(n,o,d);const p=()=>{y(n,{key:f,value:o.getChainValue(d)})};if(o.onChange(d,p),s(n,d,p),o.hasExpression(d)){y(n,{key:f,value:o.evaluateExpression(d)}),c===r&&h(n,f)&&k(n,o,d);const e=()=>{y(n,{key:f,value:o.evaluateExpression(d)})};o.onChangeExpressionChain(d,e),l(n,d,e)}}))}function b(n){n.nodeType===Node.ELEMENT_NODE&&(n.removeAttribute("slot"),n.removeAttribute("hidden"))}function k(n,e,t){const r=n.tagName.toLowerCase();["input","textarea"].includes(r)?n.addEventListener("input",(o=>{const a=o.target;"input"!==r||"checkbox"!==n.getAttribute("type")?"input"!==r||"file"!==n.getAttribute("type")?e.setChainValue(t,a.value):e.setChainValue(t,Array.from(a.files)):e.setChainValue(t,a.checked)})):"select"===r&&n.addEventListener("change",(n=>{e.setChainValue(t,n.target.value)}))}function g(n,e,t){if(!e.getChainValue(t))return;const r="input"===n.tagName.toLowerCase()&&"checkbox"===n.getAttribute("type")?"checked":"value";k(n,e,`${t}.${r}`)}function m(n,e){return Array.from(n.attributes).some((n=>n.nodeName===e))}function $(n,e){return n.filter((n=>n.getAttribute("slot")===e))}function x(n,e){return $(n,e).map((n=>n.outerHTML)).join("")}function A(n,e){for(d(n,e);n.children.length>0;)n.children[0].remove()}function T(n,e){for(d(n,e);n.childNodes.length>0;)n.childNodes[0].remove()}function j(...n){return n.filter((n=>null!=n)).filter(String).join(".")}function M(n){let e;if("function"==typeof n.detail?e=n.detail:n.detail&&"function"==typeof n.detail.callback&&(e=n.detail.callback),e)return e;console.warn("Invalid callback for event",n)}function w(e,t){e.addEventListener(n,(n=>{n.stopImmediatePropagation();const r=M(n);if(!r)return;const o=Array.from(n.composedPath()),a=Array.from(e.children).findIndex((n=>-1!==o.indexOf(n)));r(void 0,j(t,a))}))}export{k as a,v as b,g as c,$ as d,x as e,A as f,p as g,T as h,m as i,j,u as k,s as l,f as m,l as n,d as o,M as p,w as q,b as r,y as s}