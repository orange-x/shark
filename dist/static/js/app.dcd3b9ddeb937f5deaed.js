webpackJsonp([1],{"8m2t":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(e){a("gsu9")},null,null).exports,r=a("/ocq"),o=a("Au9i"),u=a.n(o),l={name:"login",data:()=>({msg:"登录",user:"",age:""}),methods:{addUser(){let e=this.user,t=this.age;this.$axios.post("/api/user/addUser",{name:e,age:t}).then(e=>{console.log(e),Object(o.Toast)({message:"提交成功!",position:"middle",duration:2e3})})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("form",[a("div",{staticClass:"int-par"},[a("span",[e._v("用户名:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"int",attrs:{type:"text",name:"name"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"int-par"},[a("span",[e._v("年龄:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"int",attrs:{type:"text",name:"age"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"int-par"},[a("a",{attrs:{href:"javascript:;"},on:{click:e.addUser}},[e._v("提交")])])])])},staticRenderFns:[]};var d=a("VU/8")(l,p,!1,function(e){a("8m2t")},"data-v-1924572d",null).exports,c={name:"home",data:()=>({msg:"首页"})},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]},v=a("VU/8")(c,m,!1,null,null,null).exports;n.default.use(r.a);var g=new r.a({routes:[{path:"/",name:"home",component:v},{path:"/login",name:"login",component:d}]}),f=(a("d8/S"),a("mtWM")),h=a.n(f);n.default.use(u.a),n.default.prototype.$axios=h.a,n.default.config.productionTip=!1,new n.default({el:"#app",router:g,components:{App:i},template:"<App/>"})},"d8/S":function(e,t){},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dcd3b9ddeb937f5deaed.js.map