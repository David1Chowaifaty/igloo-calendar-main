import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irToastCss = ":host{display:block}";

const IrToast$1 = /*@__PURE__*/ proxyCustomElement(class IrToast extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  showToast() {
    //const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  }
  render() {
    return (h("div", { class: "toast-container position-fixed bottom-0 end-0 p-3" }, h("div", { id: "liveToast", class: "toast", role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, h("div", { class: "toast-header" }, h("strong", { class: "me-auto" }, "Bootstrap"), h("small", null, "11 mins ago"), h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })), h("div", { class: "toast-body" }, "Hello, world! This is a toast message."))));
  }
  static get style() { return irToastCss; }
}, [1, "ir-toast", undefined, [[0, "showToast", "showToast"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-toast"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-toast":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrToast$1);
      }
      break;
  } });
}

const IrToast = IrToast$1;
const defineCustomElement = defineCustomElement$1;

export { IrToast, defineCustomElement };

//# sourceMappingURL=ir-toast.js.map