(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actionSheetDemo"],{6605:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"min-height":"100vh"}},[n("p-wing-blank",[n("p-white-space"),n("p-button",{on:{click:function(t){return e.actionSheetInit()}}},[e._v("上拉action")]),n("p-white-space"),n("p-button",{on:{click:function(t){return e.nocancelAction()}}},[e._v("不带cancel按钮action")]),n("p-white-space"),n("p-action-sheet",{attrs:{actions:e.actions,cancelText:e.cancelText},on:{selected:e.handelSelect},model:{value:e.sheetVisible,callback:function(t){e.sheetVisible=t},expression:"sheetVisible"}})],1)],1)},c=[],o={name:"ActionSheetDemo",data:function(){return{actions:["拍照","从相册中选择","从网页中选择"],sheetVisible:!1,cancelText:"取消"}},methods:{actionSheetInit:function(){this.sheetVisible=!0,this.cancelText="取消"},nocancelAction:function(){this.sheetVisible=!0,this.cancelText=""},handelSelect:function(e,t){this.$toast.info("item:"+e+"===index:"+t)}}},a=o,s=n("2877"),l=Object(s["a"])(a,i,c,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=actionSheetDemo.d1dc095a.js.map