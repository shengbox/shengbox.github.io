(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{AaOz:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),r=a.n(n),c=a("GIZZ"),s=a.n(c),u=a("3Unq"),p=a("7Qib"),i=a("3eXy"),o=i["a"].queryIntegrate,d=i["a"].updateIntegrate;t["default"]=s()(u["b"],{namespace:"integrate",state:{dingTalk:{},wechat:{},currentItem:{}},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){Object(p["g"])("/manager/interaction",e.pathname)&&t({type:"query"})})}},effects:{query:r.a.mark(function e(t,a){var n,c,s;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,n=a.call,c=a.put,e.next=4,n(o,{});case 4:if(s=e.sent,!s.success){e.next=8;break}return e.next=8,c({type:"updateState",payload:{currentItem:s}});case 8:case"end":return e.stop()}},e)}),update:r.a.mark(function e(t,a){var n,c,s,u;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,c=a.call,s=a.put,e.next=4,c(d,n);case 4:if(u=e.sent,!u.success){e.next=8;break}return e.next=8,s({type:"updateState"});case 8:case"end":return e.stop()}},e)})},reducers:{}})}}]);