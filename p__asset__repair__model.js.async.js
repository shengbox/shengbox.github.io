(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{f5gB:function(e,a,t){"use strict";t.r(a);var r=t("d6i3"),n=t.n(r),s=t("p0pE"),c=t.n(s),i=t("GIZZ"),u=t.n(i),p=t("7Qib"),o=t("3Unq"),l=t("3eXy"),d=l["a"].queryAssetRepair,w=l["a"].createAssetRepair,y=l["a"].queryUsers;a["default"]=u()(o["b"],{namespace:"repair",state:{users:[],currentItem:{},modalVisible:!1,modalType:"create",selectedRowKeys:[]},subscriptions:{setup:function(e){var a=e.dispatch,t=e.history;t.listen(function(e){if(Object(p["g"])("/asset/repair",e.pathname)){var t=e.query||{page:1,pageSize:10};a({type:"query",payload:t})}})}},effects:{query:n.a.mark(function e(a,t){var r,s,i,u,p;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,s=void 0===r?{}:r,i=t.call,u=t.put,e.next=4,i(d,s);case 4:if(p=e.sent,!p.success){e.next=8;break}return e.next=8,u({type:"querySuccess",payload:c()({},{list:p.list})});case 8:case"end":return e.stop()}},e)}),create:n.a.mark(function e(a,t){var r,s,c,i,u;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,s=void 0===r?{}:r,c=t.call,i=t.put,e.next=4,c(w,s);case 4:if(u=e.sent,!u.success){e.next=10;break}return e.next=8,i({type:"hideModal"});case 8:e.next=11;break;case 10:throw u;case 11:case"end":return e.stop()}},e)}),update:n.a.mark(function e(a,t){var r;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=a.payload,void 0===r?{}:r,t.select,t.call,t.put;case 2:case"end":return e.stop()}},e)}),delete:n.a.mark(function e(a,t){var r;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=a.payload,void 0===r?{}:r,t.select,t.call,t.put;case 2:case"end":return e.stop()}},e)}),showModal:n.a.mark(function e(a,t){var r,s,c,i;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,void 0===r?{}:r,t.select,s=t.call,c=t.put,e.next=4,s(y);case 4:if(i=e.sent,!i.success){e.next=10;break}return e.next=8,c({type:"updateState",payload:{users:i.list}});case 8:e.next=11;break;case 10:throw i;case 11:case"end":return e.stop()}},e)}),showDetail:n.a.mark(function e(a,t){var r,s,c;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,s=void 0===r?{}:r,t.select,t.call,c=t.put,e.next=4,c({type:"updateState",payload:{modalType:"detail",modalVisible:!0,currentItem:s}});case 4:case"end":return e.stop()}},e)})},reducers:{showModal:function(e,a){var t=a.payload;return c()({},e,t,{modalVisible:!0})},hideModal:function(e){return c()({},e,{modalVisible:!1})}}})}}]);