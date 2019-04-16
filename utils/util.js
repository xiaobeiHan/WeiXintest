<<<<<<< HEAD
// test12 22
=======
// test conflict
>>>>>>> 87534ba6eeea81336495b075a58995f9c5ab6974
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



// test add 333git diff
module.exports = {
  formatTime: formatTime
}
