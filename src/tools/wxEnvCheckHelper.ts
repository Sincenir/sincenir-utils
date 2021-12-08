const ua = window.navigator.userAgent.toLowerCase()

/**
 * @description： 判断是否在微信体系中
 * @returns boolean
 */
export function isWx() {
  if (/MicroMessenger/i.test(ua)) {
    return true
  } else {
    return false
  }
}

/**
 * @description： 判断是否是企业微信
 * @returns boolean
*/
export function isWxwork() {
  if (isWx() && /wxwork/i.test(ua)) {
    return true
  } else {
    return false
  }
}

/**
 * @description： 判断是否是安卓系统
 * @returns boolean
*/
export function isAndroid() {
  if (/(Android)/i.test(ua)) {
    return true
  } else {
    return false
  }
}

/**
 * @description： 判断是否是IOS系统
 * @returns boolean
*/
export function isIOS() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
    return true
  } else {
    return false
  }
}

/**
 * @description： 获取当前 微信/企业微信 版本
 * @returns string 例：8.0.3
*/
export function getWxVersion() {
  const wechatInfo = ua.match(/MicroMessenger\/([\d.]+)/i)
  if (!wechatInfo) {
    return ''
  }
  return wechatInfo[1].split('.').slice(0, 3).join('.')
}



/**
 * @description: 当前版本 type(> < =) 输入版本
 *               微信和企业微信通用
 * @param version: sting 需要判断的版本
 * @param type: string 判断类型 > | < | =
 * @returns boolean 是否符合版本
*/
// export const checkWxVersion = checkVersion(getWxVersion());

export default {
  isWx,
  isWxwork,
  isAndroid,
  isIOS,
  getWxVersion,
}
