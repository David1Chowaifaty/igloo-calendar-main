import{r as t,c as s,h as i}from"./p-5d22135e.js";const e=class{constructor(i){t(this,i);this.textChange=s(this,"textChange",7);this.name=undefined;this.value=undefined;this.label="<label>";this.placeholder="<placeholder>";this.required=undefined;this.LabelAvailable=true;this.type="text";this.submited=false;this.inputStyle=true;this.size="md";this.textSize="md";this.labelPosition="left";this.labelBackground="light";this.labelColor="dark";this.labelBorder="none";this.labelWidth=3;this.valid=undefined;this.initial=true}connectedCallback(){}disconnectedCallback(){}watchHandler(t){if(t!==""&&this.required){this.valid=true}}watchHandler2(t){if(t&&this.required){this.initial=false}}handleInputChange(t){this.initial=false;if(this.required){this.valid=t.target.checkValidity();const s=t.target.value;this.textChange.emit(s)}else{this.textChange.emit(t.target.value)}}render(){let t="form-control";let s=i("div",{class:`input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor} border-${this.labelBorder}`},i("label",{class:`input-group-text ${this.labelPosition==="right"?"justify-content-end":this.labelPosition==="center"?"justify-content-center":""} bg-${this.labelBackground} flex-grow-1 text-${this.labelColor} border-${this.labelBorder==="none"?0:this.labelBorder} `},this.label,this.required?"*":""));if(!this.LabelAvailable){s=""}if(this.inputStyle===false){t=""}if(this.required&&!this.valid&&!this.initial){t=`${t} border-danger`}return i("div",{class:"form-group"},i("div",{class:"input-group row m-0"},s,i("input",{type:this.type,class:`${t} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable?12-this.labelWidth:12}`,placeholder:this.placeholder,value:this.value,onInput:this.handleInputChange.bind(this),required:this.required})))}static get watchers(){return{value:["watchHandler"],submited:["watchHandler2"]}}};const h=class{constructor(i){t(this,i);this.selectChange=s(this,"selectChange",7);this.count=0;this.name=undefined;this.data=undefined;this.label="<label>";this.selectedValue=null;this.required=undefined;this.LabelAvailable=true;this.firstOption="Select";this.selectStyle=true;this.submited=false;this.size="md";this.textSize="md";this.labelPosition="left";this.labelBackground="light";this.labelColor="dark";this.labelBorder="none";this.labelWidth=3;this.initial=true;this.valid=false}watchHandler(t){if(t!==null&&this.required){this.valid=true}}watchHandler2(t){if(t&&this.required){this.initial=false}}componentwillload(){}disconnectedCallback(){}handleSelectChange(t){if(this.required){this.initial=false;this.valid=t.target.checkValidity();this.selectedValue=t.target.value;this.selectChange.emit(this.selectedValue)}else{this.selectedValue=t.target.value;this.selectChange.emit(this.selectedValue)}}render(){let t="form-control";let s=i("div",{class:`input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor} border-${this.labelBorder}`},i("label",{class:`input-group-text ${this.labelPosition==="right"?"justify-content-end":this.labelPosition==="center"?"justify-content-center":""} bg-${this.labelBackground} flex-grow-1 text-${this.labelColor} border-${this.labelBorder==="none"?0:this.labelBorder} `},this.label,this.required?"*":""));if(this.selectStyle===false){t=""}if(this.required&&!this.valid&&!this.initial){t=`${t} border-danger`}if(!this.LabelAvailable){s=""}return i("div",{class:"form-group"},i("div",{class:"input-group row m-0"},s,i("select",{class:`${t} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable?12-this.labelWidth:12}`,onInput:this.handleSelectChange.bind(this),required:this.required},i("option",{value:null},this.firstOption),this.data.map((t=>{if(this.selectedValue===t.value){return i("option",{selected:true,value:t.value},t.text)}else{return i("option",{value:t.value},t.text)}})))))}static get watchers(){return{selectedValue:["watchHandler"],submited:["watchHandler2"]}}};export{e as ir_input_text,h as ir_select};
//# sourceMappingURL=p-8197b9d5.entry.js.map