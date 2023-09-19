# SelfChart

- 一个前后端分离的实时聊天 App。前端技术基于 ReactNative，后端技术基于 SSM，数据库技术基于 MySQL

# 安装

## 注意事项

- 由于 ReactNative 的配置步骤较为麻烦，这里不展开，可自行去 ReactNative 官网查阅。需要注意的是，我这里使用的是 ReactNative0.64.4，按照官网教程安装时，请严格按照 64 版本的安装步骤进行。安装对应的 Android Studio、SDK、JDK、AVD 等
- NodeJS 版本 >= 16.17.1，16 是最稳定的一个版本，建议大于此版本

## 运行步骤

- 使用 yarn

- ```git
  yarn
  ```

- npm

- ```git
  npm i
  ```

- 这里推荐使用 yarn，最好全局装一个，yarn 会生成锁文件，而 npm 不会，这样再装包的时候，会只装当前项目中使用的包的版本，不会出现包不兼容的问题

- ```git
  yarn start
  ```

- 即可运行成功

- 需要注意的是，一定要配置好环境，RN 的配置步骤相当麻烦，一定要根据官网文档，一步一步来，且相应版本要对得上
