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
  - [advancedfmk-mmdrenderer (MMD Renderer)](https://github.com/PrimogemStudio/Advanced-Framework/mmdrenderer) modules need glibc 3.4.31 or above (Debian  distributions may not contains this version of glibc, needs manual upgrade)

### Module structure
- [advancedfmk-uicompositor (UI Compositor)](https://github.com/PrimogemStudio/Advanced-Framework/uicompositor)
- [advancedfmk-mmdrenderer (MMD Renderer)](https://github.com/PrimogemStudio/Advanced-Framework/mmdrenderer)
  - [advancedfmk-commonutils (Utilities, currently contains lwjgl-tinyfd wrapping functions)](https://github.com/PrimogemStudio/Advanced-Framework/commonutils)