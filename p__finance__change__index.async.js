(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{FKZP:function(e,t,a){"use strict";a.r(t);a("g9YV");var n,r,o,i,l,c,d=a("wCAj"),s=a("jehZ"),p=a.n(s),u=a("p0pE"),m=a.n(u),h=a("2Taf"),y=a.n(h),f=a("vZ4D"),g=a.n(f),w=a("l4Ni"),v=a.n(w),E=a("ujKo"),b=a.n(E),k=a("MhPg"),x=a.n(k),P=a("q1tI"),j=a.n(P),R=a("MuoO"),K=a("7Qib"),C=a("Qyje"),F=a("Kvkj"),I=(a("14J3"),a("BMrR")),S=(a("+L6B"),a("2/Rp")),M=(a("jCWc"),a("kPKH")),Q=(a("OaEy"),a("2fM7")),q=(a("y8nQ"),a("Vl3Y")),A=(a("iQDF"),a("+eQT")),D=(a("5NDa"),a("5rEg")),O=(a("17x9"),a("wd/R"),D["a"].Search),T=(A["a"].RangePicker,{xs:24,sm:12,style:{marginBottom:16}}),V=(n=q["a"].create(),n((o=function(e){function t(){var e,a;y()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=v()(this,(e=b()(t)).call.apply(e,[this].concat(r))),a.handleSubmit=function(){var e=a.props,t=e.onFilterChange,n=e.form.getFieldsValue,r=n();t(m()({},r))},a}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return j.a.createElement(I["a"],{gutter:24},j.a.createElement(M["a"],p()({},T,{xl:{span:4},md:{span:8}}),j.a.createElement(F["e"],{label:"\u8d44\u4ea7\u7c7b\u578b"},e("type",{})(j.a.createElement(Q["a"],{style:{width:"100%"}})))),j.a.createElement(M["a"],p()({},T,{xl:{span:20}}),j.a.createElement(I["a"],{type:"flex",align:"middle",justify:"space-between"},j.a.createElement(M["a"],null,j.a.createElement(S["a"],{icon:"download",type:"default"},"\u5bfc\u51fa")),j.a.createElement(M["a"],null,e("name",{initialValue:name})(j.a.createElement(O,{placeholder:"\u641c\u7d22\u540d\u79f0",onSearch:this.handleSubmit}))))))}}]),t}(P["Component"]),r=o))||r),_=V;a.d(t,"default",function(){return B});var B=(i=Object(R["connect"])(function(e){var t=e.mymodel,a=e.loading;return{mymodel:t,loading:a}}),i((c=function(e){function t(){var e,a;y()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=v()(this,(e=b()(t)).call.apply(e,[this].concat(r))),a.handleRefresh=function(e){var t=a.props.location,n=t.query,r=t.pathname;K["k"].push({pathname:r,search:Object(C["stringify"])(m()({},n,e),{arrayFormat:"repeat"})})},a}return x()(t,e),g()(t,[{key:"render",value:function(){var e=[{title:"\u7c7b\u578b",dataIndex:"type_code",width:150},{title:"\u8d44\u4ea7\u7f16\u7801",dataIndex:"barcode",width:300},{title:"\u8d44\u4ea7\u540d\u79f0",dataIndex:"type_name",width:300},{title:"\u89c4\u683c\u578b\u53f7",dataIndex:"specs",width:300},{title:"\u6240\u5c5e\u516c\u53f8",dataIndex:"belong_company",width:300}];return j.a.createElement(F["h"],{inner:!0},j.a.createElement(_,this.filterProps),j.a.createElement(d["a"],p()({},this.tableProps,{pagination:m()({},this.tableProps.pagination,{showTotal:function(e){return"\u603b\u5171 ".concat(e," \u6761\u8bb0\u5f55")}}),columns:e,size:"middle",rowKey:function(e){return e.type_id}})))}},{key:"filterProps",get:function(){var e=this,t=this.props,a=t.location.query,n=t.dispatch,r=t.mymodel.options;return{options:r,filter:m()({},a),onFilterChange:function(t){e.handleRefresh(m()({},t))},onAdd:function(){n({type:"asset/showModal",payload:{modalType:"create",currentItem:{}}})}}}},{key:"tableProps",get:function(){var e=this.props,t=e.dispatch,a=e.mymodel,n=a.pagination,r=a.list,o=a.selectedRowKeys,i=e.loading;return{pagination:n,loading:i.effects["mymodel/query"],dataSource:r,rowSelection:{selectedRowKeys:o,onChange:function(e){t({type:"mymodel/updateState",payload:{selectedRowKeys:e}})}}}}}]),t}(P["PureComponent"]),l=c))||l)}}]);