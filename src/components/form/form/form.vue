<!-- 表单容器
// TODO
  - 默认类型
  扩展内置类型
  自定义验证测试
  完善表单事件
  - 自定义下拉菜单可聚焦
  自定义组件autofocus
  树形菜单美化
  下拉列表也可以验证, 和验证反馈, 下拉列表指示符
  完善时间选择器
 -->
 <template lang="jade">
   form.form(novalidate, :class="formClasses", @submit.prevent="_submit")
     slot
 </template>

 <script>
   import ViewMixin from '../../_mixins/view'
   import { noop, warn, pageOffset, isEmpty } from '../../_helpers/util'
   import Schema from 'async-validator'
   import * as validators from './validators'

   const BUILD_IN_TYPE = {
     number: {
       type: 'number',
     },
     integer: {
       type: 'integer',
     },
     float: {
       type: 'float',
     },
     date: {
       type: 'date',
     },
     url: {
       type: 'url',
     },
     email: {
       type: 'email',
     },
   }

   export default {
     name: 'vForm',
     mixins: [
       ViewMixin,
     ],
     props: {
       // 控件尺寸
       size: {
         type: String,
         default: 'default',
       },

       // 布局模式
       layout: {
         type: String,
         default: 'horizontal',
         validator (value) {
           return ['grid', 'inline', 'horizontal'].indexOf(value) !== -1
         },
       },

       // 原始表单属性
       action: {
         type: String,
       },

       // 表单验证规则
       validators: {
         type: Object,
       },

       options: {
         type: Object,
         default () {
           return {
             scrollable: true,
             first: true,
           }
         },
       },
       // hack, 用于双向获取form 的状态
       getStatus: {}
     },

     data () {
       return {
         submitting: false,

         // 所有控件字段
         fieldsDesc: {},
         fieldsQueue: [],

         // 用于验证所有控件
         rules: {},
         schema: null,
       }
     },

     computed: {
       validating () {
        return this.fieldsQueue.some(name => {
          return this.fieldsDesc[name].validating
        })
       },

       invalid () {
        return this.fieldsQueue.some(name => {
          return this.fieldsDesc[name].invalid
        })
       },

       errors () {
         let error = []
         this.fieldsQueue.forEach(name => {
           let field = this.fieldsDesc[name]
           if(field.invalid) {
             error = error.concat(field.errors)
           }
         })

         return error
       },

       _status () {
         let {submitting, validating, invalid, errors} = this
         return {
           submitting, validating, invalid, errors
         }
       },

       formClasses () {
         return [
           `--${this.layout}`,
         ]
       },
     },

     watch: {
       _status (value) {
         this.getStatus = value
       }
     },

     methods: {
       // 注册控件
       _registerFormControl (vm) {
         const { name } = vm
         let isExisted = false
         if (name in this.fieldsDesc) {
           warn(`Control '${name}' alredy existed.`)
           isExisted = true
         }
         // 注意如果在form ready后注册，则不能保证index的准确性
         let desc = {
           instance: vm,
           index: isExisted ? this.fieldsQueue.indexOf(name) : this.fieldsQueue.length,
           modified: false,
           invalid: false,
           errors: [],
           validating: false,
           // 原始rule
           _rules: null,
           // 特定控件的validate schema
           _schema: null,
         }

         this.$set(`fieldsDesc.${name}`, desc)

         if(!isExisted) {
           this.fieldsQueue.push(name)
         }

         // form 已经准备就绪，对于新添加的控件需要添加验证规则,
         if (this._formReady && this.validators && this.validators[name]) {
           this._registerRule(name, this.validators[name])
         }
       },

       _isBuildinType (t) {
         return t in BUILD_IN_TYPE
       },

       _getBuildinRule (type) {
         return BUILD_IN_TYPE[type]
       },

       // 处理内置检验规则
       _processBuildInRules (rules) {
         const org = rules
         rules = []
         let testRule = (rule) => {
           rule = {...rule}
           for (let name in validators) {
             if (name in rule) {
               let newRule = {
                 validator: validators[name](rule[name]),
                 message: rule.message
               }
               rules.push(newRule)
               delete rule[name]
               delete rule.message
             }
           }
           
           if (!isEmpty(rule)) {
             rules.push(rule)
           }
           return rule
         }

         if (Array.isArray(org)) {
          org.forEach(rule => {
            testRule(rule)
          })
         } else {
           testRule(org)
         }
         return rules
       },

       /**
        * 注册验证rule
        * @param {String} name - 控件名
        * @param {Object} validator - 声明规则
        */
       _registerRule (name, validator) {
         let field = this.getField(name)
         let trigger = validator.trigger
         let validateRules = validator.rules || validator.rule

         if (field) {
           const { type } = field.instance

           // 自动添加内置验证规则
           if (this._isBuildinType(type)) {
             if (validateRules == null) {
               validateRules = []
             }

             // 检查是否已经声明了规则
             let declared = false
             if (Array.isArray(validateRules)) {
               for (let rule of validateRules) {
                 if ('type' in rule) {
                   declared = true
                   break
                 }
               }
             } else {
               declared = 'type' in validateRules
             }

             if (!declared) {
               const buildinRule = this._getBuildinRule(type)
               validateRules = Array.isArray(validateRules)
                 ? [...validateRules, buildinRule]
                 : {...validateRules, ...buildinRule}
             }
           }

           if (validateRules) {
             validateRules =  this._processBuildInRules(validateRules)
             field._schema = new Schema({[name]: validateRules})
             field._rules = validateRules
             this.rules[name] = validateRules
             // 控件自定义了验证时机
             if (trigger) {
               field.instance.$on(trigger, () => {
                 this.validateField(name)
               })
             }
           }
         }
       },

       getFields () {
         return this.fieldsDesc
       },

       getField (name) {
         return this.fieldsDesc[name]
       },

       getFieldsInstance () {
         let rt = {}

         for (let name in this.fieldsDesc) {
           rt[name] = this.fieldsDesc[name].instance
         }
         return rt
       },

       getFieldInstance (name) {
         return this.fieldsDesc[name] ? this.fieldsDesc[name].instance : null
       },

       getFieldsValue () {
         let rt = {}
         for (let name in this.fieldsDesc) {
           rt[name] = this.fieldsDesc[name].instance.getValue()
         }
         return rt
       },

       getFieldValue (name) {
         return this.fieldsDesc[name] ? this.fieldsDesc[name].instance.getValue() : null
       },

       getFirstError(name) {
         if (name != null) {
           return this.fieldsDesc[name] && this.fieldsDesc[name].errors[0]
         } else {
           for(let i = 0, l = this.fieldsQueue.length; i < l; i++) {
             let field = this.getField(this.fieldsQueue[i])
             if (field.errors.length) {
               return field.errors[0]
             }
           }
         }
       },

       //重置验证结果
       resetValidations() {
         for (let name in this.fieldsDesc) {
           let field = this.fieldsDesc[name]
           field.instance.setError(null, null)
           field.errors = []
           field.invalid = false
         }
       },

       // 重置单个表单验证结果
       resetValidation (name) {
         let field = this.getField(name)
         if (field) {
           field.instance.setError(null, null)
           field.invalid = false
           field.errors = []
         }
       },

       setFieldError (name, errors) {
         let field = this.getField(name)
         if (field) {
           const messages = errors.map(({message}) => message)
           field.invalid = true
           field.errors = messages
           field.instance.setError('alert', messages)
         }
       },

       /**
       * 验证所有注册的表单
       */
       validateFields(callback = noop) {
         // 重置验证结果
         for (let name in this.fieldsDesc) {
           let field = this.fieldsDesc[name]
           field.invalid = false
           field.errors = []
           field.validating = true
           field.instance.setError(null, null)
         }

         let source = this.getFieldsValue()

         this.schema.validate(source, (errors, fields) => {
           let firstErrorField = null
           for (let name in this.fieldsDesc) {
             let field = this.fieldsDesc[name]
             field.validating = false

             if (fields && name in fields) {
               this.setFieldError(name, fields[name])
               if (firstErrorField === null || (field.index < firstErrorField.index)) {
                 firstErrorField = field
               }
             }
           }

           if (firstErrorField) {
             this.scrollIntoViewIfNeeded(firstErrorField.instance)
           }

           callback(errors, fields)
         })
       },

       /**
       * 单独验证表单
       * @param {String} name - 控件名
       */
       validateField (name, callback = noop) {
         let field = this.getField(name)
         if (field == null) return

         let instance = field.instance
         let source = this.getFieldsValue()
         // let source = {
         //   [name]: this.getFieldValue(name),
         // }

         field.validating = true
         if (field.invalid) {
           this.resetValidation(name)
         }

         field._schema.validate(source, (errors, fields) => {
           field.validating = false
           // 验证失败
           if (errors) {
             this.scrollIntoViewIfNeeded(instance)
             this.setFieldError(name, errors)
           }
           callback(errors, fields)
         })
       },

       /**
       * 滚动到验证错误的控件处
       * @param {String|HTMLElement} name - 表单名或控件元素实例
       */
       scrollIntoViewIfNeeded (name, marginTop = 50) {
         const instance = typeof name === 'string' ? this.getFieldInstance(name) : name
         if (instance && instance.$el) {
           const el = instance.$el
           const offset = el.getBoundingClientRect().top
           const clientHeight = document.documentElement.clientHeight
           if (offset < 0 || offset > clientHeight) {
             const {left, top} = pageOffset(el)
             window.scrollTo(left, top - marginTop)
           }
         }
       },

       //提交表单
       _submit (event) {
         this.submitting = true

         if (this.validators == null) {
           this.submitting = false
           this.$notify('onsubmit', event)
         } else {
           this.validateFields((errors) => {
             this.submitting = false
             if (!errors) {
               this.$notify('onsubmit', event)
             }
           })
         }
       },

       // 重置表单
       reset () {
       },
     },

     events: {
       'validatable:created' (vm) {
         this._registerFormControl(vm)
       },
     },

     ready () {
       // 初始化表单验证规则
       if (this.validators) {
         for (let name in this.validators) {
           const validator = this.validators[name]
           this._registerRule(name, validator)
         }

         this.schema = new Schema(this.rules)
         this.$watch('rules', (val) => {
           this.schema = new Schema(this.rules)
         })
       }


       this.$broadcast('form:ready', this)
       this._formReady = true
     },

     beforeDestroy () {
       this.fieldsDesc = null
     },
   }
 </script>
