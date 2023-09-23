"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1958],{796221:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-787f8169","path":"/devices/067776.html","title":"Legrand 067776 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067776 control via MQTT","description":"Integrate your Legrand 067776 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Model number","slug":"model-number","link":"#model-number","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Led in dark (binary)","slug":"led-in-dark-binary","link":"#led-in-dark-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1695456543000},"filePathRelative":"devices/067776.md"}')},583084:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var d=o(166252);const i=(0,d._)("h1",{id:"legrand-067776",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#legrand-067776","aria-hidden":"true"},"#"),(0,d.Uk)(" Legrand 067776")],-1),a=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"067776")],-1),l=(0,d._)("td",null,"Vendor",-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Netatmo wired shutter switch")],-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"cover (state, position), led_in_dark, linkquality")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067776.jpg",alt:"Legrand 067776"})])],-1),c=(0,d._)("h2",{id:"notes",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,d.Uk)(" Notes")],-1),h=(0,d._)("h3",{id:"model-number",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#model-number","aria-hidden":"true"},"#"),(0,d.Uk)(" Model number")],-1),p=(0,d._)("p",null,'Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: "0 677 26", "0 677 76" and "0 648 96". Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: "7 418 07", "7 418 37" and "7 418 67".',-1),g=(0,d._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,d.Uk)(" OTA updates")],-1),m=(0,d._)("h2",{id:"options",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,d.Uk)(" Options")],-1),v=(0,d.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="led-in-dark-binary" tabindex="-1"><a class="header-anchor" href="#led-in-dark-binary" aria-hidden="true">#</a> Led in dark (binary)</h3><p>Enables the LED when the power socket is turned off, allowing to see it in the dark. Value can be found in the published state on the <code>led_in_dark</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_in_dark&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_in_dark&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led in dark is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),b={},_=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[a,(0,d._)("tbody",null,[n,(0,d._)("tr",null,[l,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=Legrand"},{default:(0,d.w5)((()=>[(0,d.Uk)("Legrand")])),_:1})])]),r,s,u])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,p,(0,d.kq)(" Notes END: Do not edit below this line "),g,(0,d._)("p",null,[(0,d.Uk)("This device supports OTA updates, for more information see "),(0,d.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,d.w5)((()=>[(0,d.Uk)("OTA updates")])),_:1}),(0,d.Uk)(".")]),m,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[(0,d.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);