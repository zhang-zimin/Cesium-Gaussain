# Cesium Tileset Viewer

一个基于 Vite 和 Cesium 的最简 3D Tileset 浏览器示例项目。

## 依赖

- [CesiumJS](https://cesium.com/platform/cesiumjs/)
- [Vite](https://vitejs.dev/)

## 使用方法

1. 安装依赖

   ```bash
   npm install
   ```

2. 启动开发服务器

   ```bash
   npm run dev
   ```

3. 在浏览器中访问 [http://localhost:5173](http://localhost:5173)

## 3D Tileset 配置

默认加载的 tileset URL 为：

```
http://localhost:9000/tileset/Productin_20/Production_20/tileset.json
```

请确保本地 9000 端口有 tileset 服务可用。

## 使用 Dev Container（可选）

如果你使用 VS Code 并安装了 Docker，可以通过 Dev Container 在隔离的开发环境中运行此项目。

1. 先决条件

   - 已安装 Docker Desktop
   - 在 VS Code 中安装 "Dev Containers"（或 Remote - Containers）扩展

2. 打开项目为 Dev Container

   - 在 VS Code 中打开命令面板（Ctrl+Shift+P），选择 "Dev Containers: Reopen in Container"（或类似命令）。
   - 第一次打开时会运行 `postCreateCommand`（本项目会自动执行 `npm install`）。
   - 容器启动后，`postStartCommand` 会以 `npm run dev -- --host 0.0.0.0` 启动开发服务器，使其在容器内对外可访问。

3. 端口与宿主映射

   - Dev Container 已转发端口 5173（Vite 开发服务器）和 9000（用于本地 3D tiles 服务）。
   - 为了让容器访问运行在宿主机（Windows）上的 tileset 服务，Dev Container 配置加入了 `--add-host=host.docker.internal:host-gateway`，你可以在容器内使用 `http://host.docker.internal:9000/tileset/...` 访问宿主机上的 9000 端口。

4. 常见操作

   - 在宿主机启动 tileset 服务（保持在 9000 端口），然后在容器内启动项目（通常已由 `postStartCommand` 自动运行）。
   - 在浏览器中访问：
     - Vite: http://localhost:5173
     - 如果从宿主机访问 tileset（在容器内请求宿主机服务），请确保 tileset URL 使用 `host.docker.internal`，例如：
       `http://host.docker.internal:9000/tileset/Productin_20/Production_20/tileset.json`


