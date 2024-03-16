"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[9262],{9740:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>d,assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=s(4848),a=s(8453);const t={sidebar_position:4},r="Markdown Features",i={id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/advancedfmk-wiki/docs/tutorial-basics/markdown-features",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/advancedfmk-wiki/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/advancedfmk-wiki/docs/tutorial-basics/deploy-your-site"}},c={},l=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],d=({children:e,color:n})=>{const s={span:"span",...(0,a.R)()};return(0,o.jsx)(s.span,{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e})};function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,o.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,o.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,o.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,o.jsx)(n.a,{href:"/advancedfmk-wiki/docs/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,o.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,o.jsx)(n.code,{children:"static/img/icon.png"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/icon.png)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docusaurus logo",src:s(3737).A+"",width:"16",height:"16"})}),"\n",(0,o.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/icon.png)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,o.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n```\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::tip[My tip]\n\nUse this awesome feature option\n\n:::\n\n:::danger[Take care]\n\nThis action is dangerous\n\n:::\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,o.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,o.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,o.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,o.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,o.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,o.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(d,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(d,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3737:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAAB3SURBVDhPtZLBDcAgCEVZpOeO2V26Q1dqPHcBqwQMGAxo05e8BIn/XxTgTPmT5nJGHiKoIMsDcuxjCyrI8oDQRQ+34Lq3oZVQgUes4AHbwk8FxFIBq7DC1ULLyLDUo92VoSX7hWoP7FUBQi/R781PVJUHZKog5RdSvPqWOBQR7gAAAABJRU5ErkJggg=="},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var o=s(6540);const a={},t=o.createContext(a);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);