const routeView = {
  template: '<router-view></router-view>'
}

const routeMap = {
  '/': {
    name: 'index',
    crumbs: {
      title: 'Home',
      icon: 'fighter-jet'
    },
    component: (resolve) => {
      require(['views/index'], resolve)
    },
    subRoutes: {
      '/': {
        name: 'introduce',
        component: (resolve) => {
          require(['views/introduce'], resolve)
        }
      },
      '/components': {
        component: routeView,
        crumbs: {
          title: 'Components'
        },
        subRoutes: {
          '/button': {
            name: 'button',
            component: (resolve) => {
              require(['views/button'], resolve)
            }
          },
          '/layout': {
            name: 'layout',
            component: (resolve) => {
              require(['views/layout'], resolve)
            }
          },
          '/spinner': {
            name: 'spinner',
            component: (resolve) => {
              require(['views/spinner'], resolve)
            }
          },
          '/icon': {
            name: 'icon',
            component: (resolve) => {
              require(['views/icon'], resolve)
            }
          },
          '/checkbox': {
            name: 'checkbox',
            component: (resolve) => {
              require(['views/checkbox'], resolve)
            }
          },
          '/radio': {
            name: 'radio',
            component: (resolve) => {
              require(['views/radio'], resolve)
            }
          },
          '/switch': {
            name: 'switch',
            component: (resolve) => {
              require(['views/switch'], resolve)
            }
          },
          '/slider': {
            name: 'slider',
            component: (resolve) => {
              require(['views/slider'], resolve)
            }
          },
          '/datepicker': {
            name: 'datepicker',
            component: (resolve) => {
              require(['views/datepicker'], resolve)
            }
          },
          '/select': {
            name: 'select',
            component: (resolve) => {
              require(['views/select'], resolve)
            }
          },
          '/cascader': {
            name: 'cascader',
            component: (resolve) => {
              require(['views/cascader'], resolve)
            }
          },
          '/input': {
            name: 'input',
            component: (resolve) => {
              require(['views/input'], resolve)
            }
          },
          '/form': {
            name: 'form',
            component: (resolve) => {
              require(['views/form'], resolve)
            }
          },
          '/modal': {
            name: 'modal',
            component: (resolve) => {
              require(['views/modal'], resolve)
            }
          },
          '/tooltip': {
            name: 'tooltip',
            component: (resolve) => {
              require(['views/tooltip'], resolve)
            }
          },
          '/popover': {
            name: 'popover',
            component: (resolve) => {
              require(['views/popover'], resolve)
            }
          },
          '/alert': {
            name: 'alert',
            component: (resolve) => {
              require(['views/alert'], resolve)
            }
          },
          '/pagination': {
            name: 'pagination',
            component: (resolve) => {
              require(['views/pagination'], resolve)
            }
          },
          '/tab': {
            name: 'tab',
            component: (resolve) => {
              require(['views/tab'], resolve)
            }
          },
          '/breadcrumbs': {
            name: 'breadcrumbs',
            crumbs: 'breadcrumbs',
            component: (resolve) => {
              require(['views/breadcrumbs'], resolve)
            }
          },
          '/message': {
            name: 'message',
            component: (resolve) => {
              require(['views/message'], resolve)
            }
          },
          '/notification': {
            name: 'notification',
            component: (resolve) => {
              require(['views/notification'], resolve)
            }
          },
          '/nprogress': {
            name: 'nprogress',
            component: (resolve) => {
              require(['views/nprogress'], resolve)
            }
          },
          '/steps': {
            name: 'steps',
            component: (resolve) => {
              require(['views/steps'], resolve)
            }
          }
        }
      }
    }
  }
}

/**
* config Routers
*/
export default function configRouterMap (router) {
  router.map(routeMap)
}