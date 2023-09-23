"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26623],{26623:(e,l,o)=>{o.r(l),o.d(l,{default:()=>N});var t=o(166252),s=o(749963);const i={class:"supported-devices"},n={class:"filters"},a={key:"no-results"};var r=o(437394),d=o(355377),u=o(190924),c=o(602262),v=o(3577);const p={class:"device"},m={class:"thumb"},f={class:"top-right"},h={key:0},w={key:0,class:"is-new"},k={class:"desc"},b={class:"model"};var y=o(218820),g=o(398038);const V={name:"Device",components:{QTooltip:y.Z,QIcon:g.Z},props:["device"],emits:["vendor-click"],setup(e){const l=(0,c.iH)(e.device.link.substr(2)),o=(0,c.iH)(!1);return(0,t.YP)(e.device,(e=>{o.value=new Date(e.addedAt)>Date.now()-2592e6,l.value=e.link.substr(2)}),{immediate:!0}),{isNew:o,link:l}}};var _=o(983744);const I=(0,_.Z)(V,[["render",function(e,l,o,s,i,n){const a=(0,t.up)("router-link"),r=(0,t.up)("q-tooltip"),d=(0,t.up)("q-icon");return(0,t.wg)(),(0,t.iD)("div",p,[(0,t.Wm)(a,{class:"title",to:s.link},{default:(0,t.w5)((()=>[(0,t.Uk)((0,v.zw)(o.device.description),1)])),_:1},8,["to"]),(0,t._)("div",m,[(0,t._)("div",f,[(0,t._)("div",null,[(0,t._)("div",{class:"vendor",onClick:l[0]||(l[0]=l=>e.$emit("vendor-click",o.device.vendor))},[(0,t.Uk)((0,v.zw)(o.device.vendor),1),(0,t.Wm)(r,{self:"center end"},{default:(0,t.w5)((()=>[o.device.isWhiteLabel?((0,t.wg)(),(0,t.iD)("span",h,"White-Label Device -")):(0,t.kq)("v-if",!0),(0,t.Uk)(" Filter by "+(0,v.zw)(o.device.vendor),1)])),_:1}),o.device.isWhiteLabel?((0,t.wg)(),(0,t.j4)(d,{key:0,name:"more"})):(0,t.kq)("v-if",!0)])])]),s.isNew?((0,t.wg)(),(0,t.iD)("div",w,[(0,t.Uk)("new"),(0,t.Wm)(r,{self:"center start"},{default:(0,t.w5)((()=>[(0,t.Uk)("Added at "+(0,v.zw)(new Date(o.device.addedAt).toLocaleString()),1)])),_:1})])):(0,t.kq)("v-if",!0),(0,t.Wm)(a,{class:"device-img",to:s.link,style:(0,v.j5)({backgroundImage:"url("+o.device.image+")"})},null,8,["to","style"])]),(0,t._)("div",k,[(0,t._)("div",b,(0,v.zw)(o.device.model),1),(0,t.Uk)("- "+(0,v.zw)(o.device.exposes.join(", ")),1)])])}]]),P={class:"device-filters"},S={class:"vendor-filter"},x={class:"exposes-filter"},H={class:"search-filter"},U=(0,t._)("code",null," (wall|switch)",-1);var Z=o(530637),C=o(469696),F=o(191697),W=o(566925);const q=(0,t.aZ)({name:"multi-select",components:{QSelect:W.Z,QItem:C.Z,QItemSection:F.Z},props:["label","options"],inheritAttrs:!0,setup(e,{emit:l,attrs:o}){const s=(0,c.iH)(null),i=(0,c.iH)(e.options);return((0,c.dq)(e.options)||(0,c.PG)(e.options))&&(0,t.YP)(e.options,(e=>{l("update:modelValue",o.modelValue.value.filter((l=>e.includes(l))))})),{el:s,hidePopup:()=>{s.value.hidePopup()},clearSearch(e){setTimeout((()=>{e.$el.querySelector("input").value=""}),10)},filteredOptions:i,filterFn(l,o){o((()=>{const o=l.toLowerCase();i.value=e.options.filter((e=>e.toLowerCase().includes(o)))}))}}}}),D=(0,_.Z)(q,[["render",function(e,l,o,s,i,n){const a=(0,t.up)("q-item-section"),r=(0,t.up)("q-item"),d=(0,t.up)("q-select");return(0,t.wg)(),(0,t.j4)(d,{label:e.label,filled:"",clearable:"","use-chips":"","use-input":"","input-debounce":"0",options:e.filteredOptions,onFilter:e.filterFn,multiple:"","options-dense":"",onPopupHide:l[0]||(l[0]=l=>e.clearSearch(this)),ref:"el","onUpdate:modelValue":e.hidePopup},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["label","options","onFilter","onUpdate:modelValue"])}]]),E=window.ZIGBEE2MQTT_SUPPORTED_DEVICES,T=new Set,Y=new Set;E.forEach((({exposes:e,vendor:l})=>{Y.add(l),e.forEach((e=>T.add(e)))}));const L=(e,l)=>e.localeCompare(l,void 0,{sensitivity:"base"}),j=E,A=Array.from(Y).sort(L),Q=Array.from(T).sort(L),R={arrayKeys:[],parseHash(){const e=location.hash.substr(1).split("&").map((e=>e.split("="))).map((([e,l])=>this.arrayKeys.includes(e)?[e,l.split(",").map((e=>decodeURIComponent(e)))]:[e,decodeURIComponent(l)])).filter((([e,l])=>e.length>0&&l.length>0));return Object.fromEntries(e)},updateHash(e){const l=this.parseHash();Object.entries(e).forEach((([e,o])=>{l[e]=o}));let o="#";Object.entries(l).forEach((([e,l])=>{if(null!=l&&""!==l)if(this.arrayKeys.includes(e)){const t=l.map((e=>encodeURIComponent(e))).join(",");o+=`${e}=${t}&`}else o+=`${e}=${encodeURIComponent(l)}&`})),location.hash=o.substr(0,o.length-1)}};R.arrayKeys.push("v"),R.arrayKeys.push("e");const z=(0,t.aZ)({name:"filters",components:{QInput:Z.Z,QTooltip:y.Z,QIcon:g.Z,MultiSelect:D},props:["modelValue"],setup(e,{emit:l}){const o=R.parseHash(),s=(0,c.iH)(o.e||null),i=(0,c.iH)(o.v||null),n=(0,c.iH)(o.s||null),a=e=>()=>{Array.isArray(e.value)&&0===e.value.length&&(e.value=null)};(0,t.YP)((()=>e.modelValue),(e=>{if(!e)return;const{exposes:l,vendors:o,search:t}=e;l&&(s.value=l),o&&(i.value=o),t&&(n.value=t)}));const r=()=>{R.updateHash({e:s.value,v:i.value,s:n.value}),s.value||i.value||n.value?l("update:modelValue",{exposes:s.value,vendors:i.value,search:n.value}):l("update:modelValue",null)};return r(),(0,t.YP)(s,a(s)),(0,t.YP)(i,a(i)),(0,t.YP)(s,r),(0,t.YP)(i,r),(0,t.YP)(n,r),{exposes:Q,vendors:A,exposesFilter:s,vendorFilter:i,searchFilter:n}}});const O={name:"SupportedDevices",components:{InfiniteScroll:{name:"InfiniteScroll",props:{debounce:{default:350,type:Number},offset:{default:500,type:Number}},emits:["load"],setup(e,{slots:l,emit:o}){const s=(0,c.iH)(null),i=function(e,l=300){let o,t=!1;return(...s)=>{o?t=!0:(e.apply(this,s),o=setTimeout((()=>{o=void 0,t&&e.apply(this,s),t=!1}),l))}}((()=>{s.value&&s.value.getBoundingClientRect().bottom-window.innerHeight<e.offset&&o("load")}),e.debounce);return(0,t.bv)((()=>{window.addEventListener("scroll",i)})),(0,t.Ah)((()=>{window.removeEventListener("scroll",i)})),()=>(0,t.h)("div",{class:"q-infinite-scroll",ref:s},l.default())}},Filters:(0,_.Z)(z,[["render",function(e,l,o,s,i,n){const a=(0,t.up)("multi-select"),r=(0,t.up)("q-icon"),d=(0,t.up)("q-tooltip"),u=(0,t.up)("q-input");return(0,t.wg)(),(0,t.iD)("div",P,[(0,t._)("div",S,[(0,t.Wm)(a,{label:"Vendor",options:e.vendors,modelValue:e.vendorFilter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.vendorFilter=l)},null,8,["options","modelValue"])]),(0,t._)("div",x,[(0,t.Wm)(a,{label:"Exposes",options:e.exposes,modelValue:e.exposesFilter,"onUpdate:modelValue":l[1]||(l[1]=l=>e.exposesFilter=l)},null,8,["options","modelValue"])]),(0,t._)("div",H,[(0,t.Wm)(u,{modelValue:e.searchFilter,"onUpdate:modelValue":l[2]||(l[2]=l=>e.searchFilter=l),filled:"",debounce:500,type:"search",placeholder:"Search",label:"Search",clearable:""},{append:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"info"}),(0,t.Wm)(d,{offset:[0,15],self:"bottom middle"},{default:(0,t.w5)((()=>[(0,t.Uk)("RegEx support. E.g you can use"),U,(0,t.Uk)(" to search for wall OR switch.")])),_:1})])),_:1},8,["modelValue"])])])}]]),Device:I},setup(){const e=(0,t.f3)(r.ow);(0,t.YP)(e,(e=>d.Z.set(e)),{immediate:!0});const l=(0,c.iH)(null),o=(0,c.iH)(u.Z.getItem("loadIndex")||1),s=(0,c.iH)([]),i=(0,c.iH)([]);return(0,t.YP)(s,(()=>{i.value=s.value.slice(0,20),o.value=1})),(0,t.YP)(o,(e=>{i.value=s.value.slice(0,20*e)})),function(e,l){(0,t.YP)(e,(()=>{if(!e.value)return void(l.value=j);const{exposes:o,vendors:t,search:s}=e.value;let i=!1;if(s)try{i=new RegExp(s,"i")}catch(e){}const n=j.filter((e=>!(o&&!o.every((l=>e.exposes.includes(l)))||t&&!t.includes(e.vendor)||i&&!["model","vendor","description"].some((l=>i.test(e[l]))))));l.value=(e=>e.sort(((e,l)=>{const o=L(e.vendor,l.vendor);return 0===o?L(e.model,l.model):o})))(n)}),{immediate:!0})}(l,s),(0,t.bv)((()=>{const e=u.Z.getItem("zigbee2mqtt-devices-overview")||{};e.loadIndex&&(o.value=e.loadIndex),e.scrollTop&&setTimeout((()=>{window.scrollTo(null,e.scrollTop)}))})),{currentFilters:l,devicesToShow:i,loadItemsByScroll:()=>{20*o.value>=s.value.length||o.value++},storePosition:()=>{u.Z.set("zigbee2mqtt-devices-overview",{loadIndex:o.value,scrollTop:window.scrollY})},onVendorClick:e=>{l.value?l.value.vendors?l.value.vendors.includes(e)||l.value.vendors.push(e):l.value.vendors=[e]:l.value={vendors:[e]}}}}},K=(0,_.Z)(O,[["render",function(e,l,o,r,d,u){const c=(0,t.up)("filters"),v=(0,t.up)("device"),p=(0,t.up)("infinite-scroll");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",n,[(0,t.Wm)(c,{modelValue:r.currentFilters,"onUpdate:modelValue":l[0]||(l[0]=e=>r.currentFilters=e)},null,8,["modelValue"])]),(0,t.Wm)(p,{onLoad:r.loadItemsByScroll},{default:(0,t.w5)((()=>[(0,t.Wm)(s.W3,{class:"devices-list",tag:"div",name:"device"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.devicesToShow,(e=>((0,t.wg)(),(0,t.j4)(v,{key:e.vendor+e.model,device:e,onClick:r.storePosition,onVendorClick:r.onVendorClick},null,8,["device","onClick","onVendorClick"])))),128)),0===r.devicesToShow.length?((0,t.wg)(),(0,t.iD)("p",a,"No devices found.")):(0,t.kq)("v-if",!0)])),_:1})])),_:1},8,["onLoad"])])}]]),N=K}}]);