(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a49e8b2"],{"25b1":function(t,e,s){},"4faa":function(t,e,s){"use strict";var a={users:[]},i=(s("20d6"),{SET_USERS:function(t,e){t.users=e},REMOVE_RECORD:function(t,e){var s=t.users.findIndex((function(t){return t.id===e}));t.users.splice(s,1)}}),n=s("bc3a"),o=s.n(n),r={fetchUsers:function(t){var e=t.commit;return new Promise((function(t,s){o.a.get("/api/user-management/users").then((function(s){e("SET_USERS",s.data),t(s)})).catch((function(t){s(t)}))}))},fetchUser:function(t,e){return new Promise((function(t,s){o.a.get("/api/user-management/users/".concat(e)).then((function(e){t(e)})).catch((function(t){s(t)}))}))},removeRecord:function(t,e){var s=t.commit;return new Promise((function(t,a){o.a.delete("/api/user-management/users/".concat(e)).then((function(a){s("REMOVE_RECORD",e),t(a)})).catch((function(t){a(t)}))}))}},c={};e["a"]={isRegistered:!1,namespaced:!0,state:a,mutations:i,actions:r,getters:c}},"7fab":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page-user-view"}},[s("div",{attrs:{id:"user-data"}},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Perfil"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col",attrs:{id:"avatar-col"}},[s("div",{staticClass:"img-container mb-4"},[s("img",{staticClass:"rounded w-full",attrs:{src:t.getProfile.Avatar.B}})])]),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-1"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Usuario")]),s("td",[t._v(t._s(t.getProfile.Username))])]),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Nombre")]),s("td",[t._v(t._s(t.getProfile.Nombre))])]),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Email")]),s("td",[t._v(t._s(t.getProfile.Email))])])])]),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-2"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Id_Usuario")]),s("td",[t._v(t._s(t.getProfile.num_user))])]),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Rol")]),s("td",[t._v(t._s(t.getProfile.Role))])]),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Company")]),s("td",[t._v(t._s(t.getProfile.Nombre_Agencia))])])])]),s("br"),s("br"),s("div",{staticClass:"vx-col w-full flex",attrs:{id:"account-manage-buttons"}},[s("vs-button",{staticClass:"mr-4",attrs:{"icon-pack":"feather",icon:"icon-edit",to:{name:"app-user-edit",params:{userId:t.$route.params.userId}}}},[t._v("Editar")])],1)])])],1)])},i=[],n=(s("4faa"),s("2f62"),{computed:{getProfile:function(){return this.$store.state.dsoaLogin.profile[0]}},methods:{confirmDeleteRecord:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm Delete",text:'You are about to delete "'.concat(this.user_data.username,'"'),accept:this.deleteRecord,acceptText:"Delete"})},deleteRecord:function(){this.$router.push({name:"app-user-list"}),this.showDeleteSuccess()},showDeleteSuccess:function(){this.$vs.notify({color:"success",title:"User Deleted",text:"The selected user was successfully deleted"})}}}),o=n,r=(s("d9cb"),s("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},d9cb:function(t,e,s){"use strict";var a=s("25b1"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-1a49e8b2.99349d2b.js.map