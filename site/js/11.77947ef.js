webpackJsonp([11],{122:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{confirm:function(){alert("onconfirm")}}}},465:function(t,e){t.exports='<article><h2>Popover</h2><p>气泡卡片</p><h4>API</h4><div class=api-preview><marked><textarea class=mark>##### b-popover props\n</textarea></marked></div><h4>示例</h4><div class=previews><div class=preview><div class=preview-title>基本使用</div><div class="preview-container test-tooltip"><b-popover title=标题><b-button>显示卡片</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover></div></div></div><div class=previews><div class=preview><div class=preview-title>位置</div><div class="preview-container test-tooltip"><b-popover title=标题 position=top><b-button>上上</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover><b-popover title=标题><b-button>下下</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover><b-popover title=标题 position=left><b-button>左左</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover><b-popover title=标题 position=right><b-button>右右</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover></div></div></div><div class=previews><div class=preview><div class=preview-title>触发方式</div><div class="preview-container test-tooltip"><b-popover title=标题 trigger=hover><b-button>hover</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover><b-popover title=标题 trigger=click><b-button>点击</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover><b-popover title=标题 trigger=focus><b-button>焦点</b-button><template slot=content><h1>气泡卡片</h1></template></b-popover></div></div></div><div class=previews><div class=preview><div class=preview-title>气泡确认框</div><div class="preview-container test-tooltip"><b-popover-confirm title=确认删除? position=right @onconfirm=confirm><b-button theme=alert>删除 </b-button></b-popover-confirm></div></div></div></article>'},546:function(t,e,o){var i,p,r={};i=o(122),p=o(465),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var v="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;p&&(v.template=p),v.computed||(v.computed={}),Object.keys(r).forEach(function(t){var e=r[t];v.computed[t]=function(){return e}})}});