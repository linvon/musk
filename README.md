# 花光马斯克财富模拟器 Demo

这是一个纯静态 Web demo，不需要服务器、不需要数据库、不需要构建步骤。

## 本地预览

直接打开：

```text
index.html
```

页面只依赖当前目录里的静态文件：

```text
index.html
styles.css
script.js
image-credits.html
assets/products/*.jpg
```

## 静态部署

把整个项目目录上传到任意静态托管平台即可，发布目录选择项目根目录。也可以直接上传 `musk-static-demo.zip` 解压后的内容。

推荐方式：

- GitHub Pages：把仓库上传到 GitHub，在 Pages 设置里选择 `Deploy from a branch`，目录选择仓库根目录。
- Netlify Drop：打开 Netlify Drop，把这个文件夹直接拖进去。
- Vercel：导入项目后保持默认静态项目设置，Build Command 留空，Output Directory 使用 `.`。
- Cloudflare Pages：Build command 留空，Build output directory 填 `.`。

## 注意

财富金额和商品价格都是演示数据。商品图片来自 Wikimedia Commons，来源见 `image-credits.html`。
