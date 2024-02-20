import{r as t,c as i,h as e,F as s,H as o,g as n}from"./p-a2a97187.js";import{B as h}from"./p-13a8bd69.js";import{h as r}from"./p-b1914e38.js";import{a as l,l as a}from"./p-da635c92.js";import{B as c}from"./p-13a8bd692.js";import{k as d,p as u,o as p,m as g}from"./p-a1c174d3.js";import{E as f}from"./p-e8751f4a.js";import"./p-85c8e35f.js";const b={"000":"IN-HOUSE","001":"PENDING-CONFIRMATION","002":"CONFIRMED","003":"CHECKED-OUT"};function v(t,i){if(t===null&&i===null)return"";if(i!==null){return`${t!==null&&t!==void 0?t:""} , ${i!==null&&i!==void 0?i:""}`}return t}function m(t){let i=[];const e=i=>{const e=r();const s=r(i.to_date,"YYYY-MM-DD");const o=r(i.from_date,"YYYY-MM-DD");if(o.isSame(e,"day")&&e.hour()>=12){return b["000"]}else if(e.isAfter(o,"day")&&e.isBefore(s,"day")){return b["000"]}else if(s.isSame(e,"day")&&e.hour()<12){return b["000"]}else if(s.isSame(e,"day")&&e.hour()>=12||s.isBefore(e,"day")){return b["003"]}else{return b[(t===null||t===void 0?void 0:t.status.code)||"001"]}};const s=t.rooms.filter((t=>!!t["assigned_units_pool"]));s.forEach((s=>{var o,n;i.push({ID:s["assigned_units_pool"],TO_DATE:s.to_date,FROM_DATE:s.from_date,NO_OF_DAYS:s.days.length,ARRIVAL:t.arrival,IS_EDITABLE:true,BALANCE:(o=t.financial)===null||o===void 0?void 0:o.due_amount,STATUS:e(s),NAME:v(s.guest.first_name,s.guest.last_name),PHONE:(n=t.guest.mobile)!==null&&n!==void 0?n:"",ENTRY_DATE:"12-12-2023",RATE:s.total,RATE_PLAN:s.rateplan.name,SPLIT_BOOKING:false,RATE_PLAN_ID:s.rateplan.id,IDENTIFIER:s.identifier,RATE_TYPE:s.roomtype.id,ADULTS_COUNT:s.occupancy.adult_nbr,CHILDREN_COUNT:s.occupancy.children_nbr,PR_ID:+s.unit.id,POOL:s["assigned_units_pool"],GUEST:t.guest,ROOMS:t.rooms,BOOKING_NUMBER:t.booking_nbr,cancelation:s.rateplan.cancelation,guarantee:s.rateplan.guarantee,TOTAL_PRICE:s.total,COUNTRY:t.guest.country_id,FROM_DATE_STR:t.format.from_date,TO_DATE_STR:t.format.to_date,adult_child_offering:s.rateplan.selected_variation.adult_child_offering,ARRIVAL_TIME:t.arrival.description,origin:t.origin,channel_booking_nbr:t.channel_booking_nbr,is_direct:t.is_direct,NOTES:t.remark,SOURCE:{code:t.source.code,description:t.source.description,tag:t.source.tag}})}));return i}function E(t){return["003","002","004"].includes(t)}class w{constructor(){this.bookingService=new c}async reallocateEvent(t,i,e,s){try{const o=JSON.parse(sessionStorage.getItem("token"));if(o){console.log(t,i,e,s);const{data:n}=await l.post(`/ReAllocate_Exposed_Room?Ticket=${o}`,{pool:t,destination_pr_id:i,from_date:e,to_date:s});if(n.ExceptionMsg!==""){throw new Error(n.ExceptionMsg)}console.log(n);return n}else{throw new Error("Invalid Token")}}catch(t){console.error(t);throw new Error(t)}}async deleteEvent(t){try{const i=JSON.parse(sessionStorage.getItem("token"));if(i){const{data:e}=await l.post(`/UnBlock_Exposed_Unit?Ticket=${i}`,{POOL:t});if(e.ExceptionMsg!==""){throw new Error(e.ExceptionMsg)}return e.My_Result}else{throw new Error("Invalid Token")}}catch(t){console.log(t);throw new Error(t)}}async updateBlockedEvent(t){try{const i=JSON.parse(sessionStorage.getItem("token"));if(i){const i=d(+t.RELEASE_AFTER_HOURS);await this.deleteEvent(t.POOL);const e=await this.bookingService.blockUnit(Object.assign({from_date:this.formatDate(t.FROM_DATE),to_date:this.formatDate(t.TO_DATE),pr_id:t.PR_ID,STAY_STATUS_CODE:t.OUT_OF_SERVICE?"004":t.RELEASE_AFTER_HOURS===0?"002":"003",DESCRIPTION:t.RELEASE_AFTER_HOURS||"",NOTES:t.OPTIONAL_REASON||""},i));return e}else{throw new Error("Invalid Token")}}catch(t){console.error(t);throw new Error(t)}}formatDate(t){return t.split("/").join("-")}}const k=".sc-igl-booking-event-h{display:block;position:absolute}.bookingEventBase.sc-igl-booking-event{position:absolute;background-color:rgb(49, 190, 241);width:100%;height:100%;transform:skewX(-22deg)}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8)}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);cursor:pointer}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.rightSide.sc-igl-booking-event{right:0}.bookingEventTitle.sc-igl-booking-event{color:#fff;font-size:0.8em;position:relative;max-width:calc(100% - 10px);overflow:hidden;text-overflow:ellipsis;top:2px;left:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_circle.sc-igl-booking-event{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}";var D=undefined&&undefined.__rest||function(t,i){var e={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0)e[s]=t[s];if(t!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,s=Object.getOwnPropertySymbols(t);o<s.length;o++){if(i.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o]))e[s[o]]=t[s[o]]}return e};const O=class{constructor(e){t(this,e);this.hideBubbleInfo=i(this,"hideBubbleInfo",7);this.updateEventData=i(this,"updateEventData",7);this.dragOverEventData=i(this,"dragOverEventData",7);this.showRoomNightsDialog=i(this,"showRoomNightsDialog",7);this.showDialog=i(this,"showDialog",7);this.resetStreachedBooking=i(this,"resetStreachedBooking",7);this.toast=i(this,"toast",7);this.dayWidth=0;this.eventSpace=8;this.vertSpace=10;this.showInfoPopup=false;this.bubbleInfoTopSide=false;this.isStreatch=false;this.eventsService=new w;this.bookingService=new h;this.resizeSide="";this.isDragging=false;this.animationFrameId=null;this.handleMouseMoveBind=this.handleMouseMove.bind(this);this.handleMouseUpBind=this.handleMouseUp.bind(this);this.handleClickOutsideBind=this.handleClickOutside.bind(this);this.currency=undefined;this.is_vacation_rental=false;this.language=undefined;this.bookingEvent=undefined;this.allBookingEvents=[];this.countryNodeList=undefined;this.renderElement=false;this.position=undefined;this.isShrinking=null}componentWillLoad(){window.addEventListener("click",this.handleClickOutsideBind)}async fetchAndAssignBookingData(){try{console.log("clicked on book#",this.bookingEvent.BOOKING_NUMBER);if(["IN-HOUSE","CONFIRMED","PENDING-CONFIRMATION","CHECKED-OUT"].includes(this.bookingEvent.STATUS)){const t=await this.bookingService.getExposedBooking(this.bookingEvent.BOOKING_NUMBER,"en");let i=t.rooms.filter((t=>t["assigned_units_pool"]===this.bookingEvent.ID));t.rooms=i;if(t.rooms.length===0){throw new Error(`"booking#${this.bookingEvent.BOOKING_NUMBER} have empty array"`)}else{if(t.rooms.some((t=>t["assigned_units_pool"]===null))){throw new Error(`"booking#${this.bookingEvent.BOOKING_NUMBER} have empty pool"`)}}const e=m(t)[0],s=D(e,["ID","TO_DATE","FROM_DATE","NO_OF_DAYS","STATUS","NAME","IDENTIFIER","PR_ID","POOL","BOOKING_NUMBER","NOTES","is_direct","BALANCE"]);this.bookingEvent=Object.assign(Object.assign({},this.bookingEvent),s);this.showEventInfo(true)}}catch(t){console.error(t)}}componentDidLoad(){if(this.isNewEvent()){if(!this.bookingEvent.hideBubble){setTimeout((async()=>{if(["003","002","004"].includes(this.bookingEvent.STATUS_CODE)){this.showEventInfo(true)}else if(["IN-HOUSE","CONFIRMED","PENDING-CONFIRMATION","CHECKED-OUT"].includes(this.bookingEvent.STATUS)){await this.fetchAndAssignBookingData()}else{this.showEventInfo(true)}this.renderAgain()}),1)}}}disconnectedCallback(){window.removeEventListener("click",this.handleClickOutsideBind);if(this.animationFrameId){cancelAnimationFrame(this.animationFrameId)}}handleClickOutside(t){const i=t.target;if(!this.element.contains(i)){this.showEventInfo(false)}}hideBubbleInfoPopup(t){if(t.detail.currentInfoBubbleId!=this.getBookingId()||t.detail.key==="hidebubble"&&t.detail.currentInfoBubbleId===this.getBookingId()){this.showInfoPopup=false;this.renderAgain()}}async moveBookingToHandler(t){try{if(t.detail.bookingId!==this.getBookingId()){this.showEventInfo(false);return}if(t.detail.moveToDay==="revert"||t.detail.toRoomId==="revert"){t.detail.moveToDay=this.bookingEvent.FROM_DATE;t.detail.toRoomId=t.detail.fromRoomId;if(this.isTouchStart&&this.moveDiffereneX<=5&&this.moveDiffereneY<=5&&!this.isStreatch){if(E(this.bookingEvent.STATUS_CODE)){this.showEventInfo(true)}else if(["IN-HOUSE","CONFIRMED","PENDING-CONFIRMATION","CHECKED-OUT"].includes(this.bookingEvent.STATUS)){await this.fetchAndAssignBookingData()}}else{this.animationFrameId=requestAnimationFrame((()=>{this.resetBookingToInitialPosition()}))}}else{if(this.isTouchStart&&this.moveDiffereneX<=5&&this.moveDiffereneY<=5&&!this.isStreatch){if(E(this.bookingEvent.STATUS_CODE)){this.showEventInfo(true)}else if(["IN-HOUSE","CONFIRMED","PENDING-CONFIRMATION","CHECKED-OUT"].includes(this.bookingEvent.STATUS)){await this.fetchAndAssignBookingData()}}else{const{pool:i,to_date:e,from_date:s,toRoomId:o}=t.detail;if(i){if(E(this.bookingEvent.STATUS_CODE)){await this.eventsService.reallocateEvent(i,o,s,e).catch((()=>{this.resetBookingToInitialPosition()}))}else{if(this.isShrinking||!this.isStreatch){const{description:i,status:n}=this.setModalDescription(o,s,e);let h=false;if(n==="400"){h=true}this.showDialog.emit(Object.assign(Object.assign({},t.detail),{description:i,title:"",hideConfirmButton:h}))}else{if(this.checkIfSlotOccupied(o,s,e)){this.animationFrameId=requestAnimationFrame((()=>{this.resetBookingToInitialPosition()}));throw new Error("Overlapping Dates")}else{this.showRoomNightsDialog.emit({bookingNumber:this.bookingEvent.BOOKING_NUMBER,identifier:this.bookingEvent.IDENTIFIER,to_date:e,pool:i,from_date:s})}}}this.isShrinking=null}}}}catch(t){this.toast.emit({position:"top-right",title:t.message,description:"",type:"error"});console.log("something went wrong")}}setModalDescription(t,i,e){const s=t=>{let i=this.bookingEvent.roomsInfo.filter((i=>i.physicalrooms.some((i=>i.id===+t))));if(i.length){return i[0].id}return null};if(!this.bookingEvent.is_direct){if(this.isShrinking){return{description:`${a.entries.Lcz_YouWillLoseFutureUpdates}.`,status:"200"}}else{if(r(i,"YYYY-MM-DD").isSame(r(this.bookingEvent.FROM_DATE,"YYYY-MM-DD"))&&r(e,"YYYY-MM-DD").isSame(r(this.bookingEvent.TO_DATE,"YYYY-MM-DD"))){const i=s(this.bookingEvent.PR_ID);const e=s(t);if(i===e){return{description:`${a.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`,status:"200"}}else{return{description:`${a.entries.Lcz_YouWillLoseFutureUpdates} ${this.bookingEvent.origin?this.bookingEvent.origin.Label:""}. ${a.entries.Lcz_SameRatesWillBeKept}`,status:"200"}}}return{description:a.entries.Lcz_CannotChangeCHBookings,status:"400"}}}else{if(!this.isShrinking){const i=s(this.bookingEvent.PR_ID);const e=s(t);if(i===e){console.log("same rt");return{description:`${a.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`,status:"200"}}else{return{description:a.entries.Lcz_SameRatesWillBeKept,status:"200"}}}return{description:a.entries.Lcz_BalanceWillBeCalculated,status:"200"}}}resetBookingToInitialPosition(){if(this.isStreatch){this.element.style.left=`${this.initialLeft}px`;this.element.style.width=`${this.initialWidth}px`;this.isStreatch=false;this.finalWidth=this.initialWidth;this.isShrinking=null}else{this.element.style.top=`${this.dragInitPos.top}px`;this.element.style.left=`${this.dragInitPos.left}px`}}handleRevertBooking(t){if(this.bookingEvent.POOL===t.detail){this.resetBookingToInitialPosition()}}checkIfSlotOccupied(t,i,e){const s=r(i,"YYYY-MM-DD");const o=r(e,"YYYY-MM-DD");const n=this.allBookingEvents.some((i=>{if(i.POOL===this.bookingEvent.POOL){return false}const e=r(i.FROM_DATE,"YYYY-MM-DD").add(1,"days");const n=r(i.TO_DATE,"YYYY-MM-DD");return i.PR_ID===+t&&o.isSameOrAfter(e)&&s.isBefore(n)}));return n}renderAgain(){this.renderElement=!this.renderElement}getUniqueId(){return(new Date).getTime()}isSplitBooking(){return!!this.bookingEvent.SPLIT_BOOKING}isNewEvent(){return this.getBookingId()==="NEW_TEMP_EVENT"}isHighlightEventType(){return this.getEventType()==="HIGH_LIGHT"}getBookingId(){return this.bookingEvent.ID}getBookingStatus(){return this.bookingEvent.STATUS}getBookedBy(){return this.bookingEvent.NAME}getBookedRoomId(){return this.bookingEvent.PR_ID}getEventStartingDate(){return new Date(this.bookingEvent.FROM_DATE)}getEventEndingDate(){return new Date(this.bookingEvent.TO_DATE)}getEventType(){return this.bookingEvent.event_type}getEventLegend(){var t,i;let e=(t=this.bookingEvent)===null||t===void 0?void 0:t.legendData.statusId[this.getBookingStatus()];let s=this.isNewEvent()?{color:"#f9f9c9"}:{};return Object.assign(Object.assign(Object.assign({},(i=this.bookingEvent)===null||i===void 0?void 0:i.legendData[e.id]),e),s)}getLegendOfStatus(t){var i;let e=(i=this.bookingEvent)===null||i===void 0?void 0:i.legendData.statusId[t];return Object.assign(Object.assign({},this.bookingEvent.legendData[e.id]),e)}getNoteNode(){if(this.bookingEvent.NOTES||this.bookingEvent.INTERNAL_NOTE){return this.getLegendOfStatus("NOTES")}return null}getBalanceNode(){if(this.bookingEvent.BALANCE!==null&&this.bookingEvent.BALANCE>0){return this.getLegendOfStatus("OUTSTANDING-BALANCE")}return null}setStayDays(t){this.bookingEvent.NO_OF_DAYS=t;this.renderAgain()}getStayDays(){return this.bookingEvent.NO_OF_DAYS}getPosition(){let t=this.getEventStartingDate();let i=".room_"+this.getBookedRoomId()+"_"+t.getDate()+"_"+(t.getMonth()+1)+"_"+t.getFullYear();let e=document.querySelector(".bodyContainer");let s=document.querySelector(i);let o={top:"0",left:"0",width:"0",height:"20px"};if(s&&e&&s.getBoundingClientRect()&&e.getBoundingClientRect()){let t=e.getBoundingClientRect();let i=s.getBoundingClientRect();this.dayWidth=this.dayWidth||i.width;o.top=i.top+i.height/2-this.vertSpace-t.top+"px";o.left=i.left+this.dayWidth/2+this.eventSpace/2-t.left+"px";o.width=this.getStayDays()*this.dayWidth-this.eventSpace+"px"}else{console.log("Locating event cell failed ",i)}return o}getNumber(t){return t?parseFloat(t):0}startDragging(t,i){t.preventDefault();t.stopPropagation();t.stopImmediatePropagation();if(this.isNewEvent()||this.isHighlightEventType()){return null}this.resizeSide=i;this.isDragging=true;this.showEventInfo(false);this.isStreatch=i!=="move";if(i==="move"){this.initialX=t.clientX||t.touches[0].clientX;this.initialY=t.clientY||t.touches[0].clientY;this.elementRect=this.element.getBoundingClientRect();const i=0;const e=0;this.dragInitPos={id:this.getBookingId(),fromRoomId:this.getBookedRoomId(),top:this.getNumber(this.element.style.top)+e,left:this.getNumber(this.element.style.left)+i};this.dragInitPos.x=this.dragInitPos.left;this.dragInitPos.y=this.dragInitPos.top;this.dragEndPos=Object.assign({},this.dragInitPos);this.element.style.top=`${this.dragInitPos.top}px`;this.element.style.left=`${this.dragInitPos.left}px`;this.isTouchStart=true;this.dragOverEventData.emit({id:"CALCULATE_DRAG_OVER_BOUNDS",data:this.dragInitPos})}else{this.initialWidth=this.element.offsetWidth;this.initialLeft=this.element.offsetLeft;this.initialX=t.clientX||t.touches[0].clientX;this.dragOverEventData.emit({id:"CALCULATE_DRAG_OVER_BOUNDS",data:{id:this.getBookingId(),fromRoomId:this.getBookedRoomId(),top:this.getNumber(this.element.style.top),left:this.initialLeft,x:this.initialX,y:t.clientY||t.touches[0].clientY}})}document.addEventListener("mousemove",this.handleMouseMoveBind);document.addEventListener("touchmove",this.handleMouseMoveBind);document.addEventListener("pointermove",this.handleMouseMoveBind);document.addEventListener("mouseup",this.handleMouseUpBind);document.addEventListener("touchup",this.handleMouseUpBind);document.addEventListener("pointerup",this.handleMouseUpBind)}handleMouseMove(t){if(this.isDragging){this.currentX=t.clientX||t.touches[0].clientX;let i=this.currentX-this.initialX;if(this.resizeSide==="move"){this.currentY=t.clientY||t.touches[0].clientY;let e=this.currentY-this.initialY;this.element.style.top=`${this.dragInitPos.top+e}px`;this.element.style.left=`${this.dragInitPos.left+i}px`;this.dragEndPos={id:this.getBookingId(),fromRoomId:this.getBookedRoomId(),top:this.dragInitPos.top+e,left:this.dragInitPos.left+i};this.dragEndPos.x=this.dragEndPos.left;this.dragEndPos.y=this.dragEndPos.top;this.dragOverEventData.emit({id:"DRAG_OVER",data:this.dragEndPos})}else{if(!this.bookingEvent.is_direct&&!E(this.bookingEvent.STATUS_CODE)){return}let t=this.initialWidth;if(this.resizeSide=="rightSide"){t=this.initialWidth+i;t=Math.min(t,this.initialX+this.element.offsetWidth);t=Math.max(this.dayWidth-this.eventSpace,t);this.element.style.width=`${t}px`;this.isShrinking=i<0}else if(this.resizeSide=="leftSide"){this.isShrinking=i>0;t=Math.max(this.dayWidth-this.eventSpace,this.initialWidth-i);let e=this.initialLeft+(this.initialWidth-t);this.element.style.left=`${e}px`;this.element.style.width=`${t}px`}this.finalWidth=t}}else{console.log("still mouse move listening...")}}handleMouseUp(){if(this.isDragging){if(this.resizeSide==="move"){if(this.isTouchStart){this.moveDiffereneX=Math.abs(this.dragEndPos.x-this.dragInitPos.x);this.moveDiffereneY=Math.abs(this.dragEndPos.y-this.dragInitPos.y)}this.dragOverEventData.emit({id:"DRAG_OVER_END",data:Object.assign(Object.assign({},this.dragEndPos),{pool:this.bookingEvent.POOL,nbOfDays:this.bookingEvent.NO_OF_DAYS})})}else{let t=Math.round(this.finalWidth/this.dayWidth);let i=this.getStayDays();if(i!=t&&!isNaN(t)){if(this.resizeSide=="leftSide"){this.element.style.left=`${this.initialLeft+(i-t)*this.dayWidth}px`}else{if(t<i){this.isShrinking=true}}this.dragOverEventData.emit({id:"STRETCH_OVER_END",data:{id:this.getBookingId(),fromRoomId:+this.getBookedRoomId(),x:+this.element.style.left.replace("px",""),y:+this.element.style.top.replace("px",""),pool:this.bookingEvent.POOL,nbOfDays:t}});this.element.style.width=`${t*this.dayWidth-this.eventSpace}px`}else{this.element.style.left=`${this.initialLeft}px`;this.element.style.width=`${t*this.dayWidth-this.eventSpace}px`}}}else{console.log("still mouse up listening...")}this.isDragging=false;document.removeEventListener("mousemove",this.handleMouseMoveBind);document.removeEventListener("touchmove",this.handleMouseMoveBind);document.removeEventListener("pointermove",this.handleMouseMoveBind);document.removeEventListener("mouseup",this.handleMouseUpBind);document.removeEventListener("touchup",this.handleMouseUpBind);document.removeEventListener("pointerup",this.handleMouseUpBind)}updateData(t){this.updateEventData.emit(t)}renderEventBookingNumber(){if(this.bookingEvent.STATUS==="TEMP-EVENT"||this.bookingEvent.ID==="NEW_TEMP_EVENT"){return""}if(E(this.bookingEvent.STATUS_CODE)){return""}if(!this.bookingEvent.is_direct){return` - ${this.bookingEvent.channel_booking_nbr}`}return` - ${this.bookingEvent.BOOKING_NUMBER}`}showEventInfo(t){if(this.isHighlightEventType()||this.bookingEvent.hideBubble){return null}if(t){let t=document.querySelector(".calendarScrollContainer");let i=t.getBoundingClientRect();let e=this.element.getBoundingClientRect();let s=i.height/2+i.top+50;if(e.top<s){this.bubbleInfoTopSide=false}else{this.bubbleInfoTopSide=true}}if(t){this.hideBubbleInfo.emit({key:"hidePopup",currentInfoBubbleId:this.getBookingId()})}this.showInfoPopup=t;this.renderAgain()}render(){let t=this.getEventLegend();let i=this.getNoteNode();let n=this.getBalanceNode();return e(o,{class:`bookingEvent ${this.isNewEvent()||this.isHighlightEventType()?"newEvent":""} ${t.clsName} `,style:this.getPosition(),id:"event_"+this.getBookingId()},e("div",{class:`bookingEventBase ${!this.bookingEvent.is_direct&&!E(this.bookingEvent.STATUS_CODE)&&this.bookingEvent.STATUS!=="TEMP-EVENT"&&this.bookingEvent.ID!=="NEW_TEMP_EVENT"&&"border border-dark"}  ${this.isSplitBooking()?"splitBooking":""}`,style:{backgroundColor:t.color},onTouchStart:t=>this.startDragging(t,"move"),onMouseDown:t=>this.startDragging(t,"move")}),i?e("div",{class:"legend_circle noteIcon",style:{backgroundColor:i.color}}):null,n?e("div",{class:"legend_circle balanceIcon",style:{backgroundColor:n.color}}):null,e("div",{class:"bookingEventTitle",onTouchStart:t=>this.startDragging(t,"move"),onMouseDown:t=>this.startDragging(t,"move")},this.getBookedBy(),this.renderEventBookingNumber()),e(s,null,e("div",{class:"bookingEventDragHandle leftSide",onTouchStart:t=>this.startDragging(t,"leftSide"),onMouseDown:t=>this.startDragging(t,"leftSide")}),e("div",{class:"bookingEventDragHandle rightSide",onTouchStart:t=>this.startDragging(t,"rightSide"),onMouseDown:t=>this.startDragging(t,"rightSide")})),this.showInfoPopup?e("igl-booking-event-hover",{is_vacation_rental:this.is_vacation_rental,countryNodeList:this.countryNodeList,currency:this.currency,class:"top",bookingEvent:this.bookingEvent,bubbleInfoTop:this.bubbleInfoTopSide}):null)}get element(){return n(this)}};O.style=k;const I=".sc-igl-booking-event-hover-h{display:block;position:relative;z-index:100}.btn.sc-igl-booking-event-hover{padding-left:4px !important;padding-right:4px !important}.user-notes.sc-igl-booking-event-hover{margin-left:4px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden;max-width:100%;height:auto}.pointerContainer.sc-igl-booking-event-hover{position:absolute;left:50%;height:10px;width:350px;transform:translate(-50%, 0)}.pointerContainerTop.sc-igl-booking-event-hover{top:-26px}.iglPopOver.sc-igl-booking-event-hover{background-color:#fff;padding:10px;border:1px solid #656ee7;border-radius:6px;position:absolute;transform:translate(-50%, 10px);left:50%;box-shadow:1px 0px 20px rgba(0, 0, 0, 0.2)}.iglPopOver.infoBubble.sc-igl-booking-event-hover{width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{max-width:400px;width:400px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{overflow-wrap:break-word !important;min-width:230px;width:fit-content}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:0;height:0;left:50%;border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-50%, 0px)}.bubblePointTop.sc-igl-booking-event-hover{border-top:10px solid #656ee7}.bubblePointBottom.sc-igl-booking-event-hover{border-bottom:10px solid #656ee7}.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px}.updateBtnIcon.sc-igl-booking-event-hover{margin-right:4px}.icon-image.sc-igl-booking-event-hover{margin-right:5px}";const T=class{constructor(e){t(this,e);this.showBookingPopup=i(this,"showBookingPopup",7);this.hideBubbleInfo=i(this,"hideBubbleInfo",7);this.deleteButton=i(this,"deleteButton",7);this.bookingCreated=i(this,"bookingCreated",7);this.todayTimeStamp=(new Date).setHours(0,0,0,0);this.eventService=new f;this.hideButtons=false;this.bookingEvent=undefined;this.bubbleInfoTop=false;this.currency=undefined;this.countryNodeList=undefined;this.is_vacation_rental=false;this.isLoading=undefined;this.shouldHideUnassignUnit=false}componentWillLoad(){console.log("this.bookingEvent",this.bookingEvent);let t=this.bookingEvent.roomsInfo.find((t=>t.id===this.bookingEvent.RATE_TYPE));if(t){console.log(t.physicalrooms.length===1);this.shouldHideUnassignUnit=t.physicalrooms.length===1}if(r(this.bookingEvent.TO_DATE,"YYYY-MM-DD").isBefore(r())){this.hideButtons=true}this.handleKeyDown=this.handleKeyDown.bind(this)}handleKeyDown(t){if(t.key==="Escape"){this.hideBubble()}else return}hideBubble(){this.hideBubbleInfo.emit({key:"hidebubble",currentInfoBubbleId:this.getBookingId()});document.removeEventListener("keydown",this.handleKeyDown)}componentDidLoad(){document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown)}getBookingId(){return this.bookingEvent.ID}getTotalOccupants(){return this.bookingEvent.ADULTS_COUNT}getPhoneNumber(){return this.bookingEvent.PHONE}getCountry(){return u(this.bookingEvent.COUNTRY,this.countryNodeList).name}getPhoneCode(){return u(this.bookingEvent.COUNTRY,this.countryNodeList).phone_prefix}renderPhone(){return this.bookingEvent.COUNTRY?`${this.bookingEvent.is_direct?this.getPhoneCode()+"-":""}${this.getPhoneNumber()} - ${this.getCountry()}`:this.getPhoneNumber()}getGuestNote(){return this.bookingEvent.NOTES&&e("p",{class:"user-notes p-0 my-0"},this.bookingEvent.NOTES)}getInternalNote(){return this.bookingEvent.INTERNAL_NOTE}getTotalPrice(){return this.bookingEvent.TOTAL_PRICE}getCheckInDate(){return this.bookingEvent.FROM_DATE_STR}getCheckOutDate(){return this.bookingEvent.TO_DATE_STR}getArrivalTime(){return this.bookingEvent.ARRIVAL_TIME}getRatePlan(){return this.bookingEvent.RATE_PLAN}getEntryDate(){return this.bookingEvent.ENTRY_DATE}getReleaseAfterHours(){return this.bookingEvent.RELEASE_AFTER_HOURS}isNewBooking(){return this.getBookingId()==="NEW_TEMP_EVENT"}isCheckedIn(){return this.bookingEvent.STATUS==="CHECKED-IN"}isCheckedOut(){return this.bookingEvent.STATUS==="CHECKED-OUT"}isBlockedDateEvent(){return this.bookingEvent.STATUS==="BLOCKED"||this.bookingEvent.STATUS==="BLOCKED-WITH-DATES"}getRoomId(){return this.bookingEvent.PR_ID}getCategoryByRoomId(t){return this.bookingEvent.roomsInfo.find((i=>i.physicalrooms.find((i=>i.id===t))))}hasSplitBooking(){return this.bookingEvent.hasOwnProperty("splitBookingEvents")&&this.bookingEvent.splitBookingEvents}canCheckIn(){if(!this.fromTimeStamp){let t=new Date(this.getCheckInDate());t.setHours(0,0,0,0);this.fromTimeStamp=t.getTime()}if(!this.toTimeStamp){let t=new Date(this.getCheckOutDate());t.setHours(0,0,0,0);this.toTimeStamp=t.getTime()}if(this.isCheckedIn()||this.isCheckedOut()){return false}if(this.fromTimeStamp<=this.todayTimeStamp&&this.todayTimeStamp<=this.toTimeStamp){return true}else{return false}}canCheckOut(){if(this.isCheckedIn()&&this.todayTimeStamp<=this.toTimeStamp){return true}else{return false}}handleBlockDateUpdate(t){t.stopImmediatePropagation();t.stopPropagation();const i=t.detail;this.bookingEvent=Object.assign(Object.assign({},this.bookingEvent),i.data)}handleEditBooking(){this.bookingEvent.TITLE=a.entries.Lcz_EditBookingFor;this.handleBookingOption("EDIT_BOOKING")}getStringDateFormat(t){return t.getFullYear()+"-"+(t.getMonth()<9?"0":"")+(t.getMonth()+1)+"-"+(t.getDate()<=9?"0":"")+t.getDate()}handleAddRoom(){let t=new Date(this.bookingEvent.FROM_DATE);t.setHours(0,0,0,0);let i=this.getStringDateFormat(t);let e=new Date(this.bookingEvent.TO_DATE);e.setHours(0,0,0,0);let s=this.getStringDateFormat(e);let o={ID:"",NAME:"",BOOKING_NUMBER:this.bookingEvent.BOOKING_NUMBER,FROM_DATE:i,TO_DATE:s,roomsInfo:this.bookingEvent.roomsInfo,ARRIVAL:this.bookingEvent.ARRIVAL,ADD_ROOM_TO_BOOKING:this.bookingEvent.ID,TITLE:"Add Room to #"+this.bookingEvent.BOOKING_NUMBER,event_type:"ADD_ROOM",ROOMS:this.bookingEvent.ROOMS,GUEST:this.bookingEvent.GUEST,message:this.bookingEvent.NOTES,SOURCE:this.bookingEvent.SOURCE,defaultDateRange:{fromDate:t,fromDateStr:"",toDate:e,toDateStr:"",dateDifference:0,editabled:true,message:"Including 5.00% City Tax - Excluding 11.00% VAT"}};this.handleBookingOption("ADD_ROOM",o)}handleCustomerCheckIn(){console.log("Handle Customer Check In")}handleCustomerCheckOut(){console.log("Handle Customer Check Out")}handleDeleteEvent(){this.hideBubble();this.deleteButton.emit(this.bookingEvent.POOL);console.log("Delete Event")}async handleUpdateBlockedDates(){try{this.isLoading="update";setTimeout((()=>{this.hideBubble()}),50);await this.eventService.updateBlockedEvent(this.bookingEvent);this.isLoading=""}catch(t){}}handleConvertBlockedDateToBooking(){this.handleBookingOption("BAR_BOOKING")}getRoomInfo(){const t=+this.bookingEvent.PR_ID;let i={};for(const e of this.bookingEvent.roomsInfo){for(const s of e.physicalrooms){if(t===s.id){i.CATEGORY=e.name;i.ROOM_NAME=s.name;i.ROOMS_INFO=e;return i}}}return i}renderTitle(t,i){switch(t){case"EDIT_BOOKING":return`${a.entries.Lcz_EditBookingFor} ${i.CATEGORY} ${i.ROOM_NAME}`;case"ADD_ROOM":return`${a.entries.Lcz_AddingUnitToBooking}# ${this.bookingEvent.BOOKING_NUMBER}`;case"SPLIT_BOOKING":return a.entries.Lcz_Adding+` ${i.CATEGORY} ${i.ROOM_NAME}`;default:return`${a.entries.Lcz_NewBookingFor} ${i.CATEGORY} ${i.ROOM_NAME}`}}handleBookingOption(t,i=null){const e=this.getRoomInfo();let s=i?i:this.bookingEvent;s.event_type=t;s.TITLE=this.renderTitle(t,e);if(["003","002","004"].includes(this.bookingEvent.STATUS_CODE)){s.roomsInfo=[e.ROOMS_INFO]}this.showBookingPopup.emit({key:"add",data:Object.assign({},s)});this.hideBubbleInfo.emit({key:"hidebubble",currentInfoBubbleId:this.getBookingId()})}getInfoElement(){var t,i;return e("div",{class:`iglPopOver infoBubble ${this.bubbleInfoTop?"bubbleInfoAbove":""} text-left`},e("div",{class:"row p-0 m-0 pb-1"},e("div",{class:"pl-0 col-8 font-weight-bold font-medium-1 d-flex align-items-center"},e("img",{src:(i=(t=this.bookingEvent)===null||t===void 0?void 0:t.origin)===null||i===void 0?void 0:i.Icon,alt:"icon",class:"icon-image"}),e("p",{class:"p-0 m-0"},!this.bookingEvent.is_direct?this.bookingEvent.channel_booking_nbr:this.bookingEvent.BOOKING_NUMBER)),e("div",{class:"pr-0 col-4 text-right"},g(this.currency.code),this.getTotalPrice())),e("div",{class:"row p-0 m-0"},e("div",{class:"pl-0 pr-0 col-12"},e("span",{class:"font-weight-bold"},a.entries.Lcz_In,": "),p(this.bookingEvent.FROM_DATE,"YYYY-MM-DD")," - ",e("span",{class:"font-weight-bold"},a.entries.Lcz_Out,": "),p(this.bookingEvent.TO_DATE,"YYYY-MM-DD"))),this.getArrivalTime()&&e("div",{class:"row p-0 m-0"},e("div",{class:"pl-0 pr-0 col-12"},e("span",{class:"font-weight-bold"},a.entries.Lcz_ArrivalTime,": "),this.getArrivalTime())),this.getTotalOccupants()&&e("div",{class:"row p-0 m-0"},e("div",{class:"pl-0 pr-0 col-12"},e("span",{class:"font-weight-bold"},a.entries.Lcz_Occupancy,": "),this.getTotalOccupants())),this.getPhoneNumber()&&e("div",{class:"row p-0 m-0"},e("div",{class:"pl-0 pr-0 col-12 text-wrap"},e("span",{class:"font-weight-bold"},a.entries.Lcz_Phone,": "),this.renderPhone())),this.getRatePlan()&&e("div",{class:"row p-0 m-0"},e("div",{class:"pl-0 pr-0 col-12"},e("span",{class:"font-weight-bold"},a.entries.Lcz_RatePlan,": "),this.getRatePlan())),this.getGuestNote()?e("div",{class:"row p-0 m-0"},e("div",{class:"col-12 pl-0 pr-0 text-wrap d-flex"},e("sapn",{class:"font-weight-bold"},a.entries.Lcz_Note,": "),this.getGuestNote())):null,this.getInternalNote()?e("div",{class:"row p-0 m-0"},e("div",{class:"col-12 pl-0 pr-0 text-wrap"},e("span",{class:"font-weight-bold"},a.entries.Lcz_InternalRemark,": "),this.getInternalNote())):null,e("div",{class:"row p-0 m-0 mt-2"},e("div",{class:"full-width btn-group  btn-group-sm font-small-3",role:"group"},e("button",{type:"button",class:`btn btn-primary d-flex align-items-center justify-content-center ${this.hideButtons?"mr-0":"mr-1"} ${this.shouldHideUnassignUnit?"w-50":""}`,onClick:t=>{this.handleEditBooking()},disabled:!this.bookingEvent.IS_EDITABLE},e("svg",{class:"p-0 m-0",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",height:"12",width:"12",viewBox:"0 0 512 512"},e("path",{fill:"currentColor",d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"})),e("span",null," ",a.entries.Lcz_Edit)),this.bookingEvent.IS_EDITABLE&&!this.hideButtons&&e("button",{type:"button",class:`btn btn-primary d-flex align-items-center justify-content-center ${!this.shouldHideUnassignUnit?"mr-1":"w-50"}`,onClick:t=>{this.handleAddRoom()}},e("svg",{class:"p-0 m-0",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",height:12,width:12},e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})),e("span",null," ",a.entries.Lcz_AddRoom)),this.hideButtons?null:!this.shouldHideUnassignUnit&&e("button",{type:"button",class:"btn btn-primary p-0 d-flex align-items-center justify-content-center",onClick:t=>{this.handleDeleteEvent()},disabled:!this.bookingEvent.IS_EDITABLE||this.is_vacation_rental},e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"12",width:"8.75",class:"p-0 m-0",viewBox:"0 0 384 512"},e("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})),e("span",{class:"m-0 p-0"}," ",a.entries.Lcz_Unassign)))))}getNewBookingOptions(){const t=this.bookingEvent.roomsInfo[0].rateplans.some((t=>t.is_active));return e("div",{class:`iglPopOver newBookingOptions ${this.bubbleInfoTop?"bubbleInfoAbove":""} text-left`},t?e(s,null,e("button",{type:"button",class:"d-block full-width btn btn-sm btn-primary mb-1 font-small-3 square",onClick:t=>{this.handleBookingOption("BAR_BOOKING")}},a.entries.Lcz_CreateNewBooking),this.hasSplitBooking()?e("button",{type:"button",class:"d-block full-width btn btn-sm btn-primary mb-1 font-small-3 square",onClick:t=>{this.handleBookingOption("SPLIT_BOOKING")}},a.entries.Lcz_AssignUnitToExistingBooking):null):e("p",{class:"text-danger"},a.entries.Lcz_NoRatePlanDefined),e("button",{type:"button",class:"d-block full-width btn btn-sm btn-primary font-small-3 square",onClick:t=>{this.handleBookingOption("BLOCK_DATES")}},a.entries.Lcz_Blockdates))}getBlockedView(){return e("div",{class:`iglPopOver blockedView ${this.bubbleInfoTop?"bubbleInfoAbove":""} text-left`},e("igl-block-dates-view",{isEventHover:true,entryHour:this.bookingEvent.ENTRY_HOUR,entryMinute:this.bookingEvent.ENTRY_MINUTE,defaultData:this.bookingEvent,fromDate:r(this.bookingEvent.FROM_DATE,"YYYY-MM-DD").format("DD MM YYYY"),toDate:r(this.bookingEvent.TO_DATE,"YYYY-MM-DD").format("DD MM YYYY"),entryDate:this.getEntryDate(),onDataUpdateEvent:t=>this.handleBlockDateUpdate(t)}),e("div",{class:"row p-0 m-0 mt-2"},e("div",{class:"full-width btn-group btn-group-sm font-small-3",role:"group"},e("button",{disabled:this.isLoading==="update",type:"button",class:"btn btn-primary mr-1 d-flex align-items-center justify-content-center",onClick:t=>{this.handleUpdateBlockedDates()}},this.isLoading==="update"?e("i",{class:"la la-circle-o-notch spinner mx-1"}):e("svg",{class:"p-0 m-0",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",height:"12",width:"12",viewBox:"0 0 512 512"},e("path",{fill:"currentColor",d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"})),e("span",null," ",a.entries.Lcz_Update)),e("button",{type:"button",class:"btn btn-primary",onClick:t=>{this.handleConvertBlockedDateToBooking()}},a.entries.Lcz_ConvertToBooking),e("button",{type:"button",class:"btn btn-danger ml-1 d-flex align-items-center justify-content-center",onClick:t=>{this.handleDeleteEvent()}},e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"12",width:"10.5",viewBox:"0 0 448 512"},e("path",{fill:"currentColor",d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"})),e("span",null," ",a.entries.Lcz_Delete)))))}render(){return e(o,null,e("div",{class:`pointerContainer ${this.bubbleInfoTop?"pointerContainerTop":""}`},e("div",{class:`bubblePointer ${this.bubbleInfoTop?"bubblePointTop":"bubblePointBottom"}`})),this.isBlockedDateEvent()?this.getBlockedView():null,this.isNewBooking()?this.getNewBookingOptions():null,!this.isBlockedDateEvent()&&!this.isNewBooking()?this.getInfoElement():null)}get element(){return n(this)}};T.style=I;export{O as igl_booking_event,T as igl_booking_event_hover};
//# sourceMappingURL=p-7aeceb30.entry.js.map