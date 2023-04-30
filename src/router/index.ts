import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      // beforeEnter: (to, _, next) => {
      //   if (!to.query?.user) {
      //     to.query = { user: "Adam" }
      //   }
      //   next()
      // }
      // props: route => ({ user: route.query.user || 'Adam' }),
      props: { age: 32 }
    },
    {
      path: "/messages",
      name: "messageFeed",
      component: () => import("../views/MessageView.vue"),
      props: route => ({
        messages: route.query.messages && route.query.messages?.length > 0 ? route.query.messages : []
      }),
      beforeEnter: async (to, _, next) => {
        const module = await import("../assets/messages")
        const messages = module.default
        if (messages && messages.length > 0) {
          to.query.messages = messages
        }
        next()
      }
    },
    {
      path: "/message/:id",
      name: "message",
      component: () => import("../views/Message.vue"),
      props: route => ({ content: route.query.content }),
      beforeEnter: async (to, _, next) => {
        if (to.params && to.params.id) {
          const id = Number(to.params.id)
          const module = await import("../assets/messages")
          const messages = module.default;
          if (messages && messages.length > 0 && id < messages.length) {
            to.query.content = messages[id]
          }
        }
        next()
      }
    },
    {
      path: "/error",
      name: "error",
      component: () => import("../views/ErrorView.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../views/UserView.vue"),
      props: true,
      children: [{
        path: 'info',
        name: 'userinfo',
        component: () => import('../views/UserInfo.vue'),
        props: true,
      }, {
        path: 'extra',
        component: () => import('../views/UserExtra.vue')
      }]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/404View.vue"),
    }
  ]
})

// let user: string = "Adam"

// router.beforeEach((to, _, next) => {
//   if (to.name === "about" && (!to.query?.user)) {
//     next({ name: 'about', query: { user } })
//     console.log("hello from beforeEach hook")
//   } else {
//     if (to.query.user) {
//       user = to.query.user.toString()
//     }
//     next()
//   }
// })

// router.beforeResolve((to, _, next) => {
//   if (to.name === "about" && (!to.query?.user)) {
//     next({ name: 'error' })
//     console.log("Hello from beforeResolve hook")
//   } else {
//     next()
//   }
// })

// router.afterEach((to, _) => {
//   if (to.name === "about" && to.query && to.query.user) {
//     user = to.query.user.toString()
//   }
// })

export default router