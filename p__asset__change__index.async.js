(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{t4kA:function(e,a,t){"use strict";t.r(a);t("g9YV");var n,l,r,i,s,c,o=t("wCAj"),d=t("jehZ"),m=t.n(d),p=(t("14J3"),t("BMrR")),h=(t("jCWc"),t("kPKH")),u=t("eHn4"),E=t.n(u),b=(t("+L6B"),t("2/Rp")),f=t("p0pE"),y=t.n(f),g=t("2Taf"),k=t.n(g),_=t("vZ4D"),w=t.n(_),v=t("l4Ni"),C=t.n(v),x=t("ujKo"),F=t.n(x),I=t("MhPg"),S=t.n(I),V=(t("iQDF"),t("+eQT")),M=t("q1tI"),N=t.n(M),O=t("MuoO"),P=t("7Qib"),Y=t("Qyje"),R=t("Kvkj"),D=(t("2qtc"),t("kLXV")),K=(t("6UJt"),t("DFOY")),j=(t("nRaC"),t("5RzL")),A=(t("zYCJ"),t("4dqd")),q=t.n(A),T=(t("Telt"),t("Tckk")),J=t("Y/ft"),Q=t.n(J),U=t("d6i3"),z=t.n(U),B=t("1l/V"),H=t.n(B),L=(t("y8nQ"),t("Vl3Y")),Z=(t("Znn+"),t("ZTPi")),W=(t("5NDa"),t("5rEg")),X=(t("OaEy"),t("2fM7")),G=t("wd/R"),$=t.n(G),ee=t("Aeqt"),ae=t("t3Un"),te=t("tvWN"),ne=t.n(te),le=X["a"].Option,re=W["a"].TextArea,ie=Z["a"].TabPane,se=L["a"].Item,ce={labelCol:{span:6},wrapperCol:{span:14}},oe={labelCol:{span:3},wrapperCol:{span:19}},de=(n=L["a"].create(),n((r=function(e){function a(){var e,t;k()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=C()(this,(e=F()(a)).call.apply(e,[this].concat(l))),t.state={standardModel:{},employees:[],chooseVisible:!1,selectedRowKeys:[],selectedRows:[]},t.handleOk=function(){var e=t.state.selectedRowKeys,a=t.props,n=a.onOk,l=a.form.validateFields;l(function(a,t){if(!a){var l=y()({},t,{bill_date:$()(t.bill_date).format("YYYY-MM-DD"),use_company:Number(t.use_company),asset_type:Number(t.asset_type),use_dept:Number(t.use_dept),manager:Number(t.manager),area:Number(t.area),asset_id:e});l.buy_date&&(l.buy_date=$()(l.buy_date).format("YYYY-MM-DD")),n(l)}})},t.handleUserSearch=function(){var e=H()(z.a.mark(function e(a){var n,l;return z.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return n=Object(Y["stringify"])({q:a}),e.next=4,Object(ae["a"])({url:ee["apiPrefix"]+"/user?".concat(n),data:{}});case 4:l=e.sent,t.setState({employees:l.list}),e.next=9;break;case 8:t.setState({employees:[]});case 9:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.chooseOpen=function(){t.setState({chooseVisible:!0})},t.handleCompanyChange=function(e){var a=t.props.form.setFieldsValue;a({use_dept:null})},t.onSpaceChange=function(e,a){if(a.length>0){var n=a[a.length-1];t.setState({standardModel:n.data_ref})}else t.setState({standardModel:{}})},t}return S()(a,e),w()(a,[{key:"render",value:function(){var e,a,t,n=this.state,l=n.chooseVisible,r=n.selectedRows,i=n.standardModel,s=this.props,c=s.form,d=c.getFieldDecorator,u=c.getFieldValue,E=(s.item,s.visible),f=s.options,y=Q()(s,["form","item","visible","options"]),g=f.dept_tree,k=u("use_company");k&&(g=null===(t=g.filter(function(e){return e.key==k})[0])||void 0===t?void 0:t.children);var _=[{title:"\u5e8f\u53f7",dataIndex:"serial_number",width:30,render:function(e,a,t){return N.a.createElement("span",null,t+1)}},{title:"\u7167\u7247",dataIndex:"image",key:"image",width:50,render:function(e){return N.a.createElement(T["a"],{style:{marginLeft:4},src:e})}},{title:"\u8d44\u4ea7\u6761\u7801",dataIndex:"barcode",key:"barcode",width:150},{title:"\u8d44\u4ea7\u540d\u79f0",dataIndex:"name",key:"name",width:100},{title:"\u6240\u5c5e\u516c\u53f8",dataIndex:"belong_company_name",width:100},{title:"\u5f53\u524d\u6240\u5728\u516c\u53f8",dataIndex:"using_company_name",width:100},{title:"\u5f53\u524d\u6240\u6709\u90e8\u95e8",dataIndex:"use_department",width:100},{title:"\u5f53\u524d\u4f7f\u7528\u4eba",dataIndex:"use_user",width:100},{title:"\u5b58\u653e\u5730\u5740",dataIndex:"address",width:150,render:function(e){return N.a.createElement(q.a,{tooltip:!0,length:10},e)}}];return N.a.createElement("div",null,N.a.createElement(D["a"],m()({},y,{visible:E&&!l,onOk:this.handleOk,bodyStyle:{height:550,overflowY:"scroll"}}),N.a.createElement(L["a"],{className:ne.a.form},N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:12},N.a.createElement(se,m()({label:"\u53d8\u66f4\u5355\u53f7",hasFeedback:!0},ce),d("bill_no",{})(N.a.createElement(W["a"],{disabled:!0})))),N.a.createElement(h["a"],{span:12},N.a.createElement(se,m()({label:"\u4e1a\u52a1\u65e5\u671f",hasFeedback:!0},ce),d("bill_date",{initialValue:$()(new Date,"YYYY-MM-DD"),rules:[{required:!0}]})(N.a.createElement(V["a"],{style:{width:"100%"}}))))),N.a.createElement(p["a"],{style:{marginBottom:16}},N.a.createElement(b["a"],{className:"margin-right",onClick:this.chooseOpen},"\u9009\u62e9\u53d8\u66f4\u7684\u8d44\u4ea7"),N.a.createElement(b["a"],{className:"margin-right"},"\u5220\u9664")),N.a.createElement(p["a"],null,N.a.createElement(o["a"],{pagination:!1,columns:_,dataSource:r,scroll:{x:1300},size:"small",rowKey:function(e){return e.id}})),N.a.createElement("br",null),N.a.createElement(Z["a"],{type:"card"},N.a.createElement(ie,{tab:"\u53d8\u66f4\u5185\u5bb9",key:"1"},N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u8d44\u4ea7\u7c7b\u522b",hasFeedback:!0},ce),d("asset_type",{initialValue:i.asset_type_id})(N.a.createElement(j["a"],{allowClear:!0,treeDefaultExpandAll:!0,placeholder:"\u8d44\u4ea7\u7c7b\u522b",style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:f.asset_type_tree,disabled:!!i.id})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u6807\u51c6\u578b\u53f7",hasFeedback:!0},ce),d("standard_model",{})(N.a.createElement(K["a"],{fieldNames:{label:"title",value:"value",children:"children"},options:f.specs_tree,onChange:this.onSpaceChange,placeholder:"\u6807\u51c6\u578b\u53f7"})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u8ba1\u91cf\u5355\u4f4d",hasFeedback:!0},ce),d("measure_unit",{initialValue:i.measure_unit})(N.a.createElement(W["a"],{placeholder:"\u8ba1\u91cf\u5355\u4f4d",disabled:!!i.id}))))),N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u8d44\u4ea7\u540d\u79f0",hasFeedback:!0},ce),d("asset_name",{initialValue:i.asset_name})(N.a.createElement(W["a"],{placeholder:"\u8d44\u4ea7\u540d\u79f0",disabled:!!i.id})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u89c4\u683c\u578b\u53f7",hasFeedback:!0},ce),d("specs",{initialValue:i.specs})(N.a.createElement(W["a"],{placeholder:"\u89c4\u683c\u578b\u53f7",disabled:!!i.id})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u8d2d\u5165\u65e5\u671f",hasFeedback:!0},ce),d("buy_date",{})(N.a.createElement(V["a"],{style:{width:"100%"}}))))),N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"SN\u53f7",hasFeedback:!0},ce),d("sn_no",{})(N.a.createElement(W["a"],{placeholder:"SN\u53f7"})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u6765\u6e90",hasFeedback:!0},ce),d("source",{initialValue:"\u8d2d\u5165"})(N.a.createElement(X["a"],{placeholder:"\u6765\u6e90"},f.sources.map(function(e){return N.a.createElement(le,{key:e},e)}))))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u7ba1\u7406\u5458",hasFeedback:!0},ce),d("manager",{})(N.a.createElement(X["a"],{placeholder:"\u7ba1\u7406\u5458"},f.accounts.map(function(e){return N.a.createElement(le,{key:e.id},e.name)})))))),N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u4f7f\u7528\u516c\u53f8",hasFeedback:!0},ce),d("use_company",{initialValue:String(null===(e=f.companies[0])||void 0===e?void 0:e.id)})(N.a.createElement(X["a"],{placeholder:"\u4f7f\u7528\u516c\u53f8",onChange:this.handleCompanyChange},f.companies.map(function(e){return N.a.createElement(le,{key:e.id},e.name)}))))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u4f7f\u7528\u90e8\u95e8",hasFeedback:!0},ce),d("use_dept",{})(N.a.createElement(j["a"],{allowClear:!0,treeDefaultExpandAll:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"\u4f7f\u7528\u90e8\u95e8",treeData:g})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u4f7f\u7528\u4eba",hasFeedback:!0},ce),d("use_employee",{})(N.a.createElement(X["a"],{showSearch:!0,showArrow:!1,filterOption:!1,defaultActiveFirstOption:!1,onSearch:this.handleUserSearch,placeholder:"\u641c\u7d22\u5458\u5de5"},this.state.employees.map(function(e){return N.a.createElement(le,{key:e.id},e.name)})))))),N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u4f7f\u7528\u671f\u9650",hasFeedback:!0},ce),d("useful_life",{})(N.a.createElement(W["a"],{placeholder:"\u4f7f\u7528\u671f\u9650"})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u4f9b\u5e94\u5546",hasFeedback:!0},ce),d("provider",{})(N.a.createElement(W["a"],{placeholder:"\u4f9b\u5e94\u5546"})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u5b58\u653e\u5730\u70b9",hasFeedback:!0},ce),d("address",{})(N.a.createElement(W["a"],{placeholder:"\u5b58\u653e\u5730\u70b9"}))))),N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u533a\u57df",hasFeedback:!0},ce),d("area",{initialValue:String(null===(a=f.areas[0])||void 0===a?void 0:a.id)})(N.a.createElement(X["a"],{placeholder:"\u533a\u57df"},f.areas.map(function(e){return N.a.createElement(le,{key:e.id},e.name)})))))),N.a.createElement(p["a"],null,N.a.createElement(h["a"],{span:16},N.a.createElement(se,m()({label:"\u5907\u6ce8",hasFeedback:!0},oe),d("remark",{})(N.a.createElement(re,{rows:5,placeholder:"\u5907\u6ce8"})))),N.a.createElement(h["a"],{span:8},N.a.createElement(se,m()({label:"\u7167\u7247",hasFeedback:!0},ce),d("photo",{})(N.a.createElement(R["a"],this.uploadProps))))))))),N.a.createElement(R["b"],this.chooseModalProps))}},{key:"uploadProps",get:function(){var e=this.props,a=e.onImgChange,t=e.item;return{imageUrl:t.image,onImgChange:function(e){a(e)}}}},{key:"chooseModalProps",get:function(){var e=this,a=this.state.chooseVisible;return{width:960,visible:a,handleChooseCancel:function(){e.setState(y()({},a,{chooseVisible:!1}))},handleChooseOk:function(a,t){e.setState({chooseVisible:!1,selectedRows:a,selectedRowKeys:t})}}}}]),a}(M["PureComponent"]),l=r))||l),me=de;t.d(a,"default",function(){return he});var pe=V["a"].RangePicker,he=(i=Object(O["connect"])(function(e){var a=e.change,t=e.loading;return{change:a,loading:t}}),i((c=function(e){function a(){var e,t;k()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=C()(this,(e=F()(a)).call.apply(e,[this].concat(l))),t.handleRefresh=function(e){var a=t.props.location,n=a.query,l=a.pathname;P["k"].push({pathname:l,search:Object(Y["stringify"])(y()({},n,e),{arrayFormat:"repeat"})})},t}return S()(a,e),w()(a,[{key:"render",value:function(){var e=[{title:"\u53d8\u66f4\u5355\u53f7",dataIndex:"bill_no"},{title:"\u4e1a\u52a1\u65e5\u671f",dataIndex:"bill_date"},{title:"\u5904\u7406\u4eba",dataIndex:"deal_man"},{title:"\u8d44\u4ea7\u7c7b\u522b",dataIndex:"asset_type_name"},{title:"\u8d44\u4ea7\u540d\u79f0",dataIndex:"asset_name"},{title:"\u533a\u57df",dataIndex:"area_name"},{title:"\u5b58\u653e\u5730\u70b9",dataIndex:"address"},{title:"\u4f7f\u7528\u516c\u53f8",dataIndex:"use_company_name"},{title:"\u4f7f\u7528\u90e8\u95e8",dataIndex:"using_department"},{title:"\u4f7f\u7528\u4eba",dataIndex:"use_employee_name"},{title:"\u5907\u6ce8",dataIndex:"remark"}],a=N.a.createElement(p["a"],{style:{marginBottom:16}},N.a.createElement(h["a"],{span:20},N.a.createElement(b["a"],{type:"primary",className:"margin-right",icon:"plus",onClick:this.filterProps.handleCreate},"\u65b0\u589e"),N.a.createElement(b["a"],E()({icon:"printer",className:"margin-right"},"icon","printer"),"\u6253\u5370"),N.a.createElement(pe,{className:"margin-right",onChange:this.onChange})));return N.a.createElement(R["h"],{inner:!0},a,N.a.createElement(o["a"],m()({},this.listProps,{columns:e,size:"middle",rowKey:function(e){return e.id}})),N.a.createElement(me,this.modalProps))}},{key:"listProps",get:function(){var e=this.props,a=e.dispatch,t=e.change,n=t.list,l=t.pagination,r=t.selectedRowKeys,i=e.loading;return{pagination:l,dataSource:n,loading:i.effects["change/query"],rowSelection:{selectedRowKeys:r,onChange:function(e){a({type:"change/updateState",payload:{selectedRowKeys:e}})}}}}},{key:"filterProps",get:function(){var e=this.props.dispatch;return{handleCreate:function(a){e({type:"change/showModal"})}}}},{key:"modalProps",get:function(){var e=this,a=this.props,t=a.change,n=t.modalVisible,l=t.currentItem,r=t.options,i=a.dispatch;return{options:r,title:"\u5b9e\u7269\u4fe1\u606f\u53d8\u66f4\u5355",item:l,visible:n,width:960,onCancel:function(){i({type:"change/hideModal"})},onOk:function(a){i({type:"change/create",payload:a}).then(function(){e.handleRefresh()})},onImgChange:function(e){i({type:"change/showModal",payload:{currentItem:y()({},l,{image:e})}})}}}}]),a}(M["PureComponent"]),s=c))||s)},tvWN:function(e,a,t){e.exports={normal:"normal___2lwql",form:"form___whKpx"}}}]);