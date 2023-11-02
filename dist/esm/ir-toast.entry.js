import { r as registerInstance, h } from './index-65c1ea7a.js';

const irToastCss = ":host{display:block}";

const IrToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  showToast() {
    //const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  }
  render() {
    return (h("div", { class: "toast-container position-fixed bottom-0 end-0 p-3" }, h("div", { id: "liveToast", class: "toast", role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, h("div", { class: "toast-header" }, h("strong", { class: "me-auto" }, "Bootstrap"), h("small", null, "11 mins ago"), h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })), h("div", { class: "toast-body" }, "Hello, world! This is a toast message."))));
  }
};
IrToast.style = irToastCss;

export { IrToast as ir_toast };

//# sourceMappingURL=ir-toast.entry.js.map