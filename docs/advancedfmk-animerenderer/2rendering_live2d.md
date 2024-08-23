# 渲染 Live2D 模型
## 渲染示例
- 可在 [Github](https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mixin/TestMixin.java) 找到示例
## 使用
编写一个注入 GameRenderer 的 mixin (下列代码使用「官方反混淆表」编写)
```java title="GameRendererMixin"
@Mixin(GameRenderer.class)
public class GameRendererMixin {
    // 如果你的模型位于 xxx/yyy/zzz.model3.json, 传入的参数必须是 zzz, xxx/yyy/
    @Unique
    private static final Live2DModel model = new Live2DModel(..., ...);
    @Inject(at = @At("RETURN"), method = "render")
    public void render(DeltaTracker deltaTracker, boolean renderLevel, CallbackInfo ci) {
        // 更新模型, 传入窗口大小参数
        model.update(Minecraft.getInstance().getWindow().getWidth(), Minecraft.getInstance().getWindow().getHeight());
    }
}

```