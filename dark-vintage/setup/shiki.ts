import { defineShikiSetup } from '@slidev/types'

/*export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(require.resolve('shiki/themes/github-light.json'))
    },
  }
})*/

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'css-variables',
      light: 'css-variables',
    },
  }
})