(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{vh93:function(e,a,t){"use strict";t.r(a);var n=t("d6i3"),r=t.n(n),s=t("p0pE"),c=t.n(s),i=t("GIZZ"),u=t.n(i),o=t("7Qib"),p=t("3Unq"),l=t("3eXy"),d=l["a"].queryAssetFinance,w=l["a"].createAssetFinance,y=l["a"].queryDepartment;a["default"]=u()(p["b"],{namespace:"finance",state:{companies:[],currentItem:{},modalVisible:!1,modalType:"",selectedRowKeys:[]},subscriptions:{setup:function(e){var a=e.dispatch,t=e.history;t.listen(function(e){if(Object(o["g"])("/asset/finance",e.pathname)){var t=e.query||{page:1,pageSize:10};a({type:"query",payload:t})}})}},effects:{query:r.a.mark(function e(a,t){var n,s,i,u,o;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,s=void 0===n?{}:n,i=t.call,u=t.put,e.next=4,i(d,s);case 4:if(o=e.sent,!o.success){e.next=8;break}return e.next=8,u({type:"querySuccess",payload:c()({},{list:o.list})});case 8:case"end":return e.stop()}},e)}),create:r.a.mark(function e(a,t){var n,s,c,i,u;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,s=void 0===n?{}:n,c=t.call,i=t.put,e.next=4,c(w,s);case 4:if(u=e.sent,!u.success){e.next=10;break}return e.next=8,i({type:"hideModal"});case 8:e.next=11;break;case 10:throw u;case 11:case"end":return e.stop()}},e)}),update:r.a.mark(function e(a,t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.payload,void 0===n?{}:n,t.select,t.call,t.put;case 2:case"end":return e.stop()}},e)}),delete:r.a.mark(function e(a,t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.payload,void 0===n?{}:n,t.select,t.call,t.put;case 2:case"end":return e.stop()}},e)}),showModal:r.a.mark(function e(a,t){var n,s,i,u;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,void 0===n?{}:n,t.select,s=t.call,i=t.put,e.next=4,s(y,{type:"company"});case 4:if(u=e.sent,!u.success){e.next=8;break}return e.next=8,i({type:"updateState",payload:c()({},{companies:u.list})});case 8:case"end":return e.stop()}},e)}),showDetail:r.a.mark(function e(a,t){var n,s,c;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,s=void 0===n?{}:n,t.select,t.call,c=t.put,e.next=4,c({type:"updateState",payload:{modalType:"detail",modalVisible:!0,currentItem:s}});case 4:case"end":return e.stop()}},e)})},reducers:{showModal:function(e,a){var t=a.payload;return c()({},e,t,{modalVisible:!0})},hideModal:function(e){return c()({},e,{modalVisible:!1})}}})}}]);