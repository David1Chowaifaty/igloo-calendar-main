import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { _ as _formatDate, b as _formatAmount } from './functions.js';
import { B as BookingService } from './booking.service2.js';
import { h as hooks } from './moment.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-icon2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

class PaymentService {
  async AddPayment(payment, book_nbr) {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token !== null) {
        const { data } = await axios.post(`/Do_Payment?Ticket=${token}`, { payment: Object.assign(Object.assign({}, payment), { book_nbr }) });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
      }
    }
    catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async CancelPayment(id) {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token !== null) {
        const { data } = await axios.post(`/Cancel_Payment?Ticket=${token}`, { id });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
      }
    }
    catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

const IrPaymentDetails = /*@__PURE__*/ proxyCustomElement(class IrPaymentDetails extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.handlePaymentItemChange = createEvent(this, "handlePaymentItemChange", 7);
    this.creditCardPressHandler = createEvent(this, "creditCardPressHandler", 7);
    this.paymentService = new PaymentService();
    this.item = undefined;
    this.bookingDetails = undefined;
    this.defaultTexts = undefined;
    this.newTableRow = false;
    this.collapsedPayment = false;
    this.collapsedGuarantee = false;
    this.flag = false;
    this.confirmModal = false;
    this.toBeDeletedItem = undefined;
    this.paymentDetailsUrl = '';
    this.paymentExceptionMessage = '';
  }
  async componentWillLoad() {
    try {
      if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr) {
        this.paymentDetailsUrl = await new BookingService().getPCICardInfoURL(this.bookingDetails.booking_nbr);
      }
      this.initializeItemToBeAdded();
    }
    catch (error) {
      if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr) {
        this.paymentExceptionMessage = error;
      }
    }
  }
  initializeItemToBeAdded() {
    this.itemToBeAdded = {
      id: -1,
      date: hooks().format('YYYY-MM-DD'),
      amount: 0,
      currency: this.bookingDetails.currency,
      designation: '',
      reference: '',
    };
  }
  async _handleSave() {
    // emit the item to be added
    // if (this.item.My_Payment == null) {
    //   this.item.My_Payment = [];
    // }
    // this.itemToBeAdded.id = this.item.My_Payment[this.item.My_Payment.length - 1]?.PAYMENT_ID + 1 || 1;
    // this.item.My_Payment = [...this.item.My_Payment, this.itemToBeAdded];
    // console.log(this.item);
    // this.handlePaymentItemChange.emit(this.item.My_Payment);
    console.log('item to be added :', this.itemToBeAdded);
    this.initializeItemToBeAdded();
    await this.paymentService.AddPayment(this.itemToBeAdded, this.bookingDetails.booking_nbr);
  }
  handlePaymentInputChange(key, value) {
    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: value });
  }
  async handleConfirmModal(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    try {
      await this.paymentService.CancelPayment(this.toBeDeletedItem.id);
      const newPaymentArray = this.bookingDetails.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
      this.bookingDetails = Object.assign(Object.assign({}, this.bookingDetails), { financial: Object.assign(Object.assign({}, this.bookingDetails.financial), { payments: newPaymentArray }) });
      this.confirmModal = !this.confirmModal;
      //this.handlePaymentItemChange.emit(this.item.My_Payment);
      this.toBeDeletedItem = null;
    }
    catch (error) {
      console.log(error);
    }
  }
  wandler() {
    console.log('Changed');
    this.flag = !this.flag;
  }
  handleDateChange(e) {
    this.handlePaymentInputChange('date', e.detail.end.format('YYYY-MM-DD'));
  }
  _renderTableRow(item, rowMode = 'normal') {
    return (h("div", { class: "row m-0" }, h("div", { class: "col-9 p-0" }, h("div", { class: "row m-0" }, h("div", { class: "col-4  border-right-light p-0 border-bottom-light border-2" }, rowMode === 'normal' ? (h("span", { class: "sm-padding-left" }, _formatDate(item.date))) : (h("ir-date-picker", { singleDatePicker: true, autoApply: true, onDateChanged: this.handleDateChange.bind(this) }))), h("div", { class: "col-4 border-right-light d-flex p-0 justify-content-end border-bottom-light border-2 sm-padding-right" }, rowMode === 'normal' ? (h("span", { class: "sm-padding-right" }, "$", item.amount)) : (h("input", { class: "border-0 w-100", onInput: event => this.handlePaymentInputChange('amount', +event.target.value), type: "number" }))), h("div", { class: "col-4 border-right-light p-0 border-bottom-light border-2 sm-padding-left" }, rowMode === 'normal' ? (h("span", { class: "sm-padding-left" }, item.designation)) : (h("input", { class: "border-0 w-100", onInput: event => this.handlePaymentInputChange('designation', event.target.value), type: "text" }))), h("div", { class: "col-12 border-right-light p-0 border-bottom-light border-2 sm-padding-left" }, rowMode === 'normal' ? (h("span", { class: "sm-padding-left" }, item.reference)) : (h("input", { class: "border-0 w-100", onKeyPress: event => {
        if (event.key === 'Enter') {
          this.newTableRow = false;
          this._handleSave();
        }
      }, onInput: event => this.handlePaymentInputChange('reference', event.target.value), type: "text" }))))), h("div", { class: "col-3 d-flex align-items-center justify-content-between border-right-light border-bottom-light border-2" }, h("ir-icon", { icon: "ft-save color-ir-light-blue-hover h5 pointer", onClick: rowMode === 'add'
        ? () => {
          this.newTableRow = false;
          this._handleSave();
        }
        : () => { } }), h("ir-icon", { icon: "ft-trash-2 danger h5 pointer", onClick: rowMode === 'add'
        ? () => {
          this.newTableRow = false;
          this.initializeItemToBeAdded();
        }
        : () => {
          this.toBeDeletedItem = item;
          const modal = document.querySelector('.delete-record-modal');
          modal.openModal();
        } }))));
  }
  bookingGuarantee() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    if (!((_b = (_a = this.bookingDetails) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.cci)) {
      return null;
    }
    return (h("div", null, h("div", { class: "d-flex align-items-center" }, h("strong", { class: "mr-1" }, this.defaultTexts.entries.Lcz_BookingGuarantee), h("ir-icon", { id: "drawer-icon", icon: `${this.collapsedGuarantee ? 'ft-credit-card' : 'ft-credit-card'} h2 color-ir-light-blue-hover`, "data-toggle": "collapse", "data-target": `.guarrantee`, "aria-expanded": "false", "aria-controls": "myCollapse", class: "sm-padding-right pointer", onClick: () => {
        if (!this.item.IS_DIRECT) {
          this.creditCardPressHandler.emit(this.item.BOOK_NBR);
        }
        this.collapsedGuarantee = !this.collapsedGuarantee;
      } })), h("div", { class: "collapse guarrantee" }, this.bookingDetails.is_direct ? ([
      h("div", null, ((_d = (_c = this.bookingDetails) === null || _c === void 0 ? void 0 : _c.guest) === null || _d === void 0 ? void 0 : _d.cci) && 'Card:', " ", h("span", null, ((_g = (_f = (_e = this.bookingDetails) === null || _e === void 0 ? void 0 : _e.guest) === null || _f === void 0 ? void 0 : _f.cci) === null || _g === void 0 ? void 0 : _g.nbr) || ''), " ", ((_k = (_j = (_h = this.bookingDetails) === null || _h === void 0 ? void 0 : _h.guest) === null || _j === void 0 ? void 0 : _j.cci) === null || _k === void 0 ? void 0 : _k.expiry_month) && 'Expiry: ', h("span", null, ' ', ((_o = (_m = (_l = this.bookingDetails) === null || _l === void 0 ? void 0 : _l.guest) === null || _m === void 0 ? void 0 : _m.cci) === null || _o === void 0 ? void 0 : _o.expiry_month) || '', " ", ((_r = (_q = (_p = this.bookingDetails) === null || _p === void 0 ? void 0 : _p.guest) === null || _q === void 0 ? void 0 : _q.cci) === null || _r === void 0 ? void 0 : _r.expiry_year) && '/' + ((_u = (_t = (_s = this.bookingDetails) === null || _s === void 0 ? void 0 : _s.guest) === null || _t === void 0 ? void 0 : _t.cci) === null || _u === void 0 ? void 0 : _u.expiry_year))),
      h("div", null, ((_w = (_v = this.bookingDetails) === null || _v === void 0 ? void 0 : _v.guest) === null || _w === void 0 ? void 0 : _w.cci.holder_name) && 'Name:', " ", h("span", null, ((_z = (_y = (_x = this.bookingDetails) === null || _x === void 0 ? void 0 : _x.guest) === null || _y === void 0 ? void 0 : _y.cci) === null || _z === void 0 ? void 0 : _z.holder_name) || ''), ' ', ((_2 = (_1 = (_0 = this.bookingDetails) === null || _0 === void 0 ? void 0 : _0.guest) === null || _1 === void 0 ? void 0 : _1.cci) === null || _2 === void 0 ? void 0 : _2.cvc) && '- CVC:', " ", h("span", null, " ", ((_5 = (_4 = (_3 = this.bookingDetails) === null || _3 === void 0 ? void 0 : _3.guest) === null || _4 === void 0 ? void 0 : _4.cci) === null || _5 === void 0 ? void 0 : _5.cvc) || '')),
    ]) : this.paymentDetailsUrl ? (h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" })) : (h("div", { class: "text-center" }, this.paymentExceptionMessage)))));
  }
  _renderDueDate(item) {
    return (
    // <div class="fluid-container">
    //   <div class="row mb-1">
    //     <div class="col-xl-3 col-lg-4 col-md-2 col-sm-3 col-4 pr-0">{_formatDate(item.date)}</div>
    //     <div class="col-1 d-flex px-0 justify-content-end">{_formatAmount(item.amount, this.bookingDetails.currency.code)}</div>
    //     <div class="col-xl-3 col-lg-4 col-md-3 col-sm-3 col-4">{item.description}</div>
    //     <span class="ml-1 col-12 font-size-small collapse roomName">{item.room}</span>
    //   </div>
    // </div>
    h("tr", null, h("td", { class: 'pr-1' }, _formatDate(item.date)), h("td", { class: 'pr-1' }, _formatAmount(item.amount, this.bookingDetails.currency.code)), h("td", { class: 'pr-1' }, item.description), h("td", { class: "collapse font-size-small roomName" }, item.room)));
  }
  render() {
    var _a, _b;
    if (!this.bookingDetails.financial) {
      return null;
    }
    return [
      h("div", { class: "card" }, h("div", { class: "p-1" }, h("div", { class: "mb-2 h4" }, this.defaultTexts.entries.Lcz_DueBalance, ":", ' ', h("span", { class: "danger font-weight-bold" }, _formatAmount(this.bookingDetails.financial.due_amount, this.bookingDetails.currency.code))), this.bookingGuarantee(), h("div", { class: "mt-2" }, h("div", null, h("div", { class: "d-flex align-items-center" }, h("strong", { class: "mr-1" }, this.defaultTexts.entries.Lcz_PaymentDueDates), h("ir-icon", { id: "drawer-icon", icon: `${this.collapsedPayment ? 'ft-eye-off' : 'ft-eye'} h2 color-ir-light-blue-hover`, "data-toggle": "collapse", "data-target": `.roomName`, "aria-expanded": "false", "aria-controls": "myCollapse", class: "sm-padding-right pointer", onClick: () => {
          this.collapsedPayment = !this.collapsedPayment;
        } })), h("table", null, (_a = this.bookingDetails.financial.due_dates) === null || _a === void 0 ? void 0 : _a.map(item => this._renderDueDate(item))))), h("div", { class: "mt-2" }, h("strong", null, this.defaultTexts.entries.Lcz_Payments), h("div", { class: "fluid-container border-top-light border-2 border-left-light font-size-small" }, h("div", { class: "row m-0" }, h("div", { class: "col-3 font-weight-bold border-right-light border-bottom-light border-2 p-0" }, h("span", { class: "sm-padding-left" }, this.defaultTexts.entries.Lcz_Dates)), h("div", { class: "col-3 font-weight-bold border-right-light border-bottom-light border-2 p-0" }, h("span", { class: "sm-padding-left" }, this.defaultTexts.entries.Lcz_Amount)), h("div", { class: "col-3 font-weight-bold border-right-light border-bottom-light border-2 p-0 sm-padding-left" }, h("span", { class: "sm-padding-left" }, this.defaultTexts.entries.Lcz_Designation)), h("div", { class: "col-3 text-center border-right-light p-0 border-bottom-light border-2" }, h("ir-icon", { id: "add-payment", icon: "ft-plus font-weight-bold color-ir-light-blue-hover pointer p-0", onClick: () => {
          this.newTableRow = true;
        } }))), (_b = this.bookingDetails.financial.payments) === null || _b === void 0 ? void 0 :
        _b.map((item) => this._renderTableRow(item)), this.newTableRow ? this._renderTableRow(null, 'add') : null)))),
      h("ir-modal", { item: this.toBeDeletedItem, class: 'delete-record-modal', modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: "If deleted it will be permnantly lost!", iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.defaultTexts.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", onConfirmModal: this.handleConfirmModal.bind(this) }),
    ];
  }
  static get watchers() { return {
    "paymentDetailsUrl": ["wandler"]
  }; }
}, [0, "ir-payment-details", {
    "item": [1544],
    "bookingDetails": [1040],
    "defaultTexts": [16],
    "paymentExceptionMessage": [1, "payment-exception-message"],
    "newTableRow": [32],
    "collapsedPayment": [32],
    "collapsedGuarantee": [32],
    "flag": [32],
    "confirmModal": [32],
    "toBeDeletedItem": [32],
    "paymentDetailsUrl": [32]
  }, undefined, {
    "paymentDetailsUrl": ["wandler"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-payment-details", "ir-button", "ir-date-picker", "ir-icon", "ir-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-payment-details":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrPaymentDetails);
      }
      break;
    case "ir-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ir-date-picker":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ir-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ir-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IrPaymentDetails as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-details2.js.map