"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[934],{436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(4848),i=t(8453);const a={},d="Creating MMD render wrapper",c={id:"advancedfmk-mmdrenderer/1creating_mmdentity",title:"Creating MMD render wrapper",description:"Examples",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advancedfmk-mmdrenderer/1creating_mmdentity.md",sourceDirName:"advancedfmk-mmdrenderer",slug:"/advancedfmk-mmdrenderer/1creating_mmdentity",permalink:"/advancedfmk-wiki/en/docs/advancedfmk-mmdrenderer/1creating_mmdentity",draft:!1,unlisted:!1,editUrl:"https://github.com/PrimogemStudio/advancedfmk-wiki/blob/main/docs/advancedfmk-mmdrenderer/1creating_mmdentity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"New MMD renderer in Minecraft",permalink:"/advancedfmk-wiki/en/docs/advancedfmk-mmdrenderer/0description"},next:{title:"Advanced Framework - \u5b57\u4f53\u5f15\u64ce",permalink:"/advancedfmk-wiki/en/docs/category/advanced-framework---\u5b57\u4f53\u5f15\u64ce"}},o={},s=[{value:"Examples",id:"examples",level:2},{value:"Using",id:"using",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"creating-mmd-render-wrapper",children:"Creating MMD render wrapper"}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Examples can be found on ",(0,r.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mmd/entity/TestEntityRenderer.kt",children:"Github"})]}),"\n",(0,r.jsxs)(n.li,{children:["Since this wiki only provides a way to write an entity renderer, the entity creation process can be found on the ",(0,r.jsx)(n.a,{href:"https://fabricmc.net/wiki/zh_cn:tutorial:entity",children:"Fabric Wiki"})," (tips\uff1ayou don't need to create entity model)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,r.jsx)(n.p,{children:"Open entity renderer class (The following code is written using the official mappings and Kotlin)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="EntityRenderer.kt"',children:'class TestEntityRenderer(context: EntityRendererProvider.Context) : EntityRenderer<TestEntity>(context) {\n    val wrap = EntityRenderWrapper(PMXModel(File(...))) // Pass MMD model path here\n    override fun getTextureLocation(entity: TestEntity): ResourceLocation {\n        return ResourceLocation("")\n    }\n\n    override fun render(\n        entity: TestEntity,\n        entityYaw: Float,\n        partialTick: Float,\n        poseStack: PoseStack,\n        buffer: MultiBufferSource,\n        packedLight: Int\n    ) {\n        wrap.render(entityYaw, poseStack, buffer, packedLight)\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You'll need to replace ",(0,r.jsx)(n.code,{children:"TestEntity"})," with your entity class name",(0,r.jsx)("br",{}),"\nLaunch the client and spawn the entity, now you can render MMD models in Minecraft"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(6540);const i={},a=r.createContext(i);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);