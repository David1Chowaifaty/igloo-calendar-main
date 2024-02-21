import{r as t,c as i,h as s,H as e}from"./p-a2a97187.js";import{T as n}from"./p-e897b32f.js";import{b as o,l as a}from"./p-6cbdded4.js";import{v as h}from"./p-1a0d8ecf.js";import"./p-a1c174d3.js";import"./p-b1914e38.js";const l=".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{padding:5px !important;padding-right:0px !important}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{width:100px}.btn-secondary.sc-igl-tba-booking-view{margin-right:8px !important}";const d=class{constructor(s){t(this,s);this.highlightToBeAssignedBookingEvent=i(this,"highlightToBeAssignedBookingEvent",7);this.addToBeAssignedEvent=i(this,"addToBeAssignedEvent",7);this.scrollPageToRoom=i(this,"scrollPageToRoom",7);this.assignRoomEvent=i(this,"assignRoomEvent",7);this.highlightSection=false;this.allRoomsList=[];this.toBeAssignedService=new n;this.calendarData=undefined;this.selectedDate=undefined;this.eventData={};this.categoriesData={};this.categoryId=undefined;this.categoryIndex=undefined;this.eventIndex=undefined;this.renderAgain=false;this.selectedRoom=-1}onSelectRoom(t){if(t.stopImmediatePropagation){t.stopImmediatePropagation();t.stopPropagation()}this.selectedRoom=parseInt(t.target.value)}componentShouldUpdate(t,i,s){if(s==="selectedDate"&&t!==i){this.highlightSection=false;this.selectedRoom=-1;return true}else if(s==="eventData"&&t!==i){this.selectedRoom=-1;return true}return true}componentWillLoad(){this.toBeAssignedService.setToken(o.token);if(this.categoryIndex===0&&this.eventIndex===0){setTimeout((()=>{this.handleHighlightAvailability()}),100)}}async handleAssignUnit(t){try{t.stopImmediatePropagation();t.stopPropagation();if(this.selectedRoom){await this.toBeAssignedService.assignUnit(this.eventData.BOOKING_NUMBER,this.eventData.ID,this.selectedRoom);let t=Object.assign(Object.assign({},this.eventData),{PR_ID:this.selectedRoom});this.addToBeAssignedEvent.emit({key:"tobeAssignedEvents",data:[t]});this.assignRoomEvent.emit({key:"assignRoom",data:t})}}catch(t){}}handleHighlightAvailability(){this.highlightToBeAssignedBookingEvent.emit({key:"highlightBookingId",data:{bookingId:this.eventData.ID}});if(!this.selectedDate){return}let t=[];let i=[];t=this.eventData.availableRooms.map((t=>{i.push({calendar_cell:null,id:t.PR_ID,name:t.roomName});return Object.assign(Object.assign({},t),{defaultDateRange:this.eventData.defaultDateRange,identifier:this.eventData.identifier})}));this.allRoomsList=i;this.addToBeAssignedEvent.emit({key:"tobeAssignedEvents",data:t});this.scrollPageToRoom.emit({key:"scrollPageToRoom",id:this.categoryId,refClass:"category_"+this.categoryId});this.renderView()}handleCloseAssignment(t){t.stopImmediatePropagation();t.stopPropagation();this.highlightSection=false;this.highlightToBeAssignedBookingEvent.emit({key:"highlightBookingId",data:{bookingId:"----"}});this.onSelectRoom({target:{value:""}});this.addToBeAssignedEvent.emit({key:"tobeAssignedEvents",data:[]});this.renderView()}highlightBookingEvent(t){let i=t.detail.data;if(i.bookingId!=this.eventData.ID){this.highlightSection=false;this.selectedRoom=-1;this.renderView()}else{this.highlightSection=true;this.renderView()}}renderView(){this.renderAgain=!this.renderAgain}render(){return s(e,null,s("div",{class:"bookingContainer",onClick:()=>this.handleHighlightAvailability()},s("div",{class:`guestTitle ${this.highlightSection?"selectedOrder":""} pointer font-small-3`,"data-toggle":"tooltip","data-placement":"top","data-original-title":"Click to assign unit"},`Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`),s("div",{class:"row m-0 p-0 actionsContainer"},s("div",{class:"d-inline-block p-0 selectContainer"},s("select",{class:"form-control input-sm",id:h(),onChange:t=>this.onSelectRoom(t)},s("option",{value:"",selected:this.selectedRoom==-1},a.entries.Lcz_AssignUnit),this.allRoomsList.map((t=>s("option",{value:t.id,selected:this.selectedRoom==t.id},t.name))))),this.highlightSection?s("div",{class:"d-inline-block text-right buttonsContainer"},s("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t=>this.handleCloseAssignment(t)},"X"),s("button",{type:"button",class:"btn btn-primary btn-sm",onClick:t=>this.handleAssignUnit(t),disabled:this.selectedRoom===-1},a.entries.Lcz_Assign)):null),s("hr",null)))}};d.style=l;const r=".sc-igl-tba-category-view-h{display:block}";const g=class{constructor(s){t(this,s);this.assignUnitEvent=i(this,"assignUnitEvent",7);this.calendarData=undefined;this.selectedDate=undefined;this.categoriesData={};this.categoryId=undefined;this.eventDatas=undefined;this.categoryIndex=undefined;this.renderAgain=false}componentWillLoad(){}handleAssignRoomEvent(t){t.stopImmediatePropagation();t.stopPropagation();const i=t.detail;this.eventDatas=this.eventDatas.filter((t=>t.ID!=i.data.ID));this.calendarData.bookingEvents.push(i.data);this.assignUnitEvent.emit({key:"assignUnit",data:{RT_ID:this.categoryId,selectedDate:this.selectedDate,assignEvent:i.data,calendarData:this.calendarData}});this.renderView()}getEventView(t,i){return i.map(((i,e)=>s("igl-tba-booking-view",{calendarData:this.calendarData,selectedDate:this.selectedDate,eventData:i,categoriesData:this.categoriesData,categoryId:t,categoryIndex:this.categoryIndex,eventIndex:e,onAssignRoomEvent:t=>this.handleAssignRoomEvent(t)})))}renderView(){this.renderAgain=!this.renderAgain}render(){return s(e,null,s("div",{class:"sectionContainer"},s("div",{class:"font-weight-bold mt-1 font-small-3"},this.categoriesData[this.categoryId].name),this.getEventView(this.categoryId,this.eventDatas)))}};g.style=r;export{d as igl_tba_booking_view,g as igl_tba_category_view};
//# sourceMappingURL=p-623385c3.entry.js.map