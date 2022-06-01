import { defineAppSetup } from '@slidev/types'
import sequentialEntrance from 'vue3-sequential-entrance'
import 'vue3-sequential-entrance/vue-sequential-entrance.css'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(sequentialEntrance)
})
