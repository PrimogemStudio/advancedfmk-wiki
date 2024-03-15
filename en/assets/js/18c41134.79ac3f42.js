"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[9262],{9740:(e,n,r)=>{r.r(n),r.d(n,{Highlight:()=>d,assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(4848),o=r(8453);const a={sidebar_position:4},t="Markdown Features",i={id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/advancedfmk-wiki/en/docs/tutorial-basics/markdown-features",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/advancedfmk-wiki/en/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/advancedfmk-wiki/en/docs/tutorial-basics/deploy-your-site"}},c={},l=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],d=({children:e,color:n})=>{const r={span:"span",...(0,o.R)()};return(0,s.jsx)(r.span,{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e})};function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus supports ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,s.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,s.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,s.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\r\n---\r\nid: my-doc-id\r\ntitle: My document title\r\ndescription: My document description\r\nslug: /my-custom-url\r\n---\r\n// highlight-end\r\n\r\n## Markdown heading\r\n\r\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,s.jsx)(n.a,{href:"/advancedfmk-wiki/en/docs/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,s.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,s.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,s.jsx)(n.code,{children:"static/img/icon.png"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/icon.png)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docusaurus logo",src:r(3745).A+"",width:"16",height:"16"})}),"\n",(0,s.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/icon.png)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,s.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'```jsx title="src/components/HelloDocusaurus.js"\r\nfunction HelloDocusaurus() {\r\n  return <h1>Hello, Docusaurus!</h1>;\r\n}\r\n```\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\r\n  return <h1>Hello, Docusaurus!</h1>;\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:":::tip[My tip]\r\n\r\nUse this awesome feature option\r\n\r\n:::\r\n\r\n:::danger[Take care]\r\n\r\nThis action is dangerous\r\n\r\n:::\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,s.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,s.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,s.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,s.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,s.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,s.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\r\n  <span\r\n    style={{\r\n      backgroundColor: color,\r\n      borderRadius: '20px',\r\n      color: '#fff',\r\n      padding: '10px',\r\n      cursor: 'pointer',\r\n    }}\r\n    onClick={() => {\r\n      alert(`You clicked the color ${color} with label ${children}`)\r\n    }}>\r\n    {children}\r\n  </span>\r\n);\r\n\r\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\r\n\r\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(d,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(d,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3745:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAAB3SURBVDhPtZLBDcAgCEVZpOeO2V26Q1dqPHcBqwQMGAxo05e8BIn/XxTgTPmT5nJGHiKoIMsDcuxjCyrI8oDQRQ+34Lq3oZVQgUes4AHbwk8FxFIBq7DC1ULLyLDUo92VoSX7hWoP7FUBQi/R781PVJUHZKog5RdSvPqWOBQR7gAAAABJRU5ErkJggg=="},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(6540);const o={},a=s.createContext(o);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);