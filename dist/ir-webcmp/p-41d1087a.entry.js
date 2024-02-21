import{r as s,c as t,h as i,H as e}from"./p-a2a97187.js";import{B as l}from"./p-81751f6a2.js";import{o as a}from"./p-a1c174d3.js";import{b as n,l as h}from"./p-6cbdded4.js";import"./p-0e97d53c.js";import"./p-b1914e38.js";const d=".sc-igl-block-dates-view-h{display:block}.sc-igl-block-dates-view-h .controlContainer.sc-igl-block-dates-view{width:24px}.sc-igl-block-dates-view-h .checkBoxContainer.sc-igl-block-dates-view input.sc-igl-block-dates-view{height:1.2rem !important;width:30px}.releaseTime.sc-igl-block-dates-view{padding-left:5px}.out-of-service-label.sc-igl-block-dates-view{margin-left:5px !important}";const o=class{constructor(i){s(this,i);this.dataUpdateEvent=t(this,"dataUpdateEvent",7);this.blockDatesData={RELEASE_AFTER_HOURS:0,OPTIONAL_REASON:"",OUT_OF_SERVICE:false};this.releaseList=[];this.bookingService=new l;this.defaultData=undefined;this.fromDate=undefined;this.toDate=undefined;this.entryDate=undefined;this.entryHour=undefined;this.isEventHover=false;this.entryMinute=undefined;this.renderAgain=false}async componentWillLoad(){try{this.bookingService.setToken(n.token);this.releaseList=await this.bookingService.getBlockedInfo();if(this.defaultData){this.blockDatesData=Object.assign({},this.defaultData)}else{this.blockDatesData.RELEASE_AFTER_HOURS=parseInt(this.releaseList[0].CODE_NAME);this.emitData()}}catch(s){}}handleOptionalReason(s){this.blockDatesData.OPTIONAL_REASON=s.target.value;this.emitData()}handleReleaseAfterChange(s){if(this.entryDate)this.entryDate=undefined;this.blockDatesData.RELEASE_AFTER_HOURS=parseInt(s.target.value);this.renderPage();this.emitData()}emitData(){this.dataUpdateEvent.emit({key:"blockDatesData",data:Object.assign({},this.blockDatesData)})}getReleaseHoursString(){let s=this.entryDate?new Date(this.entryDate):new Date;if(this.entryDate&&this.entryHour&&this.entryMinute){s.setHours(this.entryHour,this.entryMinute,0,0)}else{s.setHours(s.getHours()+this.blockDatesData.RELEASE_AFTER_HOURS,s.getMinutes(),0,0)}return s.toLocaleString("default",{month:"short"})+" "+s.getDate()+", "+this.formatNumber(s.getHours())+":"+this.formatNumber(s.getMinutes())}formatNumber(s){return s<10?`0${s}`:s}handleOutOfService(s){this.blockDatesData.OUT_OF_SERVICE=s.target.checked;if(this.blockDatesData.OUT_OF_SERVICE){this.blockDatesData.OPTIONAL_REASON="";this.blockDatesData.RELEASE_AFTER_HOURS=0}this.renderPage();this.emitData()}renderPage(){this.renderAgain=!this.renderAgain}render(){return i(e,null,i("div",{class:`m-0 p-0 mb-1`},i("div",{class:"text-left p-0"},i("span",{class:"pr-1"},i("span",{class:"text-bold-700 font-medium-1"},h.entries.Lcz_From,": "),a(this.fromDate)),i("span",{class:"text-bold-700 font-medium-1"},h.entries.Lcz_To,": "),a(this.toDate))),i("div",{class:` mb-1 text-left ${this.isEventHover&&"p-0"}`},i("div",{class:"mb-1 "},i("label",{class:"p-0 text-bold-700 font-medium-1 m-0 align-middle"},h.entries.Lcz_Reason,":"),i("div",{class:"p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle"},i("input",{class:"form-control",type:"checkbox",checked:this.blockDatesData.OUT_OF_SERVICE,id:"userinput6",onChange:s=>this.handleOutOfService(s)})),i("span",{class:"align-middle out-of-service-label"},h.entries.Lcz_OutOfservice)),!this.blockDatesData.OUT_OF_SERVICE?i("div",null,i("div",{class:"mb-1 d-flex  align-items-center"},i("span",{class:"align-middle"},h.entries.Lcz_Or," "),i("div",{class:"d-inline-flex col pr-0 align-middle"},i("input",{class:"form-control",type:"text",placeholder:h.entries.Lcz_OptionalReason,id:"optReason",value:this.blockDatesData.OPTIONAL_REASON,onInput:s=>this.handleOptionalReason(s)}))),i("div",{class:"mb-1 w-100 pr-0 "},i("span",{class:"text-bold-700 font-medium-1"},h.entries.Lcz_AutomaticReleaseIn,": "),i("div",{class:"d-inline-block"},i("select",{class:"form-control input-sm",id:"zSmallSelect",onChange:s=>this.handleReleaseAfterChange(s)},this.releaseList.map((s=>i("option",{value:+s.CODE_NAME,selected:this.blockDatesData.RELEASE_AFTER_HOURS==+s.CODE_NAME},s.CODE_VALUE_EN))))),this.blockDatesData.RELEASE_AFTER_HOURS?i("div",{class:"d-inline-block releaseTime"},i("em",null,h.entries.Lcz_On," ",this.getReleaseHoursString())):null)):null))}};o.style=d;export{o as igl_block_dates_view};
//# sourceMappingURL=p-41d1087a.entry.js.map