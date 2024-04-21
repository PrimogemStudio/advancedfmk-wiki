"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[642],{8403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>I,default:()=>q,frontMatter:()=>T,metadata:()=>S,toc:()=>D});var r=n(4848),l=n(8453),s=n(6540),i=n(4164),c=n(3104),d=n(6347),a=n(205),o=n(7485),u=n(1682),h=n(9466);function x(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,d.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=j(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,o]=m({queryString:n,groupId:r}),[u,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,h.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=d??u;return f({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),x(e)}),[o,x,l]),tabValues:l}}var p=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),u=e=>{const t=e.currentTarget,n=a.indexOf(t),r=d[n].value;r!==l&&(o(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>a.push(e),onKeyDown:h,onClick:u,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function A(e){const t=g(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,r.jsx)(y,{...e,...t}),(0,r.jsx)(v,{...e,...t})]})}function k(e){const t=(0,p.A)();return(0,r.jsx)(A,{...e,children:x(e.children)},String(t))}const w={tabItem:"tabItem_Ymn6"};function V(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(w.tabItem,l),hidden:n,children:t})}n(8774),n(1312);const T={},I="\u77e2\u91cf\u5b57\u4f53\u5904\u7406",S={id:"advancedfmk-fontengine/0description",title:"\u77e2\u91cf\u5b57\u4f53\u5904\u7406",description:"\u5b57\u4f53\u89e3\u6790\u90e8\u5206\u4f7f\u7528 lwjgl-freetype \u5b8c\u6210",source:"@site/docs/advancedfmk-fontengine/0description.mdx",sourceDirName:"advancedfmk-fontengine",slug:"/advancedfmk-fontengine/0description",permalink:"/advancedfmk-wiki/docs/advancedfmk-fontengine/0description",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced Framework - \u5b57\u4f53\u5f15\u64ce",permalink:"/advancedfmk-wiki/docs/category/advanced-framework---\u5b57\u4f53\u5f15\u64ce"},next:{title:"Advanced Framework - \u4ee3\u7801\u8d21\u732e\u8bf4\u660e",permalink:"/advancedfmk-wiki/docs/category/advanced-framework---\u4ee3\u7801\u8d21\u732e\u8bf4\u660e"}},E={},D=[{value:"\u4ece <code>ttf</code> \u5b57\u4f53\u5230 <code>vtxf</code>",id:"\u4ece-ttf-\u5b57\u4f53\u5230-vtxf",level:2},{value:"\u6587\u4ef6\u7ed3\u6784",id:"\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u6587\u4ef6\u5934",id:"\u6587\u4ef6\u5934",level:3},{value:"\u5b57\u4f53\u4e3b\u90e8\u5206",id:"\u5b57\u4f53\u4e3b\u90e8\u5206",level:3},{value:"\u5355\u4e2a\u5b57\u7b26 <br></br>",id:"\u5355\u4e2a\u5b57\u7b26-",level:4},{value:"\u6587\u4ef6\u5c3e",id:"\u6587\u4ef6\u5c3e",level:3}];function _(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u77e2\u91cf\u5b57\u4f53\u5904\u7406",children:"\u77e2\u91cf\u5b57\u4f53\u5904\u7406"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["\u5b57\u4f53\u89e3\u6790\u90e8\u5206\u4f7f\u7528 lwjgl-freetype \u5b8c\u6210",(0,r.jsx)("br",{}),"\n\u4e0d\u9700\u8981\u989d\u5916\u4f9d\u8d56\uff0cAdvanced Framework \u5df2\u5c06 lwjgl-freetype \u9759\u6001\u4f9d\u8d56",(0,r.jsx)("br",{}),"\n\u8be5\u9759\u6001\u4f9d\u8d56\u5c06\u5728 Minecraft 1.20.5 + \u53d6\u6d88",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/tree/main/fontengine/src/main/java/com/primogemstudio/advancedfmk/ftwrap",children:"\u4ee3\u7801\u5b9e\u73b0"})}),"\n",(0,r.jsxs)(t.h2,{id:"\u4ece-ttf-\u5b57\u4f53\u5230-vtxf",children:["\u4ece ",(0,r.jsx)(t.code,{children:"ttf"})," \u5b57\u4f53\u5230 ",(0,r.jsx)(t.code,{children:"vtxf"})]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["VTXF \u6587\u4ef6\u5df2\u4e8e v0.4.2 \u7248\u672c\u4e2d\u79fb\u9664",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(V,{value:"step1",label:"\u89e3\u6790\u5b57\u4f53",default:!0,children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u521d\u59cb\u5316 FreeType \u5e93"}),"\n",(0,r.jsx)(t.li,{children:"\u4ece\u6587\u4ef6\u6216\u5185\u5b58\u52a0\u8f7d ttf \u5b57\u4f53"}),"\n",(0,r.jsx)(t.li,{children:"\u5c06\u5b57\u4f53\u6307\u9488\u5b58\u50a8"}),"\n"]})}),(0,r.jsx)(V,{value:"step2",label:"\u83b7\u53d6 SVG \u8def\u5f84",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"FT_Decompose_Outline()"})," \u51fd\u6570\u63d0\u53d6\u5b57\u7b26\u8f6e\u5ed3"]}),"\n",(0,r.jsx)(t.li,{children:"\u5c06\u6bcf\u4e00\u4e2a SVG \u7ec4\u6210\u90e8\u5206\u653e\u5165\u961f\u5217\u4e2d"}),"\n"]})}),(0,r.jsx)(V,{value:"step3",label:"\u5206\u79bb\u591a\u8fb9\u5f62",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u901a\u8fc7\u961f\u5217\u89e3\u6790\u6bcf\u4e00\u6b65\u64cd\u4f5c\uff0c\u5bf9\u66f2\u7ebf (\u4e8c\u6b21/\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf) \u8fdb\u884c\u8ba1\u7b97\uff0c\u5b58\u50a8\u5165 ",(0,r.jsx)(t.code,{children:"MultiPolygon"})," \u5bf9\u8c61"]}),"\n"]})}),(0,r.jsx)(V,{value:"step4",label:"\u4e09\u89d2\u5256\u5206 (Earcut)",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(t.a,{href:"https://github.com/earcut4j/earcut4j",children:"Earcut4j"})," \u5b9e\u73b0"]}),"\n"]})}),(0,r.jsx)(V,{value:"step5",label:"\u5199\u5165 vtxf \u6587\u4ef6",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u5c06\u6240\u6709\u5256\u5206\u540e\u7684\u4e09\u89d2\u5f62\u9876\u70b9\u5750\u6807\u548c\u7d22\u5f15\u5199\u5165\u6587\u4ef6"}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u6587\u4ef6\u7ed3\u6784",children:"\u6587\u4ef6\u7ed3\u6784"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"\u6587\u4ef6\u5185\u6240\u6709\u6570\u636e\u7ed3\u6784\u90fd\u4ee5\u5927\u7aef\u5e8f\u5199\u5165"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"vxtf \u4f7f\u7528 Deflater \u538b\u7f29\uff0cInflater \u89e3\u538b\u7f29"})}),"\n",(0,r.jsx)(t.h3,{id:"\u6587\u4ef6\u5934",children:"\u6587\u4ef6\u5934"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u5185\u5bb9"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u6570\u636e ",(0,r.jsx)(t.code,{children:"VTXF"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String (UTF)"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"DataInputStream / DataOutputStream"})," \u7684 ",(0,r.jsx)(t.code,{children:"readUTF() / writeUTF()"})," \u51fd\u6570\u8bfb\u53d6\u6216\u5199\u5165"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u6570\u636e ",(0,r.jsx)(t.code,{children:"0x0307"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"short"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u5b57\u4f53\u7248\u672c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"byte"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u76ee\u524d\u53ea\u6709 ",(0,r.jsx)(t.code,{children:"v0"})," \u7248\u672c"]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u5b57\u4f53\u4e3b\u90e8\u5206",children:"\u5b57\u4f53\u4e3b\u90e8\u5206"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u5185\u5bb9"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u5b57\u7b26\u6570\u91cf"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]})})]}),"\n",(0,r.jsxs)(t.h4,{id:"\u5355\u4e2a\u5b57\u7b26-",children:["\u5355\u4e2a\u5b57\u7b26 ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u5185\u5bb9"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u5b57\u7b26\u7801\u4f4d"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u5b57\u7b26\u957f\u5bbd\u6bd4"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"float"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u9876\u70b9\u5217\u8868\u957f\u5ea6"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u9876\u70b9\u5217\u8868"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"vec2 (2 * float)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u7531\u5217\u8868\u957f\u5ea6\u51b3\u5b9a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u4e09\u89d2\u5f62\u9876\u70b9\u7d22\u5f15\u5217\u8868\u957f\u5ea6"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u5fc5\u987b\u4e3a 3 \u7684\u500d\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u4e09\u89d2\u5f62\u9876\u70b9\u7d22\u5f15\u5217\u8868"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u7531\u5217\u8868\u957f\u5ea6\u51b3\u5b9a"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u6587\u4ef6\u5c3e",children:"\u6587\u4ef6\u5c3e"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u5185\u5bb9"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Magic number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"long"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u4e3a ",(0,r.jsx)(t.code,{children:"0x20230426"})," \u4e58\u4ee5\u5b57\u7b26\u6570\u91cf"]})]})})]})]})}function q(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const l={},s=r.createContext(l);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);