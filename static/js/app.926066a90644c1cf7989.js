webpackJsonp([1],{"5cVY":function(e,t){},CXYT:function(e,t){},GXZf:function(e,t){},Lw2E:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("4bK6"),o=s.n(n),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")(null,r,!1,function(e){s("CXYT")},null,null).exports,a=s("7+uW"),l=s("/ocq"),c=s("mvHQ"),m=s.n(c),u={props:{workers:{required:!0,type:Array}},data:function(){return{width:50}},components:{},methods:{levelStyle:function(e){return e>1?this.width-5*e:this.width}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",e._l(e.workers,function(t){return s("tr",{key:t.id},[s("td",{style:{width:e.levelStyle(t.level)+"%"}},[t.level>1||!0===t.isBoss?s("span",{staticClass:"plus"},[e._v("+ ")]):e._e(),e._v(e._s(t.name)+"\n    ")]),e._v(" "),s("td",[e._v(e._s(t.phone))])])}),0)},staticRenderFns:[]};var v=s("VU/8")(u,p,!1,function(e){s("Lw2E")},"data-v-21d73eaf",null).exports,d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"close-button",on:{click:this.close}},[t("span",{staticClass:"line line1"}),this._v(" "),t("span",{staticClass:"line line2"})])},staticRenderFns:[]};var f=s("VU/8")({components:{},methods:{close:function(){this.$emit("close")}}},d,!1,function(e){s("z7Bn")},"data-v-478f2723",null).exports,h=s("ESwS"),_=s("+cKO"),b={mixins:[h.validationMixin],props:{workers:{required:!0,type:Array}},data:function(){return{form:{name:"",phone:"",boss:null}}},validations:{form:{name:{required:_.required,minLength:Object(_.minLength)(4)},phone:{required:_.required,minLength:Object(_.minLength)(4)}}},methods:{submitForm:function(){this.$emit("submitForm",{name:this.form.name,phone:this.form.phone,boss:this.form.boss}),this.form.name="",this.form.phone="",this.form.boss=""},close:function(){this.$emit("close")}}},$={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-wrapper"},[s("form",{on:{submit:function(t){t.preventDefault(),e.submitForm(),e.close()}}},[s("div",{staticClass:"ln"},[s("label",{staticClass:"input-wrapper"},[s("span",{staticClass:"placeholder"},[e._v("Имя")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.name.$model,expression:"$v.form.name.$model",modifiers:{trim:!0}}],staticClass:"text",class:e.$v.form.name.$error?"is-invalid":"",attrs:{id:"name",type:"text",required:""},domProps:{value:e.$v.form.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.name,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.form.name.$dirty&&!e.$v.form.name.required?s("p",{staticClass:"invalid-feedback"},[e._v("\n          Обязательное поле\n        ")]):e._e(),e._v(" "),e.$v.form.name.$dirty&&!e.$v.form.name.minLength?s("p",{staticClass:"invalid-feedback"},[e._v("\n          Здесь должно быть больше 5-и символов\n        ")]):e._e()])]),e._v(" "),s("div",{staticClass:"ln"},[s("label",{staticClass:"input-wrapper"},[s("span",{staticClass:"placeholder"},[e._v("Телефон")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.phone.$model,expression:"$v.form.phone.$model",modifiers:{trim:!0}}],staticClass:"text",class:e.$v.form.phone.$error?"is-invalid":"",attrs:{id:"phone",required:"",type:"tel",placeholder:"+79999999999"},domProps:{value:e.$v.form.phone.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.phone,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.form.phone.$dirty&&!e.$v.form.phone.required?s("p",{staticClass:"invalid-feedback"},[e._v("\n          Обязательное поле\n        ")]):e._e(),e._v(" "),e.$v.form.phone.$dirty&&!e.$v.form.phone.minLength?s("p",{staticClass:"invalid-feedback"},[e._v("\n          Здесь должно быть больше 5-и символов\n        ")]):e._e()])]),e._v(" "),s("div",{staticClass:"ln"},[s("label",{staticClass:"input-wrapper"},[s("span",{staticClass:"placeholder"},[e._v("Начальник")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.form.boss,expression:"form.boss"}],attrs:{id:"boss"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"boss",t.target.multiple?s:s[0])}}},e._l(e.workers,function(t,n){return s("option",{key:n,domProps:{value:t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),0)])]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"btn-wrapper"},[t("button",{staticClass:"button submit"},[this._v("Отправить")])])}]};var w=s("VU/8")(b,$,!1,function(e){s("5cVY")},"data-v-29a3e609",null).exports,k={props:{workers:{required:!0,type:Array}},components:{BasePopupButtonClose:f,BasePopupForm:w},methods:{close:function(){this.$emit("close")},submitForm:function(e){this.$emit("submitForm",e)}}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popup"},[s("div",{staticClass:"popup-overlay",on:{click:e.close}}),e._v(" "),s("div",{staticClass:"popup-container"},[s("BasePopupButtonClose",{on:{close:e.close}}),e._v(" "),e._m(0),e._v(" "),s("BasePopupForm",{attrs:{workers:e.workers},on:{submitForm:e.submitForm,close:e.close}})],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tx"},[t("div",{staticClass:"h3"},[this._v("Добавление пользователя")])])}]};var g={name:"home",data:function(){return{workers:[{id:1,name:"Марина",phone:"+79411232142",boss:"0",level:1,isBoss:!1},{id:2,name:"Петр",phone:"+79411232142",boss:"0",level:1,isBoss:!1},{id:3,name:"Алексей",phone:"+79411232142",boss:"0",level:1,isBoss:!1},{id:4,name:"Иван",phone:"+79411232142",boss:"0",level:1,isBoss:!1},{id:5,name:"Борис",phone:"+79411232142",boss:"0",level:1,isBoss:!1}],isPopupOpen:!1}},components:{BaseTable:v,BasePopup:s("VU/8")(k,C,!1,function(e){s("nlQZ")},"data-v-34e5a7ee",null).exports},mounted:function(){if(localStorage.getItem("workers"))try{this.workers=JSON.parse(localStorage.getItem("workers"))}catch(e){localStorage.removeItem("workers")}},computed:{},methods:{submitForm:function(e){if(e.boss){var t=this.workers.find(function(t){return t.id===e.boss}).level;e.level=t+1;var s=this.workers.map(function(e){return e.id}).indexOf(e.boss);this.workers[s].isBoss=!0,this.workers.splice(s+1,0,{id:this.workers.length+1,name:e.name,phone:e.phone,boss:e.boss,level:e.level,isBoss:!1})}else e.level=1,e.boss="0",this.workers.push({id:this.workers.length+1,name:e.name,phone:e.phone,boss:e.boss,level:e.level,isBoss:!1});this.saveWorkers()},saveWorkers:function(){var e=m()(this.workers);localStorage.setItem("workers",e)}}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("div",{staticClass:"table-container"},[s("button",{staticClass:"button",on:{click:function(t){e.isPopupOpen=!0}}},[e._v("\n      Добавить сотрудника\n    ")]),e._v(" "),e._m(0),e._v(" "),s("BaseTable",{attrs:{workers:e.workers}})],1),e._v(" "),e.isPopupOpen?s("BasePopup",{attrs:{workers:e.workers},on:{close:function(t){e.isPopupOpen=!1},submitForm:e.submitForm}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-top"},[t("span",{staticClass:"table-title"},[this._v("Имя")]),this._v(" "),t("span",{staticClass:"table-title"},[this._v("Телефон")])])}]};var B=s("VU/8")(g,y,!1,function(e){s("GXZf")},"data-v-59541240",null).exports;a.a.use(l.a);var F=new l.a({mode:"history",routes:[{path:"/",component:B}]});o.a.config.productionTip=!1,new o.a({router:F,render:function(e){return e(i)}}).$mount("#app")},nlQZ:function(e,t){},z7Bn:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.926066a90644c1cf7989.js.map