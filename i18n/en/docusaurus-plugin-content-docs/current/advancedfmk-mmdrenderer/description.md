# New MMD renderer in Minecraft
## Similarities and differences between [KAIMyEntity](https://github.com/asuka-mio/KAIMyEntity)

- advancedfmk-mmdrenderer is like KAIMyEntity, uses the [Saba MMD Loader](https://github.com/benikabocha/saba) as the underlying layer for loading the MMD model
- advancedfmk-mmdrenderer provides an interface to write directly to Minecraft's unique buffers, transferring data via ByteBuffer, and KAIMyEntity directly manipulates OpenGL buffers (including VAO, VBO and EBO), resulting in incompatibility with shaders.