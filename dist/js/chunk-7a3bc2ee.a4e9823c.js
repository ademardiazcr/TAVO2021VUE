(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a3bc2ee"],{5791:function(t,e,s){"use strict";var a=s("7cad"),r=s.n(a);r.a},"7cad":function(t,e,s){},c8ee:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.getTokenChat?s("div",{staticClass:"border border-solid d-theme-border-grey-light rounded relative overflow-hidden",attrs:{id:"chat-app"}},[s("vs-sidebar",{staticClass:"items-no-padding",attrs:{parent:"#chat-app","click-not-close":t.clickNotClose,"hidden-background":t.clickNotClose,id:"chat-list-sidebar"},model:{value:t.isChatSidebarActive,callback:function(e){t.isChatSidebarActive=e},expression:"isChatSidebarActive"}},[s("user-profile",{staticClass:"user-profile-container",attrs:{active:t.activeProfileSidebar,userId:t.userProfileId,isLoggedInUser:t.isLoggedInUserProfileView},on:{closeProfileSidebar:t.closeProfileSidebar}}),s("div",{staticClass:"chat__profile-search flex p-4"},[s("div",{staticClass:"relative inline-flex"}),s("vs-input",{staticClass:"w-full mx-5 input-rounded-full",attrs:{"icon-no-border":"",icon:"icon-search","icon-pack":"feather",placeholder:"Search or start a new chat"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),s("feather-icon",{staticClass:"md:inline-flex lg:hidden -ml-3 cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){return t.toggleChatSidebar(!1)}}})],1),s("vs-divider",{staticClass:"d-theme-border-grey-light m-0"}),s(t.scrollbarTag,{key:t.$vs.rtl,tag:"component",staticClass:"chat-scroll-area pt-4",attrs:{settings:t.settings}},[s("p",{staticClass:"ml-4",class:t.colorConectado},[t._v("Estado del chat: "+t._s(t.getChatconnect))]),s("vs-button",{staticClass:"ml-4",attrs:{color:"danger",type:"gradient",icon:"rewind","icon-pack":"feather"},on:{click:t.recarga}},[t._v("Cargar Contactos")]),s("div",{staticClass:"chat__chats-list mb-8"},[s("ul",{staticClass:"chat__active-chats bordered-items"},t._l(t.chatContacts,(function(e,a){return s("li",{key:a,staticClass:"cursor-pointer",on:{click:function(s){return t.updateActiveChatUser(e.uid)}}},[t.chatLastMessaged(e.uid)&&e.uid>0?s("chat-contact",{attrs:{showLastMsg:"",contact:e,lastMessaged:t.chatLastMessaged(e.uid).time,unseenMsg:t.chatUnseenMessages(e.uid),isActiveChatUser:t.isActiveChatUser(e.uid)}}):t._e()],1)})),0)]),s("div",{staticClass:"chat__contacts"},[s("h3",{staticClass:"text-primary mb-5 px-4"},[t._v("Contactos")]),s("ul",{staticClass:"chat__contacts bordered-items"},t._l(t.contacts,(function(e){return s("li",{key:e.uid,staticClass:"cursor-pointer",on:{click:function(s){return t.updateActiveChatUser(e.uid)}}},[s("chat-contact",{attrs:{contact:e}})],1)})),0)])],1)],1),s("div",{staticClass:"chat__bg no-scroll-content chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0",class:{"sidebar-spacer--wide":t.clickNotClose,"flex items-center justify-center":null===t.activeChatUser}},[t.activeChatUser?[s("div",{staticClass:"chat__navbar"},[s("chat-navbar",{attrs:{isSidebarCollapsed:!t.clickNotClose,"user-id":t.activeChatUser,isPinnedProp:t.isChatPinned},on:{openContactsSidebar:function(e){return t.toggleChatSidebar(!0)},showProfileSidebar:t.showProfileSidebar,toggleIsChatPinned:t.toggleIsChatPinned}})],1),s(t.scrollbarTag,{key:t.$vs.rtl,ref:"chatLogPS",tag:"component",staticClass:"chat-content-scroll-area border border-solid d-theme-border-grey-light",attrs:{settings:t.settings}},[s("div",{ref:"chatLog",staticClass:"chat__log"},[t.activeChatUser?s("chat-log",{attrs:{userId:t.activeChatUser}}):t._e()],1)]),s("div",{staticClass:"chat__input flex p-4 bg-white"},[s("vs-input",{staticClass:"flex-1",attrs:{placeholder:"Su Mensaje aqui"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg(e)}},model:{value:t.typedMessage,callback:function(e){t.typedMessage=e},expression:"typedMessage"}}),s("vs-button",{staticClass:"bg-primary-gradient ml-4",attrs:{type:"filled"},on:{click:t.sendMsg}},[t._v("Send")])],1)]:[s("div",{staticClass:"flex flex-col items-center"},[s("feather-icon",{staticClass:"mb-4 bg-white p-8 shadow-md rounded-full",attrs:{icon:"MessageSquareIcon",svgClasses:"w-16 h-16"}}),s("h4",{staticClass:"py-2 px-4 bg-white shadow-md rounded-full cursor-pointer",on:{click:function(e){return e.stopPropagation(),t.toggleChatSidebar(!0)}}},[t._v("\n          Start Conversation\n        ")])],1)]],2)],1):s("div",[s("div",{staticClass:"flex flex-col items-center"},[t._v("\n    conctado2: "+t._s(t.getChatconnect)+"\n  ")]),s("div",{staticClass:"flex flex-col items-center"},[s("feather-icon",{staticClass:"mb-4 bg-white p-8 shadow-md rounded-full",attrs:{icon:"MessageSquareIcon",svgClasses:"w-16 h-16"}}),s("h4",{staticClass:"py-2 px-4 bg-white shadow-md rounded-full cursor-pointer",on:{click:function(e){return e.stopPropagation(),t.recarga()}}},[t._v("\n      Start Conversation\n    ")])],1)])},r=[],i=(s("2f62"),s("b081")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.chatData?s("div",{staticClass:"m-8",attrs:{id:"component-chat-log"}},t._l(t.chatData.msg,(function(e,a){return s("div",{key:a,staticClass:"msg-grp-container"},[t.chatData.msg[a-1]?[t.isSameDay(e.time,t.chatData.msg[a-1].time)?t._e():s("vs-divider",{staticClass:"msg-time"},[s("span",[t._v(t._s(t.toDate(e.time)))])]),t.hasSentPreviousMsg(t.chatData.msg[a-1].isSent,e.isSent)?t._e():s("div",{staticClass:"spacer mt-8"})]:t._e(),s("div",{staticClass:"flex items-start",class:[{"flex-row-reverse":e.isSent}]},[t.chatData.msg[a-1]?[t.hasSentPreviousMsg(t.chatData.msg[a-1].isSent,e.isSent)&&t.isSameDay(e.time,t.chatData.msg[a-1].time)?t._e():[s("vs-avatar",{staticClass:"border-2 shadow border-solid border-white m-0 flex-shrink-0",class:e.isSent?"sm:ml-5 ml-3":"sm:mr-5 mr-3",attrs:{size:"40px",src:t.senderImg(e.isSent)}})]]:t._e(),0==a?[s("vs-avatar",{staticClass:"border-2 shadow border-solid border-white m-0 flex-shrink-0",class:e.isSent?"sm:ml-5 ml-3":"sm:mr-5 mr-3",attrs:{size:"40px",src:t.senderImg(e.isSent)}})]:t._e(),t.chatData.msg[a-1]?[t.hasSentPreviousMsg(t.chatData.msg[a-1].isSent,e.isSent)&&t.isSameDay(e.time,t.chatData.msg[a-1].time)?s("div",{staticClass:"mr-16"}):t._e()]:t._e(),s("div",{staticClass:"msg break-words relative shadow-md rounded py-3 px-4 mb-2 rounded-lg max-w-sm",class:{"bg-primary-gradient text-white":e.isSent,"border border-solid border-transparent bg-white":!e.isSent}},[s("span",[t._v(t._s(e.textContent))])])],2)],2)})),0):t._e()},o=[],c=(s("c5f6"),{props:{userId:{type:Number,required:!0}},computed:{chatData:function(){var t=this.$store.getters["chat/chatDataOfUser"](this.userId);return t},activeUserImg:function(){return this.$store.state.AppActiveUser.photoURL},senderImg:function(){var t=this;return function(e){return e?t.$store.state.AppActiveUser.photoURL:t.$store.getters["chat/contact"](t.userId).photoURL}},hasSentPreviousMsg:function(){return function(t,e){return t===e}}},methods:{isSameDay:function(t,e){var s=new Date(Date.parse(t)),a=new Date(Date.parse(e));return s.getFullYear()===a.getFullYear()&&s.getMonth()===a.getMonth()&&s.getDate()===a.getDate()},toDate:function(t){var e="en-us",s=new Date(Date.parse(t)),a=s.toLocaleString(e,{month:"short"});return"".concat(s.getDate()," ").concat(a)},scrollToBottom:function(){var t=this;this.$nextTick((function(){t.$parent.$el.scrollTop=t.$parent.$el.scrollHeight}))}},updated:function(){this.scrollToBottom()},mounted:function(){this.scrollToBottom()}}),l=c,h=s("2877"),u=Object(h["a"])(l,n,o,!1,null,null,null),d=u.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!=t.userId?s("div",{staticClass:"chat__header"},[s("vs-navbar",{staticClass:"p-4 flex navbar-custom",attrs:{color:"white",type:"flat"}},[s("div",{staticClass:"relative flex mr-4"},[t.isSidebarCollapsed?s("feather-icon",{staticClass:"mr-4 cursor-pointer",attrs:{icon:"MenuIcon"},on:{click:function(e){return e.stopPropagation(),t.$emit("openContactsSidebar")}}}):t._e(),s("div",{staticClass:"h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0",class:"bg-"+t.getStatusColor(!1)})],1),s("h6",[t._v(t._s(t.getConts2.displayName))]),s("vs-spacer"),s("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"StarIcon",svgClasses:[{"text-warning stroke-current":t.isPinnedLocal},"w-6","h-6"]},on:{click:function(e){e.stopPropagation(),t.isPinnedLocal=!t.isPinnedLocal}}})],1)],1):t._e()},f=[],v={props:{userId:{type:Number,required:!0},isPinnedProp:{type:Boolean,required:!0},isSidebarCollapsed:{type:Boolean,required:!0}},computed:{isPinnedLocal:{get:function(){return this.isPinnedProp},set:function(t){var e=this,s=this.$store.getters["chat/chatDataOfUser"](this.userId);if(s){var a={id:this.userId,value:t};this.$store.dispatch("chat/toggleIsPinned",a).then((function(){e.$emit("toggleIsChatPinned",t)})).catch((function(t){console.error(t)}))}else this.$emit("toggleIsChatPinned",t)}},getConts2:function(){return this.$store.getters["chat/contact"](this.userId)},getStatusColor:function(){var t=this;return function(e){var s=t.getUserStatus(e);return"online"===s?"success":"do not disturb"===s?"danger":"away"===s?"warning":"grey"}}},methods:{getUserStatus:function(t){return!0}}},C=v,m=Object(h["a"])(C,g,f,!1,null,null,null),p=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"parentx-demo-2"}},[s("vs-sidebar",{staticClass:"items-no-padding",attrs:{parent:"#chat-app","position-right":!t.isLoggedInUser,"hidden-background":!1,id:"chat-profile-sidebar"},model:{value:t.activeLocal,callback:function(e){t.activeLocal=e},expression:"activeLocal"}},[s("div",{staticClass:"header-sidebar relative flex flex-col p-0",attrs:{slot:"header"},slot:"header"},[s("feather-icon",{attrs:{icon:"XIcon",svgClasses:"m-2 cursor-pointer absolute top-0 right-0"},on:{click:function(e){return t.$emit("closeProfileSidebar",!1)}}}),s("div",{staticClass:"relative inline-flex mx-auto mb-5 mt-6"},[s("vs-avatar",{staticClass:"m-0 border-white border-2 border-solid shadow-md",attrs:{src:t.chatUser.photoURL,size:"70px"}}),s("div",{staticClass:"h-5 w-5 border-white border-2 border-solid rounded-full absolute right-0 bottom-0",class:"bg-"+t.statusColor})],1),t._v("\nuserProfile\n                "),s("h4",{staticClass:"mr-2 self-center"},[t._v(t._s(t.chatUser.displayName))])],1),s(t.scrollbarTag,{key:t.$vs.rtl,tag:"component",staticClass:"scroll-area",attrs:{settings:t.settings}},[s("div",{staticClass:"p-8"},[s("h6",{staticClass:"mb-2",class:{"ml-4":t.isLoggedInUser}},[t._v("About")]),t.isLoggedInUser?s("vs-textarea",{staticClass:"mb-10",attrs:{counter:"120",maxlength:"120","counter-danger":t.counterDanger,rows:"5"},on:{"update:counterDanger":function(e){t.counterDanger=e},"update:counter-danger":function(e){t.counterDanger=e}},model:{value:t.about,callback:function(e){t.about=e},expression:"about"}}):s("p",[t._v(t._s(t.chatUser.about))]),t.isLoggedInUser?s("div",{staticClass:"userProfile__status"},[s("h6",{staticClass:"mb-4"},[t._v("Status")]),s("ul",[s("li",{staticClass:"mb-2"},[s("vs-radio",{attrs:{"vs-value":"online",color:"success"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v("Active")])],1),s("li",{staticClass:"mb-2"},[s("vs-radio",{attrs:{"vs-value":"do not disturb",color:"danger"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v("Do Not Disturb")])],1),s("li",{staticClass:"mb-2"},[s("vs-radio",{attrs:{"vs-value":"away",color:"warning"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v("Away")])],1),s("li",{staticClass:"mb-2"},[s("vs-radio",{attrs:{"vs-value":"offline",color:"grey"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v("Offline")])],1)])]):t._e()],1)])],1)],1)},S=[],_=s("9d63"),P=s.n(_),w={props:{userId:{type:Number,required:!0},active:{type:Boolean,required:!0},isLoggedInUser:{type:Boolean,required:!0}},data:function(){return{counterDanger:!1,settings:{maxScrollbarLength:60,wheelSpeed:.6}}},computed:{chatUser:function(){return this.$store.getters["chat/chatUser"](this.userId)},activeLocal:{get:function(){return this.active},set:function(t){this.$emit("closeProfileSidebar",t)}},about:{get:function(){return this.chatUser.about},set:function(t){this.$store.dispatch("updateUserInfo",{about:t})}},status:{get:function(){return this.chatUser.status},set:function(t){this.$store.dispatch("updateUserInfo",{status:t})}},statusColor:function(){var t=this.chatUser.status;return"online"===t?"success":"do not disturb"===t?"danger":"away"===t?"warning":"grey"},scrollbarTag:function(){return this.$store.getters.scrollbarTag}},components:{VuePerfectScrollbar:P.a}},U=w,y=Object(h["a"])(U,b,S,!1,null,null,null),$=y.exports,k=(s("ce9d"),s("88fa"),{created:function(){this.contactId=this.$route.params.contactId,this.$store.commit("chat/MUTSETCURRENTCONTACT",0);var t=this;setTimeout((function(e){t.$store.commit("chat/MUTSETCURRENTCONTACT",t.contactId)}),2e3);var e={NumEmpresa:this.getProfile[0].Empresa,userid:this.getProfile[0].num_user};this.getfetContacts(e),this.getChatContacts(e),this.setSidebarWidth()},mounted:function(){try{this.$socket.connect(),this.$store.commit("chat/MUTCHATCONNECT","No Conectado sus Mensajes No seran Entregados");var t={NumEmpresa:this.getProfile[0].Empresa,username:this.getProfile[0].Username,id:this.getProfile[0].num_user,msg:{textContent:this.mensajeConectado,time:String(new Date),isSent:!0,isSeen:!1}};this.$socket.emit("TEST_CONNECTION",t,(function(t){console.log("se disparo el   collback de Conectado ",t)}))}catch(e){console.log("en Chat.vue  en mounted catch"+e)}this.typedMessage=""},data:function(){return{tokenChat:"",colorConectado:"text-danger",mensajeConectado:"Listo* Puede Chatear",contactId:"0",chatMsg:{msg:1},messages:[],active:!0,isHidden:!1,searchContact:"",activeProfileSidebar:!1,activeChatUser:118,userProfileId:-1,typedMessage:"",isChatPinned:!1,settings:{maxScrollbarLength:60,wheelSpeed:.7},clickNotClose:!0,isChatSidebarActive:!0,isLoggedInUserProfileView:!1}},watch:{getChatconnect:function(){this.getChatconnect==this.mensajeConectado&&(this.colorConectado="text-success")},chatMsg:function(){console.log("mensaje",this.chatMsg),this.setMessage(this.chatMsg)},windowWidth:function(){this.setSidebarWidth()},getProfile:function(){console.log("cambio el profile CHAT LINEA 167 APROX")},getCurrentContact:function(){if(this.getCurrentContact>0){var t=this.getCurrentContact;try{t=parseInt(t,10)}catch(e){}this.updateActiveChatUser(t)}}},computed:{getChatconnect:function(){return this.$store.state.chat.chatconnect},getRecargar:function(){return this.$store.state.recargar},getCurrentContact:function(){return this.$store.state.chat.currentContact},getAppActiveUser:function(){return this.$store.state.AppActiveUser},getchats:function(){return this.$store.state.chat.chats},getProfile:function(){return this.$store.state.dsoaLogin.profile},getTokenChat:function(){return this.$store.state.dsoaLogin.token},chatLastMessaged:function(){var t=this;return function(e){return t.$store.getters["chat/chatLastMessaged"](e)}},chatUnseenMessages:function(){var t=this;return function(e){var s=t.$store.getters["chat/chatUnseenMessages"](e);if(s)return s}},activeUser:function(){return this.$store.state.AppActiveUser},getStatusColor:function(){var t=this;return function(e){var s=t.getUserStatus(e);return"online"===s?"success":"do not disturb"===s?"danger":"away"===s?"warning":"grey"}},chatContacts:function(){return this.$store.getters["chat/chatContacts"]},contacts:function(){return this.$store.getters["chat/contacts"]},searchQuery:{get:function(){return this.$store.state.chat.chatSearchQuery?this.$store.state.chat.chatSearchQuery:""},set:function(t){this.$store.dispatch("chat/setChatSearchQuery",t)}},scrollbarTag:function(){return this.$store.getters.scrollbarTag},isActiveChatUser:function(){var t=this;return function(e){return e===t.activeChatUser}},windowWidth:function(){return this.$store.state.windowWidth}},methods:{recarga:function(){this.searchQuery="",this.$router.go(this.$router.currentRoute)},getUserStatus:function(t){return t?this.$store.state.AppActiveUser.status:this.contacts[this.activeChatUser].status},closeProfileSidebar:function(t){this.activeProfileSidebar=t},updateActiveChatUser:function(t){this.contactId=0;try{this.activeChatUser=parseInt(t,10)}catch(a){this.activeChatUser=t}var e={NumEmpresa:this.getProfile[0].Empresa,userid:this.getProfile[0].num_user,userSend:t};this.getfetChats(e),this.$store.getters["chat/chatDataOfUser"](this.activeChatUser)&&this.$store.dispatch("chat/markSeenAllMessages",t);var s=this.$store.getters["chat/chatDataOfUser"](this.activeChatUser);this.isChatPinned=!!s&&s.isPinned,this.toggleChatSidebar(),this.typedMessage=""},showProfileSidebar:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{this.userProfileId=parseInt(t,10)}catch(s){this.userProfileId=t}this.isLoggedInUserProfileView=e,this.activeProfileSidebar=!this.activeProfileSidebar},sendMsg:function(){if(this.typedMessage&&this.activeChatUser){var t={NumEmpresa:this.getProfile[0].Empresa,isPinned:this.isChatPinned,username:this.getProfile[0].Username,sendusernum:this.getProfile[0].num_user,usernameOriginal:this.getProfile[0].Username+"-"+this.getProfile[0].Nombre,msg:{textContent:this.typedMessage,time:String(new Date),isSent:!0,isSeen:!1},id:this.activeChatUser};console.log("enviando ",JSON.stringify(t)),this.typedMessage="",this.$socket.emit("SEND_MESSAGE",t,(function(t){console.log("se disparo el  collback",t)})),this.$store.dispatch("chat/SENDCHATMESSAGE",t);var e=this.$refs.chatLogPS.$el||this.$refs.chatLogPS;e.scrollTop=this.$refs.chatLog.scrollHeight}},setMessage:function(t){this.$store.commit("chat/SEND_CHAT_MESSAGE",t)},toggleIsChatPinned:function(t){this.isChatPinned=t},setSidebarWidth:function(){this.windowWidth<1200?this.isChatSidebarActive=this.clickNotClose=!1:this.isChatSidebarActive=this.clickNotClose=!0},toggleChatSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!t&&this.clickNotClose||(this.isChatSidebarActive=t)},getfetContacts:function(t){return this.$store.dispatch("chat/fetchContacts",t),1},getfetChats:function(t){return this.$store.dispatch("chat/fetchChats",t),1},getChatContacts:function(t){return this.$store.dispatch("chat/fetchChatContacts",t),1}},components:{VuePerfectScrollbar:P.a,ChatContact:i["a"],UserProfile:$,ChatNavbar:p,ChatLog:d}}),x=k,I=(s("5791"),Object(h["a"])(x,a,r,!1,null,null,null));e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-7a3bc2ee.a4e9823c.js.map