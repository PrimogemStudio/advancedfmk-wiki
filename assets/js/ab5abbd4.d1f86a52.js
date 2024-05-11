"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[440],{4835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var r=t(4848),i=t(8453);const d={},a="\u521b\u5efa MMD \u6e32\u67d3\u5668\u5305\u88c5",c={id:"advancedfmk-mmdrenderer/1creating_mmdentity",title:"\u521b\u5efa MMD \u6e32\u67d3\u5668\u5305\u88c5",description:"\u6e32\u67d3\u5668\u5305\u88c5\u793a\u4f8b",source:"@site/docs/advancedfmk-mmdrenderer/1creating_mmdentity.md",sourceDirName:"advancedfmk-mmdrenderer",slug:"/advancedfmk-mmdrenderer/1creating_mmdentity",permalink:"/advancedfmk-wiki/docs/advancedfmk-mmdrenderer/1creating_mmdentity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Minecraft \u7684\u65b0 MMD \u6e32\u67d3\u5668",permalink:"/advancedfmk-wiki/docs/advancedfmk-mmdrenderer/0description"},next:{title:"Advanced Framework - \u5b57\u4f53\u5f15\u64ce",permalink:"/advancedfmk-wiki/docs/category/advanced-framework---\u5b57\u4f53\u5f15\u64ce"}},o={},s=[{value:"\u6e32\u67d3\u5668\u5305\u88c5\u793a\u4f8b",id:"\u6e32\u67d3\u5668\u5305\u88c5\u793a\u4f8b",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u521b\u5efa-mmd-\u6e32\u67d3\u5668\u5305\u88c5",children:"\u521b\u5efa MMD \u6e32\u67d3\u5668\u5305\u88c5"}),"\n",(0,r.jsx)(n.h2,{id:"\u6e32\u67d3\u5668\u5305\u88c5\u793a\u4f8b",children:"\u6e32\u67d3\u5668\u5305\u88c5\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ef\u5728 ",(0,r.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mmd/entity/TestEntityRenderer.kt",children:"Github"})," \u627e\u5230\u793a\u4f8b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7531\u4e8e\u672c Wiki \u53ea\u63d0\u4f9b\u5b9e\u4f53\u6e32\u67d3\u5668\u7684\u7f16\u5199\u65b9\u6cd5\uff0c\u5b9e\u4f53\u521b\u5efa\u8fc7\u7a0b\u53ef\u5728 ",(0,r.jsx)(n.a,{href:"https://fabricmc.net/wiki/zh_cn:tutorial:entity",children:"Fabric Wiki"})," \u4e0a\u627e\u5230 (\u6ce8\uff1a\u4e0d\u9700\u8981\u521b\u5efa\u5b9e\u4f53\u6a21\u578b)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5f00\u5b9e\u4f53\u6e32\u67d3\u5668\u7c7b (\u4e0b\u5217\u4ee3\u7801\u4f7f\u7528\u300c\u5b98\u65b9\u53cd\u6df7\u6dc6\u8868\u300d\u548c Kotlin \u7f16\u5199)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="EntityRenderer.kt"',children:'class TestEntityRenderer(context: EntityRendererProvider.Context) : EntityRenderer<TestEntity>(context) {\n    val wrap = EntityRenderWrapper(PMXModel(File(...))) // \u5728\u8fd9\u91cc\u4f20\u5165\u6a21\u578b\u8def\u5f84\n    override fun getTextureLocation(entity: TestEntity): ResourceLocation {\n        return ResourceLocation("")\n    }\n\n    override fun render(\n        entity: TestEntity,\n        entityYaw: Float,\n        partialTick: Float,\n        poseStack: PoseStack,\n        buffer: MultiBufferSource,\n        packedLight: Int\n    ) {\n        wrap.render(entityYaw, poseStack, buffer, packedLight)\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u5c06 ",(0,r.jsx)(n.code,{children:"TestEntity"})," \u6362\u6210\u4f60\u7684\u5b9e\u4f53\u7c7b\u540d\u79f0",(0,r.jsx)("br",{}),"\n\u542f\u52a8\u5ba2\u6237\u7aef\uff0c\u751f\u6210\u5b9e\u4f53\uff0c\u5c31\u53ef\u5728 Minecraft \u4e2d\u6e32\u67d3 MMD \u6a21\u578b"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const i={},d=r.createContext(i);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);