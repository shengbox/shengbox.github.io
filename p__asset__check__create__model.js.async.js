(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{DX6q:function(e,a,t){"use strict";t.r(a);var n=t("d6i3"),r=t.n(n),s=t("p0pE"),c=t.n(s),o=t("GIZZ"),i=t.n(o),p=t("7Qib"),u=t("3Unq"),d=t("3eXy"),l=d["a"].queryCommonOptions;a["default"]=i()(u["b"],{namespace:"checkCreate",state:{currentItem:{},modalVisible:!1,modalType:"create",selectedRowKeys:[],options:{sources:[],asset_type_tree:[],companies:[],dept_tree:[],areas:[],accounts:[]}},subscriptions:{setup:function(e){var a=e.dispatch,t=e.history;t.listen(function(e){if(Object(p["g"])("/asset/check/create",e.pathname)){var t=e.query||{page:1,pageSize:10};a({type:"query",payload:t})}})}},effects:{query:r.a.mark(function e(a,t){var n,s,o,i;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,void 0===n?{}:n,s=t.call,o=t.put,e.next=4,s(l,{contains:"accounts|dept_tree|areas|companies|sources|asset_type_tree"});case 4:if(i=e.sent,!i.success){e.next=8;break}return e.next=8,o({type:"updateState",payload:c()({},{options:i})});case 8:case"end":return e.stop()}},e)}),create:r.a.mark(function e(a,t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.payload,void 0===n?{}:n,t.call,t.put;case 2:case"end":return e.stop()}},e)}),update:r.a.mark(function e(a,t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.payload,void 0===n?{}:n,t.select,t.call,t.put;case 2:case"end":return e.stop()}},e)}),delete:r.a.mark(function e(a,t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.payload,void 0===n?{}:n,t.select,t.call,t.put;case 2:case"end":return e.stop()}},e)})},reducers:{showModal:function(e,a){var t=a.payload;return c()({},e,t,{modalVisible:!0})},hideModal:function(e){return c()({},e,{modalVisible:!1})}}})}}]);