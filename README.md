# PureBundle
React Native模板项目，Android为主，包含路由，摄像头权限，地理权限，通信录权限等

**Support:react-native 0.46.1   react 16.0.0**


## 功能说明
- **路由**
使用react-navigation，在app.js中管理，包含公用方法reset（一般用于前置操作如欢迎，登录等），替换操作ReplaceCurrentScreen和后退到某一页面BcakToCurrentScreen
- **相册与摄像头与二维码**
使用react-native-image-crop-picker和ac-qrcode，前者为调用摄像头拍照，通过相册获取，裁剪和处理图片，后者为二维码组件，都引用了react-native-camera
- **地理位置**
使用react-native-baidu-map，需要获得key，在项目中替换
- **通讯录**
使用react-native-contacts，根据设置的权限可方便地获取和写入甚至删除通讯录信息
- **图标**
使用图标库react-native-vector-icons，可在网站根据关键字搜索想要的图标

## 运行
### Step One

```
npm install
```
### Step Two

```
react-native link
```
### Step Three(如果没有百度key)

```
react-native unlink react-native-baidu-map
```
### Run

```
reac-native run-android
```
## Contributing

PRs and issues are welcome
## License

MIT License
