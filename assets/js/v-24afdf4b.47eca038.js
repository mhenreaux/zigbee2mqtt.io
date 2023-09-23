"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49477],{738063:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-24afdf4b","path":"/devices/E1525_E1745.html","title":"IKEA E1525/E1745 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E1525/E1745 control via MQTT","description":"Integrate your IKEA E1525/E1745 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Requested brightness level (numeric)","slug":"requested-brightness-level-numeric","link":"#requested-brightness-level-numeric","children":[]},{"level":3,"title":"Requested brightness percent (numeric)","slug":"requested-brightness-percent-numeric","link":"#requested-brightness-percent-numeric","children":[]},{"level":3,"title":"Illuminance above threshold (binary)","slug":"illuminance-above-threshold-binary","link":"#illuminance-above-threshold-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1695456543000},"filePathRelative":"devices/E1525_E1745.md"}')},120909:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(166252);const a=(0,n._)("h1",{id:"ikea-e1525-e1745",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ikea-e1525-e1745","aria-hidden":"true"},"#"),(0,n.Uk)(" IKEA E1525/E1745")],-1),d=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),o=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"E1525/E1745")],-1),s=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"TRADFRI motion sensor")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, occupancy, requested_brightness_level, requested_brightness_percent, illuminance_above_threshold, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1525-E1745.jpg",alt:"IKEA E1525/E1745"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the sensor to Zigbee2MQTT by pressing the pair button 4 times in a row. The red light on the front side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>The E1745 can be bound to groups. Although it is not possible to set the groupID at which the E1745 sends messages. But you can watch out in the log files for following debug messages:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug Received Zigbee message from &#39;device&#39;, type &#39;commandOnWithTimedOff&#39;, cluster &#39;genOnOff&#39;, data &#39;{&quot;ctrlbits&quot;:0,&quot;offwaittime&quot;:0,&quot;ontime&quot;:600}&#39; from endpoint 1 with groupID 123\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now you can create a group with a groupID of 123 and add yur devices that should receive the message.</p>',7),h=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),p=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),b=(0,n.uE)('<ul><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>illuminance_below_threshold_check</code>: Set to false to also send messages when illuminance is above threshold in night mode (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="requested-brightness-level-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-level-numeric" aria-hidden="true">#</a> Requested brightness level (numeric)</h3><p>Value can be found in the published state on the <code>requested_brightness_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>76</code> and the maximum value is <code>254</code>.</p><h3 id="requested-brightness-percent-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-percent-numeric" aria-hidden="true">#</a> Requested brightness percent (numeric)</h3><p>Value can be found in the published state on the <code>requested_brightness_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>30</code> and the maximum value is <code>100</code>.</p><h3 id="illuminance-above-threshold-binary" tabindex="-1"><a class="header-anchor" href="#illuminance-above-threshold-binary" aria-hidden="true">#</a> Illuminance above threshold (binary)</h3><p>Indicates whether the device detected bright light (works only in night mode). Value can be found in the published state on the <code>illuminance_above_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> illuminance above threshold is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),m={},g=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[d,(0,n._)("tbody",null,[o,(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,n.w5)((()=>[(0,n.Uk)("IKEA")])),_:1})])]),l,r,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),p,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);