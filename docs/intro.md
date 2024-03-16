---
sidebar_position: 1
---

# 万物之始

在你的 Fabric 项目中导入 **Advanced Framework**.

## 配置 Gradle 构建脚本

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

### 依赖需求

- JDK 17
- 在 Linux 上: 
  - [advancedfmk-mmdrenderer (MMD 渲染器)](https://github.com/PrimogemStudio/Advanced-Framework/mmdrenderer) 模块需要 glibc 3.4.31 或以上版本 (Debian 系发行版可能不包含此 glibc 版本, 需要手动升级)

### 模块结构
- [advancedfmk-uicompositor (UI 组合器)](https://github.com/PrimogemStudio/Advanced-Framework/uicompositor)
- [advancedfmk-mmdrenderer (MMD 渲染器)](https://github.com/PrimogemStudio/Advanced-Framework/mmdrenderer)
  - [advancedfmk-commonutils (工具包, 目前只包含 lwjgl-tinyfd 的封装函数)](https://github.com/PrimogemStudio/Advanced-Framework/commonutils)