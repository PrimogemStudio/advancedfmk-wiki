# Use the font engine
## Font engine examples
- Example can be found on [Github](https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mixin/TitleScreenFontEngineMixin.java)
## Use (Internal font)
Create a mixin class  (The following code is written using the official mappings)
```kotlin title="FontEngineToturialMixin.java"
@Mixin(TitleScreen.class) // The location of the injection, which can be any Screen class
public class FontEngineToturialMixin {
    // Font render buffer, which is used to stage render results
    @Unique
    private static final TextureTarget fontInternal = new TextureTarget(1, 1, true, Util.getPlatform() == Util.OS.OSX);
    // Compose font definition
    @Unique
    private static final ComposedFont font = new ComposedFont();
    static {
        fontInternal.setClearColor(1f, 1f, 1f, 0f);
    }

    @Inject(at = @At("RETURN"), method = "render")
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick, CallbackInfo ci) {
        fontInternal.clear(Util.getPlatform() == Util.OS.OSX);
        // Set the buffer result to 4 times the window size
        fontInternal.resize(Minecraft.getInstance().getWindow().getWidth() * 4, Minecraft.getInstance().getWindow().getHeight() * 4, Util.getPlatform() == Util.OS.OSX);
        fontInternal.bindWrite(true);
        RenderSystem.setShader(GameRenderer::getPositionColorShader);
        var buff = Tesselator.getInstance().getBuilder();
        var scale = (float) Minecraft.getInstance().getWindow().getGuiScale();
        var poseStack = graphics.pose();
        poseStack.pushPose();
        poseStack.scale(1 / scale, 1 / scale, 1);
        buff.begin(VertexFormat.Mode.TRIANGLES, DefaultVertexFormat.POSITION_COLOR);
        poseStack.popPose();
        // Invoke the font engine to write font vertices to the vertex buffer buff
        font.drawWrapText(buff, poseStack, "测试abcd？?!", 200, 200, 9, 25, 0xffffffff);
        // Enables blending, disables culling (prevents vertex orientation from rendering)
        RenderSystem.enableBlend();
        RenderSystem.disableCull();
        BufferUploader.drawWithShader(buff.end());
        RenderSystem.enableCull();
        RenderSystem.disableBlend();
        // Use the TEXT_BLUR post-processing shader to add anti-aliasing to the buffer result and render it to the screen
        Shaders.INSTANCE.getTEXT_BLUR().setSamplerUniform("BaseLayer", fontInternal);
        Shaders.INSTANCE.getTEXT_BLUR().render(partialTick);
    }
}
```

Or directly use the ```BufferManager``` wrapper

```kotlin title="FontEngineToturialMixin.java"
@Mixin(TitleScreen.class)
public class TitleScreenFontEngineMixin {
    @Unique
    private static final ComposedFont font = new ComposedFont();

    @Inject(at = @At("RETURN"), method = "render")
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick, CallbackInfo ci) {
        BufferManager.INSTANCE.updateBufferColor(0xffffffff); // 设置缓冲区颜色，防止颜色混合
        BufferManager.INSTANCE.renderText((vertexConsumer, poseStack) -> {
            font.drawWrapText(vertexConsumer, poseStack, "测试abcd？?!", 200, 200, 9, 25, 0xffffffff);
            return null;
        }, graphics, partialTick);
    }
}
```
