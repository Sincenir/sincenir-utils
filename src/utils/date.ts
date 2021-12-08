import { isDate } from './handle'

/**
 * @description: 简单的日期格式化方式， 如 YYYY年m月d日 / Y年m月 / Y-m-d
 *               不支持 YY 这种定义某一类时间的长度
 * @param fmt: 格式 如： YYYY-mm-dd HH:MM:SS / YYYY-mm-dd / mm-dd
 * @param date: 时间对象
 * @returns 格式化后的时间字符串
*/
export function formatDate(fmt, date) {
  if (!isDate(date)) {
    throw new TypeError('传入类型不是 Date Object')
  }
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(),        // 年
    'm+': (date.getMonth() + 1).toString(),     // 月
    'd+': date.getDate().toString(),            // 日
    'H+': date.getHours().toString(),           // 时
    'M+': date.getMinutes().toString(),         // 分
    'S+': date.getSeconds().toString()          // 秒
  }
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
    }
  }
  return fmt
}

export default {
  formatDate
}