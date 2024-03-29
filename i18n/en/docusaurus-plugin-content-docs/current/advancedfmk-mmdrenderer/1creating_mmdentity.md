# Creating MMD render wrapper
## Examples
- Examples can be found on [Github](https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mmd/entity/TestEntityRenderer.kt)
- Since this wiki only provides a way to write an entity renderer, the entity creation process can be found on the [Fabric Wiki](https://fabricmc.net/wiki/zh_cn:tutorial:entity) (tips：you don't need to create entity model)
## Using
Open entity renderer class (The following code is written using the official mappings and Kotlin)
```kotlin title="EntityRenderer.kt"
class TestEntityRenderer(context: EntityRendererProvider.Context) : EntityRenderer<TestEntity>(context) {
    val wrap = EntityRenderWrapper(PMXModel(File(...))) // Pass MMD model path here
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
You'll need to replace ```TestEntity``` with your entity class name<br/>
Launch the client and spawn the entity, now you can render MMD models in Minecraft