/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2022 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[1391],{96664:function(O,E,r){r.r(E),r.d(E,{default:function(){return $}});var T=r(11281),D=r.n(T),R=r(97983),l=r.n(R),S=r(40794),f=r.n(S),g=r(35811);function I(i){return p.apply(this,arguments)}function p(){return p=f()(l()().mark(function i(d){return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.WY)("/api/session/list",{method:"GET",params:d}).then(function(n){var e={data:n!=null&&n.result?n==null?void 0:n.result:[],success:n==null?void 0:n.success};return Promise.resolve(e)}));case 1:case"end":return t.stop()}},i)})),p.apply(this,arguments)}function F(i){return m.apply(this,arguments)}function m(){return m=f()(l()().mark(function i(d){return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.WY)("/api/session/remove",{method:"DELETE",params:{sessionIds:d}}));case 1:case"end":return t.stop()}},i)})),m.apply(this,arguments)}var y=r(25035),L=r(14459),w=r(1914),C=r(76521),x=r(86738),B=r(2453),A=r(27414),j=r(26713),Z=r(67294),u=r(85893),P=function(){var i=(0,Z.useRef)(),d=[{title:"\u4F1A\u8BDD ID",dataIndex:"sessionId",ellipsis:!0,copyable:!0,align:"center",width:150,fixed:"left",search:!1},{title:"\u7528\u6237\u540D",dataIndex:"username",ellipsis:!0,width:120,fieldProps:{autoComplete:"off"}},{title:"\u6D3B\u52A8IP\u5730\u5740",width:130,dataIndex:"ip",ellipsis:!0,search:!1,render:function(t,n){var e=n.geoLocation;return e!=null&&e.ip?(0,u.jsx)(C.Z,{status:"success",text:e.ip}):(0,u.jsx)(C.Z,{status:"error",text:"\u672A\u77E5"})}},{title:"\u6D3B\u52A8\u5730\u70B9",width:120,ellipsis:!0,search:!1,render:function(t,n){var e=n.geoLocation;return e&&(e==null?void 0:e.country)&&(e==null?void 0:e.province)&&(e==null?void 0:e.city)&&(e==null?void 0:e.country)+"."+(e==null?void 0:e.province)+"."+(e==null?void 0:e.city)||"-"}},{title:"\u8BBE\u5907\u7C7B\u578B",ellipsis:!0,width:110,search:!1,render:function(t,n){var e=n.userAgent;return(e==null?void 0:e.deviceType)||"-"}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",ellipsis:!0,width:110,search:!1,render:function(t,n){var e=n.userAgent;return(e==null?void 0:e.platform)+" "+(e==null?void 0:e.platformVersion)||"-"}},{title:"\u6D4F\u89C8\u5668",ellipsis:!0,width:110,search:!1,render:function(t,n){var e=n.userAgent;return(e==null?void 0:e.browser)+" "+(e==null?void 0:e.browserMajorVersion)||"-"}},{title:"\u767B\u5F55\u65F6\u95F4",ellipsis:!0,dataIndex:"loginTime",align:"center",width:200,valueType:"dateTime",search:!1},{title:"\u6700\u540E\u64CD\u4F5C\u65F6\u95F4",ellipsis:!0,dataIndex:"lastRequest",width:170,valueType:"dateTime",search:!1},{title:"\u64CD\u4F5C",valueType:"option",width:60,align:"center",fixed:"right",render:function(t,n){return[(0,u.jsx)(x.Z,{title:"\u60A8\u786E\u5B9A\u8981\u4E0B\u7EBF\u8BE5\u7528\u6237\u5417\uFF1F",placement:"bottomRight",icon:(0,u.jsx)(y.Z,{style:{color:"red"}}),onConfirm:f()(l()().mark(function e(){var c,o,h;return l()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,F(n.sessionId);case 2:c=v.sent,o=c.success,o&&(B.ZP.success("\u64CD\u4F5C\u6210\u529F"),(h=i.current)===null||h===void 0||h.reload());case 5:case"end":return v.stop()}},e)})),okText:"\u662F",cancelText:"\u5426",children:(0,u.jsx)("a",{target:"_blank",style:{color:"red"},children:"\u4E0B\u7EBF"},"remove")},"offline")]}}];return(0,u.jsx)(L._z,{content:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("span",{children:"\u4F1A\u8BDD\u7BA1\u7406\u53EF\u4EE5\u67E5\u770B\u6240\u6709\u5F53\u524D\u4ECD\u7136\u6709\u6548\u7684\u4F1A\u8BDD\u5217\u8868\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5F3A\u5236\u6CE8\u9500\u67D0\u4E2A\u7528\u6237\u7684\u4F1A\u8BDD\u3002\u6CE8\u9500\u540E\uFF0C\u8BE5\u7528\u6237\u51ED\u8BC1\u5373\u523B\u5931\u6548\uFF0C\u4E4B\u540E\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u9700\u8981\u91CD\u65B0\u8BA4\u8BC1\u3002"})}),children:(0,u.jsx)(w.Z,{options:{density:!1,setting:!0,reload:!0},cardProps:{style:{overflow:"auto"}},scroll:{x:700},search:{},columns:d,rowSelection:{selections:[A.Z.SELECTION_ALL,A.Z.SELECTION_INVERT]},tableAlertRender:function(t){var n=t.selectedRowKeys,e=t.onCleanSelected;return(0,u.jsx)(j.Z,{size:24,children:(0,u.jsxs)("span",{children:["\u5DF2\u9009 ",n.length," \u9879",(0,u.jsx)("a",{style:{marginLeft:8},onClick:e,children:"\u53D6\u6D88\u9009\u62E9"})]})})},tableAlertOptionRender:function(t){return(0,u.jsx)(j.Z,{size:16,children:(0,u.jsx)(x.Z,{title:"\u60A8\u786E\u5B9A\u8981\u6279\u91CF\u4E0B\u7EBF\u9009\u4E2D\u7528\u6237\u5417\uFF1F",placement:"bottomRight",icon:(0,u.jsx)(y.Z,{style:{color:"red"}}),onConfirm:f()(l()().mark(function n(){var e,c,o;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,F(t.selectedRowKeys.join(","));case 2:e=a.sent,c=e.success,c&&(B.ZP.success("\u64CD\u4F5C\u6210\u529F"),t.onCleanSelected(),(o=i.current)===null||o===void 0||o.reload());case 5:case"end":return a.stop()}},n)})),okText:"\u662F",cancelText:"\u5426",children:(0,u.jsx)("a",{target:"_blank",style:{color:"red"},children:"\u6279\u91CF\u4E0B\u7EBF"},"remove")},"offline")})},actionRef:i,pagination:{defaultPageSize:10},form:{syncToUrl:function(t,n){return n==="get"?D()({},t):t}},request:I,rowKey:"sessionId",dateFormatter:"string"})})},$=P}}]);