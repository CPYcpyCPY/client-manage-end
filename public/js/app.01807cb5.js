(function(t){function e(e){for(var n,r,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)r=l[d],i[r]&&p.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19ef":function(t,e,a){"use strict";var n=a("b982"),i=a.n(n);i.a},"40ea":function(t,e,a){"use strict";var n=a("5a21"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],r={name:"app"},l=r,o=a("2877"),c=Object(o["a"])(l,i,s,!1,null,null,null),u=c.exports,d=(a("0fae"),a("c560"),a("5c96")),p=a.n(d),f=a("8c4f"),m=a("73a0"),h=a("c6f7"),g=a("ddd3"),v=[{path:"/login",components:h},{path:"/",components:m,children:[{path:"/client",components:g},{path:"/",redirect:"/client"}]}],b=v;n["default"].config.productionTip=!0,n["default"].use(f["a"]),n["default"].use(p.a);var y=new f["a"]({routes:b});y.beforeResolve(function(t,e,a){"/login"==t.path||localStorage.getItem("username")?a():a({path:"/login"})}),new n["default"]({render:function(t){return t(u)},router:y}).$mount("#app")},"5a21":function(t,e,a){},"73a0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uni-app"},[a("t-header"),a("div",{staticClass:"layout-content"},[a("t-left-menu"),a("div",{staticClass:"pages"},[a("div",{staticClass:"pages-content"},[a("router-view")],1)])],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uni-header"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"right-content"},[a("el-tooltip",{attrs:{placement:"bottom",effect:"light","popper-class":"user-tooltip"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"user-item",on:{click:t.logout}},[a("i",{staticClass:"el-icon-switch-button icon"}),a("span",[t._v("退出登录")])])]),a("div",{staticClass:"user"},[a("img",{attrs:{src:t.user.head}}),a("span",[t._v(t._s(t.user.name))])])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"uni-title",staticStyle:{"margin-left":"10px"}},[a("span",[t._v("客户管理系统")])])}],l=a("bc3a"),o=a.n(l),c={name:"uni-header",data:function(){return{url:location.href,user:{name:"",head:"https://soe-mp-demo-1255701415.cos.ap-guangzhou.myqcloud.com/test/img5.jpg"},tabs:[]}},computed:{type:function(){return this.getCookie("loginType")}},mounted:function(){this.user.name=localStorage.getItem("username")},methods:{logout:function(){var t=this;o.a.post("/user/logout").then(function(){t.$message.success("退出成功"),localStorage.removeItem("username"),setTimeout(function(){t.$router.push({path:"/login"})},500)})}}},u=c,d=(a("9cf9"),a("2877")),p=Object(d["a"])(u,s,r,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"menuList",staticClass:"left-menu"},[a("div",{staticClass:"menu-list"},[a("el-menu",{attrs:{"default-active":t.activePath,"background-color":t.bgColor,"text-color":t.textColor,"active-text-color":t.activeColor,collapse:t.isCollapse}},t._l(t.menuList,function(e){return a("a",{key:e.path,attrs:{href:e.path},on:{click:function(a){return a.preventDefault(),t.switchPage(e.path)}}},[a("el-menu-item",{attrs:{index:e.path}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])],1)}),0)],1)])},h=[],g={name:"left-menu",data:function(){return{textColor:"#fff",activeColor:"#54d4f4",bgColor:"#3c434b",isCollapse:!1,activePath:"",menuList:[{title:"客户管理",path:"/client"}]}},watch:{$route:function(t){this.activePath=t.path}},mounted:function(){this.activePath=this.$route.path},methods:{switchPage:function(t){this.$router.push({path:t}),this.activePath=t}}},v=g,b=(a("40ea"),Object(d["a"])(v,m,h,!1,null,null,null)),y=b.exports,_={name:"uni-content",components:{tHeader:f,tLeftMenu:y},data:function(){return{year:(new Date).getFullYear()}}},D=_,w=(a("19ef"),Object(d["a"])(D,n,i,!1,null,null,null));e["default"]=w.exports},"7a5a":function(t,e,a){"use strict";var n=a("d691"),i=a.n(n);i.a},"7b80":function(t,e,a){"use strict";var n=a("a245"),i=a.n(n);i.a},"9cf9":function(t,e,a){"use strict";var n=a("e5ff"),i=a.n(n);i.a},a245:function(t,e,a){},b982:function(t,e,a){},c2e2:function(t,e,a){"use strict";var n=a("e199"),i=a.n(n);i.a},c560:function(t,e,a){},c6f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"en-title"},[t._v("Welcome")]),a("div",{staticClass:"zh-title"},[t._v("客户管理系统")]),a("el-form",{ref:"userForm",attrs:{model:t.store,rules:t.rules}},[a("div",{staticClass:"login-box"},[a("div",{staticClass:"inner-box"},[a("div",{staticClass:"box-item"},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"输入账号"},model:{value:t.store.username,callback:function(e){t.$set(t.store,"username",e)},expression:"store.username"}})],1)],1),a("div",{staticClass:"box-item"},[a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"输入密码",type:"password"},model:{value:t.store.password,callback:function(e){t.$set(t.store,"password",e)},expression:"store.password"}})],1)],1),a("div",{staticStyle:{display:"flex","margin-top":"20px"}},[a("el-button",{staticStyle:{flex:"1"},attrs:{type:"primary"},on:{click:t.login}},[t._v("登陆")]),a("el-button",{staticStyle:{flex:"1"},attrs:{type:"warning"},on:{click:t.register}},[t._v("注册")])],1)])])])],1)},i=[],s=a("bc3a"),r=a.n(s),l={data:function(){return{store:{username:"",password:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){var t=this;this.$refs.userForm.validate(function(e){if(!e)return!1;r.a.post("/user/login",{username:t.store.username,password:t.store.password}).then(function(e){var a=e.data;if(a.code)return t.$message.error(a.msg);t.$message.success("登录成功"),localStorage.setItem("username",a.user.username),setTimeout(function(){t.$router.push({path:"/client"})},1e3)}).catch(function(t){console.log(t)})})},register:function(){var t=this;this.$refs.userForm.validate(function(e){if(!e)return!1;r.a.post("/user/register",{username:t.store.username,password:t.store.password}).then(function(e){var a=e.data;if(a.code)return t.$message.error(a.msg);t.$message.success("注册成功")}).catch(function(t){console.log(t)})})}}},o=l,c=(a("c2e2"),a("2877")),u=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=u.exports},d691:function(t,e,a){},ddd3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"client"},[a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:t.addItem}},[t._v("添加客户\n\t\t")]),a("div",{staticClass:"filter-bar",staticStyle:{"margin-bottom":"-10px"}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"选择部门"}},[a("el-select",{attrs:{placeholder:"选择部门",size:"small"},on:{change:t.changeDep},model:{value:t.filter.department,callback:function(e){t.$set(t.filter,"department",e)},expression:"filter.department"}},t._l(t.departmentList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("el-form-item",{attrs:{label:"选择日期"}},[a("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"开始日期",size:"small",pickerOptions:t.pickerOptions},on:{change:t.changeDate},model:{value:t.filter.startDate,callback:function(e){t.$set(t.filter,"startDate",e)},expression:"filter.startDate"}}),a("span",{staticStyle:{margin:"0 5px"}},[t._v("-")]),a("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"结束日期",size:"small",pickerOptions:t.pickerOptions},on:{change:t.changeDate},model:{value:t.filter.endDate,callback:function(e){t.$set(t.filter,"endDate",e)},expression:"filter.endDate"}})],1)],1)],1),a("data-table",{attrs:{paging:!0,"total-data":t.totalData},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.list;return[a("el-table",{attrs:{data:n}},[a("template",{slot:"empty"},[a("span",[t._v("暂无数据")])]),a("el-table-column",{attrs:{prop:"number",label:"客户编号"}}),a("el-table-column",{attrs:{prop:"name",label:"客户名称"}}),a("el-table-column",{attrs:{prop:"salesman",label:"所属业务员"}}),a("el-table-column",{attrs:{prop:"department",label:"所属部门"}}),a("el-table-column",{attrs:{prop:"date",label:"录入日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.timeFormat(new Date(e.row.date),"yyyy-MM-dd")))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"action-btn",staticStyle:{color:"#409EFF"},on:{click:function(a){return t.editItem(e.row)}}},[t._v("编辑")]),a("a",{staticClass:"action-btn",staticStyle:{"margin-left":"10px",color:"#f56c6c"},on:{click:function(a){return t.deleteItem(e.row)}}},[t._v("删除")])]}}],null,!0)})],2)]}}])}),a("el-dialog",{attrs:{title:t.title,visible:t.dialog.addEdit.show,width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog.addEdit,"show",e)}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"客户编号"}},[a("el-input",{attrs:{placeholder:"输入客户编号"},model:{value:t.item.number,callback:function(e){t.$set(t.item,"number",e)},expression:"item.number"}})],1),a("el-form-item",{attrs:{label:"客户名称"}},[a("el-input",{attrs:{placeholder:"输入客户名称"},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"所属部门"}},[a("el-input",{attrs:{placeholder:"输入所属部门"},model:{value:t.item.department,callback:function(e){t.$set(t.item,"department",e)},expression:"item.department"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialog.addEdit.show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.submitAddEdit}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"删除",visible:t.dialog.delete.show,width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog.delete,"show",e)}}},[a("span",[t._v("确定删除该客户？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialog.delete.show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.submitDelete}},[t._v("确 定")])],1)])],1)},i=[],s=(a("ac6a"),a("6b54"),a("bc3a")),r=a.n(s),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-table"},[t.filter?a("el-input",{staticClass:"filter",staticStyle:{width:"250px"},attrs:{placeholder:"输入关键字搜素"},model:{value:t.filterKey,callback:function(e){t.filterKey=e},expression:"filterKey"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]):t._e(),t._t("default",null,{list:t.data}),t.paging?a("el-pagination",{staticClass:"data-table-paging",attrs:{background:"","current-page":t.page_no,"page-size":t.page_size,"page-sizes":t.pagesSizes,layout:"total, sizes, prev, pager, next, jumper",total:t.length},on:{"size-change":t.changeSize,"current-change":t.changePage}}):t._e()],2)},o=[],c={name:"dataTable",props:["paging","filter","totalData","defaultSize","serverOption"],data:function(){return{filterKey:"",pagesSizes:[10,20,50,100,500],data:[],filterData:[],page_size:this.defaultSize||10,page_no:1,length:0}},watch:{serverOption:function(){this.page_no==this.serverOption.page_no?this.setData():this.changePage(this.serverOption.page_no)},totalData:function(t){this.filterData=t,this.setData()},filterKey:function(t){t?(this.filterData=this.allData.filter(function(e){for(var a in e){var n=e[a];return n instanceof Array?n.indexOf(t)>-1:String(n).indexOf(t)>-1}}),this.changePage(1)):(this.filterData=this.totalData,this.changePage(1))}},computed:{allData:function(){return this.totalData}},methods:{changeSize:function(t){this.page_size=t,this.setData()},changePage:function(t){this.page_no=t,this.setData()},setData:function(){var t=this;if(this.serverOption){this.serverOption.loading=!0;var e={};for(var a in this.serverOption)e[a]=this.serverOption[a];e.page_size=this.page_size,e.page_num=this.page_no-1||0,this.axiosPost(e).then(function(e){var a=e.returnData.data,n=t.serverOption.dataKey||"data_list";t.data=a[n],t.length=+a.total,t.serverOption.loading=!1}).catch(function(e){return t.$message.error(e.toString())})}else{if(this.paging){if(!this.filterData)return;var n=(this.page_no-1)*this.page_size,i=n+this.page_size;this.data=this.filterData.slice(n,i)}else this.data=this.filterData;this.length=this.filterData.length}},download:function(t,e,a){for(var n=this,i=[],s=function(t,a){var s={};e.forEach(function(e,a){s["k"+a]=n.totalData[t][e]}),i.push(s)},r=0,l=this.totalData.length;r<l;r++)s(r,l);this.exportCSV(i,t,a)}}},u=c,d=(a("7a5a"),a("2877")),p=Object(d["a"])(u,l,o,!1,null,null,null),f=p.exports;a("3b2b"),a("a481");function m(t,e){t instanceof Date||(t=new Date(t));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}var h=new Date;h.setDate(h.getDate()-7);var g={name:"client",components:{dataTable:f},data:function(){return{msg:"客户管理",totalData:[],timeFormat:m,item:{number:"",name:"",salesman:"",department:"",date:""},dialog:{addEdit:{show:!1,item:{}},delete:{show:!1,item:{}}},type:"",title:"",filter:{department:"",startDate:h,endDate:new Date},departmentList:[{value:"",label:"全部"}],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}}}},mounted:function(){this.getData(),this.getDepartmentList()},methods:{addItem:function(){for(var t in this.type="add",this.item)this.item[t]="";this.title="添加客户",this.dialog.addEdit.show=!0},editItem:function(t){this.type="edit";var e={};for(var a in t)e[a]=t[a];this.item=e,this.title="编辑客户",this.dialog.addEdit.show=!0},submitAddEdit:function(){var t=this,e="/cgi/addClient";"edit"==this.type&&(e="/cgi/updateClient"),r.a.post(e,this.item).then(function(e){4==e.data.code?(t.$message.error(e.data.msg),setTimeout(function(){t.$router.push({path:"/login"})},500)):(t.$message.success("add"==t.type?"添加成功":"编辑成功"),t.dialog.addEdit.show=!1,t.getData(),t.getDepartmentList())}).catch(function(e){t.$message.error(e.toString())})},deleteItem:function(t){this.dialog.delete.show=!0,this.dialog.delete.item=t},submitDelete:function(){var t=this;r.a.post("/cgi/deleteClient",{id:this.dialog.delete.item.id}).then(function(e){4==e.data.code?(t.$message.error(e.data.msg),setTimeout(function(){t.$router.push({path:"/login"})},500)):(t.$message.success("删除成功"),t.dialog.delete.show=!1,t.getData(),t.getDepartmentList())}).catch(function(e){t.$message.error(e.toString())})},getDepartmentList:function(){var t=this;r.a.get("/cgi/allDepartment").then(function(e){var a=e.data.list||[],n=[];a.forEach(function(t){n.push({label:t.department,value:t.department})}),t.departmentList=t.departmentList.concat(n)}).catch(function(t){console.log(t)})},changeDep:function(){this.getData()},changeDate:function(){this.getData()},getData:function(){var t=this,e=this.filter.department,a=m(this.filter.startDate,"yyyy-MM-dd"),n=m(this.filter.endDate,"yyyy-MM-dd");r()({method:"get",url:"/cgi/clients",params:{department:e,startDate:a,endDate:n}}).then(function(e){var a=e.data;4==a.code?(t.$message.error(a.msg),setTimeout(function(){t.$router.push({path:"/login"})},500)):t.totalData=a.list}).catch(function(t){console.log(t)})}}},v=g,b=(a("7b80"),Object(d["a"])(v,n,i,!1,null,null,null));e["default"]=b.exports},e199:function(t,e,a){},e5ff:function(t,e,a){}});
//# sourceMappingURL=app.01807cb5.js.map