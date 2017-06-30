webpackJsonp([4],{112:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},262:function(t,e,n){e=t.exports=n(26)(),e.push([t.id,".test-button>.button,.test-button>.button-group{margin-right:.5em;margin-bottom:1em}",""])},271:function(t,e,n){var b=n(262);"string"==typeof b&&(b=[[t.id,b,""]]);n(27)(b,{});b.locals&&(t.exports=b.locals)},450:function(t,e){t.exports='<article><h2>Button</h2><p>基础组建，触发业务逻辑时使用</p><h4>API</h4><div class=api-preview><marked><textarea class=mark>##### b-button props\n| 属性 | 说明                                                         | 类型   |  默认值  | \n|------|-------------------------------------------------------------|-------|----------|\n| type | 按钮类型，可选值为solid, flat, outline, dashed                | String | solid |\n| theme | 颜色类型，可选值为primary, secondary, success, warning, alert| String | primary |\n| size  | 大小, tiny, small, default, large                            | String | default |\n| circle|  圆形样式                                                   | Boolean | false |\n| block | 块模式                                                      | Boolean | false |\n| disabled| 禁用模式                                                  | Boolean | false |\n| checked| 选中                                                     | Boolean | false |\n| loading | 加载中                                                   | Boolean | false |\n\n##### b-button slots\n| name | 说明                                                         |\n|------|--------------------------------------------------------------|\n|default| 按钮文本                                                     |\n\n##### b-button events\n| name | 说明                                                         |\n|------|--------------------------------------------------------------|\n|onClick| 点击事件，在disabled、loading状态下不会触发                      |\n\n##### b-button-group props\n| 属性 | 说明                                                         | 类型   |  默认值  | \n|------|-------------------------------------------------------------|-------|----------|\n| direction | 方向, 可选值为 horizontal, vertical                      | String | horizontal |\n| size | 大小，同b-button                                             | String | default |\n</textarea></marked></div><h4>示例</h4><div class=previews><div class=preview><div class=preview-title>基本类型</div><div class="preview-container test-button"><b-button>example</b-button><b-button type=solid>solid</b-button><b-button type=flat>flat</b-button><b-button type=outline>outline</b-button><b-button type=dashed>dashed</b-button></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button>example</b-button>\n<b-button type=solid>solid</b-button>\n<b-button type=flat>flat</b-button>\n<b-button type=outline>outline</b-button>\n<b-button type=dashed>dashed</b-button>\n```</textarea></marked></div></div><div class=preview><div class=preview-title>颜色</div><div class="preview-container test-button"><b-button theme=primary>primary</b-button><b-button theme=secondary>secondary</b-button><b-button theme=success>success</b-button><b-button theme=warning>warning</b-button><b-button theme=alert>alert</b-button><div></div><b-button theme=primary type=flat>primary</b-button><b-button theme=secondary type=flat>secondary</b-button><b-button theme=success type=flat>success</b-button><b-button theme=warning type=flat>warning</b-button><b-button theme=alert type=flat>alert</b-button><div></div><b-button theme=primary type=outline>primary</b-button><b-button theme=secondary type=outline>secondary</b-button><b-button theme=success type=outline>success</b-button><b-button theme=warning type=outline>warning</b-button><b-button theme=alert type=outline>alert</b-button></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button theme=primary>primary</b-button>\n<b-button theme=secondary>secondary</b-button>\n<b-button theme=success>success</b-button>\n<b-button theme=warning>warning</b-button>\n<b-button theme=alert>alert</b-button>\n\n<b-button theme=primary , type=flat>primary</b-button>\n<b-button theme=secondary , type=flat>secondary</b-button>\n<b-button theme=success , type=flat>success</b-button>\n<b-button theme=warning type=flat>warning</b-button>\n<b-button theme=alert , type=flat>alert</b-button>\n\n<b-button theme=primary , type=outline>primary</b-button>\n<b-button theme=secondary , type=outline>secondary</b-button>\n<b-button theme=success , type=outline>success</b-button>\n<b-button theme=warning type=outline>warning</b-button>\n<b-button theme=alert , type=outline>alert</b-button>\n```\n</textarea></marked></div></div><div class=preview><div class=preview-title>尺寸</div><div class="preview-container test-button"><b-button size=tiny>tiny</b-button><b-button size=small>small</b-button><b-button>default</b-button><b-button size=large>large</b-button></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button size=tiny>tiny</b-button>\n<b-button size=small>small</b-button>\n<b-button>default</b-button>\n<b-button size=large>large</b-button>\n```\n</textarea></marked></div></div><div class=preview><div class=preview-title>块模式</div><div class="preview-container test-button"><b-button size=large block=block>block button</b-button></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button size=large block=true>block button</b-button>\n```\n</textarea></marked></div></div><div class=preview><div class=preview-title>状态</div><div class="preview-container test-button"><b-button disabled=disabled>disabled</b-button><b-button checked=checked>checked</b-button><b-button loading=loading>loading</b-button></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button disabled=true>disabled</b-button>\n<b-button checked=true>checked</b-button>\n<b-button loading=true>loading</b-button>\n```\n</textarea></marked></div></div><div class=preview><div class=preview-title>circle</div><div class="preview-container test-button"><b-button circle=circle>+</b-button><b-button theme=alert circle=circle>-</b-button></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button circle=true>+</b-button>\n<b-button circle=true theme=alert>-</b-button>\n```\n</textarea></marked></div></div><div class=preview><div class=preview-title>circle</div><div class="preview-container test-button"><b-button-group><b-button>A</b-button><b-button>B</b-button></b-button-group><b-button-group direction=vertical><b-button>button A</b-button><b-button>button B</b-button><b-button>button C</b-button></b-button-group></div><div class=preview-code><marked><textarea class=mark>```html\n<b-button-group>\n  <b-button>A</b-button>\n  <b-button>B</b-button>\n</b-button-group>\n<b-button-group direction=vertical>\n  <b-button>button A</b-button>\n  <b-button>button B</b-button>\n  <b-button>button c</b-button>\n</b-button-group>\n```</textarea></marked></div></div></div></article>'},531:function(t,e,n){var b,o,a={};n(271),b=n(112),o=n(450),t.exports=b||{},t.exports.__esModule&&(t.exports=t.exports.default);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(a).forEach(function(t){var e=a[t];u.computed[t]=function(){return e}})}});