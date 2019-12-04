export function timeDesc(time) {
  var date = new Date().getTime()
  var decTime = date - time // 毫秒
  var decDay = Math.floor(decTime / (1000 * 60 * 60 * 24)) // 天数差

  var timeDate = new Date(time)
  if (decDay < 1) {
    // 当前时间  上午9:08
    let h = timeDate.getHours()
    let m = timeDate.getMinutes() + '' // 转化成字符串
    h = h > 12 ? `下午${h - 12}` : `上午${h}`
    m = returnDoubleDate(m)

    return h + ':' + m
  } else if (decDay === 1) {
    // TODO: 逻辑处理有问题的  昨天
    return '昨天'
  } else if (decDay > 1 && decDay <= 5) {
    // 星期几
    var week = timeDate.getDay()
    var weekArr = ['天', '一', '二', '三', '四', '五', '六']
    return `星期${weekArr[week]}`
  } else {
    //  月-日  07-02
    let M = returnDoubleDate(timeDate.getMonth() + 1 + '')
    let d = returnDoubleDate(timeDate.getDate() + '')
    return M + '-' + d
  }
}

function returnDoubleDate(time) {
  // 7 => 007  17 => 0017
  return ('00' + time).substr(time.length)
}
