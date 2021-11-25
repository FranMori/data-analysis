import{ createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import Scrim from '@/views/Scrim.vue'
import Scouting from '@/views/Scouting.vue'

import UTT from '@/views/UTT.vue'
import ELF from '@/views/ELF.vue'
import OTF from '@/views/OTF.vue'



const routes = [
  {
    name: 'Home',
    path:'/',
    component: Home,
    meta: {
      title: 'Accueil'
    },
  },
  {
    name: 'Scrim',
    path:'/scrim',
    component: Scrim,
    meta: {
      title: 'Scrims'
    },
  },
  {
    name: 'Scouting',
    path:'/scouting',
    component: Scouting,
    meta: {
      title: 'Scouting'
    },
  },
  {
    name: 'UTT',
    path:'/scouting/utt',
    component: UTT,
    meta: {
      title: 'UTT'
    },
  },
  {
    name: 'ELF',
    path:'/scouting/elf',
    component: ELF,
    meta: {
      title: 'ELF'
    },
  },
  {
    name: 'OTF',
    path:'/scouting/otf',
    component: OTF,
    meta: {
      title: 'OTF'
    },
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router