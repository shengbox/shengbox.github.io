(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"06ZB":function(e,a,t){e.exports={normal:"normal___3GyWB",form:"form___3urrw"}},"IT+L":function(e,a,t){"use strict";t.r(a);t("g9YV");var n,r,i,l,o,c,s,d,m,u=t("wCAj"),p=t("jehZ"),h=t.n(p),f=(t("y8nQ"),t("Vl3Y")),y=(t("14J3"),t("BMrR")),E=(t("jCWc"),t("kPKH")),v=t("eHn4"),b=t.n(v),w=(t("qVdP"),t("jsC+")),k=(t("+L6B"),t("2/Rp")),g=(t("Pwec"),t("CtXQ")),_=(t("lUTK"),t("BvKs")),x=t("p0pE"),I=t.n(x),C=t("2Taf"),V=t.n(C),O=t("vZ4D"),S=t.n(O),P=t("l4Ni"),F=t.n(P),R=t("ujKo"),M=t.n(R),q=t("MhPg"),Y=t.n(q),D=(t("iQDF"),t("+eQT")),K=(t("Znn+"),t("ZTPi")),N=t("q1tI"),j=t.n(N),T=t("MuoO"),A=t("Qyje"),B=t("wd/R"),L=t.n(B),z=t("Kvkj"),Q=t("7Qib"),Z=t("mJtp"),J=(t("2qtc"),t("kLXV")),H=(t("5NDa"),t("5rEg")),U=(t("nRaC"),t("5RzL")),W=(t("zYCJ"),t("4dqd")),X=t.n(W),G=(t("Telt"),t("Tckk")),$=t("Y/ft"),ee=t.n($),ae=t("d6i3"),te=t.n(ae),ne=t("1l/V"),re=t.n(ne),ie=(t("OaEy"),t("2fM7")),le=t("Aeqt"),oe=t("t3Un"),ce=t("je13"),se=t.n(ce),de=t("06ZB"),me=t.n(de),ue=ie["a"].Option,pe=f["a"].Item,he={labelCol:{span:6},wrapperCol:{span:14}},fe=(n=f["a"].create(),n((i=function(e){function a(){var e,t;V()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=F()(this,(e=M()(a)).call.apply(e,[this].concat(r))),t.state={value:void 0,employees:[],chooseVisible:!1,selectedRowKeys:[],selectedRows:[]},t.handleSearch=function(){var e=re()(te.a.mark(function e(a){var n,r,i;return te.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}return n=Object(A["stringify"])({q:a}),e.next=4,Object(oe["a"])({url:le["apiPrefix"]+"/user?".concat(n),data:{}});case 4:r=e.sent,i=[],r.list.forEach(function(e){i.push({value:e.id,text:e.name})}),t.setState({employees:i}),e.next=11;break;case 10:t.setState({employees:[]});case 11:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.handleChange=function(e){t.setState({value:e})},t.handleOk=function(){var e=t.state.selectedRowKeys,a=t.props,n=a.onOk,r=a.form.validateFields;r(function(a,t){if(!a){var r=I()({},t,{receive_user_id:Number(t.receive_user_id),receive_company:Number(t.receive_company),receive_dept:Number(t.receive_dept),area_id:Number(t.area_id),asset_id:e,receive_date:L()(t.receive_date).format("YYYY-MM-DD")});n(r)}})},t.chooseOpen=function(){t.setState({chooseVisible:!0})},t}return Y()(a,e),S()(a,[{key:"render",value:function(){var e=se.a.get("user")||{},a=e.username,t=this.state,n=(t.chooseVisible,t.selectedRows),r=this.props,i=r.form,l=i.getFieldDecorator,o=i.getFieldValue,c=r.item,s=void 0===c?{}:c,d=r.options,m=ee()(r,["form","item","options"]),p=d.dept_tree,v=o("receive_company");v&&(p=p.filter(function(e){return e.key==v}),p=p[0].children);var b=[{title:"\u5e8f\u53f7",dataIndex:"serial_number",key:"serial_number",width:40,render:function(e,a,t){return j.a.createElement("span",null,t+1)}},{title:"\u7167\u7247",dataIndex:"image",key:"image",width:50,render:function(e){return j.a.createElement(G["a"],{style:{marginLeft:4},src:e})}},{title:"\u8d44\u4ea7\u6761\u7801",dataIndex:"barcode",key:"barcode",width:150},{title:"\u8d44\u4ea7\u540d\u79f0",dataIndex:"name",key:"name",width:100},{title:"\u6240\u5c5e\u516c\u53f8",dataIndex:"belong_company_name",width:100},{title:"\u5f53\u524d\u6240\u5728\u516c\u53f8",dataIndex:"using_company_name",width:100},{title:"\u5f53\u524d\u6240\u6709\u90e8\u95e8",dataIndex:"use_department_name",width:100},{title:"\u5f53\u524d\u4f7f\u7528\u4eba",dataIndex:"use_employee_name",width:100},{title:"\u5b58\u653e\u5730\u5740",dataIndex:"address",width:150,render:function(e){return j.a.createElement(X.a,{tooltip:!0,length:10},e)}}],w=j.a.createElement(y["a"],{style:{marginBottom:16}},j.a.createElement(k["a"],{className:"margin-right",onClick:this.chooseOpen},"\u9009\u62e9\u8d44\u4ea7"),j.a.createElement(k["a"],{className:"margin-right"},"\u5220\u9664"));return j.a.createElement("div",null,j.a.createElement(J["a"],h()({},m,{onOk:this.handleOk}),j.a.createElement(f["a"],{className:me.a.form},j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u4eba",hasFeedback:!0},he),l("receive_dept",{initialValue:s.receive_dept,rules:[{required:!0,message:"\u9009\u62e9\u9886\u7528\u4eba"}]})(j.a.createElement(ie["a"],{showSearch:!0,placeholder:"\u641c\u7d22\u5458\u5de5",onSearch:this.handleSearch,defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1},this.state.employees.map(function(e){return j.a.createElement(ue,{key:e.value},e.text)}))))),j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u65e5\u671f",hasFeedback:!0},he),l("receive_date",{initialValue:L()(new Date,"YYYY-MM-DD"),rules:[{required:!0}]})(j.a.createElement(D["a"],{style:{width:"100%"}}))))),j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u540e\u4f7f\u7528\u516c\u53f8",hasFeedback:!0},he),l("receive_company",{initialValue:d.companies[0]?String(d.companies[0].id):"",rules:[{required:!0}]})(j.a.createElement(ie["a"],null,d.companies.map(function(e){return j.a.createElement(ue,{key:e.id},e.name)}))))),j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u540e\u4f7f\u7528\u90e8\u95e8",hasFeedback:!0},he),l("receive_dept_id",{rules:[{required:!0}]})(j.a.createElement(U["a"],{allowClear:!0,treeDefaultExpandAll:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"\u4f7f\u7528\u90e8\u95e8",treeData:p}))))),j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u540e\u533a\u57df",hasFeedback:!0},he),l("area_id",{initialValue:d.areas[0]?String(d.areas[0].id):""})(j.a.createElement(ie["a"],{defaultActiveFirstOption:!0},d.areas.map(function(e){return j.a.createElement(ue,{key:e.id},e.name)}))))),j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u540e\u5b58\u653e\u5730\u70b9",hasFeedback:!0},he),l("address",{initialValue:s.address})(j.a.createElement(H["a"],null))))),j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u9886\u7528\u5904\u7406\u4eba",hasFeedback:!0},he),l("deal_user",{initialValue:a})(j.a.createElement(H["a"],{readOnly:!0,disabled:!0})))),j.a.createElement(E["a"],{span:12},j.a.createElement(pe,h()({label:"\u8bf4\u660e",hasFeedback:!0},he),l("remark",{initialValue:s.remark})(j.a.createElement(H["a"],null))))),w,j.a.createElement(u["a"],{dataSource:n,columns:b,pagination:!1,scroll:{x:960,y:230},rowKey:function(e){return e.id},size:"small"}))),j.a.createElement(z["b"],this.chooseModalProps))}},{key:"chooseModalProps",get:function(){var e=this,a=this.state.chooseVisible;return{width:960,visible:a,handleChooseCancel:function(){e.setState(I()({},a,{chooseVisible:!1}))},handleChooseOk:function(a,t){e.setState({chooseVisible:!1,selectedRows:a,selectedRowKeys:t})}}}}]),a}(N["PureComponent"]),r=i))||r),ye=ie["a"].Option,Ee=f["a"].Item,ve={labelCol:{span:6},wrapperCol:{span:14}},be=(l=f["a"].create(),l((c=function(e){function a(){var e,t;V()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=F()(this,(e=M()(a)).call.apply(e,[this].concat(r))),t.state={value:void 0,data:[],chooseVisible:!1,selectedRowKeys:[],selectedRows:[]},t.handleOk=function(){var e=t.state.selectedRowKeys,a=t.props,n=a.onOk,r=a.form.validateFields;r(function(a,t){if(!a){var r=I()({},t,{company_id:Number(t.company_id),area_id:Number(t.area_id),asset_id:e,date:L()(t.date).format("YYYY-MM-DD")});n(r)}})},t.chooseOpen=function(){t.setState({chooseVisible:!0})},t}return Y()(a,e),S()(a,[{key:"render",value:function(){var e=se.a.get("user")||{},a=e.username,t=this.state,n=(t.chooseVisible,t.selectedRows),r=this.props,i=r.form.getFieldDecorator,l=r.item,o=void 0===l?{}:l,c=r.options,s=ee()(r,["form","item","options"]),d=[{title:"\u5e8f\u53f7",dataIndex:"serial_number",key:"serial_number",width:40,render:function(e,a,t){return j.a.createElement("span",null,t+1)}},{title:"\u7167\u7247",dataIndex:"image",key:"image",width:50,render:function(e){return j.a.createElement(G["a"],{style:{marginLeft:4},src:e})}},{title:"\u8d44\u4ea7\u6761\u7801",dataIndex:"barcode",key:"barcode",width:150},{title:"\u8d44\u4ea7\u540d\u79f0",dataIndex:"name",key:"name",width:100},{title:"\u6240\u5c5e\u516c\u53f8",dataIndex:"belong_company_name",width:100},{title:"\u5f53\u524d\u6240\u5728\u516c\u53f8",dataIndex:"using_company_name",width:100},{title:"\u5f53\u524d\u6240\u6709\u90e8\u95e8",dataIndex:"use_department_name",width:100},{title:"\u5f53\u524d\u4f7f\u7528\u4eba",dataIndex:"use_employee_name",width:100},{title:"\u5b58\u653e\u5730\u5740",dataIndex:"address",width:150,render:function(e){return j.a.createElement(X.a,{tooltip:!0,length:10},e)}}],m=j.a.createElement(y["a"],{style:{marginBottom:16}},j.a.createElement(k["a"],{className:"margin-right",onClick:this.chooseOpen},"\u9009\u62e9\u8d44\u4ea7"),j.a.createElement(k["a"],{className:"margin-right"},"\u5220\u9664"));return j.a.createElement("div",null,j.a.createElement(J["a"],h()({},s,{onOk:this.handleOk}),j.a.createElement(f["a"],{className:me.a.form},j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(Ee,h()({label:"\u9000\u5e93\u5904\u7406\u4eba",hasFeedback:!0},ve),i("deal_user",{initialValue:a,rules:[{required:!0}]})(j.a.createElement(H["a"],{readOnly:!0,disabled:!0})))),j.a.createElement(E["a"],{span:12},j.a.createElement(Ee,h()({label:"\u5b9e\u9645\u9000\u5e93\u65e5\u671f",hasFeedback:!0},ve),i("date",{initialValue:L()(new Date,"YYYY-MM-DD"),rules:[{required:!0}]})(j.a.createElement(D["a"],{style:{width:"100%"}}))))),j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(Ee,h()({label:"\u9000\u5e93\u540e\u4f7f\u7528\u516c\u53f8",hasFeedback:!0},ve),i("company_id",{initialValue:c.companies[0]?String(c.companies[0].id):"",rules:[{required:!0}]})(j.a.createElement(ie["a"],{onChange:this.handleCompanyChange},c.companies.map(function(e){return j.a.createElement(ye,{key:e.id},e.name)}))))),j.a.createElement(E["a"],{span:12},j.a.createElement(Ee,h()({label:"\u9000\u5e93\u540e\u533a\u57df",hasFeedback:!0},ve),i("area_id",{initialValue:c.areas[0]?String(c.areas[0].id):""})(j.a.createElement(ie["a"],{defaultActiveFirstOption:!0},c.areas.map(function(e){return j.a.createElement(ye,{key:e.id},e.name)})))))),j.a.createElement(y["a"],null,j.a.createElement(E["a"],{span:12},j.a.createElement(Ee,h()({label:"\u9000\u5e93\u540e\u5b58\u653e\u5730\u70b9",hasFeedback:!0},ve),i("address",{initialValue:o.address})(j.a.createElement(H["a"],null)))),j.a.createElement(E["a"],{span:12},j.a.createElement(Ee,h()({label:"\u8bf4\u660e",hasFeedback:!0},ve),i("remark",{initialValue:o.remark})(j.a.createElement(H["a"],null))))),m,j.a.createElement(u["a"],{dataSource:n,columns:d,pagination:!1,scroll:{x:960,y:230},rowKey:function(e){return e.id},size:"small"}))),j.a.createElement(z["b"],this.chooseModalProps))}},{key:"chooseModalProps",get:function(){var e=this,a=this.state.chooseVisible;return{width:960,visible:a,handleChooseCancel:function(){e.setState(I()({},a,{chooseVisible:!1}))},handleChooseOk:function(a,t){e.setState({chooseVisible:!1,selectedRows:a,selectedRowKeys:t})}}}}]),a}(N["PureComponent"]),o=c))||o);t.d(a,"default",function(){return ge});var we=K["a"].TabPane,ke=D["a"].RangePicker,ge=(s=Object(T["connect"])(function(e){var a=e.receive,t=e.loading;return{receive:a,loading:t}}),s((m=function(e){function a(){var e,t;V()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=F()(this,(e=M()(a)).call.apply(e,[this].concat(r))),t.handleRefresh=function(e){var a=t.props.location,n=a.query,r=a.pathname;Q["k"].push({pathname:r,search:Object(A["stringify"])(I()({},n,e),{arrayFormat:"repeat"})})},t.handleTabClick=function(e){var a=t.props.location,n=a.query,r=a.pathname;Q["k"].push({pathname:r,search:Object(A["stringify"])(I()({},n,{status:e}),{arrayFormat:"repeat"})})},t.export=function(){Object(Z["a"])({url:"/asset/repair/download",fileName:"\u9886\u7528\u5355.xlsx",data:{}})},t}return Y()(a,e),S()(a,[{key:"render",value:function(){var e=this.props.location.query,a=[{title:"\u9886\u7528\u5355\u53f7",dataIndex:"bill_no"},{title:"\u9886\u7528\u65e5\u671f",dataIndex:"receive_date"},{title:"\u9886\u7528\u540e\u4f7f\u7528\u516c\u53f8",dataIndex:"receive_company_name"},{title:"\u9886\u7528\u540e\u4f7f\u7528\u90e8\u95e8",dataIndex:"receive_dept_name"},{title:"\u9886\u7528\u540e\u533a\u57df",dataIndex:"area_name"},{title:"\u9886\u7528\u540e\u5b58\u653e\u5730\u70b9",dataIndex:"address"},{title:"\u9886\u7528\u5907\u6ce8",dataIndex:"remark"},{title:"\u9884\u8ba1\u9000\u5e93\u65e5\u671f",dataIndex:"name"},{title:"\u5904\u7406\u4eba",dataIndex:"deal_user_name"}],t=[{title:"\u9000\u5e93\u5355\u53f7",dataIndex:"bill_no"},{title:"\u9000\u5e93\u65e5\u671f",dataIndex:"date"},{title:"\u9000\u5e93\u540e\u4f7f\u7528\u516c\u53f8",dataIndex:"receive_company_name"},{title:"\u9000\u5e93\u540e\u533a\u57df",dataIndex:"area_name"},{title:"\u9000\u5e93\u540e\u5b58\u653e\u5730\u70b9",dataIndex:"address"},{title:"\u9000\u5e93\u5907\u6ce8",dataIndex:"remark"},{title:"\u5904\u7406\u4eba",dataIndex:"deal_user_name"}],n=j.a.createElement(_["a"],null,j.a.createElement(_["a"].Item,{onClick:this.filterProps.handleCreate}," \u65b0\u589e "),j.a.createElement(_["a"].Item,null,j.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"\u5173\u8054\u5458\u5de5\u7533\u8bf7\u65b0\u589e"))),r=j.a.createElement(f["a"],null,j.a.createElement(y["a"],{style:{marginBottom:16}},j.a.createElement(E["a"],{span:24},j.a.createElement(w["a"],{overlay:n,placement:"bottomLeft",className:"margin-right"},j.a.createElement(k["a"],{type:"primary"},"\u65b0\u589e",j.a.createElement(g["a"],{type:"down"}))),j.a.createElement(k["a"],b()({icon:"printer",className:"margin-right"},"icon","printer"),"\u6253\u5370"),j.a.createElement(k["a"],{icon:"download",className:"margin-right",onClick:this.export},"\u5bfc\u51fa"),j.a.createElement(ke,{onChange:this.filterProps.onDateChange,defaultValue:this.filterProps.createTime}),j.a.createElement("div",null))));return j.a.createElement(z["h"],{inner:!0},j.a.createElement(K["a"],{activeKey:e.status===String(2)?String(2):String(1),onTabClick:this.handleTabClick},j.a.createElement(we,{tab:"\u9886\u7528",key:String(1)},r,j.a.createElement(u["a"],h()({},this.listProps,{columns:a,size:"middle",rowKey:function(e){return e.id}}))),j.a.createElement(we,{tab:"\u9000\u5e93",key:String(2)},r,j.a.createElement(u["a"],h()({},this.listProps,{columns:t,size:"middle",rowKey:function(e){return e.id}})))),j.a.createElement(fe,this.modalProps),j.a.createElement(be,this.revertModalProps))}},{key:"filterProps",get:function(){var e=this,a=this.props,t=a.dispatch,n=a.location.query,r=[];return n.date&&n.date[0]&&(r[0]=L()(n.date[0])),n.date&&n.date[1]&&(r[1]=L()(n.date[1])),{createTime:r,handleCreate:function(){var a=e.props.location.query;"2"==a.status?t({type:"receive/showRevertModal"}):t({type:"receive/showModal"})},onDateChange:function(a,t){var n=e.props.location.query;e.handleRefresh(I()({},n,{date:t}))}}}},{key:"revertModalProps",get:function(){var e=this.props,a=e.dispatch,t=e.receive,n=t.receiveModalVisible,r=t.options;return{options:r,title:"\u9000\u5e93",width:960,visible:n,onCancel:function(){a({type:"receive/hideModal"})},onOk:function(e){a({type:"receive/createRevert",payload:e})}}}},{key:"modalProps",get:function(){var e=this.props,a=e.receive,t=a.modalVisible,n=a.currentItem,r=a.options,i=e.dispatch;return{options:r,title:"\u9886\u51fa\u5355",item:n,visible:t,width:960,onCancel:function(){i({type:"receive/hideModal"})},onOk:function(e){i({type:"receive/create",payload:e})}}}},{key:"listProps",get:function(){var e=this.props,a=e.dispatch,t=e.receive,n=t.list,r=t.selectedRowKeys,i=t.pagination,l=e.loading;return{pagination:i,dataSource:n,loading:l.effects["receive/query"],rowSelection:{selectedRowKeys:r,onChange:function(e){a({type:"receive/updateState",payload:{selectedRowKeys:e}})}}}}}]),a}(N["PureComponent"]),d=m))||d)}}]);