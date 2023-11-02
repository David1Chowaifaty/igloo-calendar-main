import { Host, h, } from "@stencil/core";
import { v4 } from "uuid";
import { getCurrencySymbol } from "../../../utils/utils";
export class IglBookingRoomRatePlan {
  constructor() {
    this.defaultData = undefined;
    this.ratePlanData = undefined;
    this.totalAvailableRooms = undefined;
    this.ratePricingMode = [];
    this.currency = undefined;
    this.dateDifference = undefined;
    this.bookingType = "PLUS_BOOKING";
    this.sourceOption = undefined;
    this.selectedData = undefined;
    this.plan = undefined;
  }
  componentWillLoad() {
    this.selectedData = {
      ratePlanId: this.ratePlanData.id,
      adult_child_offering: this.ratePlanData.variations[0].adult_child_offering,
      rateType: 1,
      totalRooms: 0,
      rate: this.ratePlanData.variations[0].amount,
      ratePlanName: this.ratePlanData.name,
      adultCount: this.ratePlanData.variations[0].adult_nbr,
      childrenCount: this.ratePlanData.variations[0].child_nbr,
      cancelation: this.ratePlanData.cancelation,
      guarantee: this.ratePlanData.guarantee,
      isRateModified: false,
      defaultSelectedRate: 0,
    };
    if (this.defaultData) {
      for (const [key, value] of Object.entries(this.defaultData)) {
        this.selectedData[key] = value;
      }
    }
  }
  getSelectedOffering(value) {
    return this.ratePlanData.variations.find((variation) => variation.adult_child_offering === value);
  }
  async ratePlanDataChanged() {
    this.selectedData = Object.assign(Object.assign({}, this.selectedData), { rate: this.handleRateDaysUpdate() });
    this.dataUpdateEvent.emit({
      key: "roomRatePlanUpdate",
      changedKey: "rate",
      data: this.selectedData,
    });
  }
  handleRateDaysUpdate() {
    let rate = this.selectedData.defaultSelectedRate;
    if (this.selectedData.isRateModified) {
      return this.selectedData.rateType === 1
        ? rate * this.dateDifference
        : rate;
    }
    return this.getSelectedOffering(this.selectedData.adult_child_offering)
      .amount;
  }
  handleInput(event) {
    this.selectedData.isRateModified = true;
    const inputElement = event.target;
    let inputValue = inputElement.value;
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(inputValue)) {
      inputValue = inputValue.replace(/[^0-9]/g, "");
      inputElement.value = inputValue;
    }
    if (inputValue === inputElement.value) {
      this.handleDataChange("rate", event);
    }
  }
  handleDataChange(key, evt) {
    if (key === "adult_child_offering") {
      const offering = this.getSelectedOffering(evt.target.value);
      this.selectedData = Object.assign(Object.assign({}, this.selectedData), { [key]: evt.target.value, adultCount: offering.adult_nbr, childrenCount: offering.child_nbr, rate: offering.amount });
    }
    else {
      this.selectedData = Object.assign(Object.assign({}, this.selectedData), { [key]: evt.target.value === "" ? 0 : parseInt(evt.target.value) });
    }
    if (key === "rate" && evt.target.value === "") {
      this.selectedData = Object.assign(Object.assign({}, this.selectedData), { totalRooms: 0 });
    }
    if (key === "rate") {
      this.selectedData.defaultSelectedRate =
        this.selectedData.rateType === 1
          ? parseInt(evt.target.value) / this.dateDifference
          : parseInt(evt.target.value);
    }
    this.dataUpdateEvent.emit({
      key: "roomRatePlanUpdate",
      changedKey: key,
      data: this.selectedData,
    });
  }
  bookProperty() {
    this.dataUpdateEvent.emit({ key: "clearData", data: this.selectedData });
    this.handleDataChange("totalRooms", { target: { value: "1" } });
    this.gotoSplitPageTwoEvent.emit({ key: "gotoSplitPage", data: "" });
  }
  render() {
    return (h(Host, null, h("div", { class: "row m-0 p-0" }, h("div", { class: "col-md-6 col-sm-12 p-0 align-self-center" }, h("span", null, this.ratePlanData.name), h("ir-tooltip", { message: this.ratePlanData.cancelation + this.ratePlanData.guarantee })), h("div", { class: "col-md-6 col-sm-12 row pr-0" }, h("div", { class: "col-4" }, h("fieldset", { class: "position-relative" }, h("select", { class: "form-control input-sm", id: v4(), onChange: (evt) => this.handleDataChange("adult_child_offering", evt) }, this.ratePlanData.variations.map((variation) => (h("option", { value: variation.adult_child_offering, selected: this.selectedData.adultCount ===
        variation.adult_child_offering }, variation.adult_child_offering)))))), h("div", { class: "row col-6 m-0 p-0" }, h("fieldset", { class: "position-relative has-icon-left col-6 m-0 p-0" }, h("input", { type: "text", class: "form-control input-sm", value: this.selectedData.rateType === 1
        ? this.selectedData.rate
        : this.selectedData.rate / this.dateDifference, id: v4(), placeholder: "Rate", onInput: (event) => this.handleInput(event) }), h("span", { class: "form-control-position" }, getCurrencySymbol(this.currency.code))), h("fieldset", { class: "position-relative m-0 p-0" }, h("select", { class: "form-control input-sm", id: v4(), onChange: (evt) => this.handleDataChange("rateType", evt) }, this.ratePricingMode.map((data) => (h("option", { value: data.CODE_NAME, selected: this.selectedData.rateType === +data.CODE_NAME }, data.CODE_VALUE_EN)))))), this.bookingType === "PLUS_BOOKING" ||
      this.bookingType === "ADD_ROOM" ? (h("div", { class: "col-2 m-0 p-0" }, h("fieldset", { class: "position-relative" }, h("select", { disabled: this.selectedData.rate === 0, class: "form-control input-sm", id: v4(), onChange: (evt) => this.handleDataChange("totalRooms", evt) }, Array.from({ length: this.totalAvailableRooms + 1 }, (_, i) => i).map((i) => (h("option", { value: i, selected: this.selectedData.totalRooms === i }, i))))))) : null, this.bookingType === "EDIT_BOOKING" ? (h("div", { class: "col-2 m-0 p-0 align-self-center" }, h("fieldset", { class: "position-relative" }, h("input", { type: "radio", name: "ratePlanGroup", value: "1", onChange: (evt) => this.handleDataChange("totalRooms", evt), checked: this.selectedData.totalRooms === 1 })))) : null, this.bookingType === "BAR_BOOKING" ||
      this.bookingType === "SPLIT_BOOKING" ? (h("button", { disabled: this.selectedData.rate === 0, type: "button", class: "btn mb-1 btn-primary btn-sm", onClick: () => this.bookProperty() }, "Book")) : null))));
  }
  static get is() { return "igl-booking-room-rate-plan"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["igl-booking-room-rate-plan.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["igl-booking-room-rate-plan.css"]
    };
  }
  static get properties() {
    return {
      "defaultData": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{ [key: string]: any }",
          "resolved": "{ [key: string]: any; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "ratePlanData": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "{ [key: string]: any }",
          "resolved": "{ [key: string]: any; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "totalAvailableRooms": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "total-available-rooms",
        "reflect": false
      },
      "ratePricingMode": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      },
      "currency": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "currency",
        "reflect": false
      },
      "dateDifference": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "date-difference",
        "reflect": true
      },
      "bookingType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "booking-type",
        "reflect": false,
        "defaultValue": "\"PLUS_BOOKING\""
      }
    };
  }
  static get states() {
    return {
      "sourceOption": {},
      "selectedData": {},
      "plan": {}
    };
  }
  static get events() {
    return [{
        "method": "dataUpdateEvent",
        "name": "dataUpdateEvent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ [key: string]: any }",
          "resolved": "{ [key: string]: any; }",
          "references": {}
        }
      }, {
        "method": "gotoSplitPageTwoEvent",
        "name": "gotoSplitPageTwoEvent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ [key: string]: any }",
          "resolved": "{ [key: string]: any; }",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "ratePlanData",
        "methodName": "ratePlanDataChanged"
      }];
  }
}
//# sourceMappingURL=igl-booking-room-rate-plan.js.map