import{r as e,h as t,g as r}from"./p-8419ec55.js";import"./p-51cfb66d.js";import{T as p}from"./p-7751ffba.js";var i=function(e,t,r,p){var i,s=arguments.length,n=s<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,r):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,p);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n};const s=class{constructor(t){e(this,t),this.componentRender="psk-stepper-renderer"}render(){return this.htmlElement.isConnected?t(this.componentRender,{wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange}):null}get htmlElement(){return r(this)}};i([p({description:"This property is the string that defines the psk-stepper render passed on by the psk-wizard.",isMandatory:!1,propertyType:"string",defaultValue:"psk-stepper-renderer"})],s.prototype,"componentRender",void 0),i([p({description:"This parameter holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like information for the steps.(optional).",isMandatory:!1,propertyType:"array for WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],s.prototype,"wizardSteps",void 0),i([p({description:"The WizardStep created by psk-wizard.",isMandatory:!0,propertyType:"WizardStep"})],s.prototype,"activeStep",void 0),i([p({description:"This property is a function that modifies the way the step change is interpreted in the renderer.",isMandatory:!0,propertyType:"Function"})],s.prototype,"handleStepChange",void 0);export{s as psk_stepper}