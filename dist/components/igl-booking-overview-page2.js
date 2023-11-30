import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './igl-book-property-footer2.js';
import { d as defineCustomElement$3 } from './igl-booking-room-rate-plan2.js';
import { d as defineCustomElement$2 } from './igl-booking-rooms2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const iglBookingOverviewPageCss = ".sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}";

const IglBookingOverviewPage = /*@__PURE__*/ proxyCustomElement(class IglBookingOverviewPage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.dateRangeSelect = createEvent(this, "dateRangeSelect", 7);
    this.roomsDataUpdate = createEvent(this, "roomsDataUpdate", 7);
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
    this.bookingData = undefined;
    this.message = undefined;
    this.showSplitBookingOption = undefined;
    this.eventType = undefined;
    this.currency = undefined;
    this.ratePricingMode = undefined;
    this.dateRangeData = undefined;
    this.selectedRooms = {};
  }
  getSplitBookings() {
    return (this.bookingData.hasOwnProperty('splitBookingEvents') && this.bookingData.splitBookingEvents) || [];
  }
  isEventType(event) {
    return event === this.eventType;
  }
  render() {
    var _a;
    return (h(Host, null, h("div", { class: "col text-left" }, (_a = this.bookingData.roomsInfo) === null || _a === void 0 ? void 0 : _a.map(roomInfo => (h("igl-booking-rooms", { currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomTypeData: roomInfo, class: "mt-2 mb-1", defaultData: this.selectedRooms['c_' + roomInfo.id], onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) })))), h("igl-book-property-footer", { class: 'p-0 mb-1 mt-2', onButtonClicked: evt => this.buttonClicked.emit(evt.detail), eventType: this.bookingData.event_type, disabled: Object.keys(this.selectedRooms).length === 0 })));
  }
  static get style() { return iglBookingOverviewPageCss; }
}, [2, "igl-booking-overview-page", {
    "bookingData": [8, "booking-data"],
    "message": [1],
    "showSplitBookingOption": [4, "show-split-booking-option"],
    "eventType": [1, "event-type"],
    "currency": [8],
    "ratePricingMode": [8, "rate-pricing-mode"],
    "dateRangeData": [8, "date-range-data"],
    "selectedRooms": [8, "selected-rooms"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["igl-booking-overview-page", "igl-book-property-footer", "igl-booking-room-rate-plan", "igl-booking-rooms", "ir-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "igl-booking-overview-page":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IglBookingOverviewPage);
      }
      break;
    case "igl-book-property-footer":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "igl-booking-room-rate-plan":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "igl-booking-rooms":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ir-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IglBookingOverviewPage as I, defineCustomElement as d };

//# sourceMappingURL=igl-booking-overview-page2.js.map