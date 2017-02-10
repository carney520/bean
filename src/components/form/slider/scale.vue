 <template lang="jade">
   .slider__scale
     .slider__scale-value(v-for="item of _scales", :style="{left: item.offset + '%'}", :class="{'is-actived': isActived(item.value)}")
       .slider__scale-title(v-if="showLabel && item.label", :style="item.style")
         icon(v-if="typeof item.label === 'object'",
           :name="item.label.name",
           :type="item.label.type",
           :awesome="item.label.awesome",
           )
         span(v-else) {{ item.label }}
 </template>

 <script>
   export default {
     name: 'Scale',
     props: ['step', 'min', 'max', 'minLabel', 'maxLabel', 'scales', 'showLabel', 'trackShowed', 'value'],
     computed: {
       /**
       * 是否是自定义刻度
       */
       isCustomScale () {
         return this.scales != null && this.scales.length > 0
       },

       /**
        * 根据step生成刻度
        */
       stepScales () {
         const { min, max, step, minLabel, maxLabel } = this
         let scales = [], i = 1, value = min
         if (step === null) return scales

         const dividerCount = Math.round((max - min) / step)
         scales.push({
           offset: 0,
           value: value,
           label: minLabel,
         })

         while(i <= dividerCount) {
           scales.push({
             offset: (i / dividerCount) * 100,
             value: (value += step),
           })
           i++
         }

         scales[scales.length -1 ].label = maxLabel
         return scales
       },

       _scales () {
         if (!this.isCustomScale && this.step) {
           return this.stepScales
         } else {
           return this.scales
         }
       },
     },


     methods: {
       isActived (scaleValue) {
         if (this.trackShowed) {
           return this.value[0] <= scaleValue && scaleValue <= this.value[1]
         }
       }
     },
   }
 </script>
