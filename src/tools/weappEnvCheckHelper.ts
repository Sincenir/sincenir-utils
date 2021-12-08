import { isWx } from './wxEnvCheckHelper'
import { checkMobile, checkVersion } from './_handle'

const ua = window.navigator.userAgent.toLowerCase()

/**
 * @description： 判断是否是小程序环境
 *                安卓端可以保证准确， IOS端建议采取 WeixinJSBridgeReady 回调的方式判断小程序
 *                具体见微信小程序开放文档 web-view
 * 
 *                注： 已知 华为 mate7 安卓4.4.4 不支持 window.__wxjs_environment
 * @returns boolean
*/
export function isWxapp() {
  if (isWx()) {
    // Android
    if (/miniprogram/i.test(ua)) {
      return true
    }

    // IOS兼容 -> getEnv内部使用这种方式做的判断
    if (window.__wxjs_environment === 'miniprogram') {
      return true
    }
  }

  return false
}

/**
 * @description: 小程序判断是否是企业微信环境
*/
export const isWeappQywx = () => {
  let isQy = false
  // eslint-disable-next-line no-undef
  wx.getSystemInfo({
    success(res) {
      if (res.environment === 'wxwork') {
        isQy = true
      }
      // 判断是否是企业微信
      // console.log(res.environment)
    },
    fail(err) {
      console.log(err)
    }
  })
  return isQy
}



/**
 * @description： 传入 systemInfo.model(手机信息) 返回是否是该型号的手机
*/
export const isIphone = checkMobile('Iphone')
export const isXiaoMi = checkMobile('Mi')
export const isHuawei = checkMobile('Huawei')


/**
 * @description: 当前版本 type(> < =) 输入版本
 * @param currentVersion: string 当前版本号
 * @param version: sting 对标的版本
 * @param type: string 判断类型 > | < | =
 * @returns boolean 是否符合版本
*/
function checkWXVersion(currentVersion, version, type = '=') {
  switch (type) {
  case '>':
    return checkVersion(currentVersion.split('.'), version.split('.'), type)
  case '<':
    return checkVersion(currentVersion.split('.'), version.split('.'), type)
  case '=':
    return Number(currentVersion.split('.').join('')) === Number(version.split('.').join(''))
  default:
    console.error('请检测微信版本检测传入类型是否正确！')
    return false
  }
}

export default {
  isWxapp,
  isWeappQywx,
  isIphone,
  isXiaoMi,
  isHuawei,
  checkWXVersion
}
