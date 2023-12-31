import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import { getCurrencySymbol } from "../../../utils/utils";
export class IglApplicationInfo {
  constructor() {
    this.guestInfo = undefined;
    this.currency = undefined;
    this.defaultTexts = undefined;
    this.roomsList = [];
    this.guestRefKey = undefined;
    this.bedPreferenceType = [];
    this.selectedUnits = [];
    this.bookingType = 'PLUS_BOOKING';
    this.index = undefined;
    this.filterdRoomList = [];
  }
  componentWillLoad() {
    this.guestData = this.guestInfo ? Object.assign({}, this.guestInfo) : {};
    this.updateRoomList();
  }
  async handleSelctedUnits() {
    this.updateRoomList();
  }
  updateRoomList() {
    const units = [...this.selectedUnits];
    units[this.index] = -1;
    this.filterdRoomList = this.roomsList.filter(e => !units.includes(e.id));
  }
  updateData() {
    this.dataUpdateEvent.emit({
      key: 'roomRatePlanUpdate',
      guestRefKey: this.guestRefKey,
      data: Object.assign({}, this.guestData),
    });
  }
  handleDataChange(key, value) {
    this.guestData[key] = +value;
    if (value === '') {
      this.guestData['roomName'] = value;
    }
    if (key === 'roomId' && value !== '') {
      this.guestData['roomName'] = this.filterdRoomList.find(room => room.id === +value).name || '';
    }
    this.updateData();
  }
  handleGuestNameChange(event) {
    // console.log("On Guest name Change::", event.target.value);
    this.guestData.guestName = event.target.value;
    this.updateData();
  }
  render() {
    //console.log(this.guestInfo, this.roomsList);
    return (h(Host, null, h("div", { class: "text-left mt-1 " }, h("div", { class: " mb-1 " }, this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING' ? (h("span", { class: "h5 mr-1" }, this.guestInfo.roomCategoryName)) : null, h("span", { class: " font-weight-bold" }, this.guestInfo.ratePlanName.replace(this.guestInfo.roomCategoryName + '/', ''), h("ir-tooltip", { class: " mr-1", message: this.guestInfo.cancelation + this.guestInfo.guarantee })), h("span", null, this.guestInfo.adult_child_offering)), h("div", { class: "d-flex m-0 p-0 align-items-center aplicationInfoContainer " }, h("div", { class: "mr-1 flex-fill" }, h("input", { id: v4(), type: "email", class: "form-control", placeholder: this.defaultTexts.entries.Lcz_GuestFirstnameAndLastname, name: "guestName", onInput: event => this.handleGuestNameChange(event), required: true, value: this.guestData.guestName })), this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING' ? (h("div", { class: "mr-1 p-0 flex-fill" }, h("select", { class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('roomId', event.target.value) }, h("option", { value: "", selected: this.guestData.roomId === '' }, this.defaultTexts.entries.Lcz_Assignunits), this.filterdRoomList.map(room => (h("option", { value: room.id, selected: +this.guestData.roomId === room.id }, room.name)))))) : null, h("div", { class: "mr-1 flex-fill" }, h("select", { class: "form-control input-sm", id: v4(), onChange: event => this.handleDataChange('preference', event.target.value) }, h("option", { value: "", selected: this.guestData.preference === '' }, this.defaultTexts.entries.Lcz_NoPreference), this.bedPreferenceType.map(data => (h("option", { value: data.CODE_NAME, selected: this.guestData.preference === data.CODE_NAME }, data.CODE_VALUE_EN))))), h("div", { class: "" }, getCurrencySymbol(this.currency.code) + this.guestInfo.rate)))));
  }
  static get is() { return "igl-application-info"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["igl-application-info.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["igl-application-info.css"]
    };
  }
  static get properties() {
    return {
      "guestInfo": {
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
      "defaultTexts": {
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
        "attribute": "default-texts",
        "reflect": false
      },
      "roomsList": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "{ [key: string]: any }[]",
          "resolved": "{ [key: string]: any; }[]",
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
      "guestRefKey": {
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
        "attribute": "guest-ref-key",
        "reflect": false
      },
      "bedPreferenceType": {
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
      "selectedUnits": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "number[]",
          "resolved": "number[]",
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
        "defaultValue": "'PLUS_BOOKING'"
      },
      "index": {
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
        "attribute": "index",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "filterdRoomList": {}
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
      }];
  }
  static get watchers() {
    return [{
        "propName": "selectedUnits",
        "methodName": "handleSelctedUnits"
      }];
  }
}
//# sourceMappingURL=igl-application-info.js.map
