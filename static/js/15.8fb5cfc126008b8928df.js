webpackJsonp([15],{"GP/l":function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{"notification-example":{template:'<div class="markdown-live-example">\n  <section>\n    <btn @click="notify" type="primary">Simplest Notification</btn>\n    <btn @click="notify2" type="primary">No Auto-dismiss Notification</btn>\n  </section>\n</div>',methods:{notify:function(){this.$notify("This is a simple notify msg.",function(){console.log("dismissed")})},notify2:function(){this.$notify({title:"Title",content:"This notification will not dismiss automatically.",duration:0}).then(function(){console.log("dismissed")})}}},"notification-types":{template:'<div class="markdown-live-example">\n  <section>\n    <btn @click="info" type="info">Info</btn>\n    <btn @click="success" type="success">Success</btn>\n    <btn @click="warning" type="warning">Warning</btn>\n    <btn @click="danger" type="danger">Danger</btn>\n  </section>\n</div>',methods:{info:function(){this.$notify({type:"info",title:"Heads up!",content:"This alert needs your attention, but it's not super important."})},success:function(){this.$notify({type:"success",title:"Well done!",content:"You successfully read this important alert message."})},warning:function(){this.$notify.warning("Better check yourself, you're not looking too good.")},danger:function(){this.$notify.error({title:"Oh snap!",content:"Change a few things up and try submitting again."})}}},"notification-placements":{template:'<div class="markdown-live-example">\n  <section>\n    <btn @click="notify(\'top-right\')" type="primary">Top Right (Default)</btn>\n    <btn @click="notify(\'bottom-right\')" type="primary">Bottom Right</btn>\n    <btn @click="notify(\'bottom-left\')" type="primary">Bottom Left</btn>\n    <btn @click="notify(\'top-left\')" type="primary">Top Left</btn>\n  </section>\n</div>',methods:{notify:function(s){this.$notify({placement:s,title:"Title",content:"This is a notify msg at "+s+"."})}}},"notification-without-dismiss-btn":{template:'<div class="markdown-live-example">\n  <btn @click="notify" type="primary">Notification Without Dismiss Button</btn>\n</div>',methods:{notify:function(){this.$notify({title:"Title",content:"This is a notification without dismiss btn.",dismissible:!1})}}}}},h={render:function(){var s=this.$createElement,t=this._self._c||s;return t("markdown-wrapper",[t("h1",{attrs:{id:"notification"}},[this._v("Notification "),t("a",{staticClass:"header-anchor",attrs:{href:"#notification","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("blockquote",[t("p",[this._v("Displays a global notification message at a corner of the page.")])]),this._v(" "),t("p",[t("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4714899946256166","data-ad-slot":"4603582855"}})]),this._v(" "),t("h2",{attrs:{id:"example"}},[this._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Click on the button below to show a notification. By default, it is dismissible with a close button, and will dismiss automatically after 5000ms (both are configurable).")]),this._v(" "),t("notification-example",{ref:"notification-example"}),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"notify"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Simplest Notification"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"notify2"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("No Auto-dismiss Notification"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// example with callback")]),this._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// pass a String as the notification content")]),this._v("\n      notify () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'This is a simple notify msg.'")]),this._v(", () => {\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// callback after dismissed")]),this._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'dismissed'")]),this._v(")\n        })\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// example with Promise and options")]),this._v("\n      notify2 () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Title'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'This notification will not dismiss automatically.'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("duration")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("0")]),this._v("\n        }).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// resolve after dismissed")]),this._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'dismissed'")]),this._v(")\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- notification-example.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"types"}},[this._v("Types "),t("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("There're 4 optional types of notification: "),t("code",{pre:!0},[this._v("info")]),this._v(" / "),t("code",{pre:!0},[this._v("success")]),this._v(" / "),t("code",{pre:!0},[this._v("warning")]),this._v(" / "),t("code",{pre:!0},[this._v("danger")]),this._v(" (also alias as "),t("code",{pre:!0},[this._v("error")]),this._v("). Except "),t("code",{pre:!0},[this._v("type")]),this._v(" option, you can also use registered shortcut methods (0.33.0+, see examples below).")]),this._v(" "),t("p",[this._v("Notification with specific type will has a default icon on the left, you can also change or remove the icon by "),t("code",{pre:!0},[this._v("icon")]),this._v(" option.")]),this._v(" "),t("notification-types",{ref:"notification-types"}),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"info"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"info"')]),this._v(">")]),this._v("Info"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(">")]),this._v("Success"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v(">")]),this._v("Warning"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"danger"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"danger"')]),this._v(">")]),this._v("Danger"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      info () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'info'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Heads up!'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'This alert needs your attention, but it\\'s not super important.'")]),this._v("\n        })\n      },\n      success () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'success'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Well done!'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'You successfully read this important alert message.'")]),this._v("\n        })\n      },\n      warning () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// simple warning with content only")]),this._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify.warning("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Better check yourself, you\\'re not looking too good.'")]),this._v(")\n      },\n      danger () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// error msg with title and content (other options available too)")]),this._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// `error` is an alias of `danger` (both of them works)")]),this._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify.error({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Oh snap!'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Change a few things up and try submitting again.'")]),this._v("\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- notification-types.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"placements"}},[this._v("Placements "),t("a",{staticClass:"header-anchor",attrs:{href:"#placements","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Notifications can be placed on any corner on a page.")]),this._v(" "),t("p",[this._v("The "),t("code",{pre:!0},[this._v("position")]),this._v(" prop defines which corner a notification will slide in. It can be "),t("code",{pre:!0},[this._v("top-right")]),this._v(" (default), "),t("code",{pre:!0},[this._v("top-left")]),this._v(", "),t("code",{pre:!0},[this._v("bottom-right")]),this._v(" or "),t("code",{pre:!0},[this._v("bottom-left")]),this._v(".")]),this._v(" "),t("notification-placements",{ref:"notification-placements"}),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("\"notify('top-right')\"")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Top Right (Default)"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("\"notify('bottom-right')\"")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Bottom Right"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("\"notify('bottom-left')\"")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Bottom Left"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("\"notify('top-left')\"")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Top Left"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      notify (placement) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n          placement, "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// equal to `placement: placement` in ES6")]),this._v("\n          title: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Title'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("`This is a notify msg at "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[this._v("${placement}")]),this._v(".`")]),this._v("\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- notification-placements.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"dismissible"}},[this._v("Dismissible "),t("a",{staticClass:"header-anchor",attrs:{href:"#dismissible","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("By default a notification is dismissible with a close button, you can hide it by setting "),t("code",{pre:!0},[this._v("dismissible")]),this._v(" to "),t("code",{pre:!0},[this._v("false")]),this._v(".")]),this._v(" "),t("notification-without-dismiss-btn",{ref:"notification-without-dismiss-btn"}),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"notify"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Notification Without Dismiss Button"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      notify () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Title'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'This is a notification without dismiss btn.'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("dismissible")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v("\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- notification-without-dismiss-btn.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"with-modals"}},[this._v("With modals "),t("a",{staticClass:"header-anchor",attrs:{href:"#with-modals","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("By default, notifications will be covered by modal backdrops, you can fix this by adding below CSS into your project:")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-css"}},[t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[this._v("body")]),this._v(" > "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[this._v(".alert")]),this._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("z-index")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("2000")]),this._v(";\n}\n")])]),this._v(" "),t("p",[this._v("where "),t("code",{pre:!0},[this._v("2000")]),this._v(" can be any value that bigger than the modal z-index.")]),this._v(" "),t("h2",{attrs:{id:"global-method"}},[this._v("Global method "),t("a",{staticClass:"header-anchor",attrs:{href:"#global-method","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[t("code",{pre:!0},[this._v("$notify(options, callback)")]),this._v(" global method for "),t("code",{pre:!0},[this._v("Vue.prototype")]),this._v(" will be added "),t("strong",[this._v("if uiv is installed")]),this._v(".")]),this._v(" "),t("p",[this._v("Note that the dismissed callback is optional.")]),this._v(" "),t("p",[this._v("The method will return a "),t("code",{pre:!0},[this._v("Promise")]),this._v(" object that resolve while the notification is dismissed (if supported by browser or with es6 promise polyfill).")]),this._v(" "),t("h2",{attrs:{id:"import-individually"}},[this._v("Import individually "),t("a",{staticClass:"header-anchor",attrs:{href:"#import-individually","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("If you prefer importing "),t("code",{pre:!0},[this._v("Notification")]),this._v(" individually:")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" { Notification } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'uiv'")]),this._v("\n")])]),this._v(" "),t("p",[this._v("The corresponding method is "),t("code",{pre:!0},[this._v("Notification.notify")]),this._v(", with same parameters as above.")]),this._v(" "),t("h1",{attrs:{id:"api-reference"}},[this._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("h2",{attrs:{id:"notification-2"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/services/notification/Notification.vue"}},[this._v("Notification")]),this._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#notification-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("These props are used as "),t("code",{pre:!0},[this._v("options")]),this._v(" in the methods above.")]),this._v(" "),t("h3",{attrs:{id:"props"}},[this._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Type")]),this._v(" "),t("th",[this._v("Default")]),this._v(" "),t("th",[this._v("Required")]),this._v(" "),t("th",[this._v("Description")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[this._v("title")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The notification title.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("content")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The notification content.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("html")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[t("code",{pre:!0},[this._v("false")])]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Allow HTML in content.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("type")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Support: "),t("code",{pre:!0},[this._v("info")]),this._v(" / "),t("code",{pre:!0},[this._v("success")]),this._v(" / "),t("code",{pre:!0},[this._v("warning")]),this._v(" / "),t("code",{pre:!0},[this._v("danger")]),this._v(".")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("duration")])]),this._v(" "),t("td",[this._v("Number")]),this._v(" "),t("td",[this._v("5000")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Dismiss after milliseconds, use 0 to prevent self-closing.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("dismissible")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[this._v("true")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Show dismiss button.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("placement")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td",[this._v("top-right")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Support: "),t("code",{pre:!0},[this._v("top-right")]),this._v(" / "),t("code",{pre:!0},[this._v("top-left")]),this._v(" / "),t("code",{pre:!0},[this._v("bottom-right")]),this._v(" / "),t("code",{pre:!0},[this._v("bottom-left")]),this._v(".")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("icon")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Custom icon class, use an empty string to disable icon.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("customClass")])]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Custom classes to alert, anything that can work with "),t("code",{pre:!0},[this._v("v-bind:class")]),this._v(" or "),t("code",{pre:!0},[this._v(":class")]),this._v(".")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("offset")])]),this._v(" "),t("td",[this._v("Number")]),this._v(" "),t("td",[this._v("15")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The space in px between notifications.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("offsetX")])]),this._v(" "),t("td",[this._v("Number")]),this._v(" "),t("td",[this._v("15")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The horizontal offset in px while displaying notification.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("offsetY")])]),this._v(" "),t("td",[this._v("Number")]),this._v(" "),t("td",[this._v("15")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The vertical offset in px while displaying notification.")])])])])]),t("h3",{attrs:{id:"methods"}},[this._v("Methods "),t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("You can call a method by "),t("code",{pre:!0},[this._v("$notify")]),this._v(" or "),t("code",{pre:!0},[this._v("Notification")]),this._v(", for example "),t("code",{pre:!0},[this._v("this.$notify.dismissAll()")]),this._v(".")]),this._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Params")]),this._v(" "),t("th",[this._v("Description")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[this._v("dismissAll")])]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Dismiss all notifications.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("info")]),this._v(" / "),t("code",{pre:!0},[this._v("success")]),this._v(" / "),t("code",{pre:!0},[this._v("warning")]),this._v(" / "),t("code",{pre:!0},[this._v("danger")]),this._v(" ("),t("code",{pre:!0},[this._v("error")]),this._v(")")]),this._v(" "),t("td",[this._v("String or Object")]),this._v(" "),t("td",[this._v("Display a corresponding notification.")])])])])])],1)},staticRenderFns:[]},e=i("VU/8")(a,h,!1,null,null,null);t.default=e.exports}});
//# sourceMappingURL=15.8fb5cfc126008b8928df.js.map