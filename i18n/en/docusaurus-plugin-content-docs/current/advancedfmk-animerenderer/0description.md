# MMD / Live2D renderer for Minecraft
## New MMD renderer in Minecraft
### Similarities and differences between [KAIMyEntity](https://github.com/asuka-mio/KAIMyEntity)

- advancedfmk-mmdrenderer is like KAIMyEntity, uses the [Saba MMD Loader](https://github.com/benikabocha/saba) as the underlying layer for loading the MMD model
- advancedfmk-mmdrenderer provides an interface to write directly to Minecraft's unique buffers, transferring data via raw pointers, and KAIMyEntity directly manipulates OpenGL buffers (including VAO, VBO and EBO), resulting in incompatibility with shaders.

## Live2D renderer in Minecraft 

- Uses the renderer and shader pipelines in the official SDK, keeps the compatibility with the RenderTarget in Minecraft