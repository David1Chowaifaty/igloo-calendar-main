import { h } from "@stencil/core";
export class IrToast {
  showToast() {
    //const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  }
  render() {
    return (h("div", { class: "toast-container position-fixed bottom-0 end-0 p-3" }, h("div", { id: "liveToast", class: "toast", role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, h("div", { class: "toast-header" }, h("strong", { class: "me-auto" }, "Bootstrap"), h("small", null, "11 mins ago"), h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })), h("div", { class: "toast-body" }, "Hello, world! This is a toast message."))));
  }
  static get is() { return "ir-toast"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["ir-toast.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ir-toast.css"]
    };
  }
  static get listeners() {
    return [{
        "name": "showToast",
        "method": "showToast",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=ir-toast.js.map
