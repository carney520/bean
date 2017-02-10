<template lang="jade">
  nav
   ul.pagination
     li.pagination__item(
       :class="{ '--disabled': !hasPrev }",
       @click="goToPrev") {{ prevText }}
     template(v-if="!simple")
       template(v-for="item in items", track-by="id")
         li.pagination__item(
           v-if="item.id >= 0",
           :class="{'--current': item.isCurrent}",
           @click="goTo(item)") {{ item.value }}
         li.pagination__ellipsis(v-if="item.id < 0")
     li.pagination__item(
       :class="{ '--disabled': !hasNext }",
       @click="goToNext") {{ nextText }}
</template>

<script>
  import { coerceNumber, coerceBoolean } from '../_helpers/coerces'

  export default {
    props: {
      current: {
        type: Number,
        required: true,
        coerce: coerceNumber,
        validator (value) {
          return value >= 0
        }
      },

      count: {
        type: Number,
        required: true,
        coerce: coerceNumber,
        validator (value) {
          return value >= 0
        }
      },

      prevText: {
        type: String,
        default: '上一页'
      },

      nextText: {
        type: String,
        default: '下一页'
      },

      callback: {
        type: Function,
        default: () => {}
      },

      slideWindow: {
        type: Number,
        coerce: coerceNumber,
        default: 3
      },

      // 只显示上一页和下一页
      simple: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      hasPrev () {
        return this.current > 1
      },

      hasNext () {
        return this.current < this.count
      },

      // lazy compute
      items () {
        /**
        * 以当前页为基准，向前和向后探测可取的页面. slideWindow,即活动窗口
        */
        if (this.simple) return
        const current = this.current
        const slideWindow = this.slideWindow
        const halfSlideWindow = Math.floor(slideWindow / 2)
        const count = this.count
        let pages = []
        let desc = {}
        let tempStart = 0
        let tempEnd = 0

        let pushItem = (item) => {
          pages.push({
            id: item,
            value: item,
            isCurrent: item === this.current
          })
        }

        // test start. 测试前驱
        tempStart = current - halfSlideWindow
        if (tempStart >= 1) {
          desc.start = tempStart
          if (tempStart > halfSlideWindow + 1) {
            // 添加省略号
            desc.addHead = true
          } else {
            desc.start = 1
          }
        } else {
          desc.start = 1
        }

        // test end. 测试后驱
        tempEnd = current + halfSlideWindow
        // 将前驱剩余的个数，补充给后驱
        if (tempStart <= 0) {
          tempEnd = tempEnd - (tempStart - 1)
        }

        if (tempEnd <= count) {
          desc.end = tempEnd
          if (count - tempEnd > halfSlideWindow + 1) {
            desc.addTail = true
          } else {
            desc.end = count
          }
        } else {
          // ajust start. 调整前驱，将后驱剩余的个数，补充给前驱
          let rest = desc.start - (tempEnd - count)
          if (rest >= 1) {
            if (rest > halfSlideWindow + 1) {
              desc.start = rest
            } else {
              desc.start = 1
              desc.addHead = false
            }
          }
          desc.end = count
        }

        // create pages
        if (desc.addHead) {
          for (let i = 1, l = halfSlideWindow; i <= l; i++) {
            pushItem(i)
          }
          // ellipsis
          pushItem(-1)
        }

        for (let i = desc.start, l = desc.end; i <= l; i++) {
          pushItem(i)
        }

        if (desc.addTail) {
          // ellipsis
          pushItem(-2)
          for (let i = count - halfSlideWindow + 1, l = count; i <= l; i++) {
            pushItem(i)
          }
        }

        return pages
      }
    },

    methods: {
      goTo (item) {
        if (item.isCurrent || item.id === 0) {
          return
        } else {
          this.current = item.id
          this.callback(item.id)
        }
      },

      goToPrev () {
        if (this.hasPrev) {
          this.current--
          this.callback(this.current)
        }
      },

      goToNext () {
        if (this.hasNext) {
          this.current++
          this.callback(this.current)
        }
      }
    }
  }
</script>
