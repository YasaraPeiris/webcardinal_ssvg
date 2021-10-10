import{r as e,h as t,g as i}from"./p-a9ce478c.js";import"./p-34b2b1d5.js";import{B as o}from"./p-6f441abc.js";import{C as s,T as r}from"./p-bd7ff3ed.js";var n=function(e,t,i,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const a=class{constructor(t){e(this,t),this.options=null,this.label=null,this.value=null,this.name=null,this.required=!1,this.invalid=!0}onChangeRadioHandler(e){e.preventDefault(),e.stopImmediatePropagation(),e.detail&&e.detail.value&&this._host.querySelectorAll("psk-radio").forEach((t=>{const i=t.getElementsByTagName("input")[0];i.value===e.detail.value?(this.value=e.detail.value,this.__updateModel.call(this),i.checked=!0):i.checked=!1}))}render(){return this._host.isConnected?t("div",{class:"form-group"},t("psk-label",{for:this.name,label:this.label}),t("div",{id:"psk-radio-group",class:"form-group"},this.options&&this.options.map((e=>{const i=e.name?e.name:e.label&&e.label.replace(/\s/g,"").toLowerCase();return t("psk-radio",Object.assign({},e,{name:i}))})),t("slot",null))):null}__updateModel(){this.modelHandler.updateModel("value",this.value)}get _host(){return i(this)}};n([s(),o()],a.prototype,"modelHandler",void 0),n([r({description:['By filling out this property, the component will display above the group, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"label",void 0),n([r({description:["Specifies the selected value of a psk-radio component inside the group.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"value",void 0),n([r({description:["Specifies the name of a psk-radio-group component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],a.prototype,"name",void 0),n([r({description:["Specifies that a psk-radio inside the group must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"required",void 0),n([r({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean",specialNote:"For the moment, there is no visual implelentation for this attribute, but it will be in a further iteration."})],a.prototype,"invalid",void 0);export{a as psk_radio_group}