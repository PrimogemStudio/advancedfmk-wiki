# Werror 模式
和 「Linux 内核」一样，Advanced Framework 的所有模块都开启了 Werror<br/>
代码中出现任何编译期警告时都会被标记为错误<br/>

例如在 Kotlin 中的无意义 null 断言
![meaningless_null_assertion](./Werror_mode_1.png)
出现报错会使 PR 无法被合并