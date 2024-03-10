// 全局配置，参考：https://docs.taro.zone/docs/app-config
export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/me/index',
  ],
  // 设置小程序的状态栏、导航条、标题、窗口背景色，默认配置参考：https://docs.taro.zone/docs/app-config#window
  window: {
    // 导航栏背景颜色，如 #000000
    navigationBarBackgroundColor: '#fff',
    // 导航栏标题颜色，仅支持 black / white
    navigationBarTextStyle: 'black',
    // 导航栏标题文字内容
    navigationBarTitleText: 'WeChat',
    // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
    navigationStyle: 'default',
    // 窗口的背景色
    backgroundColor: '#ffffff',
    // 下拉 loading 的样式，仅支持 dark / light
    backgroundTextStyle: 'light',
    // 顶部窗口的背景色，仅 iOS 支持
    backgroundColorTop: '#ffffff',
    // 底部窗口的背景色，仅 iOS 支持
    backgroundColorBottom: '#ffffff',
    // 是否开启当前页面的下拉刷新
    enablePullDownRefresh: false,
    // 页面上拉触底事件触发时距页面底部距离，单位为 px
    onReachBottomDistance: 50,
    // 屏幕旋转设置，支持 auto / portrait / landscape
    pageOrientation: 'portrait',
  },
  // 配置Tab栏的表现，参考：https://docs.taro.zone/docs/app-config#tabbar
  tabBar: {
    // tab 上的文字默认颜色，仅支持十六进制颜色
    color: '',
    // tab 上的文字选中时的颜色，仅支持十六进制颜色
    selectedColor: '',
    // tab 的背景色，仅支持十六进制颜色
    backgroundColor: '',
    // tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
    list: [
      {
        // 页面路径，必须在 pages 中先定义
        pagePath: 'pages/home/index',
        // tab 上按钮文字
        text: 'Home',
        // 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
        // 当 position 为 top 时，不显示 icon。
        iconPath: 'assets/images/tabs/home_fill.png',
        // 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
        // 当 position 为 top 时，不显示 icon。
        selectedIconPath: 'assets/images/tabs/home_fill.png',
      },
      {
        pagePath: 'pages/me/index',
        text: 'Me',
        iconPath: 'assets/images/tabs/me_fill.png',
        selectedIconPath: 'assets/images/tabs/me_fill.png',
      }
    ],
    // tabBar 的位置，仅支持 bottom / top
    position: 'bottom',
    // 自定义 tabBar
    custom: false,
  },
  // 启用分包加载时，声明项目分包结构，参考：https://docs.taro.zone/docs/app-config#subpackages
  subPackages: [],
  // 小程序各类网络请求的超时时间，单位均为毫秒
  networkTimeout: {
    // request: 60000,
    // connectSocket: 60000,
    // uploadFile: 60000,
    // downloadFile: 60000,
  },
  // 小程序是否开启 debug 模式，默认关闭
  debug: false,
  // 小程序接口权限相关设置
  permission: {},
})
