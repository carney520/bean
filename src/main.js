import installMixins from './lib/mixins'

// import scss
import Style from './styles/style' // eslint-disable-line
import { Button, ButtonGroup } from './components/button'
import { Grid, Cell } from './components/grid'
import { Icon } from './components/icon'
import { Spinner } from './components/spinner'
import { Menu, MenuItem, MenuDivider } from './components/menu'
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Datepicker,
  Rangepicker,
  Select,
  Option,
  TreeSelect,
  Cascader,
  Input,
  InputNumber,
  Form,
  FormGroup,
  Label,
  HelpText
} from './components/form'
import { Modal, installDialogs } from './components/modal'
import { Tooltip } from './components/tooltip'
import { Popover, PopoverConfirm } from './components/popover'
import { Alert } from './components/alert'
import { Pagination } from './components/pagination'
import { Tab, TabItem } from './components/tab'
import { Breadcrumbs, BreadcrumbItem } from './components/breadcrumbs'
import { installMessage } from './components/message'
import { installNotification } from './components/notification'
import { Nprogress } from './components/nprogress'

const components = {
  Alert,
  Button,
  ButtonGroup,
  Grid,
  Cell,
  Spinner,
  Icon,
  Menu,
  MenuItem,
  MenuDivider,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Datepicker,
  Rangepicker,
  Select,
  Option,
  TreeSelect,
  Cascader,
  Input,
  InputNumber,
  Form,
  FormGroup,
  Label,
  HelpText,
  Modal,
  Tooltip,
  Popover,
  PopoverConfirm,
  Pagination,
  Tab,
  TabItem,
  Breadcrumbs,
  BreadcrumbItem,
  Nprogress
}

let _vue
export default {
  components,
  install (Vue, options) {
    if (_vue) return
    _vue = Vue

    installMixins(Vue)
    installDialogs(Vue)
    installMessage(Vue)
    installNotification(Vue)

    Object.keys(components).forEach((name) => {
      Vue.component('B' + name, components[name])
    })
  }
}
