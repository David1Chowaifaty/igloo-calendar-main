import { h, proxyCustomElement, HTMLElement, Host, Fragment } from '@stencil/core/internal/client';
import { R as RoomService } from './room.service.js';
import { u as updateChannelSettings, s as selectChannel, t as testConnection, c as channels_data, r as resetStore } from './channel.store.js';
import { l as locales } from './locales.store.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$b } from './ir-button2.js';
import { d as defineCustomElement$a } from './ir-channel-editor2.js';
import { d as defineCustomElement$9 } from './ir-channel-general2.js';
import { d as defineCustomElement$8 } from './ir-channel-header2.js';
import { d as defineCustomElement$7 } from './ir-channel-mapping2.js';
import { d as defineCustomElement$6 } from './ir-combobox2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-modal2.js';
import { d as defineCustomElement$3 } from './ir-sidebar2.js';
import { d as defineCustomElement$2 } from './ir-switch2.js';

const actions = (entries) => [
  {
    id: 'edit',
    name: 'Edit',
    icon: () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" },
      h("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))),
    action: (params) => {
      const selectedProperty = params.map.find(m => m.type === 'property');
      updateChannelSettings('hotel_id', selectedProperty.channel_id);
      updateChannelSettings('hotel_title', params.title);
      selectChannel(params.channel.id.toString());
      testConnection();
    },
  },
  {
    id: 'view_logs',
    name: 'View logs',
    icon: () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" },
      h("path", { d: "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" }))),
    action: () => { },
  },
  {
    id: 'full_sync',
    name: 'Full Sync',
    icon: () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" },
      h("path", { d: "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" }))),
    action: () => { },
  },
  { id: 'pull_future_reservation', name: 'Pull Future Reservations', icon: () => null, action: () => { } },
  {
    id: 'remove',
    name: entries.Lcz_Delete,
    icon: () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" },
      h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))),
    action: () => { },
  },
];

const irChannelCss = ".sc-ir-channel-h{display:block}.dropdown-toggle.sc-ir-channel{color:var(--blue)}.dropdown-toggle.sc-ir-channel::after{content:none;display:none}.dropdown-toggle.sc-ir-channel .caret-icon.sc-ir-channel{transition:transform 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out}.btn.sc-ir-channel:hover .caret-icon.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.show.sc-ir-channel .caret-icon.sc-ir-channel{transform:rotate(-180deg)}.dropdown-divider.sc-ir-channel{border-color:#e4e5ec}.dropdown-item.sc-ir-channel{padding:10px;display:flex;align-items:center;gap:10px;color:#6b6f82}.dropdown-item.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.danger.sc-ir-channel{color:var(--red)}.danger.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:var(--red)}.table.sc-ir-channel thead.sc-ir-channel tr.sc-ir-channel{height:50px !important}.table-container.sc-ir-channel{border-radius:30px}";

const IrChannel$1 = /*@__PURE__*/ proxyCustomElement(class IrChannel extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.roomService = new RoomService();
    this.ticket = '';
    this.propertyid = undefined;
    this.language = undefined;
    this.baseurl = undefined;
    this.channel_status = null;
  }
  componentWillLoad() {
    if (this.baseurl) {
      axios.defaults.baseURL = this.baseurl;
    }
    if (this.ticket !== '') {
      this.initializeApp();
    }
  }
  async initializeApp() {
    try {
      const [, , , languageTexts] = await Promise.all([
        this.roomService.fetchData(this.propertyid, this.language),
        this.roomService.getExposedChannels(),
        this.roomService.getExposedConnectedChannels(this.propertyid),
        this.roomService.fetchLanguage(this.language),
      ]);
      channels_data.property_id = this.propertyid;
      if (!locales.entries) {
        locales.entries = languageTexts.entries;
        locales.direction = languageTexts.direction;
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  async ticketChanged() {
    sessionStorage.setItem('token', JSON.stringify(this.ticket));
    this.initializeApp();
  }
  render() {
    var _a;
    return (h(Host, { class: "bg-white h-100" }, h("section", { class: "p-2" }, h("div", { class: "d-flex w-100 justify-content-end mb-2" }, h("ir-button", { text: 'Create', size: "sm", onClickHanlder: () => (this.channel_status = 'create') })), h("div", { class: "table-container" }, h("table", { class: "table table-hover" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, "Title"), h("th", { scope: "col" }, "Channel"), h("th", { scope: "col" }, "Status"), h("th", { scope: "col" }, "Actions"))), h("tbody", { class: "" }, (_a = channels_data.connected_channels) === null || _a === void 0 ? void 0 : _a.map(channel => (h("tr", { key: channel.channel.id }, h("th", { scope: "row", class: "text-left" }, channel.title), h("th", { scope: "row" }, channel.channel.name), h("td", null, h("ir-switch", { checked: channel.is_active })), h("th", null, h("div", { class: "btn-group" }, h("button", { type: "button", class: "btn  dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("span", { class: "mr-1" }, "Actions"), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "var(--blue)", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right" }, actions(locales.entries).map((a, index) => (h(Fragment, null, index === actions(locales.entries).length - 1 && h("div", { key: a.id + '_divider', class: "dropdown-divider my-0" }), h("button", { onClick: () => {
        console.log(a.id);
        a.action(channel);
        if (a.id === 'edit') {
          setTimeout(() => {
            this.channel_status = 'edit';
          }, 300);
        }
      }, key: a.id + '_item', class: `dropdown-item my-0 ${a.id === 'remove' ? 'danger' : ''}`, type: "button" }, a.icon(), a.name)))))))))))))), h("ir-sidebar", { sidebarStyles: {
        width: '60rem',
      }, showCloseButton: false, onIrSidebarToggle: e => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.channel_status = null;
        resetStore();
      }, open: this.channel_status !== null }, this.channel_status && (h("ir-channel-editor", { class: "p-1", channel_status: this.channel_status, onCloseSideBar: () => {
        this.channel_status = null;
        resetStore();
      } }))), h("ir-modal", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "ticket": ["ticketChanged"]
  }; }
  static get style() { return irChannelCss; }
}, [2, "ir-channel", {
    "ticket": [1],
    "propertyid": [2],
    "language": [1],
    "baseurl": [1],
    "channel_status": [32]
  }, undefined, {
    "ticket": ["ticketChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ir-channel", "ir-button", "ir-channel-editor", "ir-channel-general", "ir-channel-header", "ir-channel-mapping", "ir-combobox", "ir-icon", "ir-modal", "ir-sidebar", "ir-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "ir-channel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IrChannel$1);
      }
      break;
    case "ir-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ir-channel-editor":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ir-channel-general":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ir-channel-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ir-channel-mapping":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ir-combobox":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ir-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ir-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ir-sidebar":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ir-switch":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IrChannel = IrChannel$1;
const defineCustomElement = defineCustomElement$1;

export { IrChannel, defineCustomElement };

//# sourceMappingURL=ir-channel.js.map