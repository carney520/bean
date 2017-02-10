export function dateFormat (date = new Date(), format = 'YYYY-MM-DD', inSecond = true) {
  if (!(date instanceof Date)) {
    let time = new Date(date)

    if (Number.isNaN(time.getTime())) {
      let toNumber = Number.parseInt(date)
      if (Number.isNaN(toNumber)) {
        throw new TypeError(`${date} is not a valid Date`)
      } else {
        date = inSecond ? new Date(toNumber * 1000) : new Date(toNumber)
      }
    } else {
      date = time
    }
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const hour12 = hour <= 12 ? hour : hour - 12
  const minute = date.getMinutes()
  const second = date.getSeconds()

  let map = {
    YYYY: year,
    MM: ('0' + month).slice(-2),
    M: month,
    DD: ('0' + day).slice(-2),
    D: day,
    H: hour,
    HH: ('0' + hour).slice(-2),
    h: hour12,
    hh: ('0' + hour12).slice(-2),
    m: minute,
    mm: ('0' + minute).slice(-2),
    s: second,
    ss: ('0' + second).slice(-2)
  }

  return format.replace(/Y+|M+|D+|H+|h+|m+|s+/g, (str) => {
    return map[str]
  })
}

export function noop () {}

export function warn (message) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(message)
    console.trace && console.trace()
  }
}

export function pageOffset (elem) {
  let left = elem.offsetLeft
  let top = elem.offsetTop
  let offsetParent = elem.offsetParent

  while (offsetParent) {
    left += offsetParent.offsetLeft
    top += offsetParent.offsetTop
    offsetParent = offsetParent.offsetParent
  }

  return { left, top }
}

export function isEmpty (obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export function on (target, eventType, callback) {
  target.addEventListener(eventType, callback, false)
  return {
    remove () {
      target.removeEventListener(eventType, callback, false)
    }
  }
}
