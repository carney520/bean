export function getMousePosition (event) {
  return event.pageX
}

export function pauseEvent (event) {
  event.stopPropagation()
  event.preventDefault()
}

// 只能有一个触点
export function isTouchEvent (event) {
  return event.touches.length === 1 ||
         (event.type.toLowerCase() === 'touchend' && event.touches.length === 0)
}

export function getTouchPosition (event) {
  return event.touches[0].pageX
}
