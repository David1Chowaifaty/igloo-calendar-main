import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as channels_data, t as testConnection, s as selectChannel, u as updateChannelSettings } from './channel.store.js';
import { d as defineCustomElement$1 } from './ir-combobox2.js';

const irChannelGeneralCss = ".sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:100px;text-align:end;padding-right:10px !important}.connection-testing-container.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:10px !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-left:18% !important}";

const IrChannelGeneral = /*@__PURE__*/ proxyCustomElement(class IrChannelGeneral extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.channel_status = null;
    this.buttonClicked = false;
    this.connection_status_message = '';
  }
  componentWillLoad() {
    if (this.channel_status !== 'create') {
      return;
    }
    this.connection_status_message = channels_data.isConnectedToChannel ? 'Connected Channel' : '';
  }
  handleTestConnectionClicked(e) {
    var _a;
    e.preventDefault();
    this.buttonClicked = true;
    if (this.channel_status !== 'create' || !((_a = channels_data.channel_settings) === null || _a === void 0 ? void 0 : _a.hotel_id) || channels_data.isConnectedToChannel) {
      return;
    }
    const status = testConnection();
    this.connection_status_message = status ? 'Connected Channel' : 'Incorrect Connection';
    this.buttonClicked = false;
  }
  render() {
    var _a, _b, _c, _d;
    return (h(Host, null, h("section", { class: "ml-18" }, h("fieldset", { class: "d-flex align-items-center" }, h("label", { htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, "Channel:"), h("ir-combobox", { input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: (_a = channels_data.selectedChannel) === null || _a === void 0 ? void 0 : _a.name, onComboboxValueChange: (e) => {
        selectChannel(e.detail.data.toString());
      }, placeholder: "Choose channel from list", data: channels_data.channels.map(channel => ({
        id: channel.id,
        name: channel.name,
      })) })), h("fieldset", { class: "d-flex align-items-center mt-1" }, h("label", { htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, "Title:"), h("div", { class: "flex-fill" }, h("input", { id: "hotel_title", value: (_b = channels_data.channel_settings) === null || _b === void 0 ? void 0 : _b.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, "Connection Settings"), h("div", { class: "ml-18" }, h("fieldset", { class: "d-flex align-items-center my-1" }, h("label", { htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, "Hotel ID:"), h("div", { class: "flex-fill" }, h("input", { id: "hotel_id", disabled: channels_data.isConnectedToChannel, class: `form-control  flex-fill bg-white ${this.buttonClicked && !((_c = channels_data.channel_settings) === null || _c === void 0 ? void 0 : _c.hotel_id) && 'border-danger'}`, value: (_d = channels_data.channel_settings) === null || _d === void 0 ? void 0 : _d.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { class: 'connection-testing-container' }, h("span", null, this.connection_status_message), h("button", { class: "btn btn-outline-secondary btn-sm", type: "submit" }, "Test Connection")))))));
  }
  static get style() { return irChannelGeneralCss; }
}, [2, "ir-channel-general", {
    "channel_status": [1],
    "buttonClicked": [32],
    "connection_status_message": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-channel-general", "ir-combobox"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-channel-general":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrChannelGeneral);
      }
      break;
    case "ir-combobox":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IrChannelGeneral as I, defineCustomElement as d };

//# sourceMappingURL=ir-channel-general2.js.map