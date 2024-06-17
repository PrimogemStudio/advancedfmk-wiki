"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[141],{2510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>S,default:()=>E,frontMatter:()=>V,metadata:()=>I,toc:()=>F});var r=n(4848),l=n(8453),i=n(6540),s=n(4164),c=n(3104),a=n(6347),d=n(205),o=n(7485),u=n(1682),h=n(679);function x(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=f(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[a,o]=p({queryString:n,groupId:r}),[u,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,h.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),m=(()=>{const e=a??u;return j({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),x(e)}),[o,x,l]),tabValues:l}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),r=a[n].value;r!==l&&(o(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>d.push(e),onKeyDown:h,onClick:u,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function A(e){const t=m(e);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,r.jsx)(y,{...t,...e}),(0,r.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,r.jsx)(A,{...e,children:x(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(k.tabItem,l),hidden:n,children:t})}n(8774),n(1312);const V={},S="Vector font processing",I={id:"advancedfmk-fontengine/0description",title:"Vector font processing",description:"The font parsing part is done using lwjgl-freetype",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advancedfmk-fontengine/0description.mdx",sourceDirName:"advancedfmk-fontengine",slug:"/advancedfmk-fontengine/0description",permalink:"/advancedfmk-wiki/en/docs/advancedfmk-fontengine/0description",draft:!1,unlisted:!1,editUrl:"https://github.com/PrimogemStudio/advancedfmk-wiki/blob/main/docs/advancedfmk-fontengine/0description.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced Framework - \u5b57\u4f53\u5f15\u64ce",permalink:"/advancedfmk-wiki/en/docs/category/advanced-framework---\u5b57\u4f53\u5f15\u64ce"},next:{title:"Use the font engine",permalink:"/advancedfmk-wiki/en/docs/advancedfmk-fontengine/1api"}},D={},F=[{value:"From <code>ttf</code> to <code>vtxf</code>",id:"from-ttf-to-vtxf",level:2},{value:"File structure",id:"file-structure",level:2},{value:"File header",id:"file-header",level:3},{value:"Main part",id:"main-part",level:3},{value:"Single character <br></br>",id:"single-character-",level:4},{value:"File end",id:"file-end",level:3}];function C(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"vector-font-processing",children:"Vector font processing"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The font parsing part is done using lwjgl-freetype",(0,r.jsx)("br",{}),"\nThere is no need for additional dependencies, the Advanced Framework already has a static dependency on lwjgl-freetype",(0,r.jsx)("br",{}),"\nThis static dependency will be removed in Minecraft 1.20.5 +",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/tree/main/fontengine/src/main/java/com/primogemstudio/advancedfmk/ftwrap",children:"Implementation"})}),"\n",(0,r.jsxs)(t.h2,{id:"from-ttf-to-vtxf",children:["From ",(0,r.jsx)(t.code,{children:"ttf"})," to ",(0,r.jsx)(t.code,{children:"vtxf"})]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["VTXF file has been removed in v0.4.2",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(w,{children:[(0,r.jsx)(T,{value:"step1",label:"Parse font",default:!0,children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Init FreeType library"}),"\n",(0,r.jsx)(t.li,{children:"Load ttf font from file or memory"}),"\n",(0,r.jsx)(t.li,{children:"Store the pointer of the font"}),"\n"]})}),(0,r.jsx)(T,{value:"step2",label:"Fetch SVG path",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Extract glyph outline by ",(0,r.jsx)(t.code,{children:"FT_Decompose_Outline()"})," function"]}),"\n",(0,r.jsx)(t.li,{children:"Place each SVG component in the queue"}),"\n"]})}),(0,r.jsx)(T,{value:"step3",label:"Split polygons",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The curves (quadratic/cubic bezier curves) are computed and stored in ",(0,r.jsx)(t.code,{children:"MultiPolygon"})," objects by queue parsing each step"]}),"\n"]})}),(0,r.jsx)(T,{value:"step4",label:"Trigulation (Earcut)",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use the implementation ",(0,r.jsx)(t.a,{href:"https://github.com/earcut4j/earcut4j",children:"Earcut4j"})]}),"\n"]})}),(0,r.jsx)(T,{value:"step5",label:"Write into vtxf file",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Write all the split triangle vertex coordinates and indexes to the file"}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"All data structures within the file are written in big-endian order"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"vxtf is compressed by Deflater, uncompressed my Inflater"})}),"\n",(0,r.jsx)(t.h3,{id:"file-header",children:"File header"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Content"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Data ",(0,r.jsx)(t.code,{children:"VTXF"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String (UTF)"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Read or write with ",(0,r.jsx)(t.code,{children:"readUTF() / writeUTF()"})," in ",(0,r.jsx)(t.code,{children:"DataInputStream / DataOutputStream"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Data ",(0,r.jsx)(t.code,{children:"0x0307"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"short"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Font version"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"byte"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"v0"})," version only"]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"main-part",children:"Main part"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Content"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Number of characters"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]})})]}),"\n",(0,r.jsxs)(t.h4,{id:"single-character-",children:["Single character ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Content"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Code point"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Aspect ratio"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"float"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Vertices list size"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Vertices list"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"vec2 (2 * float)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Determined by the length of the list"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Triangle vertex index list size"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Must be a multiple of 3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Triangle vertex index list"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Determined by the length of the list"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"file-end",children:"File end"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Content"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Magic number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"long"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Multiply ",(0,r.jsx)(t.code,{children:"0x20230426"})," by the number of characters"]})]})})]})]})}function E(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);