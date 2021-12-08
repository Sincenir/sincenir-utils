import { isWeappQywx } from './weappEnvCheckHelper'

export const getLoginFn = () => {
  let loginFn = null
  if (isWeappQywx()) {
    loginFn = wx.qy.login
  } else {
    loginFn = wx.login
  }

  return loginFn
}

export default {
  getLoginFn
}