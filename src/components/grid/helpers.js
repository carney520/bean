function parseLength (size) {
  const [small, medium, large] = size.trim().split(':')
  return {
    small,
    medium,
    large
  }
}

export function coerceSize (value) {
  return typeof value !== 'string'
           ? value
           : parseLength(value)
}

export function serializeClassName (container, values, type) {
  let serialize

  switch (type) {
    case 'size':
      serialize = serializeCol
      break
    case 'push':
      serialize = serializePush
      break
    case 'pull':
      serialize = serializePull
      break
    case 'offset':
      serialize = serializeOffset
      break
    case 'center':
      serialize = serializeCenter
      break
    case 'uncenter':
      serialize = serializeUncenter
      break
    case 'rowcollapse':
      serialize = serializeRowCollapse
      break
    case 'rowuncollapse':
      serialize = serializeRowUncollapse
      break
  }

  for (let key in values) {
    if (values[key]) {
      container.push(serialize(values[key], key))
    }
  }
}

function serializeCol (value, breakpoint) {
  return `col--${value}@${breakpoint}`
}

function serializeOffset (value, breakpoint) {
  return `col--offset-${value}@${breakpoint}`
}

function serializePull (value, breakpoint) {
  return `col--pull-${value}@${breakpoint}`
}

function serializePush (value, breakpoint) {
  return `col--push-${value}@${breakpoint}`
}

function serializeCenter (value, breakpoint) {
  return `col--center@${breakpoint}`
}

function serializeUncenter (value, breakpoint) {
  return `col--uncenter@${breakpoint}`
}

function serializeRowCollapse (value, breakpoint) {
  return `row--collapse@${breakpoint}`
}

function serializeRowUncollapse (value, breakpoint) {
  return `row--uncollapse@${breakpoint}`
}

export function serializeExpanded () {
  return `row--expanded`
}
