import{r as i,c as s,h as t}from"./p-3691caf4.js";const d=class{constructor(t){i(this,t);this.editSidebar=s(this,"editSidebar",7);this.label=undefined;this.value=undefined;this.iconShown=false;this.imageSrc=undefined}openEditSidebar(){this.editSidebar.emit()}render(){if(!this.value){return null}return t("div",{class:this.iconShown?"sm-padding-right sm-padding-top":"sm-padding-top"},t("strong",{class:"sm-padding-right"},this.label),this.imageSrc&&t("img",{src:this.imageSrc,class:"sm-padding-right"}),this.value,this.iconShown&&t("ir-icon",{icon:"ft-edit color-ir-dark-blue-hover pointer",class:"sm-padding-left",onClick:()=>this.openEditSidebar()}))}};export{d as ir_label};
//# sourceMappingURL=p-878876eb.entry.js.map