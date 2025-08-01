import "cesium/Build/Cesium/Widgets/widgets.css";
import { Viewer, Cesium3DTileset, Resource } from "cesium";

window.CESIUM_BASE_URL = "/Cesium/";

const viewer = new Viewer("cesiumContainer");

const url =
  "http://localhost:9000/tileset/Productin_20/Production_20/tileset.json";
const resource = new Resource({
  url: url,
});

Cesium3DTileset.fromUrl(resource).then((tileset) => {
  viewer.scene.primitives.add(tileset);
  viewer.zoomTo(tileset);
});
