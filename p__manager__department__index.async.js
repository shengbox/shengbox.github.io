(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{YsCU:function(e,a,t){"use strict";t.r(a);t("IzEo");var n,r,l,o,i,c,d,p=t("bx4M"),m=(t("14J3"),t("BMrR")),s=(t("5NDa"),t("5rEg")),u=(t("jCWc"),t("kPKH")),h=(t("qVdP"),t("jsC+")),f=(t("+L6B"),t("2/Rp")),y=(t("lUTK"),t("BvKs")),E=(t("/zsF"),t("PArb"),t("miYZ"),t("tsqr")),k=t("jehZ"),v=t.n(k),b=(t("Pwec"),t("CtXQ")),g=t("p0pE"),_=t.n(g),w=t("2Taf"),C=t.n(w),N=t("vZ4D"),I=t.n(N),R=t("l4Ni"),V=t.n(R),x=t("ujKo"),F=t.n(x),O=t("MhPg"),j=t.n(O),q=(t("y8nQ"),t("Vl3Y")),K=(t("ozfa"),t("MJZm")),L=(t("2qtc"),t("kLXV")),P=t("q1tI"),D=t.n(P),M=t("MuoO"),S=t("7Qib"),B=t("Qyje"),T=t("Kvkj"),Z=(t("7Kak"),t("9yH6")),A=(t("nRaC"),t("5RzL")),z=t("Y/ft"),J=t.n(z),Q=q["a"].Item,Y={labelCol:{span:6},wrapperCol:{span:14}},H=(n=q["a"].create(),n((l=function(e){function a(){var e,t;C()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=V()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleOk=function(){var e=t.props,a=e.item,n=void 0===a?{}:a,r=e.onOk,l=e.form.validateFields;l(function(e,a){if(!e){var t=_()({},a,{id:n.id,org_type:Number(a.org_type),parent_id:Number(a.parent_id)});r(t)}})},t}return j()(a,e),I()(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,t=e.item,n=void 0===t?{}:t,r=e.options,l=J()(e,["form","item","options"]);return D.a.createElement(L["a"],v()({},l,{onOk:this.handleOk}),D.a.createElement(q["a"],null,D.a.createElement(Q,v()({label:"\u7ec4\u7ec7\u540d\u79f0",hasFeedback:!0},Y),a("name",{initialValue:n.name,rules:[{required:!0}]})(D.a.createElement(s["a"],{placeholder:"\u7ec4\u7ec7\u540d\u79f0"}))),D.a.createElement(Q,v()({label:"\u7ec4\u7ec7\u7f16\u7801",hasFeedback:!0},Y),a("code",{initialValue:n.code,rules:[{required:!0}]})(D.a.createElement(s["a"],{placeholder:"\u7ec4\u7ec7\u7f16\u7801"}))),D.a.createElement(Q,v()({label:"\u4e0a\u7ea7\u7ec4\u7ec7",hasFeedback:!0},Y),a("parent_id",{initialValue:n.parent_id,rules:[{required:!0}]})(D.a.createElement(A["a"],{allowClear:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"\u4e0a\u7ea7\u7ec4\u7ec7",treeDefaultExpandAll:!0,treeData:r.dept_tree}))),D.a.createElement(Q,v()({label:"\u7ec4\u7ec7\u7c7b\u522b",hasFeedback:!0},Y),a("org_type",{initialValue:n.org_type||2})(D.a.createElement(Z["a"].Group,{disabled:!0},D.a.createElement(Z["a"],{value:1},"\u516c\u53f8"),D.a.createElement(Z["a"],{value:2},"\u90e8\u95e8"))))))}}]),a}(P["PureComponent"]),r=l))||r),U=H,X=t("ZrKh"),G=t.n(X);t.d(a,"default",function(){return ee});var W=L["a"].confirm,$=K["a"].TreeNode,ee=(o=q["a"].create(),i=Object(M["connect"])(function(e){var a=e.department,t=e.loading;return{department:a,loading:t}}),o(c=i((d=function(e){function a(){var e,t;C()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=V()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleRefresh=function(e){var a=t.props.location,n=a.query,r=a.pathname;S["k"].push({pathname:r,search:Object(B["stringify"])(_()({},n,e),{arrayFormat:"repeat"})})},t.handleDelete=function(){var e=t.props.dispatch,a=t.state.item;e({type:"department/delete",payload:{id:a.id}}).then(function(){t.handleRefresh({})})},t.handleSubmit=function(){var e=t.props,a=e.dispatch,n=e.department.currentItem,r=e.form.validateFields;r(function(e,r){if(!e){var l=_()({},r,{id:n.id,parent_id:n.parent_id});l.id||(l.id=0),a({type:"department/update",payload:l}).then(function(){t.handleRefresh({})})}})},t.onSelect=function(e,a){if(console.log("selectedKeys",e),console.log("info",a),e[0]){var n=t.props.dispatch,r=a.node.props.dataRef?a.node.props.dataRef:a.node.props;n({type:"department/updateState",payload:{currentItem:r}})}},t.handleNode=function(e,a){var n=t.props.dispatch;switch(a){case"add":n({type:"department/showModal",payload:{currentItem:{}}});break;case"delete":W({title:"\u786e\u5b9a\u662f\u8981\u5220\u9664\u5417?",onOk:function(){n({type:"department/delete",payload:{id:e.id}}).then(function(){t.handleRefresh({})})}});break;case"edit":n({type:"department/showModal",payload:{currentItem:e}});break;default:break}},t.renderTreeNodes=function(e){return e.map(function(e){var a=D.a.createElement("div",{className:"operate",style:{float:"right"}},D.a.createElement("span",{style:{color:"red"}},e.branch_office?"\u516c\u53f8":"\u90e8\u95e8"),"\\",D.a.createElement("span",null,e.code," \\ ",e.name," "),D.a.createElement("a",{onClick:function(){return t.handleNode(e,"add")}},D.a.createElement(b["a"],{type:"plus",style:{marginLeft:15}})),D.a.createElement("a",{onClick:function(){return t.handleNode(e,"edit")}},D.a.createElement(b["a"],{type:"edit",style:{marginLeft:15}})),D.a.createElement("a",{onClick:function(){return t.handleNode(e,"delete")}},D.a.createElement(b["a"],{type:"close",style:{marginLeft:15}})));return e.children?D.a.createElement($,{icon:D.a.createElement(b["a"],{type:e.org_type?"bank":"team"}),title:a,key:e.id,dataRef:e},t.renderTreeNodes(e.children)):D.a.createElement($,v()({icon:D.a.createElement(b["a"],{type:e.org_type?"bank":"team"})},e,{title:a,key:e.key}))})},t.handleCreate=function(e,a){var n=t.props,r=n.dispatch,l=n.department.currentItem;1==e&&r({type:"department/updateState",payload:{currentItem:{parent_id:l.id,parent_name:l.code+"--"+l.name}}})},t.handleSync=function(){var e=t.props.dispatch;E["a"].loading({content:"Loading...",key:"sync"}),e({type:"department/sync",payload:{}}).then(function(){E["a"].success({content:"\u540c\u6b65\u6210\u529f!",key:"sync",duration:2}),t.handleRefresh({})})},t}return j()(a,e),I()(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.department,n=t.list,r=t.currentItem,l=a.form.getFieldDecorator,o=r,i=n,c=D.a.createElement(y["a"],null,D.a.createElement(y["a"].Item,null,D.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",onClick:function(a){return e.handleCreate(1,a)}}," \u4e0b\u7ea7\u90e8\u95e8 ")),D.a.createElement(y["a"].Item,null,D.a.createElement("a",{target:"_blank",rel:"noopener noreferrer"}," \u540c\u7ea7\u90e8\u95e8 ")));return D.a.createElement(T["h"],{inner:!0},D.a.createElement(m["a"],{style:{marginBottom:16}},D.a.createElement(u["a"],{span:4},D.a.createElement(h["a"],{overlay:c,placement:"bottomLeft",className:"margin-right"},D.a.createElement(f["a"],{type:"primary"},"\u65b0\u589e ",D.a.createElement(b["a"],{type:"down"}))),D.a.createElement(f["a"],{onClick:this.handleSync},"\u540c\u6b65",D.a.createElement(b["a"],{type:"down"}))),D.a.createElement(u["a"],{span:4},l("code",{initialValue:o.code})(D.a.createElement(s["a"],{style:{width:"calc(100% - 16px)"},addonBefore:"\u90e8\u95e8\u7f16\u7801"}))),D.a.createElement(u["a"],{span:4},l("name",{initialValue:o.name,rules:[{required:!0}]})(D.a.createElement(s["a"],{style:{width:"calc(100% - 16px)"},addonBefore:"\u90e8\u95e8\u540d\u79f0"}))),D.a.createElement(u["a"],{span:4},D.a.createElement(s["a"],{style:{width:"calc(100% - 16px)"},addonBefore:"\u7236\u7ea7",value:o.parent_name})),D.a.createElement(u["a"],{span:4},D.a.createElement(m["a"],{type:"flex",align:"middle",justify:"space-between"},D.a.createElement("div",null,D.a.createElement(f["a"],{type:"primary",className:"margin-right",icon:"save",onClick:function(a){return e.handleSubmit(a)}},"\u4fdd\u5b58"),D.a.createElement(f["a"],{type:"danger",icon:"delete",onClick:this.handleDelete},"\u5220\u9664"))))),D.a.createElement(m["a"],null,D.a.createElement(u["a"],{span:18,xl:{span:18},md:{span:24}},D.a.createElement(p["a"],{title:"\u7ec4\u7ec7\u7ed3\u6784"},D.a.createElement(K["a"],{className:G.a.tree,showLine:!0,defaultExpandAll:!0,selectable:!1,checkable:!1},this.renderTreeNodes(i))))),D.a.createElement(U,this.modalProps))}},{key:"modalProps",get:function(){var e=this,a=this.props,t=a.dispatch,n=a.department,r=n.modalVisible,l=n.currentItem,o=n.options;return{options:o,title:"\u7ec4\u7ec7\u673a\u6784",item:l,visible:r,destroyOnClose:!0,onCancel:function(){t({type:"department/hideModal"})},onOk:function(a){a.id||(a.id=0),t({type:"department/update",payload:a}).then(function(){e.handleRefresh({})})}}}}]),a}(P["PureComponent"]),c=d))||c)||c)},ZrKh:function(e,a,t){e.exports={normal:"normal___2nm7u",tree:"tree___2ImV1"}}}]);