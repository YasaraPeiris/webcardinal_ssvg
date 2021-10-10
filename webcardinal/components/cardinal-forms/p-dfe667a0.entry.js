import{r as e,h as t,H as s,g as i}from"./p-a9ce478c.js";import{f as r}from"./p-34b2b1d5.js";import{B as l}from"./p-6f441abc.js";import{C as a,T as n}from"./p-bd7ff3ed.js";var o=function(e,t,s,i){var r,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(l<3?r(a):l>3?r(t,s,a):r(t,s))||a);return l>3&&a&&Object.defineProperty(t,s,a),a};const c=class{constructor(t){e(this,t),this.__fileChangeHandler=e=>{let t=Array.from(e.target.files);if(0===t.length)return;let s=new Event(this.eventName,{bubbles:!0,composed:!0,cancelable:!0}),i=new FileReader;i.onload=e=>{let t=e.target.result;r(t).then((e=>e.arrayBuffer())).then((e=>{s.data=e,this.element.dispatchEvent(s)})),this.src=t},i.readAsDataURL(t[0])},this.__clickHandler=e=>{this.element.querySelector("input").dispatchEvent(new MouseEvent("click")),e.stopImmediatePropagation()},this.imageSource=null,this.src=null,this.alt=null,this.placeholder="click here to select source",this.label=null,this.eventName="change"}componentWillLoad(){this.srcUpdate(this.src)}render(){return this.element.isConnected?t(s,{class:"form-group"},this.label&&t("psk-label",{label:this.label}),t("div",{class:"outer-container",onClick:this.__clickHandler.bind(this)},null!=this.imageSource?t("div",{class:"display-img-container"},t("img",{src:this.imageSource,alt:this.alt}),t("psk-icon",{icon:"pencil"})):t("psk-label",{label:this.placeholder})),t("input",{type:"file",class:"form-control-file form-control-sm",style:{display:"none"},onChange:this.__fileChangeHandler.bind(this)})):null}srcUpdate(e){this.imageSource=e}get element(){return i(this)}static get watchers(){return{src:["srcUpdate"]}}};o([a(),l()],c.prototype,"modelHandler",void 0),o([n({description:["Represent the src of the image that need to be displayed"],isMandatory:!1,propertyType:"string"})],c.prototype,"src",void 0),o([n({description:["Represent the alternative text that will be displayed if the image was not able to be loaded"],isMandatory:!1,propertyType:"string"})],c.prototype,"alt",void 0),o([n({description:["Represent the text that will be displayed as placeholder when src attribute is not set"],isMandatory:!1,propertyType:"string",defaultValue:"click here to select source"})],c.prototype,"placeholder",void 0),o([n({description:["Represent the text that will be used as label for the input"],isMandatory:!1,propertyType:"string"})],c.prototype,"label",void 0),o([n({description:["Represent the event type that will be thrown when user changes the image src"],isMandatory:!1,propertyType:"string",defaultValue:"change"})],c.prototype,"eventName",void 0);export{c as psk_img_input}