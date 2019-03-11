(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["toastDoc"],{"480a":function(n,t,a){"use strict";var o=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"demoWrap"},[a("div",{staticClass:"pWrap"},[n._m(0),a("div",{staticClass:"pMain"},[a("iframe",{attrs:{src:n.url,frameborder:"0"}})]),a("div",{staticClass:"pHome"})])])},s=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"pControl"},[a("div",{staticClass:"pControlL"}),a("div",{staticClass:"pControlR"})])}],e={name:"Demo",props:{src:{type:String}},computed:{url:function(){return"//".concat(window.location.host+window.location.pathname,"#").concat(this.src)}}},i=e,c=(a("9c76"),a("2877")),r=Object(c["a"])(i,o,s,!1,null,null,null);t["a"]=r.exports},"5dd7":function(n,t,a){"use strict";a.r(t);var o=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("Md",{attrs:{mdData:n.mdData}}),a("Demo",{attrs:{src:"/demo/toast"}})],1)},s=[],e=a("4f03"),i=a("480a"),c=a("aa60"),r=a.n(c),l={components:{Md:e["a"],Demo:i["a"]},data:function(){return{mdData:r.a}}},p=l,u=a("2877"),d=Object(u["a"])(p,o,s,!1,null,null,null);t["default"]=d.exports},"83ff":function(n,t,a){},"9c76":function(n,t,a){"use strict";var o=a("83ff"),s=a.n(o);s.a},aa60:function(n,t){n.exports="# 轻提示 Toast\n\n轻提示组件，入参可为字符串或对象。\n\n## 代码演示\n\n```html\n\x3c!-- *.vue --\x3e\n\n<template>\n  <p-wing-blank>\n    <p-white-space></p-white-space>\n    <p-button @click=\"handleToastInfo\">弹个框</p-button>\n    <p-white-space></p-white-space>\n    <p-button @click=\"handleToastInfoMask\">弹个带蒙层的框，自定义高度</p-button>\n    <p-white-space></p-white-space>\n    <p-button @click=\"handleToastSuccess\">弹个成功框</p-button>\n    <p-white-space></p-white-space>\n    <p-button @click=\"handleToastError\">弹个失败框</p-button>\n    <p-white-space></p-white-space>\n    <p-button @click=\"handleToastHtml\">弹出html</p-button>\n  </p-wing-blank>\n</template>\n\n<script>\nexport default {\n  name: 'ToastDemo',\n  methods: {\n    handleToastInfo: function () {\n      this.$toast.info('Toast 轻提示')\n    },\n\n    handleToastInfoMask: function () {\n      this.$toast.info({\n        msg: 'Toast 轻提示 带蒙层',\n        mask: true,\n        duration: 1000,\n        top: '10px',\n        onClose: function () {\n          console.log('close')\n        }\n      })\n    },\n\n    handleToastSuccess: function () {\n      this.$toast.success('提交成功')\n    },\n\n    handleToastError: function () {\n      this.$toast.error('提交失败')\n    },\n\n    handleToastHtml: function () {\n      this.$toast.info({\n        domNode: (h) => {\n          return (\n            <div>\n              <p-button type=\"primary\" inline on-click={this.handleToastError}>\n                这是一个 button\n              </p-button>\n            </div>\n          )\n        },\n        mask: true,\n        jsx: true\n      })\n    }\n  }\n}\n<\/script>\n\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| msg | 弹框文字 | string | '提示' |\n| mask | 蒙层 | boolean | false |\n| duration | 持续时间 | number | 2000 |\n| top | 距离顶部位置 | string | '38%' |\n| onClose | 关闭后回调 | function | |\n| jsx | 开启渲染 jsx | boolean | false |\n| domNode | 返回一个 jsx 对象，**注意入参 h** | jsx |\n"}}]);
//# sourceMappingURL=toastDoc.b0181652.js.map