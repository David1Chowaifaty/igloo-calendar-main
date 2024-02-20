import{c as t}from"./p-f23f1dfa.js";import{c as o}from"./p-26013b59.js";import{a as e,l as r}from"./p-da635c92.js";class n{async fetchData(o,r){try{const n=JSON.parse(sessionStorage.getItem("token"));if(n!==null){const{data:s}=await e.post(`/Get_Exposed_Property?Ticket=${n}`,{id:o,language:r});if(s.ExceptionMsg!==""){throw new Error(s.ExceptionMsg)}const a=s.My_Result;t.adultChildConstraints=a.adult_child_constraints;t.allowedBookingSources=a.allowed_booking_sources;t.allowed_payment_methods=a.allowed_booking_methods;t.currency=a.currency;t.is_vacation_rental=a.is_vacation_rental;t.pickup_service=a.pickup_service;t.max_nights=a.max_nights;t.roomsInfo=a.roomtypes;t.taxes=a.taxes;t.id=a.id;t.name=a.name;t.is_frontdesk_enabled=a.is_frontdesk_enabled;return s}}catch(t){console.log(t);throw new Error(t)}}async getExposedChannels(){try{const t=JSON.parse(sessionStorage.getItem("token"));if(t!==null){const{data:r}=await e.post(`/Get_Exposed_Channels?Ticket=${t}`,{});if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}const n=r.My_Result;o.channels=n;return r}}catch(t){console.log(t);throw new Error(t)}}async fetchLanguage(t){try{const o=JSON.parse(sessionStorage.getItem("token"));if(o!==null){const{data:n}=await e.post(`/Get_Exposed_Language?Ticket=${o}`,{code:t});if(n.ExceptionMsg!==""){throw new Error(n.ExceptionMsg)}let s=this.transformArrayToObject(n.My_Result.entries);r.entries=s;r.direction=n.My_Result.direction;return{entries:s,direction:n.My_Result.direction}}}catch(t){console.log(t);throw new Error(t)}}async getExposedConnectedChannels(t){try{const r=JSON.parse(sessionStorage.getItem("token"));if(r!==null){const{data:n}=await e.post(`/Get_Exposed_Connected_Channels?Ticket=${r}`,{property_id:t});if(n.ExceptionMsg!==""){throw new Error(n.ExceptionMsg)}o.connected_channels=n.My_Result}}catch(t){console.log(t);throw new Error(t)}}transformArrayToObject(t){let o={};for(const e of t){o[e.code]=e.description}return o}}export{n as R};
//# sourceMappingURL=p-0107558a.js.map