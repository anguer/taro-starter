import { defineConfig, type UserConfigExport } from '@tarojs/cli';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack';
import devConfig from './dev';
import prodConfig from './prod';

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, { command, mode }) => {
  const platform = process.env.TARO_ENV;
  console.log('#config:', command, mode, platform);
  const baseConfig: UserConfigExport = {
    projectName: 'taro-starter',
    date: '2024-3-9',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2,
    },
    sourceRoot: 'src',
    outputRoot: `dist/${mode}/${platform}`,
    plugins: [],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {},
    },
    framework: 'react',
    compiler: 'webpack5',
    cache: {
      // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
      enable: false,
    },
    alias: {
      // '@/components': path.resolve(__dirname, '..', 'src/components'),
    },
    mini: {
      postcss: {
        // 尺寸单位转换，默认配置请参考：https://docs.taro.zone/docs/size#%E9%85%8D%E7%BD%AE
        pxtransform: {
          enable: true,
          config: {},
        },
        url: {
          enable: true,
          config: {
            // 设定转换尺寸上限
            limit: 1024,
          },
        },
        cssModules: {
          // 默认为 false，如需使用 css modules 功能，则设为 true
          enable: false,
          config: {
            // 转换模式，取值为 global/module
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);

        chain.merge({
          plugin: {
            install: {
              plugin: UnifiedWebpackPluginV5,
              args: [
                {
                  appType: 'taro',
                },
              ],
            },
          },
        });
      },
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css',
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        cssModules: {
          // 默认为 false，如需使用 css modules 功能，则设为 true
          enable: false,
          config: {
            // 转换模式，取值为 global/module
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
      },
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          // 默认为 false，如需使用 css modules 功能，则设为 true
          enable: false,
        },
      },
    },
  };
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig);
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig);
});
