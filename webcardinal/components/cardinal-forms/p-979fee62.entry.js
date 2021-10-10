import{r as e,h as t,g as o}from"./p-a9ce478c.js";import"./p-34b2b1d5.js";import{B as i}from"./p-6f441abc.js";import{C as s,T as r}from"./p-bd7ff3ed.js";var a=function(e,t,o,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};const n=class{constructor(t){e(this,t),this.for=null}render(){return this.htmlElement.isConnected?t("label",{class:"col-form-label",htmlFor:this.for},this.label&&this.label,t("slot",null)):null}get htmlElement(){return o(this)}};a([s(),i()],n.prototype,"modelHandler",void 0),a([r({description:["Specifies the label to be displayed.","If this attribute is not provided, the component will display the content of the component as label."],isMandatory:!1,propertyType:"string"})],n.prototype,"label",void 0),a([r({description:["Specifies which form element a label is bound to.","Usually, this attribute comes in pair with another component, and is used by the browser to group the content in a specific order to be read by screen readers.","The screen readers are used by the people with disabilities in order to have the possibility to navigate a website.",'An example of this pair of components can be found in the <a href="#live-examples">Examples section</a>.'],isMandatory:!1,propertyType:"string"})],n.prototype,"for",void 0);export{n as psk_label}