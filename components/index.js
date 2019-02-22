import Toast from './toast'
import Icon from './icon/src/index'
import WingBlank from './wingBlank/src/index'
import Button from './button/src/index'

const components = [
  Icon,
  WingBlank,
  Button
]

const methods = [
  Toast
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  methods.map(method => {
    Vue.use(method)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const NewsUIMobile = {
  version: '0.0.1',
  install,
  Toast,
  Icon,
  WingBlank,
  Button
}

export default NewsUIMobile
