import Component from './drawer'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
