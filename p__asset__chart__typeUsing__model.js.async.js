(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{FifM:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),s=a.n(n),i=a("p0pE"),p=a.n(i),r=a("GIZZ"),c=a.n(r),u=a("7Qib"),o=a("3Unq"),y=a("3eXy"),l=y["a"].reportTypeUsing;t["default"]=c()(o["b"],{namespace:"typeUsing",state:{list:[]},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){if(Object(u["g"])("/asset/chart/typeUsing",e.pathname)){var a=e.query||{page:1,pageSize:10};t({type:"query",payload:a})}})}},effects:{query:s.a.mark(function e(t,a){var n,i,r,c,u;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,i=void 0===n?{}:n,r=a.call,c=a.put,e.next=4,r(l,i);case 4:if(u=e.sent,!u.success){e.next=8;break}return e.next=8,c({type:"querySuccess",payload:p()({},{list:u.list,pagination:{current:Number(i.page)||1,pageSize:Number(i.pageSize)||10,total:u.total}})});case 8:case"end":return e.stop()}},e)})}})}}]);