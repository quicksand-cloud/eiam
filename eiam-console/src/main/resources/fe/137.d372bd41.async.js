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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[137],{137:function(or,de,v){v.d(de,{$C:function(){return Xe},AG:function(){return Ke},B9:function(){return De},Cj:function(){return er},Dx:function(){return ze},EJ:function(){return sr},FV:function(){return $e},GX:function(){return Be},Iw:function(){return Je},K8:function(){return He},NK:function(){return xe},Nq:function(){return Le},PR:function(){return Oe},QA:function(){return ur},QV:function(){return Se},S4:function(){return Me},SN:function(){return Ve},Xu:function(){return we},Yi:function(){return be},Zy:function(){return qe},_p:function(){return nr},bh:function(){return Fe},eE:function(){return Re},eU:function(){return ar},gD:function(){return Ze},jA:function(){return tr},kX:function(){return Ge},lE:function(){return Te},lu:function(){return Ie},lz:function(){return rr},mB:function(){return ve},mo:function(){return ir},mz:function(){return je},nv:function(){return Qe},qD:function(){return We},qb:function(){return Ue},r4:function(){return Pe},re:function(){return ke},rl:function(){return ye},rn:function(){return Ye},w0:function(){return Ee},wZ:function(){return Ce},wk:function(){return Ne},xc:function(){return Ae},z3:function(){return ge}});var _e=v(11281),m=v.n(_e),me=v(97983),u=v.n(me),fe=v(40794),s=v.n(fe),f=v(25191),he=v(80129),pe=v.n(he),o=v(98971);function ve(){return g.apply(this,arguments)}function g(){return g=s()(u()().mark(function n(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("/api/organization/get_root"));case 1:case"end":return a.stop()}},n)})),g.apply(this,arguments)}function ge(n){return y.apply(this,arguments)}function y(){return y=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/organization/get_child",{params:{parentId:t}}));case 1:case"end":return e.stop()}},n)})),y.apply(this,arguments)}function ye(n){return w.apply(this,arguments)}function w(){return w=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/organization/filter_tree",{params:{keyWord:t}}));case 1:case"end":return e.stop()}},n)})),w.apply(this,arguments)}function we(n){return b.apply(this,arguments)}function b(){return b=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/organization/get/".concat(t)));case 1:case"end":return e.stop()}},n)})),b.apply(this,arguments)}function be(n){return $.apply(this,arguments)}function $(){return $=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/organization/create",{method:"POST",requestType:"json",data:t}));case 1:case"end":return e.stop()}},n)})),$.apply(this,arguments)}function $e(n){return E.apply(this,arguments)}function E(){return E=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/organization/update",{method:"PUT",requestType:"json",data:t}));case 1:case"end":return e.stop()}},n)})),E.apply(this,arguments)}function Ee(n){return U.apply(this,arguments)}function U(){return U=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/organization/delete/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}},n)})),U.apply(this,arguments)}function Ue(n,t){return T.apply(this,arguments)}function T(){return T=s()(u()().mark(function n(t,a){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("/api/organization/move",{params:{id:t,parentId:a},method:"PUT"}));case 1:case"end":return l.stop()}},n)})),T.apply(this,arguments)}function Te(n,t,a){return P.apply(this,arguments)}function P(){return P=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/user/list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),P.apply(this,arguments)}function Pe(n){return I.apply(this,arguments)}function I(){return I=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/create",{method:"POST",requestType:"json",data:t}));case 1:case"end":return e.stop()}},n)})),I.apply(this,arguments)}function Ie(n,t,a){return q.apply(this,arguments)}function q(){return q=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/user/login_audit/list",{method:"GET",params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),q.apply(this,arguments)}function qe(n){return k.apply(this,arguments)}function k(){return k=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/idp_bind",{method:"GET",params:m()({},t)}).then(function(l){var i={data:l!=null&&l.result?l==null?void 0:l.result:[],success:l==null?void 0:l.success};return Promise.resolve(i)}));case 1:case"end":return e.stop()}},n)})),k.apply(this,arguments)}function ke(n){return S.apply(this,arguments)}function S(){return S=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/unbind_idp",{method:"DELETE",params:{id:t}}));case 1:case"end":return e.stop()}},n)})),S.apply(this,arguments)}function lr(n,t){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,a){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("/api/user/transfer",{method:"PUT",params:{userId:t,orgId:a}}));case 1:case"end":return l.stop()}},n)})),O.apply(this,arguments)}function Se(n){return L.apply(this,arguments)}function L(){return L=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/reset_password",{method:"PUT",data:t}));case 1:case"end":return e.stop()}},n)})),L.apply(this,arguments)}function Oe(n){return G.apply(this,arguments)}function G(){return G=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/get/".concat(t),{method:"GET"}));case 1:case"end":return e.stop()}},n)})),G.apply(this,arguments)}function Le(n){return j.apply(this,arguments)}function j(){return j=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/update",{method:"PUT",requestType:"json",data:t}));case 1:case"end":return e.stop()}},n)})),j.apply(this,arguments)}function Ge(n){return z.apply(this,arguments)}function z(){return z=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/delete/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}},n)})),z.apply(this,arguments)}function cr(n){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime().mark(function n(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/user/resign/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function je(n,t,a){return R.apply(this,arguments)}function R(){return R=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/user/param_check",{params:{id:e,type:t,value:a},method:"GET"}));case 1:case"end":return i.stop()}},n)})),R.apply(this,arguments)}function ze(n){return M.apply(this,arguments)}function M(){return M=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/enable/".concat(t),{method:"PUT"}));case 1:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function De(n){return C.apply(this,arguments)}function C(){return C=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user/disable/".concat(t),{method:"PUT"}));case 1:case"end":return e.stop()}},n)})),C.apply(this,arguments)}function Re(n,t,a){return A.apply(this,arguments)}function A(){return A=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/user/notin_group_list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),A.apply(this,arguments)}function Me(n,t,a){return B.apply(this,arguments)}function B(){return B=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/user_group/list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),B.apply(this,arguments)}function Ce(n){return K.apply(this,arguments)}function K(){return K=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user_group/create",{method:"POST",requestType:"json",data:t}));case 1:case"end":return e.stop()}},n)})),K.apply(this,arguments)}function Ae(n){return H.apply(this,arguments)}function H(){return H=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user_group/get/".concat(t),{method:"GET"}));case 1:case"end":return e.stop()}},n)})),H.apply(this,arguments)}function Be(n){return W.apply(this,arguments)}function W(){return W=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user_group/update",{method:"PUT",requestType:"json",data:t}));case 1:case"end":return e.stop()}},n)})),W.apply(this,arguments)}function Ke(n){return Y.apply(this,arguments)}function Y(){return Y=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/user_group/delete/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}},n)})),Y.apply(this,arguments)}function He(n,t){return N.apply(this,arguments)}function N(){return N=s()(u()().mark(function n(t,a){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("/api/user_group/remove_member/".concat(t),{params:{userId:a},method:"DELETE"}));case 1:case"end":return l.stop()}},n)})),N.apply(this,arguments)}function We(n,t){return V.apply(this,arguments)}function V(){return V=s()(u()().mark(function n(t,a){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("/api/user_group/batch/remove_member/".concat(t),{method:"DELETE",params:{userIds:a},paramsSerializer:function(r){return pe().stringify(r,{indices:!1})}}));case 1:case"end":return l.stop()}},n)})),V.apply(this,arguments)}function Ye(n,t,a){return F.apply(this,arguments)}function F(){return F=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/user_group/".concat(t.id,"/member_list"),{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),F.apply(this,arguments)}function Ne(n,t){return X.apply(this,arguments)}function X(){return X=s()(u()().mark(function n(t,a){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("/api/user_group/add_member/".concat(t),{method:"POST",requestType:"form",params:{userIds:a},paramsSerializer:function(r){return pe().stringify(r,{indices:!1})}}));case 1:case"end":return l.stop()}},n)})),X.apply(this,arguments)}function Ve(n,t,a){return Q.apply(this,arguments)}function Q(){return Q=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/identity_source/list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),Q.apply(this,arguments)}function Fe(n){return Z.apply(this,arguments)}function Z(){return Z=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/get/".concat(t)));case 1:case"end":return e.stop()}},n)})),Z.apply(this,arguments)}function Xe(n){return J.apply(this,arguments)}function J(){return J=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/get/config/".concat(t)));case 1:case"end":return e.stop()}},n)})),J.apply(this,arguments)}function Qe(n){return x.apply(this,arguments)}function x(){return x=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/sync/execute/".concat(t),{method:"POST"}));case 1:case"end":return e.stop()}},n)})),x.apply(this,arguments)}function Ze(n){return ee.apply(this,arguments)}function ee(){return ee=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/create",{data:t,method:"POST",requestType:"json"}));case 1:case"end":return e.stop()}},n)})),ee.apply(this,arguments)}function Je(n){return re.apply(this,arguments)}function re(){return re=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/update",{data:t,method:"PUT",requestType:"json"}));case 1:case"end":return e.stop()}},n)})),re.apply(this,arguments)}function xe(n){return ne.apply(this,arguments)}function ne(){return ne=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/save/config",{method:"PUT",data:t,requestType:"json"}));case 1:case"end":return e.stop()}},n)})),ne.apply(this,arguments)}function er(n){return te.apply(this,arguments)}function te(){return te=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/enable/".concat(t),{method:"PUT"}));case 1:case"end":return e.stop()}},n)})),te.apply(this,arguments)}function rr(n){return ue.apply(this,arguments)}function ue(){return ue=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/disable/".concat(t),{method:"PUT"}));case 1:case"end":return e.stop()}},n)})),ue.apply(this,arguments)}function nr(n){return ae.apply(this,arguments)}function ae(){return ae=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/delete/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}},n)})),ae.apply(this,arguments)}function tr(n){return ie.apply(this,arguments)}function ie(){return ie=s()(u()().mark(function n(t){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/identity_source/config_validator",{method:"POST",data:t,requestType:"json"}));case 1:case"end":return e.stop()}},n)})),ie.apply(this,arguments)}function ur(n,t,a){return se.apply(this,arguments)}function se(){return se=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/identity_source/sync/history_list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),se.apply(this,arguments)}function ar(n,t,a){return oe.apply(this,arguments)}function oe(){return oe=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/identity_source/sync/record_list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),oe.apply(this,arguments)}function ir(n,t,a){return le.apply(this,arguments)}function le(){return le=s()(u()().mark(function n(t,a,e){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("/api/identity_source/event/record_list",{params:m()(m()(m()({},t),(0,f.YE)(a)),(0,f.oH)(e))}).then(function(r){var c,p,d,_,h={data:r!=null&&(c=r.result)!==null&&c!==void 0&&c.list?r==null||(p=r.result)===null||p===void 0?void 0:p.list:[],success:r==null?void 0:r.success,total:r!=null&&(d=r.result)!==null&&d!==void 0&&d.pagination?r==null||(_=r.result)===null||_===void 0?void 0:_.pagination.total:0};return Promise.resolve(h)}));case 1:case"end":return i.stop()}},n)})),le.apply(this,arguments)}function sr(){return ce.apply(this,arguments)}function ce(){return ce=s()(u()().mark(function n(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("/api/password/generate",{method:"GET"}));case 1:case"end":return a.stop()}},n)})),ce.apply(this,arguments)}}}]);