const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const week = i => {
  //取得当前日期一周内的某一天
  var now = new Date();
  var n = now.getDay(); //获取当前日历的星期几
  var start = new Date();
  start.setDate(now.getDate() - n + i); //取得一周内的第一天、第二天、第三天...
  //当前日历-当前日历的星期几+遍历相加 1~7 得到一周的日历
  return start;
}

const countDown = (val) => {
  if (val == 0) {
    val = 3
  } else {
    val--;
  }
  return val
}


module.exports = {
  formatTime,
  week,
  countDown
}