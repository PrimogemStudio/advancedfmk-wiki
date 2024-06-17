---
sidebar_position: 1
---

# The beginning of all

Import **Advanced Framework** in your Fabric project

## Configure Gradle build script

Since all the submodules of Advanced Framework have already been uploaded to the Maven Central repository, there is no need to configure additional repositories
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

### Dependencies

- JDK 21 +
- On Linux :
  - [advancedfmk-mmdrenderer (MMD Renderer)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/mmdrenderer) modules need glibc 3.4.31 or above (Debian  distributions may not contains this version of glibc, needs manual upgrade)

### Module structure
- [advancedfmk-uicompositor (UI Compositor)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/uicompositor)
- [advancedfmk-mmdrenderer (MMD Renderer)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/mmdrenderer)
- [advancedfmk-commonutils (Utilities, currently contains lwjgl-tinyfd wrapping functions)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/commonutils)
- [advancedfmk-fontengine (Font parser & renderer, already bound to uicompositor)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/fontengine)
- [advancedfmk-simulator (Implementation of round trip math models)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/simulator)
- [advancedfmk-binfiles (Implementation for reading & writing binary files)](https://github.com/PrimogemStudio/Advanced-Framework/tree/main/binfiles)
