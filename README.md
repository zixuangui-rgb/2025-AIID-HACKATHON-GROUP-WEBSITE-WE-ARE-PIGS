# We Are Pigs 2 - AIID Hackathon 2025 Team Showcase

一个为AIID Hackathon 2025创建的团队展示网站，展现团队成员、项目成果和AI辅助开发理念。这是一个精心设计的静态网站，采用现代化的交互设计和响应式布局。

## 🚀 项目概述

这是一个纯静态的HTML/CSS/JavaScript网站，展示了"We Are Pigs"团队的四位成员及其创新项目。网站采用简洁优雅的设计，提供流畅的用户体验和丰富的交互效果。

### ✨ 核心特性

- **👥 团队展示**: 四位成员的个人介绍和项目卡片
- **🎯 交互设计**: 悬停显示操作提示，点击跳转项目页面
- **📱 响应式布局**: 完美适配桌面、平板和移动设备
- **📚 教程系统**: "Build Like a Human"开发哲学指南
- **💬 沟通页面**: 项目推广和用户吸引信息
- **🎨 现代UI**: 毛玻璃效果、渐变背景和流畅动画

## 👥 团队成员

### Zixuan Gui - Music Life
熊猫猪音乐爱好者，全栈软件开发热衷者
- **项目**: Music Life - AR眼镜音乐应用
- **特色**: 为AR眼镜打造的智能音乐体验

### Chileen Zhao - SK-Ibos
花样滑冰爱好者，连接粉丝与选手的桥梁
- **项目**: SK-Ibos - 花滑粉丝社区平台
- **特色**: 社交媒体和TikTok内容创作

### Yongqi Yan - WrongOS
AI学习工具探索者，将研究转化为MVP实践者
- **项目**: WrongOS - AI学习辅助工具
- **特色**: Obsidian笔记、快速编程和技术投资深度研究

### Grace Duong - BUTDA
积极向上的旅行爱好者，健康生活倡导者
- **项目**: BUTDA - 每日新闻摘要助手
- **特色**: 每天为你带来最新新闻摘要

## 🏗️ 网站结构

### 主要页面

- **🏠 首页 (index.html)**: 团队介绍和成员卡片展示
- **📚 教程 (Tutorial.html)**: "Build Like a Human"开发哲学
- **💬 沟通 (Communication.html)**: 项目推广状态
- **🎵 Music Life (Music Life.html)**: Zixuan的项目详情
- **📰 BUTDA (BUTDA.html)**: Grace的项目详情

### 页面功能

#### 首页特性
- 全屏背景图片，完美覆盖
- 四个信息卡片，分布四角
- 悬停时显示"View the Project"提示
- 点击跳转到对应项目页面或外部链接
- 底部双按钮：Tutorial和Communication

#### 教程页面
- 9个核心开发原则卡片
- 模态窗口展示详细内容
- Tailwind CSS实现的现代化设计
- 丰富的代码示例和实践建议
- 响应式布局，完美适配移动端

#### 沟通页面
- 简洁优雅的紫色渐变背景
- 白色卡片展示项目状态
- 返回首页的便捷导航

## 🛠️ 技术栈

### 前端技术
- **HTML5**: 语义化标记
- **CSS3**: 现代样式特性
  - Flexbox和Grid布局
  - CSS动画和过渡效果
  - 媒体查询实现响应式设计
  - 毛玻璃效果 (backdrop-filter)
- **JavaScript (ES6)**: 原生JavaScript
  - DOM操作
  - 事件监听和处理
  - 页面跳转逻辑

### 外部资源（仅Tutorial页面）
- **Tailwind CSS**: CDN引入的实用工具类
- **Font Awesome 6.4.0**: 图标库
- **Google Fonts**: Pacifico字体

## 🚦 快速开始

### 本地运行

1. **克隆或下载项目**
   ```bash
   cd "we are pigs 2"
   ```

2. **直接打开首页**
   - 双击 `index.html` 在浏览器中打开
   - 或使用本地服务器（推荐）:
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx http-server
   ```

3. **访问网站**
   - 直接打开: 文件路径
   - 本地服务器: `http://localhost:8000`

### 文件要求

确保以下文件在同一目录：
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ Tutorial.html
- ✅ Communication.html
- ✅ pig_logo.png
- ✅ 背景图片.png
- ✅ Music Life.html (可选)
- ✅ BUTDA.html (可选)

## 📱 响应式设计

### 断点设置
- **桌面**: > 1200px - 完整功能和大尺寸布局
- **平板**: ≤ 1200px - 调整字体和间距
- **手机**: ≤ 768px - 优化触摸交互
- **小屏手机**: ≤ 480px - 按钮垂直排列

### 适配特性
- 流体网格布局，自适应容器宽度
- 灵活的文字大小，保证可读性
- 触摸友好的交互区域（按钮、卡片）
- 垂直/水平布局自动切换

## 🎨 设计系统

### 色彩方案
- **主色调**: 
  - 绿色按钮: `#4CAF50`
  - 项目标签: `#e91e63` (粉红)
  - 悬停遮罩: `rgba(0, 0, 0, 0.8)`
- **背景**: 半透明白色 `rgba(255, 255, 255, 0.85)`
- **渐变**: 教程页使用紫色渐变
- **Communication页**: 紫色渐变 `#667eea` 到 `#764ba2`

