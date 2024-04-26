# 使用字体引擎
## 字体引擎示例
- 可在 [Github](https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mixin/TitleScreenFontEngineMixin.java) 找到示例
## 使用 (内置字体)
新建一个 Mixin 类  (下列代码使用官方反混淆表编写)
```java title="FontEngineToturialMixin.java"
@Mixin(TitleScreen.class) // 注入的位置，可以是任意一个 Screen 类
public class FontEngineToturialMixin {
    // 字体渲染缓冲区，用于暂存渲染结果
    @Unique
    private static final TextureTarget fontInternal = new TextureTarget(1, 1, true, Util.getPlatform() == Util.OS.OSX);
    // 组合字体定义
    @Unique
    private static final ComposedFont font = new ComposedFont();
    static {
        fontInternal.setClearColor(1f, 1f, 1f, 0f);
    }

    @Inject(at = @At("RETURN"), method = "render")
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick, CallbackInfo ci) {
        fontInternal.clear(Util.getPlatform() == Util.OS.OSX);
        // 设置缓存结果为窗口大小的 4 倍
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
        // 调用字体引擎，向顶点缓冲区 buff 写入字体顶点
        font.drawWrapText(buff, poseStack, "测试abcd？?!", 200, 200, 9, 25, 0xffffffff);
        // 启用混合，禁用顶点剔除 (防止顶点方向导致无法渲染)
        RenderSystem.enableBlend();
        RenderSystem.disableCull();
        BufferUploader.drawWithShader(buff.end());
        RenderSystem.enableCull();
        RenderSystem.disableBlend();
        // 使用 TEXT_BLUR 后处理 shader 为缓冲区结果添加抗锯齿效果并渲染至屏幕
        Shaders.INSTANCE.getTEXT_BLUR().setSamplerUniform("BaseLayer", fontInternal);
        Shaders.INSTANCE.getTEXT_BLUR().render(partialTick);
    }
}
```

或者直接使用 ```BufferManager``` 包装
```java title="FontEngineToturialMixin"
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
