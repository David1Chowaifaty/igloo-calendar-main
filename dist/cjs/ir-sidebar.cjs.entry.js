'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-211b4e17.js');

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";

const IrSidebar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.irSidebarToggle = index.createEvent(this, "irSidebarToggle", 7);
    this.name = undefined;
    this.side = 'right';
    this.open = false;
  }
  componentDidLoad() {
    // If esc key is pressed, close the modal
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.toggleSidebar();
      }
    });
  }
  // Unsubscribe to the event when the component is removed from the DOM
  disconnectedCallback() {
    document.removeEventListener('keydown', () => { });
  }
  async toggleSidebar() {
    this.irSidebarToggle.emit(this.open);
  }
  render() {
    let className = '';
    if (this.open) {
      className = 'active';
    }
    else {
      className = '';
    }
    return [
      index.h("div", { class: `backdrop ${className}`, onClick: () => {
          this.toggleSidebar();
        } }),
      index.h("div", { class: `sidebar-${this.side} ${className}` }, index.h("a", { class: "close", onClick: () => {
          this.toggleSidebar();
        } }, index.h("ir-icon", { icon: "ft-x" })), index.h("slot", null)),
    ];
  }
};
IrSidebar.style = irSidebarCss;

exports.ir_sidebar = IrSidebar;

//# sourceMappingURL=ir-sidebar.cjs.entry.js.map