"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[652],{1592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=r(4848),d=r(8453);const o={sidebar_position:1},t="The beginning of all",a={id:"intro",title:"The beginning of all",description:"Import Advanced Framework in your Fabric project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/advancedfmk-wiki/en/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Advanced Framework - MMD \u6e32\u67d3\u5668",permalink:"/advancedfmk-wiki/en/docs/category/advanced-framework---mmd-\u6e32\u67d3\u5668"}},s={},c=[{value:"Configure Gradle build script",id:"configure-gradle-build-script",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Module structure",id:"module-structure",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"the-beginning-of-all",children:"The beginning of all"}),"\n",(0,i.jsxs)(n.p,{children:["Import ",(0,i.jsx)(n.strong,{children:"Advanced Framework"})," in your Fabric project"]}),"\n",(0,i.jsx)(n.h2,{id:"configure-gradle-build-script",children:"Configure Gradle build script"}),"\n",(0,i.jsx)(n.p,{children:"Since all the submodules of Advanced Framework have already been uploaded to the Maven Central repository, there is no need to configure additional repositories"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"ext.advancedfmk_version = '0.4.0'\n\ndependencies {\n  // ...\n  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-uicompositor:$advancedfmk_version'\n  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-mmdrenderer:$advancedfmk_version'\n  // ...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JDK 17"}),"\n",(0,i.jsxs)(n.li,{children:["On Linux :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/tree/main/mmdrenderer",children:"advancedfmk-mmdrenderer (MMD Renderer)"})," modules need glibc 3.4.31 or above (Debian  distributions may not contains this version of glibc, needs manual upgrade)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"module-structure",children:"Module structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/tree/main/uicompositor",children:"advancedfmk-uicompositor (UI Compositor)"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/tree/main/mmdrenderer",children:"advancedfmk-mmdrenderer (MMD Renderer)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/tree/main/commonutils",children:"advancedfmk-commonutils (Utilities, currently contains lwjgl-tinyfd wrapping functions)"})}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var i=r(6540);const d={},o=i.createContext(d);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);