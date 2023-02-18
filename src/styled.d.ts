import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // Define your theme properties here
    colors: {
      primary: string
      secondary: string
      text: string
      background: string
    }
  }
}
