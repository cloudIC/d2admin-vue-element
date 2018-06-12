(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"表格导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格导入","aria-hidden":"true"}},[t._v("#")]),t._v(" 表格导入")]),a("p",[t._v("本框架集成了数据导入功能，并包装成插件")]),a("h2",{attrs:{id:"注册插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册插件")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pluginImport "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/plugin/import'")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pluginImport"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("之后就可以在组件中使用 "),a("code",[t._v("this.$import")]),t._v(" 来调用导出功能")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("d2admin 已经帮你注册好，可以直接使用，无需写上面的代码")])]),a("h2",{attrs:{id:"导入-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入-csv","aria-hidden":"true"}},[t._v("#")]),t._v(" 导入 csv")]),a("p",[t._v("导入csv文件，并且返回一个 "),a("code",[t._v("Promise")]),t._v(" 对象")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 在选择文件后调用")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("handleUpload")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("csv")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        prop"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 阻止默认的上传")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"导入-xlsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入-xlsx","aria-hidden":"true"}},[t._v("#")]),t._v(" 导入 xlsx")]),a("p",[t._v("导入xlsx文件，并且返回一个 "),a("code",[t._v("Promise")]),t._v(" 对象")]),a("p",[a("strong",[t._v("注意 导入的表格文件第一行应为表头")])]),a("p",[t._v("参考下述示例使用")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 在选择文件后调用")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("handleUpload")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("xlsx")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("header"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// header 为表头")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// results 为内容")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" header"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          prop"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" results\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 阻止默认的上传")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);