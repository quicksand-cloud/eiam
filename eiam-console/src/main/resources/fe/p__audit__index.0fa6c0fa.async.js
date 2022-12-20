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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[8271],{80622:function(X,B,r){r.d(B,{F:function(){return A},N:function(){return C}});var A;(function(F){F.admin="admin",F.user="user"})(A||(A={}));var C;(function(F){F.success="success",F.fail="fail"})(C||(C={}))},40900:function(X,B,r){r.r(B),r.d(B,{default:function(){return je}});var A=r(12741),C=r.n(A),F=r(14459),m=r(80622),k=r(97983),g=r.n(k),q=r(40794),D=r.n(q),_=r(11281),Z=r.n(_),$=r(25191),H=r(98971);function O(v,o,d){return L.apply(this,arguments)}function L(){return L=D()(g()().mark(function v(o,d,c){return g()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",(0,H.request)("/api/audit/list",{params:Z()(Z()(Z()({},o),{},{startEventTime:o.eventTime&&o.eventTime[0],endEventTime:o.eventTime&&o.eventTime[1]},(0,$.YE)(d)),(0,$.oH)(c))}).then(function(i){var f,l,n,s,u={data:i!=null&&(f=i.result)!==null&&f!==void 0&&f.list?i==null||(l=i.result)===null||l===void 0?void 0:l.list:[],success:i==null?void 0:i.success,total:i!=null&&(n=i.result)!==null&&n!==void 0&&n.pagination?i==null||(s=i.result)===null||s===void 0?void 0:s.pagination.total:0};return Promise.resolve(u)}));case 1:case"end":return x.stop()}},v)})),L.apply(this,arguments)}function Y(v){return P.apply(this,arguments)}function P(){return P=D()(g()().mark(function v(o){return g()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,H.request)("/api/audit/types/".concat(o)));case 1:case"end":return c.stop()}},v)})),P.apply(this,arguments)}var b=r(39398),w=r(14313),G=r(1914),M=r(2093),y=r(34041),U=r(98033),I=r(76521),z=r(26713),S=r(51904),ee=r(27484),E=r.n(ee),T=r(67294),ne=r(17057),ae=r(95462),te=r(12812),j=r.n(te),K=r(38755);function se(v){var o=".".concat(v),d=(0,K.l)(function(){var c;return j()({},"".concat(o),(c={display:"flex",paddingLeft:"10px"},j()(c,"&-line-user",{flex:1,marginRight:"24px"}),j()(c,"&-line-event",{flex:1,marginRight:"24px"}),j()(c,"&-line-geo",{flex:1,marginRight:"24px"}),j()(c,"&-label",{display:"block",minWidth:"80px",color:"#878a95",fontSize:"14px"}),j()(c,"&-content",{display:"block",flexWrap:"wrap",overflowX:"auto",color:"#293350",fontSize:"14px"}),j()(c,"&-each-line",{display:"flex",marginBottom:"14px"}),j()(c,"&-target",{flex:1}),c))});return{className:d}}var re=r(94184),a=r.n(re),e=r(85893),t="audit-expanded-card",ce=ne.Z.Text,le={user:"\u7528\u6237",admin:"\u7BA1\u7406\u5458"},J=function(o){var d,c,h,x,i,f,l,n=o.record,s=se(t),u=s.className,N=function(p){return!p||p==="null"||p==="-"||p==="undefined"?"-":p};return(0,e.jsx)("div",{className:u,children:(0,e.jsxs)("div",{className:a()("".concat(t)),children:[(0,e.jsxs)("div",{className:a()("".concat(t,"-line-user")),children:[(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u64CD\u4F5C\u8005 ID"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:(0,e.jsx)(ae.Z,{style:{marginBottom:0},className:a()("".concat(t,"-content")),copyable:!0,children:N(n.userId)})})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u64CD\u4F5C\u8005\u540D\u79F0"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:N(n.username)})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u64CD\u4F5C\u8005\u7C7B\u578B"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:le[n.userType]})]})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-line-geo")),children:[(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u8BBE\u5907\u7C7B\u578B"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.userAgent&&((d=n.userAgent)===null||d===void 0?void 0:d.deviceType)||"-"})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u64CD\u4F5C\u7CFB\u7EDF"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.userAgent&&((c=n.userAgent)===null||c===void 0?void 0:c.platform)||"-"})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u5BA2\u6237\u7AEFIP"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:((h=n.geoLocation)===null||h===void 0?void 0:h.ip)||"-"})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u6D4F\u89C8\u5668"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.userAgent&&((x=n.userAgent)===null||x===void 0?void 0:x.browser)||"-"})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u56FD\u5BB6"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.geoLocation&&((i=n.geoLocation)===null||i===void 0?void 0:i.countryName)||"-"})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u7701\u4EFD"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.geoLocation&&((f=n.geoLocation)===null||f===void 0?void 0:f.provinceName)||"-"})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u57CE\u5E02"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.geoLocation&&((l=n.geoLocation)===null||l===void 0?void 0:l.cityName)||"-"})]})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-line-event")),children:[(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u4E8B\u4EF6\u65F6\u95F4"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:(0,e.jsx)(ce,{style:{maxWidth:"100%"},ellipsis:!0,children:E()(n.eventTime).format("YYYY.MM.DD HH:mm:ss")})})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u4E8B\u4EF6\u7C7B\u578B"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:n.eventType})]}),(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u4E8B\u4EF6\u72B6\u6001"}),(0,e.jsxs)("span",{className:a()("".concat(t,"-content")),children:[n.eventStatus===m.N.success&&(0,e.jsx)("span",{style:{color:"#87d068"},children:"\u6210\u529F"}),n.eventStatus===m.N.fail&&(0,e.jsx)("span",{style:{color:"#e54545"},children:"\u5931\u8D25"})]})]})]}),n.targets&&(0,e.jsx)("div",{className:a()("".concat(t,"-line-target")),children:(0,e.jsxs)("div",{className:a()("".concat(t,"-each-line")),children:[(0,e.jsx)("span",{className:a()("".concat(t,"-label")),children:"\u64CD\u4F5C\u5BF9\u8C61"}),(0,e.jsx)("span",{className:a()("".concat(t,"-content")),children:(0,e.jsx)("pre",{children:JSON.stringify(n.targets,null,3)},n.id)})]})})]})})},ue=r(46986),ie=ue.ZP.ConfigContext;function W(v){var o=".".concat(v),d=(0,T.useContext)(ie),c=d.getPrefixCls,h=".".concat(c()),x=(0,K.l)(function(){return j()({},"".concat(o),j()({},"".concat(h,"-table-expanded-row-fixed"),{width:"auto !important"}))});return{className:x}}var Q="audit-admin",oe=y.Z.OptGroup,de=y.Z.Option,me=U.Z.RangePicker,ve=function(){var v=(0,T.useRef)(),o=(0,T.useState)(),d=C()(o,2),c=d[0],h=d[1],x=W(Q),i=x.className;(0,M.Z)(D()(g()().mark(function l(){return g()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:Y(m.F.admin).then(function(u){u.success&&h(u.result)});case 1:case"end":return s.stop()}},l)})),[]);var f=[{title:"\u4E8B\u4EF6\u7C7B\u578B",dataIndex:"eventType",fixed:"left",renderFormItem:function(){return(0,e.jsx)(y.Z,{placeholder:"\u8BF7\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B",showSearch:!0,allowClear:!0,mode:"multiple",maxTagCount:"responsive",children:c&&c.map(function(n){return(0,e.jsx)(oe,{label:n.name,children:n.types&&n.types.map(function(s){return(0,e.jsx)(de,{value:s.code,children:s.name},s.code)})},n.code)})},"select")}},{title:"\u64CD\u4F5C\u8005",ellipsis:!0,dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{title:"\u5BA2\u6237\u7AEFIP",dataIndex:"geoLocation",ellipsis:!0,valueType:"text",hideInSearch:!0,render:function(n,s){var u=s.geoLocation;return u?(0,e.jsx)(I.Z,{status:"success",text:u.ip}):(0,e.jsx)(I.Z,{status:"error",text:"\u672A\u77E5"})}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",ellipsis:!0,dataIndex:"platform",render:function(n,s){var u=s.userAgent;return u.platform}},{title:"\u6D4F\u89C8\u5668",ellipsis:!0,dataIndex:"browser",render:function(n,s){var u=s.userAgent;return u.browser}},{title:"\u4E8B\u4EF6\u65F6\u95F4",sorter:!0,defaultSortOrder:"descend",ellipsis:!0,align:"center",dataIndex:"eventTime",valueType:"dateTime",renderFormItem:function(){return(0,e.jsx)(me,{showTime:{hideDisabledOptions:!0,defaultValue:[E()("00:00:00","HH:mm:ss"),E()("11:59:59","HH:mm:ss")]},placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],format:"YYYY-MM-DD HH:mm:ss"})}},{title:"\u4E8B\u4EF6\u72B6\u6001",dataIndex:"eventStatus",hideInSearch:!0,align:"center",fixed:"right",width:100,render:function(n){return(0,e.jsxs)(z.Z,{children:[n===m.N.success&&(0,e.jsx)(S.Z,{color:"#87d068",children:"\u6210\u529F"}),n===m.N.fail&&(0,e.jsx)(S.Z,{color:"#e54545",children:"\u5931\u8D25"})]})}}];return(0,e.jsx)("div",{className:i,children:(0,e.jsx)(G.Z,{columns:f,scroll:{x:1200},pagination:{showQuickJumper:!0,defaultPageSize:10},search:{},expandable:{expandRowByClick:!0,expandedRowClassName:function(){return a()("".concat(Q))},expandedRowRender:function(n,s){return(0,e.jsx)(J,{record:n,index:s,type:m.F.admin})},expandIcon:function(n){var s=n.expanded,u=n.onExpand,N=n.record;return s?(0,e.jsx)(b.Z,{onClick:function(p){return u(N,p)}}):(0,e.jsx)(w.Z,{onClick:function(p){return u(N,p)}})}},actionRef:v,params:{userType:m.F.admin},request:O,rowKey:"id",dateFormatter:"string"})})},V="audit-user",xe=y.Z.OptGroup,pe=y.Z.Option,he=U.Z.RangePicker,fe=function(){var v=(0,T.useRef)(),o=(0,T.useState)(),d=C()(o,2),c=d[0],h=d[1],x=W(V),i=x.className;(0,M.Z)(D()(g()().mark(function l(){return g()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:Y(m.F.user).then(function(u){u.success&&h(u.result)});case 1:case"end":return s.stop()}},l)})),[]);var f=[{title:"\u4E8B\u4EF6\u7C7B\u578B",dataIndex:"eventType",fixed:"left",renderFormItem:function(){return(0,e.jsx)(y.Z,{placeholder:"\u8BF7\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B",showSearch:!0,allowClear:!0,mode:"multiple",maxTagCount:"responsive",children:c&&c.map(function(n){return(0,e.jsx)(xe,{label:n.name,children:n.types&&n.types.map(function(s){return(0,e.jsx)(pe,{value:s.code,children:s.name},s.code)})},n.code)})},"select")}},{title:"\u64CD\u4F5C\u8005",ellipsis:!0,dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{title:"\u5BA2\u6237\u7AEFIP",dataIndex:"geoLocation",ellipsis:!0,valueType:"text",hideInSearch:!0,render:function(n,s){var u=s.geoLocation;return u?(0,e.jsx)(I.Z,{status:"success",text:u.ip}):(0,e.jsx)(I.Z,{status:"error",text:"\u672A\u77E5"})}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",ellipsis:!0,dataIndex:"platform",render:function(n,s){var u=s.userAgent;return u.platform}},{title:"\u6D4F\u89C8\u5668",ellipsis:!0,dataIndex:"browser",render:function(n,s){var u=s.userAgent;return u.browser}},{title:"\u4E8B\u4EF6\u65F6\u95F4",sorter:!0,defaultSortOrder:"descend",ellipsis:!0,align:"center",dataIndex:"eventTime",valueType:"dateTime",renderFormItem:function(){return(0,e.jsx)(he,{showTime:{hideDisabledOptions:!0,defaultValue:[E()("00:00:00","HH:mm:ss"),E()("11:59:59","HH:mm:ss")]},placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],format:"YYYY-MM-DD HH:mm:ss"})}},{title:"\u4E8B\u4EF6\u72B6\u6001",dataIndex:"eventStatus",hideInSearch:!0,align:"center",fixed:"right",width:100,render:function(n){return(0,e.jsxs)(z.Z,{children:[n===m.N.success&&(0,e.jsx)(S.Z,{color:"#87d068",children:"\u6210\u529F"}),n===m.N.fail&&(0,e.jsx)(S.Z,{color:"#e54545",children:"\u5931\u8D25"})]})}}];return(0,e.jsx)("div",{className:i,children:(0,e.jsx)(G.Z,{columns:f,scroll:{x:1200},pagination:{showQuickJumper:!0,defaultPageSize:10},search:{},expandable:{expandRowByClick:!0,expandedRowClassName:function(){return a()("".concat(V))},expandedRowRender:function(n,s){return(0,e.jsx)(J,{record:n,index:s,type:m.F.user})},expandIcon:function(n){var s=n.expanded,u=n.onExpand,N=n.record;return s?(0,e.jsx)(b.Z,{onClick:function(p){return u(N,p)}}):(0,e.jsx)(w.Z,{onClick:function(p){return u(N,p)}})}},actionRef:v,params:{userType:m.F.user},request:O,rowKey:"id",dateFormatter:"string"})})},je=function(){var v=(0,T.useState)(m.F.user),o=C()(v,2),d=o[0],c=o[1];return(0,e.jsxs)(F._z,{tabActiveKey:d,onTabChange:function(x){c(x)},tabList:[{key:m.F.user,tab:"\u7528\u6237\u884C\u4E3A"},{key:m.F.admin,tab:"\u7BA1\u7406\u5458\u884C\u4E3A"}],content:"\u5BA1\u8BA1\u65E5\u5FD7\u8BB0\u5F55\u4E86\u6240\u6709\u5E73\u53F0\u7528\u6237\u8FDB\u884C\u7684\u5173\u952E\u64CD\u4F5C\uFF0C\u65E0\u8BBA\u662F\u7BA1\u7406\u5458\u8FDB\u884C\u7684\u6279\u91CF\u64CD\u4F5C\u3001\u8FD8\u662F\u7528\u6237\u4FA7\u8FDB\u884C\u7684\u591A\u56E0\u7D20\u8BA4\u8BC1\uFF0C\u90FD\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\u5BF9\u5E94\u7684\u8BB0\u5F55\uFF0C\u4EE5\u5BF9\u67D0\u6B21\u6539\u53D8\u63D0\u4F9B\u5145\u5206\u7684\u6EAF\u6E90\u6570\u636E\u3002",children:[d===m.F.user&&(0,e.jsx)(fe,{}),d===m.F.admin&&(0,e.jsx)(ve,{})]})}}}]);
