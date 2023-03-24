(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[187],{"0m3q":function(e,t,n){"use strict";n("ahKI")},"2Pr/":function(e,t,n){},"60ow":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},Bjia:function(e,t,n){"use strict";var a=n("mn0l"),c=n("iojd"),l=n("ahKI"),r=n.n(l),i=n("vumQ"),o=n("TS6m");n("Qf6j"),n("60ow");t["a"]=e=>{var t=e.code,n=e.lang,l=e.showCopy,s=void 0===l||l,m=Object(o["useCopy"])(),d=Object(c["a"])(m,2),u=d[0],p=d[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(i["a"],Object(a["a"])({},i["b"],{code:t,language:n,theme:void 0}),(e=>{var n=e.className,a=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},s&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":p,onClick:()=>u(t)}),c.map(((e,t)=>r.a.createElement("div",l({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",i({token:e,key:t}))))))))})))}},DgDr:function(e,t,n){"use strict";n("mn0l"),n("ahKI"),n("2Pr/")},N0lm:function(e,t,n){"use strict";var a=n("mn0l"),c=n("ahKI"),l=n.n(c);n("tCeM");t["a"]=e=>l.a.createElement("div",Object(a["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,n){"use strict"},YWOM:function(e,t,n){},eIB7:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),c=n.n(a),l=n("TS6m"),r=(n("N0lm"),n("TAbJ"),n("DgDr"),n("mVOg")),i=(n("ekZX"),n("gKi5"),n("Bjia")),o=(n("0m3q"),c.a.memo((e=>{e.demos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"server-side-rendering--ssr"},c.a.createElement(l["AnchorLink"],{to:"#server-side-rendering--ssr","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Server-side Rendering / SSR ",c.a.createElement(r["a"],null)),c.a.createElement("p",null,"The support for SSR (server-side rendering) is still in the initial stage. If you find bugs during use, please submit an issue to us."),c.a.createElement("h2",{id:"nextjs"},c.a.createElement(l["AnchorLink"],{to:"#nextjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Next.js"),c.a.createElement("p",null,"Using antd-mobile in Next.js requires some additional configuration."),c.a.createElement("h3",{id:"nextjs-12"},c.a.createElement(l["AnchorLink"],{to:"#nextjs-12","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Next.js 12"),c.a.createElement("p",null,"First, you need to install ",c.a.createElement("code",null,"next-transpile-modules"),":"),c.a.createElement(i["a"],{code:"$ npm install --save-dev next-transpile-modules\n# or\n$ yarn add -D next-transpile-modules\n# or\n$ pnpm add -D next-transpile-modules",lang:"bash"}),c.a.createElement("p",null,"Then configure it in ",c.a.createElement("code",null,"next.config.js"),":"),c.a.createElement(i["a"],{code:"const withTM = require('next-transpile-modules')([\n  'antd-mobile',\n]);\n\nmodule.exports = withTM({\n  // other Next.js configuration in your project\n});",lang:"js"}),c.a.createElement("h3",{id:"nextjs-13"},c.a.createElement(l["AnchorLink"],{to:"#nextjs-13","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Next.js 13"),c.a.createElement("p",null,"Next.js 13 can automatically transpile and bundle dependencies from external dependencies (",c.a.createElement("code",null,"node_modules"),"). This replaces the ",c.a.createElement("code",null,"next-transpile-modules")," package."),c.a.createElement(i["a"],{code:"// next.config.js\nconst nextConfig = {\n  transpilePackages: ['antd-mobile'],\n};\n\nmodule.exports = nextConfig;",lang:"js"}),c.a.createElement("p",null,"To use antd-mobile in ",c.a.createElement("code",null,"app")," directory, add the ",c.a.createElement("code",null,"'use client'")," directive at the top of the file."),c.a.createElement(i["a"],{code:"// app/page.jsx\n'use client'\n\nimport { Button } from 'antd-mobile'",lang:"jsx"}),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l["Link"],{to:"https://beta.nextjs.org/docs/api-reference/next.config.js#transpilepackages"},"transpilepackages")),c.a.createElement("li",null,c.a.createElement(l["Link"],{to:"https://beta.nextjs.org/docs/rendering/server-and-client-components"},"server-and-client-components"))),c.a.createElement("h2",{id:"remix"},c.a.createElement(l["AnchorLink"],{to:"#remix","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Remix"),c.a.createElement("p",null,"Using antd-mobile in Remix requires some additional configuration."),c.a.createElement("p",null,"Add antd-mobile config in ",c.a.createElement("code",null,"tsconfig.json")," ",c.a.createElement("code",null,"compilerOptions.paths")," field, Add ",c.a.createElement("code",null,"global.d.ts")," in ",c.a.createElement("code",null,"include")," field:"),c.a.createElement(i["a"],{code:'{\n  "include": ["remix.env.d.ts", "global.d.ts", "**/*.ts", "**/*.tsx"],\n  "compilerOptions": {\n    ...\n    "paths": {\n      "antd-mobile": ["node_modules/antd-mobile/bundle/antd-mobile.es.js"]\n    }\n  }\n}',lang:"json"}),c.a.createElement("p",null,"Add ",c.a.createElement("code",null,"global.d.ts")," file in project root dir."),c.a.createElement(i["a"],{code:"declare module 'antd-mobile' {\n  export * from 'antd-mobile/es';\n}",lang:"ts"}),c.a.createElement("p",null,"Import style file in ",c.a.createElement("code",null,"app/root.tsx"),":"),c.a.createElement(i["a"],{code:'import styles from "antd-mobile/bundle/style.css";\n\nexport function links() {\n  return [{ rel: "stylesheet", href: styles }];\n}',lang:"ts"}),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l["Link"],{to:"https://github.com/3lang3/antd-mobile-template/tree/main/remix"},"remix template")))))})));t["default"]=e=>{var t=c.a.useContext(l["context"]),n=t.demos;return c.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(o,{demos:n})}},ekZX:function(e,t,n){"use strict";n.r(t),n.d(t,"ACTIVE_MSG_TYPE",(function(){return y}));var a=n("ahKI"),c=n.n(a),l=n("iojd"),r=n("/7QA"),i=n("9kvl"),o=n("TS6m"),s=n("1KG/"),m=n.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function p(e){var t=Boolean(e.sources._.tsx),n=t?".tsx":".jsx",a={},c={},r=Object.values(e.dependencies).filter((e=>e.css)),i="app".concat(n),o="index".concat(n);Object.entries(e.dependencies).forEach((e=>{var t=Object(l["a"])(e,2),n=t[0],a=t[1].version;c[n]=a})),c["react-dom"]||(c["react-dom"]=c.react||"latest"),a["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},a["index.html"]={content:'<div id="root"></div>'},a[o]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(r.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(l["a"])(e,2),n=t[0],c=t[1],r=c.tsx,o=c.jsx,m=c.content,d={content:r||o||m};a["_"===n?i:n]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(c["lorem-ipsum"]="^2.0.8",a["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),a["package.json"]={content:JSON.stringify({name:e.title,main:o,dependencies:c,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:a})}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=Object(a["useState"])(),c=Object(l["a"])(n,2),r=c[0],i=c[1];return Object(a["useEffect"])((()=>{if(e){var n=document.createElement("form"),a=p(e);function c(e,t){var a=document.createElement("input");n.appendChild(a),a.name=e,a.value=t}return n.method="POST",n.target="_blank",n.style.display="none",n.action=t,c("parameters",a),c("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),n.setAttribute("data-demo",e.title||""),document.body.appendChild(n),i((()=>()=>n.submit())),()=>n.remove()}}),[e]),r}var v=n("Bjia");n("YWOM");function f(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var E=e=>{var t,n=Object(a["useRef"])(null),s=Object(a["useContext"])(o["context"]),m=s.locale,d=Object(o["useLocaleProps"])(m,e),u=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(d.identifier),p=1===Object.keys(d.sources).length,E=h(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(o["useMotions"])(d.motions||[],n.current),g=Object(l["a"])(b,2),x=g[0],j=g[1],k=Object(o["useCopy"])(),_=Object(l["a"])(k,2),y=_[0],O=_[1],w=Object(a["useState"])("_"),N=Object(l["a"])(w,2),C=N[0],M=N[1],S=Object(a["useState"])(f(C,d.sources[C])),T=Object(l["a"])(S,2),L=T[0],A=T[1],I=d.sources[C][L]||d.sources[C].content,Z=Object(o["useTSPlaygroundUrl"])(m,I),V=Object(o["usePrefersColor"])(),P=Object(l["a"])(V,1);P[0];function D(e){M(e),A(f(e,d.sources[e]))}return c.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&c.a.createElement(o["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&c.a.createElement("span",{className:"debug-badge"},"Debug Only"),E&&c.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:E}),d.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:()=>x()}),c.a.createElement("div",{className:"spacer"}),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":O,onClick:()=>y(I)}),"tsx"===L&&c.a.createElement(o["Link"],{target:"_blank",to:Z},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!p&&c.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:D},Object.keys(d.sources).map((e=>c.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(f(e,d.sources[e])):e,key:e})))),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(v["a"],{code:I,lang:L,showCopy:!1}))))},b=E,g=(n("oeoJ"),n("NEWu")),x=(n("q9vG"),e=>{var t=e.url,n=Object(a["useState"])(Math.random()),i=Object(l["a"])(n,2),s=i[0],m=i[1],d=Object(o["usePrefersColor"])(),u=Object(l["a"])(d,1),p=u[0],h=Object(a["useContext"])(o["context"]),v=h.config.mode;return Object(a["useEffect"])((()=>{m(Math.random())}),[p]),Object(a["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{m(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),c.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":v},c.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),c.a.createElement("div",{className:"adm-doc-device-action"},c.a.createElement("a",{onClick:()=>m(Math.random())},j),c.a.createElement(r["Popover"],{content:c.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},c.a.createElement("a",null,k)),c.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},_)))}),j=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),k=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),_=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),y="dumi:scroll-into-demo";t["default"]=e=>{var t,n=Object(o["useDemoUrl"])(e.identifier);return c.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},c.a.createElement("div",{className:"adm-doc-previewer-source"},c.a.createElement(b,e)),c.a.createElement("div",{className:"adm-doc-previewer-device"},c.a.createElement(x,{url:null!==(t=e.demoUrl)&&void 0!==t?t:n})))}},eqKt:function(e,t,n){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,n){"use strict";var a=n("ahKI"),c=n.n(a),l=n("eqKt"),r=n.n(l),i=e=>c.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&c.a.createElement("img",{src:e.image,alt:e.title}),c.a.createElement("div",{className:r.a.content},c.a.createElement("div",{className:r.a.title},e.title),c.a.createElement("div",{className:r.a.description},e.description)));t["a"]=i},mVOg:function(e,t,n){"use strict";var a=n("iojd"),c=n("ahKI"),l=n.n(c),r=n("TS6m"),i=n("/7QA");t["a"]=()=>{var e=Object(c["useContext"])(r["context"]),t=e.locale,n=Object(c["useState"])(!1),o=Object(a["a"])(n,2),s=o[0],m=o[1];return l.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},l.a.createElement(i["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},l.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,n){},q9vG:function(e,t,n){},tCeM:function(e,t,n){}}]);