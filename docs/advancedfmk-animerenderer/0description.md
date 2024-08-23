# Minecraft MMD / Live2D 渲染器
## Minecraft 的新 MMD 渲染器
### 与 [KAIMyEntity](https://github.com/asuka-mio/KAIMyEntity) 的异同

- advancedfmk-mmdrenderer 和 KAIMyEntity 一样, 都使用了 [Saba MMD 加载器](https://github.com/benikabocha/saba) 作为加载 MMD 模型的底层
- advancedfmk-mmdrenderer 提供了直接向 Minecraft 独有缓冲区写入的接口, 通过原始指针传输数据, KAIMyEntity 直接操作了 OpenGL 缓冲区 (包括 VAO, VBO 和 EBO), 导致了与光影 (着色器管线) 不兼容

## Minecraft 的 Live2D 渲染器

- 借用了官方 SDK 中的渲染器和着色器管线, 并兼容了 Minecraft 的 RenderTarget 离屏渲染技术