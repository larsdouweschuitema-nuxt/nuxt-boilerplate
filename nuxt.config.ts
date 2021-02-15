import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  srcDir: 'client/',
  buildModules: ['@nuxt/typescript-build'],
  components: true,
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: true
  }
}

export default config