export function coerceNumber (value) {
  return typeof value !== 'string'
    ? value
    : Number(value)
}

export function coerceBoolean (value) {
  return typeof value !== 'string'
      ? value
    : value === 'true'
      ? true
    : value === 'false'
      ? false
    : value === 'null'
      ? false
    : value === 'undefined'
      ? false
    : value
}