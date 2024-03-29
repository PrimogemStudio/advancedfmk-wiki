# 创建 MMD 渲染器包装
## 渲染器包装示例
- 可在 [Github](https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mmd/entity/TestEntityRenderer.kt) 找到示例
- 由于本 Wiki 只提供实体渲染器的编写方法，实体创建过程可在 [Fabric Wiki](https://fabricmc.net/wiki/zh_cn:tutorial:entity) 上找到 (注：不需要创建实体模型)
## 使用
打开实体渲染器类 (下列代码使用官方反混淆表和 Kotlin 编写)
```kotlin title="EntityRenderer.kt"
class TestEntityRenderer(context: EntityRendererProvider.Context) : EntityRenderer<TestEntity>(context) {
    val wrap = EntityRenderWrapper(PMXModel(File(...))) // 在这里传入模型路径
    override fun getTextureLocation(entity: TestEntity): ResourceLocation {
        return ResourceLocation("")
    }

    override fun render(
        entity: TestEntity,
        entityYaw: Float,
        partialTick: Float,
        poseStack: PoseStack,
        buffer: MultiBufferSource,
        packedLight: Int
    ) {
        wrap.render(entityYaw, poseStack, buffer, packedLight)
    }
}
```
需要将 ```TestEntity``` 换成你的实体类名称<br/>
启动客户端，生成实体，就可在 Minecraft 中渲染 MMD 模型