'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3515154a.js');

const irToastCss = ":host{display:block}";

const IrToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  showToast() {
    //const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  }
  render() {
    return (index.h("div", { class: "toast-container position-fixed bottom-0 end-0 p-3" }, index.h("div", { id: "liveToast", class: "toast", role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, index.h("div", { class: "toast-header" }, index.h("strong", { class: "me-auto" }, "Bootstrap"), index.h("small", null, "11 mins ago"), index.h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })), index.h("div", { class: "toast-body" }, "Hello, world! This is a toast message."))));
  }
};
IrToast.style = irToastCss;

exports.ir_toast = IrToast;

//# sourceMappingURL=ir-toast.cjs.entry.js.map