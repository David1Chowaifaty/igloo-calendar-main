import { r as registerInstance, c as createEvent, h } from './index-b828b70a.js';

const irCheckboxCss = ".check-container{display:block;position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container input{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container .checkmark{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container input:checked~.checkmark{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark:after{content:'';position:absolute;display:none}.check-container input:checked~.checkmark:after{display:block}.check-container .checkmark:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.check-container.before span:last-child,.check-container.after span:first-child{margin-right:8px}.check-container.after span:last-child{margin-left:8px}";

const IrCheckBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkboxChange = createEvent(this, "checkboxChange", 7);
    this.handleInputChange = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.checkboxChange.emit({ name: this.name, value: this.value, checked: this.checked });
      }
    };
    this.name = undefined;
    this.checked = false;
    this.label = '<label>';
    this.disabled = false;
    this.value = undefined;
    this.labelPosition = 'after';
  }
  render() {
    return (h("label", { class: `check-container ${this.labelPosition}` }, this.labelPosition === 'before' && h("span", null, this.label), h("input", { type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onInput: this.handleInputChange }), h("span", { class: "checkmark" }), this.labelPosition === 'after' && h("span", null, this.label)));
  }
};
IrCheckBox.style = irCheckboxCss;

export { IrCheckBox as ir_checkbox };

//# sourceMappingURL=ir-checkbox.entry.js.map