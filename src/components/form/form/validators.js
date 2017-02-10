function sameAs (name) {
  return function (rule, value, callback, source, options) {
    if (value === source[name]) {
      callback()
    } else {
      callback(new Error(options.messages.sameAs || 'Provided password does not match'))
    }
  }
}

export {
  sameAs
}