### 视觉效果
- **毛玻璃**: `backdrop-filter: blur(3px)`
- **阴影**: 多层次阴影营造深度
- **圆角**: 卡片10px，按钮25px
- **动画**: 0.3s ease过渡效果

### 字体系统
- **标题**: Segoe UI, 字重800
- **正文**: Arial, Segoe UI
- **特殊**: Pacifico (Tutorial页面logo)

## 🔗 导航逻辑

### 点击跳转配置

| 元素 | 目标 | 打开方式 |
|------|------|----------|
| Zixuan Gui卡片 | Music Life.html | 新标签页 |
| Grace Duong卡片 | BUTDA.html | 新标签页 |
| Chileen Zhao卡片 | SK-Ibos外部链接 | 新标签页 |
| Yongqi Yan卡片 | WrongOS外部链接 | 新标签页 |
| Tutorial按钮 | Tutorial.html | 当前窗口 |
| Communication按钮 | Communication.html | 当前窗口 |

### 交互体验
- **悬停效果**: 卡片上移+缩放，显示操作提示
- **点击反馈**: 按钮按下效果
- **模态窗口**: Tutorial页面点击卡片展开详情
- **返回导航**: Communication页面返回首页

## 🚀 部署指南

### GitHub Pages部署

1. **推送到GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **启用GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source: 选择 "main" 分支
   - 目录: 选择 "/ (root)"
   - 保存并等待部署

3. **访问网站**
   - URL格式: `https://[username].github.io/we-are-pigs-2/`

### 其他部署选项

**Netlify**
- 拖拽文件夹到Netlify Drop
- 自动部署，获得免费HTTPS域名

**Vercel**
- 连接GitHub仓库
- 自动检测静态网站配置
- 一键部署

**本地服务器**
- 适合局域网演示
- 使用Python或Node.js启动服务器

## 📝 内容更新指南

### 添加新成员

1. **HTML结构** (index.html):
```html
<div class="info-box [位置类]" id="[成员id]">
    <h2>[姓名] <span class="project-name">[项目名]</span></h2>
    <p>[介绍第1行]</p>
    <p>[介绍第2行]</p>
    <p>[介绍第3行]</p>
</div>
```

2. **CSS定位** (styles.css):
- 使用现有位置类或创建新的

3. **JavaScript事件** (script.js):
```javascript
const memberBox = document.getElementById('[成员id]');
if (memberBox) {
    memberBox.addEventListener('click', function() {
        window.open('[目标URL]', '_blank');
    });
}
```

### 修改教程内容

Tutorial.html采用模态窗口系统：
- 每个卡片对应一个模态窗口
- 通过 `data-modal="modalX"` 关联
- 模态内容使用内联样式的div元素
- 支持富文本、代码示例和列表

### 更新样式

主要样式文件: `styles.css`
- 全局样式和重置
- 组件样式（.info-box, .button-container等）
- 响应式媒体查询（3个断点）
- 悬停和动画效果

## 🧪 测试清单

### 功能测试
- ✅ 所有成员卡片点击跳转正常
- ✅ Tutorial按钮跳转到教程页面
- ✅ Communication按钮跳转到沟通页面
- ✅ 教程页面模态窗口正常打开/关闭
- ✅ Communication页面返回按钮工作正常

### 视觉测试
- ✅ 背景图片正确显示
- ✅ Logo图片加载完整
- ✅ 悬停效果流畅
- ✅ 文字清晰可读

### 响应式测试
- ✅ 桌面布局完整
- ✅ 平板尺寸适配良好
- ✅ 手机竖屏可用
- ✅ 小屏幕按钮垂直排列

### 浏览器兼容性
- ✅ Chrome/Edge (推荐)
- ✅ Firefox
- ✅ Safari
- ⚠️ IE11及以下不支持

## 📚 教程内容概览

"Build Like a Human"哲学包含9个核心原则：

1. **🧭 Start With One Honest Sentence**: 用一句话定义项目核心
2. **⚡️ Make It Move**: 让东西动起来，哪怕很丑
3. **🧹 Keep the Data Messy**: 数据可以乱，直到它重要
4. **💾 Save Just Enough**: 保存恰到好处，赢得信任
5. **🎓 Talk to Your Model**: 像学生一样与AI对话
6. **📱 Remember the Phone**: 为拇指设计，而非鼠标
7. **🎥 Show, Don't Insist**: 展示而非坚持
8. **🪛 Fix Only What Matters**: 只修复重要的东西
9. **🌐 Build a Site That Shows**: 建一个展示的网站

## 🤝 贡献指南

欢迎为项目贡献！

### 贡献类型
- 🐛 Bug修复
- ✨ 新功能建议
- 📝 文档改进
- 🎨 UI/UX优化

### 提交流程
1. Fork项目
2. 创建功能分支
3. 提交改动
4. 发起Pull Request

## 📄 许可证

本项目采用MIT许可证开源。

## 🙏 致谢

- **AIID Hackathon 2025**: 活动组织者和参与者
- **团队成员**: Zixuan Gui, Chileen Zhao, Yongqi Yan, Grace Duong
- **开源社区**: Tailwind CSS, Font Awesome等工具的维护者

---

**用❤️构建 - We Are Pigs团队 @ AIID Hackathon 2025**

*追求进步而非完美 | Building with momentum over perfection*
