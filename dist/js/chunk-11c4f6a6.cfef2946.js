(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c4f6a6"],{"1aef":function(t,e,i){"use strict";var a=i("6b4d"),r=i.n(a);r.a},"3dfc":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"ag-grid-demo"}},[i("div",[t._v(t._s(t.getTitulo))]),t._v("  \n    \n      \n    "+t._s(t.datosPrompt[0].datos)+"\n    "),i("div",{staticClass:"flex flex-wrap justify-between items-center"},[i("div",{staticClass:"mb-4 md:mb-0 mr-4 ag-grid-table-actions-left"},[i("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[i("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[i("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.paginationPageSize-(t.paginationPageSize-1))+" - "+t._s(t.getDdatosRow.length-t.currentPage*t.paginationPageSize>0?t.currentPage*t.paginationPageSize:t.getDdatosRow.length)+" of "+t._s(t.getDdatosRow.length))]),i("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),i("vs-dropdown-menu",[i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(10)}}},[i("span",[t._v("10")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(20)}}},[i("span",[t._v("20")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(50)}}},[i("span",[t._v("50")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(100)}}},[i("span",[t._v("100")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(150)}}},[i("span",[t._v("150")])])],1)],1)],1),i("div",{staticClass:"flex flex-wrap items-center justify-between ag-grid-table-actions-right"},[i("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Buscar..."},on:{input:t.updateSearchQuery},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),i("vs-button",{staticClass:"mb-4 md:mb-0",on:{click:function(e){return t.gridApi.exportDataAsCsv()}}},[t._v("Exportar a Excel")])],1)]),i("div",{staticStyle:{height:"100%"}},[i("ag-grid-vue",{staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{gridOptions:t.gridOptions,columnDefs:t.columnDefs,defaultColDef:t.defaultColDef,rowData:t.getDdatosRow,rowSelection:"single",colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,suppressDragLeaveHidesColumns:!0,paginationPageSize:t.paginationPageSize,suppressPaginationPanel:!1},on:{cellDoubleClicked:t.onDoubleClicked}})],1),i("pre")])])},r=[],s=(i("1c01"),i("58b2"),i("8e6e"),i("d25f"),i("456d"),i("ac6a"),i("f3e2"),i("bd86")),o=i("401b"),n=i("2f62"),c=i("56d7"),l=(i("4e06"),i("88fa"));function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={components:{AgGridVue:o["AgGridVue"]},props:{datosPrompt:{type:Array,required:!0}},beforeMount:function(){this.columnDefs=this.datosPrompt[0].columnDefs},mounted:function(){"NA"==this.datosPrompt[0].datos[0].nombre?this.datosPrompt[0].datos[0].nombre="NA":this.buscaRegistros(),this.gridApi=this.gridOptions.api,this.gridColumnApi=this.gridOptions.columnApi},computed:u({},Object(n["c"])(["datosJ","selectedRow","rows","datosGrid","tableKey","urlOrigen","laststrheader","laststrParametros","laststrFilas"]),{getProfile:function(){return this.$store.state.dsoaLogin.profile[0]},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},getTitulo:function(){return this.datosPrompt[0].titulo+" XXX"},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(t){this.gridApi.paginationGoToPage(t-1)}},getDatos:function(){return this.$store.getters.getRows},getDdatosRow:{get:function(){return this.$store.state.datosPrompt.rows}},getDdatosPages:{get:function(){return 0}},lastDbmsg:function(){return this.$store.state.lastBdmsage},lastDbmsgCode:function(){return this.$store.state.lastBdmsgcode}}),data:function(){return{activaEdit:!1,locallastheader:"",locallaststrParametros:"",locallaststrFilas:"",paramtxt:"",filastxt:"",header:"",staticKey:[],rowsForm:[],dinamicKey:[],titulo:"Consulta de Cantones",origenUrl:"J",dml:"I",searchQuery:"",activaFiltro:!1,gridOptions:{},maxPageNumbers:100,gridApi:null,exp:null,columnDefs:null,defaultColDef:{sortable:!0,resizable:!0,editable:!1,filter:!0,suppressMenu:!1}}},methods:{onDoubleClicked:function(t){var e=this.gridOptions.api.getSelectedRows();c["eventBus"].$emit("datosprompt",e[0],this.datosPrompt[0].idprompt),this.$parent.activaPromp=!1},updateSearchQuery:function(t){this.gridApi.setQuickFilter(t)},addFilas:function(){var t=[],e={NOMBRE:"",VALOR1:"",VALOR2:"",CDATA:"0"};this.datosPrompt[0].filas.forEach((function(i){e={NOMBRE:i.NOMBRE,VALOR1:"",VALOR2:"",CDATA:"0"},t.push(e)})),this.filastxt=l["n"](t,"N")},buscaRegistros:function(){var t="O",e={MODO:"JJ",OBJECTID:this.datosPrompt[0].ObjectId,CREDENCIAL:this.getProfile.Credencial,USERNAME:this.getProfile.UserName,REGISTROSXPAGINA:"200",PAGINA:"1",ORDERBY:""};this.headertxt=l["g"](e),this.addFilas();var i=[],a={NOMBRE:"",OPERADOR:"=",VALOR1:"01",VALOR2:"",CDATA:"0"},r=0;this.datosPrompt[0].datos.forEach((function(t){t.valor.length>0&&(a={NOMBRE:t.nombre,OPERADOR:"=",VALOR1:t.valor,VALOR2:"",CDATA:"0"},i.push(a),r++)})),this.paramtxt=0==r?"<Param/>":l["r"](i),console.log("header",this.headertxt),console.log("param",this.paramtxt),console.log("filas",this.filastxt);var s={header:this.headertxt,parametros:this.paramtxt,filas:this.filastxt};this.$store.commit("MUTSETURL","O"),this.$store.commit("MUTSETPETICIONTXT",s);var o={dml:"JJ",Credencial:this.getProfile.Credencial,ObjectId:this.datosPrompt[0].ObjectId,formatoenvio:"N",formatorecibe:"N",indicador:"5",origenUrl:t};this.$store.dispatch("acDsoa",o)}}},m=p,h=i("2877"),f=Object(h["a"])(m,a,r,!1,null,null,null);e["a"]=f.exports},"5d1f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"avatar-2503"}},[i("grid2503",{directives:[{name:"show",rawName:"v-show",value:!t.activaEdit,expression:"!activaEdit"}]}),i("Edit2503",{directives:[{name:"show",rawName:"v-show",value:t.activaEdit&&!t.activaPromp,expression:"activaEdit && !activaPromp"}],attrs:{key2:t.editKey,datosEdit:t.datosEdit},on:{closeSidebar:function(e){t.activaEdit=!1}}}),i("promptDivi",{directives:[{name:"show",rawName:"v-show",value:t.activaPromp,expression:"activaPromp"}],key:t.promptKey,attrs:{datosPrompt:t.datosPrompt},on:{closeSidebar:function(e){t.activaPromp=!1}}})],1)},r=[],s=(i("1c01"),i("58b2"),i("8e6e"),i("f3e2"),i("d25f"),i("ac6a"),i("456d"),i("bd86")),o=i("2f62"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isNinja?i("div",{attrs:{id:"GRID2503"}},[i("table",{staticClass:"table"},[i("tbody",[i("tr",[i("td",[i("button",{staticClass:"btn btn-primary btn-sm",on:{click:t.RegistroNuevo}},[t._v("Agregar Registo")])]),i("td",[i("div",{staticClass:"p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:function(e){t.activaFiltro=!0}}},[i("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),i("span",{staticClass:"ml-2 text-base text-primary"},[t._v("Consulta Base Datos")])],1)])])])]),i("filtrosDivisoft",{directives:[{name:"show",rawName:"v-show",value:t.activaFiltro,expression:"activaFiltro"}],attrs:{header:t.locallastheader,isSidebarActive:t.activaFiltro,filas:t.locallaststrFilas,filtros:t.filtros},on:{closeSidebar:function(e){t.activaFiltro=!1},ajustaUltimoParam:t.ajustaUltimoParam}}),i("div",{staticClass:"flex flex-wrap justify-between items-center"},[i("div",{staticClass:"mb-4 md:mb-0 mr-4 ag-grid-table-actions-left"},[i("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[i("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[i("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.paginationPageSize-(t.paginationPageSize-1))+" - "+t._s(t.getDdatosRow.length-t.currentPage*t.paginationPageSize>0?t.currentPage*t.paginationPageSize:t.getDdatosRow.length)+" of "+t._s(t.getDdatosRow.length))]),i("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),i("vs-dropdown-menu",[i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(10)}}},[i("span",[t._v("10")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(20)}}},[i("span",[t._v("20")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(50)}}},[i("span",[t._v("50")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(100)}}},[i("span",[t._v("100")])]),i("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(150)}}},[i("span",[t._v("150")])])],1)],1)],1),i("div",{staticClass:"flex flex-wrap items-center justify-between ag-grid-table-actions-right"},[i("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Buscar..."},on:{input:t.updateSearchQuery},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),i("vs-button",{staticClass:"mb-4 md:mb-0",on:{click:function(e){return t.gridApi.exportDataAsCsv()}}},[t._v("Exportar a Excel")])],1)]),i("div",{staticStyle:{height:"100%"}},[i("ag-grid-vue",{staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{gridOptions:t.gridOptions,columnDefs:t.columnDefs,defaultColDef:t.defaultColDef,rowData:t.getDdatosRow,rowSelection:"single",colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,suppressDragLeaveHidesColumns:!0,paginationPageSize:t.paginationPageSize,suppressPaginationPanel:!1},on:{"row-selected":t.onRowSelected,"selection-changed":t.onSelectionChanged,cellDoubleClicked:t.onDoubleClicked}})],1),i("pre")],1):t._e()])},c=[],l=i("401b"),d=(i("4e06"),i("56d7")),u=i("88fa"),p=i("b34e");function m(){var t=[];return t.push({NOMBRE:"COD_PAIS",VALOR1:null,VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"COD_PROVINCIA",VALOR1:null,VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"DES_PROVINCIA",VALOR1:null,VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"(select  Z.NOM_PAIS from GO_PAISES Z where  Z.COD_PAIS= A.COD_PAIS)  AS  NOM_PAIS",VALOR1:null,VALOR2:"",CDATA:"0"}),t}var h=[{NOMBRE_CAMPO:"Cod Pais",NOMBRE_INTERNO:"COD_PAIS",VALOR:"",TIPO_FILTRO:[{TIPO:"IGUAL",LABEL:"="},{TIPO:"MAYOR",LABEL:">"},{TIPO:"MENOR",LABEL:"<"},{TIPO:"MAYORIGUAL",LABEL:"= >"},{TIPO:"MENORIGUAL",LABEL:"< ="},{TIPO:"IN",LABEL:"In"},{TIPO:"NOTIN",LABEL:"Not In"},{TIPO:"LIKE",LABEL:"texto"}]},{NOMBRE_CAMPO:"Nombre Pais",NOMBRE_INTERNO:"NOM_PAIS",VALOR:"",TIPO_FILTRO:[{TIPO:"IGUAL",LABEL:"="},{TIPO:"MAYOR",LABEL:">"},{TIPO:"MENOR",LABEL:"<"},{TIPO:"MAYORIGUAL",LABEL:"= >"},{TIPO:"MENORIGUAL",LABEL:"< ="},{TIPO:"IN",LABEL:"In"},{TIPO:"NOTIN",LABEL:"Not In"},{TIPO:"LIKE",LABEL:"texto"}]},{NOMBRE_CAMPO:"Cod Provincia",NOMBRE_INTERNO:"COD_PROVINCIA",VALOR:"",TIPO_FILTRO:[{TIPO:"IGUAL",LABEL:"="},{TIPO:"MAYOR",LABEL:">"},{TIPO:"MENOR",LABEL:"<"},{TIPO:"MAYORIGUAL",LABEL:"= >"},{TIPO:"MENORIGUAL",LABEL:"< ="},{TIPO:"IN",LABEL:"In"},{TIPO:"NOTIN",LABEL:"Not In"},{TIPO:"LIKE",LABEL:"texto"}]}],f=[{COD_PAIS:"0",COD_PROVINCIA:"0",DES_PROVINCIA:"0",NOM_PAIS:null}],O={custom:{COD_PAIS:{required:"El Cod Pais es obligatorio"},COD_PROVINCIA:{required:"El Cod Provincia es obligatorio"},DES_PROVINCIA:{required:"El Des Provincia es obligatorio"},NOM_PAIS:{required:"El Nombre Pais es obligatorio"}}},g=[{headerName:"Cod Pais",field:"COD_PAIS",filter:!0,lockPosition:!0,width:150},{headerName:"Nombre Pais",field:"NOM_PAIS",filter:!0,lockPosition:!0,width:1e3},{headerName:"Cod Provincia",field:"COD_PROVINCIA",filter:!0,lockPosition:!0,width:150},{headerName:"Des Provincia",field:"DES_PROVINCIA",filter:!0,lockPosition:!0,width:250}];function P(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?P(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v={components:{AgGridVue:l["AgGridVue"],filtrosDivisoft:p["a"]},beforeMount:function(){this.columnDefs=g;var t=f;this.$store.commit("MUTSETDATOSDEFAULT",t)},mounted:function(){this.buscarDatos(),this.gridApi=this.gridOptions.api,this.gridColumnApi=this.gridOptions.columnApi},data:function(){return{activaEdit:!1,locallastheader:"",locallaststrParametros:"",locallaststrFilas:"",paramtxt:"",filastxt:"",header:"",isNinja:!0,staticKey:[],dinamicKey:[],origenUrl:"J",dml:"I",searchQuery:"",activaFiltro:!1,gridOptions:{},maxPageNumbers:100,gridApi:null,exp:null,columnDefs:null,defaultColDef:{sortable:!0,resizable:!0,editable:!1,filter:!0,suppressMenu:!1},filtros:h}},computed:A({},Object(o["c"])(["profile","rowsForm","selectedRow","rows","datosGrid","tableKey","estadoProcesando"]),{paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},getAutor:function(){return this.$parent.autor},getProfile:function(){return this.$store.state.dsoaLogin.profile[0]},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(t){this.gridApi.paginationGoToPage(t-1)}},getDatos:function(){return this.$store.getters.getRows},getDdatosRow:{get:function(){return this.$store.state.datosGrid.rows}},currentRecord:function(){return this.$store.state.rowsForm[0]},getDdatosPages:{get:function(){return 0}},lastDbmsg:function(){return this.$store.state.lastBdmsage},lastDbmsgCode:function(){return this.$store.state.lastBdmsgcode}}),methods:{fechas:function(){var t=new Date;t.valueOf();u["m"](5e3),t=new Date,t.valueOf()},reRender:function(){this.$forceUpdate()},onRowSelected:function(){this.gridOptions.api.getSelectedRows()},onSelectionChanged:function(t){var e=t.api.getSelectedNodes().length;return e},ajustaUltimoParam:function(t){this.locallaststrParametros=t},refreshConsulta:function(){0!=this.lastDbmsgCode&&this.$swal(this.lastDbmsg),this.$store.commit("MUTSETURL","O");var t={header:this.locallastheader,parametros:this.locallaststrParametros,filas:this.locallaststrFilas};this.$store.commit("MUTSETPETICIONTXT",t);var e={dml:"JJ",Credencial:this.getProfile.Credencial,ObjectId:"2503",formatoenvio:"N",formatorecibe:"N",indicador:"1",origenUrl:this.origenUrl};this.$store.dispatch("acDsoa",e)},onDoubleClicked:function(t){var e=f;this.$store.commit("MUTSETDATOSDEFAULT",e),this.dinamicKey=[],this.dinamicKey.push({nombre:"COD_PAIS",valor:t.node.data.COD_PAIS}),this.dinamicKey.push({nombre:"COD_PROVINCIA",valor:t.node.data.COD_PROVINCIA}),d["eventBus"].$emit("cargaRegistro",this.dinamicKey),this.$emit("incrementaEkey"),this.$parent.activaEdit=!0,this.dml="U"},updateSearchQuery:function(t){this.gridApi.setQuickFilter(t)},addFilas:function(){var t=[];t.push({NOMBRE:"COD_PAIS",VALOR1:"",VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"NOM_PAIS",VALOR1:"",VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"COD_PROVINCIA",VALOR1:"",VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"DES_PROVINCIA",VALOR1:"",VALOR2:"",CDATA:"0"}),this.filastxt=u["n"](t,"N")},RegistroNuevo:function(){this.$parent.indicadorDML="I",this.dinamicKey=[];var t=f;this.$store.commit("MUTSETDATOSDEFAULT",t),this.dinamicKey.push({nombre:"COD_PAIS",valor:"0"}),this.dinamicKey.push({nombre:"COD_PROVINCIA",valor:"0"}),d["eventBus"].$emit("cargaRegistro",this.dinamicKey),this.$parent.activaEdit=!0},buscarDatos:function(){var t="O",e={MODO:"JJ",OBJECTID:"2503",CREDENCIAL:this.getProfile.Credencial,USERNAME:this.getProfile.Username,REGISTROSXPAGINA:"200",PAGINA:"1",ORDERBY:""};this.headertxt=u["g"](e),this.addFilas();var i=[];this.paramtxt=u["r"](i);var a={header:this.headertxt,parametros:this.paramtxt,filas:this.filastxt};this.$store.commit("MUTSETURL","O"),this.$store.commit("MUTSETPETICIONTXT",a);var r={dml:"JJ",Credencial:this.getProfile.Credencial,ObjectId:"2503",formatoenvio:"N",formatorecibe:"N",indicador:"1",origenUrl:t};this.$store.dispatch("acDsoa",r),this.locallastheader=this.headertxt,this.locallaststrParametros=this.paramtxt,this.locallaststrFilas=this.filastxt}}},b=v,C=i("2877"),I=Object(C["a"])(b,n,c,!1,null,null,null),D=I.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:t.getAction,"code-toggler":""}},[i("div",[i("h1",[t._v("Mantenimiento de Registros")])]),i("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[i("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),i("vs-divider",{staticClass:"mb-0"}),i("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6"},[i("vx-input-group",{staticClass:"mb-base"},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full"},[i("vx-input-group",{staticClass:"mb-base"},[i("template",{slot:"prepend"},[i("vs-input",{attrs:{value:t.COD_PAIS,name:"COD_PAIS",label:"Código Pais"},model:{value:t.COD_PAIS,callback:function(e){t.COD_PAIS=e},expression:"COD_PAIS"}}),i("vs-button",{attrs:{color:"primary",type:"border"},on:{click:t.setActivaPromp2502}},[t._v("IR")]),i("vs-input",{attrs:{value:t.NOM_PAIS,name:"NOM_PAIS",label:"Nombre Pais"},model:{value:t.NOM_PAIS,callback:function(e){t.NOM_PAIS=e},expression:"NOM_PAIS"}})],1)],2)],1),i("div",{staticClass:"vx-col w-1/2"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{size:"large",label:"Cod Provincia",name:"COD_PROVINCIA"},model:{value:t.COD_PROVINCIA,callback:function(e){t.COD_PROVINCIA=e},expression:"COD_PROVINCIA"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("step-1.COD_PROVINCIA")))])],1),i("div",{staticClass:"vx-col w-1/2"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{size:"large",label:"Des Provincia",name:"DES_PROVINCIA"},model:{value:t.DES_PROVINCIA,callback:function(e){t.DES_PROVINCIA=e},expression:"DES_PROVINCIA"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("step-1.DES_PROVINCIA")))])],1)]),i("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(e){return t.GuardaRegistro()}}},[t._v("\n          Salvar Datos \n          ")])])],1)],1)},E=[],S=i("9d63"),N=i.n(S),L=i("7bb1"),w=i("c38f"),_=i.n(w),T=(i("2be5"),i("4984"));function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var M=O;L["a"].localize("en",M);var V={name:"Autocomplete",components:{VuePerfectScrollbar:N.a,flatPickr:_.a,Prism:Prism},props:{datosEdit:{type:Array,required:!0}},beforeMount:function(){this.defaultdatos=f,this.$store.commit("MUTSETDATOSDEFAULT",this.defaultdatos)},created:function(){var t=this;d["eventBus"].$on("datosprompt",(function(e,i){t.rowselectionprompt=e,t.indicadorPrompt=i})),d["eventBus"].$on("cargaRegistro",(function(e){"0"==e[1].valor?t.buscarRegistro(t.defaultdatos[0]):t.buscarRegistro(e)}))},beforeDestroy:function(){d["eventBus"].$off("datosprompt"),d["eventBus"].$off("datosprompt"),d["eventBus"].$off("cargaRegistro")},watch:{rowselectionprompt:function(){1==this.indicadorPrompt&&(this.COD_PAIS=this.rowselectionprompt.COD_PAIS,this.NOM_PAIS=this.rowselectionprompt.NOM_PAIS)},lastDbmsgCode:function(){0!=this.lastDbmsgCode&&this.$vs.notify({title:"Servicio Restfull",time:6e3,text:this.lastDbmsg,color:"warning"})}},data:function(){return{messageError:"Sin Errores",respuestaProc:[],configdateTimePicker:{locale:T["Spanish"]},configFechaHoraPicker2:u["f"],configHoraPicker2:u["i"],valorAutocomplete:"",COD_PAIS:"0",COD_PROVINCIA:"0",DES_PROVINCIA:"0",NOM_PAIS:null,actualizo:!1,iniciado:!1,defaultdatos:[],indicadorPrompt:0,rowselectionprompt:[],datosPrompt:[{titulo:""}],counterDanger:!1,origenUrl:"J",activaPrompt:!1,settings:{maxScrollbarLength:60},parametros:[],locallastheader:"",locallaststrParametros:"",locallaststrFilas:"",paramtxt:"",filastxt:"",header:""}},computed:x({},Object(o["c"])(["dsoaModel","rowsForm","DataCMS","tableKey","urlOrigen"]),{getProfile:function(){return this.$store.state.dsoaLogin.profile[0]},currentRecord:function(){return this.$store.state.rowsForm[0]},CMSDataRespuesta:function(){return this.$store.state.DataCMS},getAction:{get:function(){return"U"==this.getindicadorDML?"Editando Registro 2":"Insertando Registro"}},getindicadorDML:function(){return this.datosEdit[0].indicadorDML},lastDbmsg:function(){return this.$store.state.lastBdmsage},procesando:function(){return this.$store.state.estadoProcesando},lastDbmsgCode:function(){return this.$store.state.lastBdmsgcode},estadoProcesando:function(){return this.$store.state.estadoProcesando}}),methods:{setActivaPromp2502:function(){var t=[{nombre:"nombre",valor:""}];this.$parent.cargaPrompt2502(t)},regresa:function(){this.$parent.activaEdit=!1},validateStep1:function(){var t=this;return new Promise((function(e,i){t.$validator.validateAll("step-1").then((function(t){t?e(!0):i("correct all values")}))}))},validateStep2:function(){var t=this;return new Promise((function(e,i){t.$validator.validateAll("step-2").then((function(t){t?e(!0):i("correct all values")}))}))},validateStep3:function(){var t=this;return new Promise((function(e,i){t.$validator.validateAll("step-3").then((function(t){t?e(!0):i("correct all values")}))}))},addFilas:function(){var t=[];t.push({NOMBRE:"COD_PAIS",VALOR1:this.COD_PAIS,VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"COD_PROVINCIA",VALOR1:this.COD_PROVINCIA,VALOR2:"",CDATA:"0"}),t.push({NOMBRE:"DES_PROVINCIA",VALOR1:this.DES_PROVINCIA,VALOR2:"",CDATA:"0"}),this.filastxt=u["n"](t,"S")},formSubmitted:function(){this.GuardaRegistro()},GuardaRegistro:function(){var t={MODO:this.getindicadorDML,OBJECTID:"2503",CREDENCIAL:this.getProfile.Credencial,USERNAME:this.getProfile.Username,REGISTROSXPAGINA:"200",PAGINA:"1"};this.headertxt=u["g"](t),this.addFilas(),this.paramtxt=" <Param><ParamItem/></Param>";var e={header:this.headertxt,parametros:this.paramtxt,filas:this.filastxt};this.$store.commit("MUTSETURL","O"),this.$store.commit("MUTSETPETICIONTXT",e);var i={dml:this.getindicadorDML,Credencial:this.getProfile.Credencial,ObjectId:"2503",formatoenvio:"N",formatorecibe:"N",indicador:"3",origenUrl:this.origenUrl};this.$store.dispatch("acDsoa",i),this.$parent.activaEdit=!1},cargaRegistroActual:function(t){this.COD_PAIS=t.COD_PAIS,this.COD_PROVINCIA=t.COD_PROVINCIA,this.DES_PROVINCIA=t.DES_PROVINCIA,this.NOM_PAIS=t.NOM_PAIS,this.REFERENCIA_FOTO>0&&(this.CMSDATA=atob(t.CMSDATA),this.CMSDATA=JSON.parse(this.CMSDATA),this.cargaAvatar())},buscarRegistro:function(t){var e={MODO:"JJ",OBJECTID:"2503",CREDENCIAL:this.getProfile.Credencial,USERNAME:this.getProfile.Username,REGISTROSXPAGINA:"200",PAGINA:"1",ORDERBY:""};this.headertxt=u["g"](e);var i="O",a=m();this.filastxt=u["n"](a,"N");var r=[],s={NOMBRE:"",OPERADOR:"=",VALOR1:"",VALOR2:"",CDATA:"0"};t.forEach((function(t){t.valor.length>0&&(s={NOMBRE:t.nombre,OPERADOR:"=",VALOR1:t.valor,VALOR2:"",CDATA:"0"},r.push(s))})),this.paramtxt=u["r"](r);var o={header:this.headertxt,parametros:this.paramtxt,filas:this.filastxt};this.$store.commit("MUTSETURL","O"),this.$store.commit("MUTSETPETICIONTXT",o);var n={dml:"JJ",Credencial:this.getProfile.Credencial,ObjectId:"2503",formatoenvio:"N",formatorecibe:"N",indicador:"2",origenUrl:i};this.$store.dispatch("acDsoa",n),this.datosJson={indicadorDML:"U",locallaststrParametros:this.locallaststrParametros},this.$parent.indicadorDML="U",this.$parent.activaEdit=!0}}},j=V,B=(i("1aef"),Object(C["a"])(j,R,E,!1,null,"29b92e3d",null)),$=B.exports,k=i("3dfc");function U(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?U(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):U(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var G={components:{grid2503:D,Edit2503:$,filtrosDivisoft:p["a"],promptDivi:k["a"]},data:function(){return{promptKey:1,editKey:1,activaPromp:!1,datosPrompt:[{titulo:"",ObjectId:1,idprompt:1,columnDefs:[{headerName:"Etiqueta",field:"NOMBRE",filter:!0,width:300,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0,pinned:"left"}],filas:[{NOMBRE:""}],datos:[{nombre:"NA",valor:"-1"}]}],indicadorDML:"U",activaEdit:!1,filtros:h,locallastheader:"",locallaststrParametros:"",locallaststrFilas:"",autor:"Ademar Diaz"}},computed:F({},Object(o["c"])(["dsoaModel","datosJ","datosV","selectedRow","rows","datosGridPhp","datosGrid","tableKey","urlOrigen","laststrheader","laststrParametros","laststrFilas"]),{datosEdit:{get:function(){return[{datosRow:[],indicadorDML:this.indicadorDML}]}},lastDbmsg:function(){return this.$store.state.lastBdmsage},lastDbmsgCode:function(){return this.$store.state.lastBdmsgcode}}),methods:{incrementaEkey:function(){this.editKey++},cargaPrompt2502:function(t){var e=[];e.push({NOMBRE:"COD_PAIS",VALOR1:"",VALOR2:"",CDATA:"0"}),e.push({NOMBRE:"NOM_PAIS",VALOR1:"",VALOR2:"",CDATA:"0"}),this.datosPrompt=[],this.datosPrompt=[{titulo:"GO_PAISES",ObjectId:2502,idprompt:1,filas:[],datos:[]}],this.datosPrompt[0].datos=t,this.datosPrompt[0].filas=e;var i=[{headerName:"Código Pais",field:"COD_PAIS",filter:!0,width:200},{headerName:"Nombre Pais",field:"NOM_PAIS",filter:!0,width:300,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0,lockPosition:!0,pinned:"left"}];this.datosPrompt[0].columnDefs=i,this.promptKey++,this.editKey++,this.activaPromp=!0}}},z=G,J=Object(C["a"])(z,a,r,!1,null,null,null);e["default"]=J.exports},6454:function(t,e,i){},"6b4d":function(t,e,i){},b34e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vx-col md:w-1/2 w-full mb-base",attrs:{id:"data-list-list-view"}},[i("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[i("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[i("h4",[t._v("Nueva Busqueda")]),t._v("\n            "+t._s(t.ObjectID)+"\n            "),i("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),i("vs-divider",{staticClass:"mb-0"}),i("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6"},[i("div",{staticClass:"p-6"},[i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("Campo")]),i("th",{attrs:{scope:"col"}},[t._v("Operador")]),i("th",{attrs:{scope:"col"}},[t._v("Valor")])])]),i("tbody",t._l(t.filtros,(function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(e.NOMBRE_CAMPO))]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.OPERADOR,expression:" item.OPERADOR"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect01"},on:{change:function(i){var a=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"OPERADOR",i.target.multiple?a:a[0])}}},t._l(e.TIPO_FILTRO,(function(e){return i("option",{key:e.TIPO,attrs:{text:e.LABEL},domProps:{value:e.TIPO}},[t._v(t._s(e.LABEL))])})),0)]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.VALOR,expression:"item.VALOR"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el valor"},domProps:{value:e.VALOR},on:{input:function(i){i.target.composing||t.$set(e,"VALOR",i.target.value)}}})])])})),0)]),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.ejecutaBusqueda}},[t._v("Buscar")])])])],1)],1)},r=[],s=(i("ac6a"),i("f3e2"),i("c5f6"),i("9d63")),o=i.n(s),n=i("88fa"),c={props:{header:{type:String,required:!0},filtros:{type:Array,required:!0},isSidebarActive:{type:Boolean,required:!0},filas:{type:String,required:!0},ObjectID:{type:Number,required:!1}},data:function(){return{datosaqui:!0,parametros:[],paramtxt:"",locallastheader:"",locallaststrParametros:"",locallaststrFilas:""}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||this.$emit("closeSidebar")}},getProfile:function(){return this.$store.state.dsoaLogin.profile[0]}},methods:{ejecutaBusqueda:function(){var t="O";null==this.getProfile.Username&&(this.$vs.notify({title:"Informe de Procedimiento Almacenado",time:6e3,text:"Usuario No esta Identificado",color:"warning"}),this.$emit("closeSidebar")),null==this.getProfile.Credencial&&(this.$vs.notify({title:"Informe de Procedimiento Almacenado",time:6e3,text:"No tiene Autorizacion de Ejecucion o Credencial No presente ",color:"warning"}),this.$emit("closeSidebar"),reurn);var e=[],i={};this.filtros.forEach((function(t){t.VALOR.length>0&&(i={NOMBRE:t.NOMBRE_INTERNO,OPERADOR:t.OPERADOR,VALOR1:t.VALOR,VALOR2:"",CDATA:"0"},e.push(i))})),this.paramtxt=n["r"](e),this.$store.commit("MUTSETURL","O");var a={header:this.header,parametros:this.paramtxt,filas:this.filas};this.$store.commit("MUTSETPETICIONTXT",a);var r={dml:"JJ",Credencial:this.getProfile.Credencial,ObjectId:this.ObjectID,formatoenvio:"N",formatorecibe:"N",indicador:"1",origenUrl:t};this.$store.dispatch("acDsoa",r),this.locallastheader=this.header,this.locallaststrParametros=this.paramtxt,this.locallaststrFilas=this.filas,this.$emit("ajustaUltimoParam",this.paramtxt),this.$emit("closeSidebar")}},components:{VuePerfectScrollbar:o.a}},l=c,d=(i("ffaf"),i("2877")),u=Object(d["a"])(l,a,r,!1,null,"2bb4761b",null);e["a"]=u.exports},ffaf:function(t,e,i){"use strict";var a=i("6454"),r=i.n(a);r.a}}]);
//# sourceMappingURL=chunk-11c4f6a6.cfef2946.js.map