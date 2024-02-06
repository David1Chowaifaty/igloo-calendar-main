'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c71cfdf.js');

const irPickupCss = ".sc-ir-pickup-h{display:block}";

const IrPickup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'card mt-1 p-1' }, index.h("section", { class: 'd-flex align-items-center' }, index.h("h4", { class: 'm-0 p-0' }, "Pickup"), index.h("ir-select", { class: 'm-0', LabelAvailable: false, data: [
        {
          text: 'helo',
          value: 'helklo',
        },
      ] }), index.h("ir-select", { class: 'm-0', label: "Arrival date", data: [
        {
          text: 'helo',
          value: 'helklo',
        },
      ] }), index.h("ir-input-text", { label: "Time" }))));
  }
};
IrPickup.style = irPickupCss;

exports.ir_pickup = IrPickup;

//# sourceMappingURL=ir-pickup.cjs.entry.js.map