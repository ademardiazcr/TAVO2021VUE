(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1c9a"],{4811:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"extra-component-google-map-demo"}},[n._m(0),e("google-map-basic"),e("google-map-info-window"),e("google-map-street-view"),e("div",{staticClass:"content-area__content"})],1)},o=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"mb-4"},[e("a",{attrs:{href:"https://xkjyeah.github.io/vue-google-maps/",target:"_blank",rel:"nofollow"}},[n._v("Google maps")]),n._v(" component for vue with 2-way data binding")])}],a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vx-card",{attrs:{title:"Basic","code-toggler":""}},[e("p",[n._v("Creating basic google map")]),e("div",{staticClass:"mt-5"},[e("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:n.center,zoom:7,"map-type-id":"terrain"}},n._l(n.markers,(function(t,i){return e("GmapMarker",{key:i,attrs:{position:t.position,clickable:!0,draggable:!0},on:{click:function(e){n.center=t.position}}})})),1)],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <GmapMap\n    :center="center"\n    :zoom="7"\n    map-type-id="terrain"\n    style="width: 100%; height: 400px"\n    @click="mapClicked"\n  >\n    <GmapMarker\n      :key="index"\n      v-for="(m, index) in markers"\n      :position="m.position"\n      :clickable="true"\n      :draggable="true"\n      @click="center=m.position"\n    />\n  </GmapMap>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      center: { lat: 10.0, lng: 10.0 },\n      markers: [\n        { position: { lat: 10.0, lng: 10.0 } },\n        { position: { lat: 11.0, lng: 11.0 } },\n      ]\n    }\n  },\n}\n<\/script>\n        ')])],2)},s=[],l={data:function(){return{center:{lat:10,lng:10},markers:[{position:{lat:10,lng:10}},{position:{lat:11,lng:11}}]}}},r=l,p=e("2877"),c=Object(p["a"])(r,a,s,!1,null,null,null),d=c.exports,m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vx-card",{attrs:{title:"Info Window","code-toggler":""}},[e("p",[n._v("A basic example of using a single infowindow for 3 markers")]),e("div",{staticClass:"mt-5"},[e("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:n.center,zoom:15}},[e("gmap-info-window",{attrs:{options:n.infoOptions,position:n.infoWindowPos,opened:n.infoWinOpen},on:{closeclick:function(t){n.infoWinOpen=!1}}},[n._v("\n                    "+n._s(n.infoContent)+"\n                ")]),n._l(n.markers,(function(t,i){return e("gmap-marker",{key:i,attrs:{position:t.position,clickable:!0},on:{click:function(e){return n.toggleInfoWindow(t,i)}}})}))],2)],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <gmap-map :center="center" :zoom="15" style="width: 100%; height: 500px">\n    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">\n      '+n._s(n.infoContent)+'\n    </gmap-info-window>\n    <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>\n  </gmap-map>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      center: { lat: 47.376332, lng: 8.547511 },\n      infoContent: \'\',\n      infoWindowPos: null,\n      infoWinOpen: false,\n      currentMidx: null,\n      //optional: offset infowindow so it visually sits nicely on top of our marker\n      infoOptions: {\n      pixelOffset: { width: 0, height: -35 }\n      },\n      markers: [\n        { position: { lat: 47.376332, lng: 8.547511 }, infoText: \'Marker 1\' },\n        { position: { lat: 47.374592, lng: 8.548867 }, infoText: \'Marker 2\' },\n        { position: { lat: 47.379592, lng: 8.549867 }, infoText: \'Marker 3\' }\n      ]\n    }\n  },\n  methods: {\n    toggleInfoWindow: function(marker, idx) {\n      this.infoWindowPos = marker.position;\n      this.infoContent = marker.infoText;\n      //check if its the same marker that was selected if yes toggle\n      if (this.currentMidx == idx) {\n        this.infoWinOpen = !this.infoWinOpen;\n      }\n      //if different marker set infowindow to open and reset current marker index\n      else {\n        this.infoWinOpen = true;\n        this.currentMidx = idx;\n      }\n    }\n  }\n}\n<\/script>\n        ')])],2)},g=[],f={data:function(){return{center:{lat:47.376332,lng:8.547511},infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}},markers:[{position:{lat:47.376332,lng:8.547511},infoText:"Marker 1"},{position:{lat:47.374592,lng:8.548867},infoText:"Marker 2"},{position:{lat:47.379592,lng:8.549867},infoText:"Marker 3"}]}},methods:{toggleInfoWindow:function(n,t){this.infoWindowPos=n.position,this.infoContent=n.infoText,this.currentMidx===t?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=t)}}},h=f,u=Object(p["a"])(h,m,g,!1,null,null,null),v=u.exports,k=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vx-card",{attrs:{title:"Street View","code-toggler":""}},[e("p",[n._v("Example of creating google map - street view")]),e("div",{staticClass:"mt-5"},[e("h6",[n._v("Panorama at Pembroke College, Cambridge, facing North, looking slightly upwards (10 degrees)")]),e("p",{staticClass:"mt-3 mb-5"},[n._v("Point-of-view updates when you pan around")]),e("gmap-street-view-panorama",{staticClass:"pano",staticStyle:{height:"400px",width:"100%"},attrs:{position:{lat:52.201272,lng:.11872},pov:n.pov,zoom:1},on:{pano_changed:n.updatePano,pov_changed:n.updatePov}}),e("vs-list",{staticClass:"mt-5"},[e("vs-list-item",{attrs:{title:" Heading: "+(n.pov&&n.pov.heading)}}),e("vs-list-item",{attrs:{title:" Pitch: "+(n.pov&&n.pov.pitch)}}),e("vs-list-item",{attrs:{title:" Pano ID: "+n.pano}})],1),e("div",{staticClass:"demo-alignment"},[e("vs-button",{attrs:{type:"filled"},on:{click:function(t){n.pov.heading=360*Math.random()}}},[n._v("Change Heading")]),e("vs-button",{attrs:{type:"filled"},on:{click:function(t){n.pov.pitch=180*Math.random()-90}}},[n._v("Change Pitch")]),e("vs-button",{attrs:{type:"filled"},on:{click:function(t){n.pov.pitch=180*Math.random()-90,n.pov.heading=360*Math.random()}}},[n._v("Change Both")])],1)],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <h6>Panorama at Pembroke College, Cambridge, facing North, looking slightly upwards (10 degrees)</h6>\n  <p class="mt-3 mb-5">Point-of-view updates when you pan around</p>\n\n  <gmap-street-view-panorama class="pano" :position="{lat: 52.201272, lng: 0.118720}"\n    :pov="pov" :zoom="1" @pano_changed="updatePano" @pov_changed="updatePov" style="height: 400px; width: 100%">\n  </gmap-street-view-panorama>\n\n  <vs-list class="mt-5">\n    <vs-list-item :title="` Heading: ${ pov && pov.heading }`"></vs-list-item>\n    <vs-list-item :title="` Pitch: ${ pov && pov.pitch }`"></vs-list-item>\n    <vs-list-item :title="` Pano ID: ${ pano }`"></vs-list-item>\n  </vs-list>\n\n  <div class="demo-alignment">\n    <vs-button type="filled" @click="pov.heading = Math.random() * 360">Change Heading</vs-button>\n    <vs-button type="filled" @click="pov.pitch = Math.random() * 180 - 90">Change Pitch</vs-button>\n    <vs-button type="filled" @click="pov.pitch = Math.random() * 180 - 90, pov.heading = Math.random() * 360">Change Both</vs-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      pov: null,\n      pano: null,\n    }\n  },\n  methods: {\n    updatePov(pov) {\n      this.pov = pov;\n    },\n    updatePano(pano) {\n      this.pano = pano;\n    }\n  }\n}\n<\/script>\n        ')])],2)},w=[],x={data:function(){return{pov:null,pano:null}},methods:{updatePov:function(n){this.pov=n},updatePano:function(n){this.pano=n}}},_=x,b=Object(p["a"])(_,k,w,!1,null,null,null),C=b.exports,M={components:{GoogleMapBasic:d,GoogleMapInfoWindow:v,GoogleMapStreetView:C}},y=M,P=Object(p["a"])(y,i,o,!1,null,null,null);t["default"]=P.exports}}]);
//# sourceMappingURL=chunk-2d0c1c9a.28987792.js.map