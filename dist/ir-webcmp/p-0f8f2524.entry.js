import{r as s,c as t,h}from"./p-a2a97187.js";const i=class{constructor(h){s(this,h);this.checkboxesChange=t(this,"checkboxesChange",7);this.checkedCheckboxes=[];this.checkboxes=[]}handleCheckboxChange(s){if(s.detail.checked){this.checkedCheckboxes.push(this.checkboxes[parseInt(s.detail.name)])}else{this.checkedCheckboxes.splice(this.checkedCheckboxes.indexOf(this.checkboxes[parseInt(s.detail.name)]),1)}this.checkboxesChange.emit(this.checkedCheckboxes)}componentWillLoad(){this.checkedCheckboxes=this.checkboxes.filter((s=>s.checked));if(this.checkedCheckboxes.length>0){this.checkboxesChange.emit(this.checkedCheckboxes)}}render(){return h("div",null,this.checkboxes.map(((s,t)=>h("ir-checkbox",{name:t.toString(),label:s.text,value:s.value,checked:s.checked||false}))))}};export{i as ir_checkboxes};
//# sourceMappingURL=p-0f8f2524.entry.js.map