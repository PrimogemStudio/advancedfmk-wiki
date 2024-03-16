---
sidebar_position: 1
---

# The beginning of all

Import **Advanced Framework** in your Fabric project

## Configure Gradle build script

由于 Advanced Framework 的所有子模块都已经上传 Maven 中央仓库, 所以无需额外配置仓库地址
```groovy title="build.gradle"
ext.advancedfmk_version = '0.3.4'

dependencies {
  // ...
  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-uicompositor:$advancedfmk_version'
  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-mmdrenderer:$advancedfmk_version'
  // ...
}
```

### Dependencies

- JDK 17
- On Linux :
  - [advancedfmk-mmdrenderer (MMD Renderer)](https://github.com/PrimogemStudio/Advanced-Framework/mmdrenderer) 模块需要 glibc 3.4.31 或以上版本 (Debian 系发行版可能不包含此 glibc 版本, 需要手动升级)

### Module structure
- [advancedfmk-uicompositor (UI Compositor)](https://github.com/PrimogemStudio/Advanced-Framework/uicompositor)
- [advancedfmk-mmdrenderer (MMD Renderer)](https://github.com/PrimogemStudio/Advanced-Framework/mmdrenderer)
  - [advancedfmk-commonutils (Utilities, 目前只包含 lwjgl-tinyfd 的封装函数)](https://github.com/PrimogemStudio/Advanced-Framework/commonutils)