(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(13),n(7)),i=n(1),u=(n(14),n(15),function(e){var t=e.squares,n=e.onClick;function a(e){return r.a.createElement("button",{className:"square",onClick:function(){return n(e)}},t[e])}return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},a(0),a(1),a(2)),r.a.createElement("div",{className:"board-row"},a(3),a(4),a(5)),r.a.createElement("div",{className:"board-row"},a(6),a(7),a(8)))}),s=n(4);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.serialize,c=void 0===a?JSON.stringify:a,o=n.deserialize,l=void 0===o?JSON.parse:o,u=r.a.useState((function(){var n=window.localStorage.getItem(e);return n?l(n):"function"===typeof t?t():t})),s=Object(i.a)(u,2),m=s[0],f=s[1],v=r.a.useRef(e);return r.a.useEffect((function(){var t=v.current;t!==e&&window.localStorage.removeItem(t),v.current=e,window.localStorage.setItem(e,c(m))}),[e,m,c]),[m,f]}var f=function(){var e=m("tic-tac-toe:history",[Array(9).fill(null)]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=m("tic-tac-toe:step",0),o=Object(i.a)(c,2),l=o[0],u=o[1],f=n[l],v=function(e){var t=e.filter((function(e){return"X"===e})).length;return e.filter((function(e){return"O"===e})).length===t?"X":"O"}(f),d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,1,2],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),r=a[0],c=a[1],o=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return e[r]}return null}(f),E=function(e,t,n){return e?"Winner: ".concat(e):t.every(Boolean)?"Scartch: Cat's game":"Next player: ".concat(n)}(d,f,v);var g=n.map((function(e,t){var n=t?"Go to move #".concat(t):"Go to game start",a=t===l;return r.a.createElement("li",{key:t},r.a.createElement("button",{disabled:a,onClick:function(){return u(t)}},n," ",a?"(current)":null))}));return[E,function(e){if(!d&&!f[e]){var t=n.splice(0,l+1),r=Object(s.a)(f);r[e]=v,a([].concat(Object(s.a)(t),[r])),u(t.length)}},f,function(){a([Array(9).fill(null)]),u(0)},g,d]},v=function(){var e=f(),t=Object(i.a)(e,6),n=t[0],a=t[1],c=t[2],o=t[3],l=t[4],s=t[5];return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(u,{onClick:a,squares:c}),r.a.createElement("div",{className:"restart-container"},r.a.createElement("button",{className:"restart",onClick:o},s?"Start new game":"Restart"))),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,n),r.a.createElement("ol",null,l)))},d=function(e){return Object(l.a)(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("header",null,r.a.createElement("h1",null," Tic tac toe"))),r.a.createElement(v,null))};var E=function(){return r.a.createElement("div",null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.31969dc8.chunk.js.map