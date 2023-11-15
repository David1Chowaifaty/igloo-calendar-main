import { r as registerInstance, c as createEvent, h } from './index-9daf58c7.js';

const irModalCss = ".backdropModal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active{cursor:pointer;opacity:1 !important;pointer-events:all}.modal{z-index:1001 !important}.modal-dialog{height:100vh;display:flex;align-items:center}.ir-modal{position:fixed;top:0;left:0;z-index:1050;width:100%;height:100%;overflow:hidden;outline:0;opacity:0;transform:translateY(-20%);transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none;}.ir-modal.active{opacity:1;transform:translateY(0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";

const IrModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.confirmModal = createEvent(this, "confirmModal", 7);
    this.cancelModal = createEvent(this, "cancelModal", 7);
    this.modalTitle = 'Modal Title';
    this.modalBody = 'Modal Body';
    this.rightBtnActive = true;
    this.leftBtnActive = true;
    this.rightBtnText = 'Close';
    this.leftBtnText = 'Confirm';
    this.rightBtnColor = 'primary';
    this.leftBtnColor = 'secondary';
    this.btnPosition = 'right';
    this.iconAvailable = false;
    this.icon = '';
    this.isOpen = false;
    this.item = {};
  }
  async closeModal() {
    this.isOpen = false;
  }
  async openModal() {
    this.isOpen = true;
  }
  btnClickHandler(event) {
    let target = event.target;
    let name = target.name;
    if (name === this.leftBtnText) {
      this.confirmModal.emit(this.item);
      this.item = {};
      this.closeModal();
    }
    else if (name === this.rightBtnText) {
      this.cancelModal.emit();
      this.item = {};
      this.closeModal();
    }
  }
  render() {
    return [
      h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
          this.closeModal();
        } }),
      h("div", { class: `ir-modal  ${this.isOpen ? 'active' : ''}`, tabindex: "-1" }, h("div", { class: "modal-dialog" }, h("div", { class: ` modal-content` }, h("div", { class: `modal-header align-items-center` }, h("div", { class: "font-weight-bold d-flex align-items-center" }, this.iconAvailable && h("ir-icon", { class: "mr-1", icon: this.icon }), " ", this.modalTitle), h("div", { class: "font-weight-bold d-flex align-items-center font-size-large" }, h("ir-icon", { icon: "ft-x", style: { cursor: 'pointer' }, onClick: () => this.closeModal() }))), h("div", { class: "modal-body" }, h("div", null, this.modalBody)), h("div", { class: `modal-footer d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.rightBtnActive && h("ir-button", { icon: '', btn_color: this.rightBtnColor, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
    ];
  }
};
IrModal.style = irModalCss;

export { IrModal as ir_modal };

//# sourceMappingURL=ir-modal.entry.js.map