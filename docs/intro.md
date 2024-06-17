---
sidebar_position: 1
---

# 万物之始

在你的 Fabric 项目中导入 **Advanced Framework**.

## 配置 Gradle 构建脚本

由于 Advanced Framework 的所有子模块都已经上传 Maven 中央仓库, 所以无需额外配置仓库
```groovy title="build.gradle"
ext.advancedfmk_version = '1.0.0'

dependencies {
  // ...
  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-uicompositor:$advancedfmk_version'
  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-mmdrenderer:$advancedfmk_version'
  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-fontengine:$advancedfmk_version'
  modImplementation 'io.primogemstudio.advancedfmk:advancedfmk-simulator:$advancedfmk_version'
  // ...
}
```

### 依赖需求

- JDK 21 +
- 在 Linux 上: 
  - [advancedfmk-mmdrenderer (MMD 渲染器)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/mmdrenderer) 模块需要 glibc 3.4.31 或以上版本 (Debian 系发行版可能不包含此 glibc 版本, 需要手动升级)

### 模块结构
- [advancedfmk-uicompositor (UI 组合器)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/uicompositor)
- [advancedfmk-mmdrenderer (MMD 渲染器)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/mmdrenderer)
- [advancedfmk-commonutils (工具包, 包含对 lwjgl 的封装)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/commonutils)
- [advancedfmk-fontengine (字体解析 & 渲染器, 已接入 UI 框架)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/fontengine)
- [advancedfmk-simulator (「回合制」数学模型的实现)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/simulator)
- [advancedfmk-binfiles (二进制文件写入和读取实现)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/binfiles)
