/**
 * @description： 版本判断工具
 * @param arr1：当前版本 1.1.1
 * @param arr2：对标版本 2.2.2
 * @returns boolean：是否符合
*/
export function checkVersion(arr1 = [], arr2 = [], type = '=') {
  if (arr1.length <= 0 || arr2.length <= 0) {
    return false
  }

  if (arr1[0] === arr2[0]) {
    arr1.shift()
    arr2.shift()
    return checkVersion(arr1, arr2, type)
  } else {
    if (type === '<') {
      return arr1[0] < arr2[0]
    } else if (type === '>') {
      return arr1[0] > arr2[0]
    }
  }
}

// 判断手机型号
export function checkMobile(v) {
  return (model) => {
    const mobile = model.split(' ')[0]
    return mobile.toLowerCase() === v.toLowerCase()
  }
}