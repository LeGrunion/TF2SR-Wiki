(self.webpackChunktf_2_sr_wiki=self.webpackChunktf_2_sr_wiki||[]).push([[217],{1310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(7462),l=n(7294),o=n(6010),r=n(5281),s=n(2802),c=n(8596),i=n(9960),d=n(5999),m=n(4996);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}const g={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:a}=e;const o="breadcrumbs__link";return a?l.createElement("span",{className:o,itemProp:"name"},t):n?l.createElement(i.Z,{className:o,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:o},t)}function f(e){let{children:t,active:n,index:r,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function v(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,o.Z)(r.k.docs.docBreadcrumbs,g.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(f,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(b,{href:t.href,isLast:a},t.label))})))):null}},217:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>at});var a=n(7294),l=n(1944),o=n(902);const r=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(6010),m=n(7524),u=n(4966);function p(){const{metadata:e}=c();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var h=n(3120),g=n(4364),b=n(5281),f=n(5999);function v(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(f.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return a.createElement(f.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:b.k.common.lastUpdated},a.createElement(f.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(v,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=n(7462);const N={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...n}=e;return a.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(N.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:b.k.common.editThisPage},a.createElement(L,null),a.createElement(f.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var _=n(9960);const Z={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function B(e){let{permalink:t,label:n,count:l}=e;return a.createElement(_.Z,{href:t,className:(0,d.Z)(Z.tag,l?Z.tagWithCount:Z.tagRegular)},n,l&&a.createElement("span",null,l))}const T={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(f.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(T.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:T.tag},a.createElement(B,{label:t,permalink:n}))}))))}const x={lastUpdated:"lastUpdated_vwxv"};function A(e){return a.createElement("div",{className:(0,d.Z)(b.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(w,e)))}function H(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.Z)(b.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(C,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",x.lastUpdated)},(n||l)&&a.createElement(y,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||n||o);return s||i?a.createElement("footer",{className:(0,d.Z)(b.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(A,{tags:r}),i&&a.createElement(H,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var S=n(6043),M=n(6668);function j(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function O(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=O({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function U(e){const t=e.getBoundingClientRect();return t.top===t.bottom?U(e.parentNode):t}function P(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>U(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(U(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function V(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,M.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function D(e){const t=(0,a.useRef)(void 0),n=V();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=P(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function W(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(W,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const R=a.memo(W);function z(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:s,...c}=e;const i=(0,M.L)(),d=r??i.tableOfContents.minHeadingLevel,m=s??i.tableOfContents.maxHeadingLevel,u=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>O({toc:j(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return D((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:m}}),[l,o,d,m])),a.createElement(R,(0,k.Z)({toc:u,className:n,linkClassName:l},c))}const $={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function F(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,k.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",$.tocCollapsibleButton,!t&&$.tocCollapsibleButtonExpanded,n.className)}),a.createElement(f.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,S.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(q.tocCollapsible,!r&&q.tocCollapsibleExpanded,n)},a.createElement(F,{collapsed:r,onClick:s}),a.createElement(S.z,{lazy:!0,className:q.tocCollapsibleContent,collapsed:r},a.createElement(z,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const Y={tocMobile:"tocMobile_ITEo"};function J(){const{toc:e,frontMatter:t}=c();return a.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(b.k.docs.docTocMobile,Y.tocMobile)})}const X={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Q="table-of-contents__link toc-highlight",K="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.Z)(X.tableOfContents,"thin-scrollbar",t)},a.createElement(z,(0,k.Z)({},n,{linkClassName:Q,linkActiveClassName:K})))}function te(){const{toc:e,frontMatter:t}=c();return a.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var ne=n(2503),ae=n(3905),le=n(5742);var oe=n(2389),re=n(2949);function se(){const{prism:e}=(0,M.L)(),{colorMode:t}=(0,re.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var ce=n(2877),ie=n.n(ce);const de=/title=(?<quote>["'])(?<title>.*?)\1/,me=/\{(?<range>[\d,-]+)\}/,ue={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function pe(e,t){const n=e.map((e=>{const{start:n,end:a}=ue[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function he(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:l,metastring:o}=t;if(o&&me.test(o)){const e=o.match(me).groups.range;if(0===l.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=l[0].className,a=ie()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return pe(["js","jsBlock"],t);case"jsx":case"tsx":return pe(["js","jsBlock","jsx"],t);case"html":return pe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return pe(["bash"],t);case"markdown":case"md":return pe(["html","jsx","bash"],t);default:return pe(Object.keys(ue),t)}}(a,l),s=n.split("\n"),c=Object.fromEntries(l.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(l.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=`${p},`:d[t]?c[d[t]].start=p:m[t]&&(c[m[t]].range+=`${c[m[t]].start}-${p-1},`),s.splice(p,1)}n=s.join("\n");const u={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;ie()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const ge={codeBlockContainer:"codeBlockContainer_Ckt0"};function be(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,l]=e;const o=t[a];o&&"string"==typeof l&&(n[o]=l)})),n}(se());return a.createElement(t,(0,k.Z)({},n,{style:l,className:(0,d.Z)(n.className,ge.codeBlockContainer,b.k.common.codeBlock)}))}const fe={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function ve(e){let{children:t,className:n}=e;return a.createElement(be,{as:"pre",tabIndex:0,className:(0,d.Z)(fe.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:fe.codeBlockLines},t))}const Ee={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ye(e,t){const[n,l]=(0,a.useState)(),r=(0,a.useCallback)((()=>{l(e.current?.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,a.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=Ee);const l=(0,o.zX)(t),r=(0,o.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(l);return e&&t.observe(e,r),()=>t.disconnect()}),[e,l,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const ke={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Ne={Prism:n(7410).Z,theme:ke};function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ce.apply(this,arguments)}var _e=/\r\n|\r|\n/,Ze=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Be=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function Te(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var we=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Le(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Ce({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=Ce({},n,{backgroundColor:null}),l}(e.theme,e.language):void 0;return t.themeDict=n})),Le(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,o=Ce({},Te(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==l&&(o.style=void 0!==o.style?Ce({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Le(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return o[n[0]];var r=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(s))}})),Le(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,o=e.token,r=Ce({},Te(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?Ce({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),Le(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var o=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,o=this.getThemeDict(this.props),r=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],o=0,r=0,s=[],c=[s];r>-1;){for(;(o=a[r]++)<l[r];){var i=void 0,d=t[r],m=n[r][o];if("string"==typeof m?(d=r>0?d:["plain"],i=m):(d=Be(d,m.type),m.alias&&(d=Be(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(_e),p=u.length;s.push({types:d,content:u[0]});for(var h=1;h<p;h++)Ze(s),c.push(s=[]),s.push({types:d,content:u[h]})}else r++,t.push(d),n.push(i),a.push(0),l.push(i.length)}r--,t.pop(),n.pop(),a.pop(),l.pop()}return Ze(s),c}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const xe=we,Ae={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function He(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:o,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=o({line:t,className:(0,d.Z)(n,l&&Ae.codeLine)}),c=t.map(((e,t)=>a.createElement("span",(0,k.Z)({key:t},r({token:e,key:t})))));return a.createElement("span",s,l?a.createElement(a.Fragment,null,a.createElement("span",{className:Ae.codeLineNumber}),a.createElement("span",{className:Ae.codeLineContent},c)):c,a.createElement("br",null))}const Ie={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Se(e){let{code:t,className:n}=e;const[l,o]=(0,a.useState)(!1),r=(0,a.useRef)(void 0),s=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection(),r=o.rangeCount>0&&o.getRangeAt(0);n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),l&&l.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),a.createElement("button",{type:"button","aria-label":l?(0,f.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,f.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,f.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,d.Z)("clean-btn",n,Ie.copyButton,l&&Ie.copyButtonCopied),onClick:s},a.createElement("span",{className:Ie.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Ie.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Ie.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Me={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function je(e){let{className:t,onClick:n,isEnabled:l}=e;const o=(0,f.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,d.Z)("clean-btn",t,l&&Me.wordWrapButtonEnabled),"aria-label":o,title:o},a.createElement("svg",{className:Me.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Oe(e){let{children:t,className:n="",metastring:l,title:o,showLineNumbers:r,language:s}=e;const{prism:{defaultLanguage:c,magicComments:i}}=(0,M.L)(),m=s??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??c,u=se(),p=function(){const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(null),r=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");l(n)}),[o]);return ye(o,s),(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:r}}(),h=function(e){return e?.match(de)?.groups.title??""}(l)||o,{lineClassNames:g,code:b}=he(t,{metastring:l,language:m,magicComments:i}),f=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(l);return a.createElement(be,{as:"div",className:(0,d.Z)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`)},h&&a.createElement("div",{className:fe.codeBlockTitle},h),a.createElement("div",{className:fe.codeBlockContent},a.createElement(xe,(0,k.Z)({},Ne,{theme:u,code:b,language:m??"text"}),(e=>{let{className:t,tokens:n,getLineProps:l,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,d.Z)(t,fe.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,d.Z)(fe.codeBlockLines,f&&fe.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(He,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:g[t],showLineNumbers:f})))))})),a.createElement("div",{className:fe.buttonGroup},(p.isEnabled||p.isCodeScrollable)&&a.createElement(je,{className:fe.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),a.createElement(Se,{className:fe.codeButton,code:b}))))}function Ue(e){let{children:t,...n}=e;const l=(0,oe.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof o?Oe:ve;return a.createElement(r,(0,k.Z)({key:String(l)},n),o)}const Pe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Ve(e){return!!e&&("SUMMARY"===e.tagName||Ve(e.parentElement))}function De(e,t){return!!e&&(e===t||De(e.parentElement,t))}function We(e){let{summary:t,children:n,...l}=e;const o=(0,oe.Z)(),r=(0,a.useRef)(null),{collapsed:s,setCollapsed:c}=(0,S.u)({initialState:!l.open}),[i,m]=(0,a.useState)(l.open),u=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,k.Z)({},l,{ref:r,open:i,"data-collapsed":s,className:(0,d.Z)(Pe.details,o&&Pe.isBrowser,l.className),onMouseDown:e=>{Ve(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ve(t)&&De(t,r.current)&&(e.preventDefault(),s?(c(!1),m(!0)):c(!0))}}),u,a.createElement(S.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)}},a.createElement("div",{className:Pe.collapsibleContent},n)))}const Re={details:"details_b_Ee"},ze="alert alert--info";function $e(e){let{...t}=e;return a.createElement(We,(0,k.Z)({},t,{className:(0,d.Z)(ze,Re.details,t.className)}))}function Fe(e){return a.createElement(ne.Z,e)}const qe={containsTaskList:"containsTaskList_mC6p"};const Ge={img:"img_ev3q"};var Ye=n(7083),Je=n(1875);const Xe={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(le.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(Ue,e)},a:function(e){return a.createElement(_.Z,e)},pre:function(e){return a.createElement(Ue,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement($e,(0,k.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,k.Z)({},e,{className:(t=e.className,(0,d.Z)(t,t?.includes("contains-task-list")&&qe.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,k.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,Ge.img))}));var t},h1:e=>a.createElement(Fe,(0,k.Z)({as:"h1"},e)),h2:e=>a.createElement(Fe,(0,k.Z)({as:"h2"},e)),h3:e=>a.createElement(Fe,(0,k.Z)({as:"h3"},e)),h4:e=>a.createElement(Fe,(0,k.Z)({as:"h4"},e)),h5:e=>a.createElement(Fe,(0,k.Z)({as:"h5"},e)),h6:e=>a.createElement(Fe,(0,k.Z)({as:"h6"},e)),admonition:Ye.Z,mermaid:Je.Z};function Qe(e){let{children:t}=e;return a.createElement(ae.MDXProvider,{components:Xe},t)}function Ke(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(b.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(ne.Z,{as:"h1"},n)),a.createElement(Qe,null,t))}var et=n(1310);const tt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function nt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(J,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(te,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&tt.docItemCol)},a.createElement(h.Z,null),a.createElement("div",{className:tt.docItemContainer},a.createElement("article",null,a.createElement(et.Z,null),a.createElement(g.Z,null),n.mobile,a.createElement(Ke,null,t),a.createElement(I,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function at(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(nt,null,a.createElement(n,null))))}},4966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7462),l=n(7294),o=n(5999),r=n(6010),s=n(9960);function c(e){const{permalink:t,title:n,subLabel:a,isNext:o}=e;return l.createElement(s.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,a.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c,(0,a.Z)({},n,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),o=n(5999),r=n(5281),s=n(4477);function c(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(7294),l=n(6010),o=n(2263),r=n(9960),s=n(5999),c=n(143),i=n(5281),d=n(373),m=n(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:l},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:g}=(0,c.Jo)(s),b=u??(f=g).docs.find((e=>e.id===f.mainDocId));var f;return a.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:g.label,to:b.path,onClick:()=>m(g.name)})))}function b(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(g,{className:t,versionMetadata:n}):null}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),o=n(6010),r=n(5999),s=n(6668),c=n(9960);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.L)();if("h1"===t||!n)return l.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return l.createElement(t,(0,a.Z)({},d,{className:(0,o.Z)("anchor",m?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,d.className),id:n}),d.children,l.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},2877:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,l,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);