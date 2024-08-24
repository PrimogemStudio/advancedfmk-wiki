# Render Live2D models
## Rendering samples
- Examples can be found on [Github](https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mixin/TestMixin.java)
## Using
Write a mixin which injects into the GameRenderer (The following code is written using the official mappings)
```kotlin title="GameRendererMixin"
@Mixin(GameRenderer.class)
public class GameRendererMixin {
    // If your model is located at xxx/yyy/zzz.model3.json, the args which is passed must be zzz, xxx/yyy/
    @Unique
    private static final Live2DModel model = new Live2DModel(..., ...);
    @Inject(at = @At("RETURN"), method = "render")
    public void render(DeltaTracker deltaTracker, boolean renderLevel, CallbackInfo ci) {
        // Update the model and pass the window size arg
        model.update(Minecraft.getInstance().getWindow().getWidth(), Minecraft.getInstance().getWindow().getHeight());
    }
}

```