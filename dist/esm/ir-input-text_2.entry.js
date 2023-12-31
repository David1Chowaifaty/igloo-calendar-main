import { r as registerInstance, c as createEvent, h } from './index-b3d9a425.js';

const IrInputText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.textChange = createEvent(this, "textChange", 7);
    this.name = undefined;
    this.value = undefined;
    this.label = '<label>';
    this.placeholder = '<placeholder>';
    this.required = undefined;
    this.LabelAvailable = true;
    this.type = 'text';
    this.submited = false;
    this.inputStyle = true;
    this.size = 'md';
    this.textSize = 'md';
    this.labelPosition = 'left';
    this.labelBackground = 'light';
    this.labelColor = 'dark';
    this.labelBorder = 'none';
    this.labelWidth = 3;
    this.valid = undefined;
    this.initial = true;
  }
  connectedCallback() { }
  disconnectedCallback() { }
  watchHandler(newValue) {
    if (newValue !== '' && this.required) {
      this.valid = true;
    }
  }
  watchHandler2(newValue) {
    if (newValue && this.required) {
      this.initial = false;
    }
  }
  handleInputChange(event) {
    this.initial = false;
    if (this.required) {
      this.valid = event.target.checkValidity();
      const value = event.target.value;
      this.textChange.emit(value);
    }
    else {
      this.textChange.emit(event.target.value);
    }
  }
  render() {
    let className = 'form-control';
    let label = (h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor} border-${this.labelBorder}` }, h("label", { class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} bg-${this.labelBackground} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
    if (!this.LabelAvailable) {
      label = '';
    }
    if (this.inputStyle === false) {
      className = '';
    }
    if (this.required && !this.valid && !this.initial) {
      className = `${className} border-danger`;
    }
    return (h("div", { class: "form-group" }, h("div", { class: "input-group row m-0" }, label, h("input", { type: this.type, class: `${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required }))));
  }
  static get watchers() { return {
    "value": ["watchHandler"],
    "submited": ["watchHandler2"]
  }; }
};

const IrSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectChange = createEvent(this, "selectChange", 7);
    this.count = 0;
    this.name = undefined;
    this.data = undefined;
    this.label = '<label>';
    this.selectedValue = null;
    this.required = undefined;
    this.LabelAvailable = true;
    this.firstOption = 'Select';
    this.selectStyle = true;
    this.submited = false;
    this.size = 'md';
    this.textSize = 'md';
    this.labelPosition = 'left';
    this.labelBackground = 'light';
    this.labelColor = 'dark';
    this.labelBorder = 'none';
    this.labelWidth = 3;
    this.initial = true;
    this.valid = false;
  }
  watchHandler(newValue) {
    if (newValue !== null && this.required) {
      this.valid = true;
    }
  }
  watchHandler2(newValue) {
    if (newValue && this.required) {
      this.initial = false;
    }
  }
  componentwillload() { }
  disconnectedCallback() { }
  handleSelectChange(event) {
    if (this.required) {
      this.initial = false;
      this.valid = event.target.checkValidity();
      this.selectedValue = event.target.value;
      this.selectChange.emit(this.selectedValue);
    }
    else {
      this.selectedValue = event.target.value;
      this.selectChange.emit(this.selectedValue);
    }
  }
  render() {
    let className = 'form-control';
    let label = (h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor} border-${this.labelBorder}` }, h("label", { class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} bg-${this.labelBackground} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
    if (this.selectStyle === false) {
      className = '';
    }
    if (this.required && !this.valid && !this.initial) {
      className = `${className} border-danger`;
    }
    if (!this.LabelAvailable) {
      label = '';
    }
    return (h("div", { class: "form-group" }, h("div", { class: "input-group row m-0" }, label, h("select", { class: `${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, h("option", { value: null }, this.firstOption), this.data.map(item => {
      if (this.selectedValue === item.value) {
        return (h("option", { selected: true, value: item.value }, item.text));
      }
      else {
        return h("option", { value: item.value }, item.text);
      }
    })))));
  }
  static get watchers() { return {
    "selectedValue": ["watchHandler"],
    "submited": ["watchHandler2"]
  }; }
};

export { IrInputText as ir_input_text, IrSelect as ir_select };

//# sourceMappingURL=ir-input-text_2.entry.js.map