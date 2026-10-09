# ChatGPT Timeline Local v0.1.0 — Preview Release

这是一个面向 Microsoft Edge / Google Chrome 的非官方、本地运行的 ChatGPT 对话提问时间线扩展。

### 核心功能

- 右侧提问时间线：悬停预览，点击定位
- 提问目录及关键词搜索
- 长对话历史扫描、反向滚动适配、支持中止
- 会话切换隔离、索引重建、基础诊断
- 本地离线演示和自动化模拟 DOM 测试

### 安装方式

1. 下载本 Release 中的 **`ChatGPT_Timeline_Local_v0.1.0.zip`**，不要使用 GitHub 自动生成的 `Source code.zip` 作为安装说明中的文件名。
2. 解压，打开 Edge 的 `edge://extensions/` 或 Chrome 的 `chrome://extensions/`。
3. 开启开发者模式，选择“加载解压缩的扩展程序”。
4. 选择解压目录下的 **`chatgpt-timeline-local/extension`** 文件夹。
5. 刷新 ChatGPT 对话页面。

### 验证和已知限制

- 原始包的 `tests/results.json` 记录 **14/14 模拟 DOM 测试通过**（2026-10-02），尚未完成用户真实账户的浏览器实测。
- ChatGPT 的网页结构随时可能变化。虚拟列表、不同回答分支、长对话动态加载仍可能影响覆盖率和定位。
- 当前是 **Pre-release（测试版）**，不是 Chrome Web Store / Edge Add-ons 商店正式上架版本。
- 该项目独立开发，非 OpenAI 官方产品。

### 隐私

本版未包含账号密码、Cookie、API Key、网络外发代码；提问正文只保存在页面标签的运行内存中。建议使用虚拟/非敏感对话测试兼容性。
