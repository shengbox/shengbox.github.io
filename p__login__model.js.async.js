(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{Mdvy:function(e,n,t){"use strict";t.r(n);var a=t("d6i3"),s=t.n(a),r=t("7Qib"),c=t("3eXy"),o=t("je13"),u=t.n(o),p=c["a"].loginUser;n["default"]={namespace:"login",state:{},effects:{login:s.a.mark(function e(n,t){var a,c,o,i,d,l,k,w;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=n.payload,c=t.put,o=t.call,i=t.select,e.next=4,o(p,a);case 4:return d=e.sent,e.next=7,i(function(e){return e.app});case 7:if(l=e.sent,k=l.locationQuery,!d.success){e.next=17;break}return u.a.set("token",d.token),w=k.from,e.next=14,c({type:"app/query"});case 14:Object(r["g"])("/login",w)?r["k"].push("/dashboard"):["","/"].includes(w)?r["k"].push("/dashboard"):r["k"].push(w),e.next=18;break;case 17:throw d;case 18:case"end":return e.stop()}},e)})}}}}]);