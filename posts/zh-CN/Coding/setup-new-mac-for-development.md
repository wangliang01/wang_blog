---
title: 2024 年 macOS 开发环境配置指南
date: 2024-06-25T14:56:00.000Z
summary: 本文将指导你如何将一台新 Mac 配置成开发机器
---


## Web 开发环境

访问这些产品的官网，一路默认安装即可。如果遇到无法打开，可能需要在macOS的设置-隐私里允许未知来源应用。
- Node（自带NPM）
- VSCode
- Git
- Chrome（可选）

安装好 git 之后，需要配置一下用户名和邮箱。一般来说，和 GitHub 或其他托管服务同步即可。

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

关于更多的 Git 初次安装配置，可以参考这篇[官方文章](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)。

然后，生成ssh密钥，用于推送到版本管理仓库。将公钥添加到 GitHub 或其他托管平台即可。执行命令后，会输出公钥所在的目录。

```bash
ssh-keygen
```

## iOS 开发环境

小贴士：在 /User/<username>/ 下创建名为 Developer 的文件夹，可以获得独特的文件夹图标。推荐将项目放在这个文件夹并放在侧栏。

首先，在 App Store 下载 Xcode。

然后，手动安装 cocoapods。执行下图第一行命令以安装。（如果弹出 gem 版本不足的提示，按照提示的命令更新即可）

![Image](/image/post/114f6fdc-1175-40d7-8bec-56013eb2cad2_Untitled.png)

## Flutter 环境

首先，安装 Rosetta 环境。Flutter 需要它来运行在 Apple silicon 平台。

```shell
sudo softwareupdate --install-rosetta --agree-to-license
```

然后，下载 Flutter SDK。你只需要把它下载，解压到一个你能找到的地方即可。（官方推荐的路径为 ～/development/。当然，你也可以选择自己喜欢的位置。

最后，打开 ~/.zshenv 编辑环境变量，安装完成。

```bash
export PATH=$HOME/development/flutter/bin:$PATH
```

此外，你可以运行 flutter doctor 来检测安装环境。

```bash
flutter doctor
```

推荐在 VSCode 中安装官方出品的 Flutter 插件。
