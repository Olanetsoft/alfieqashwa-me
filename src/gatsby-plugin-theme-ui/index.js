import { funk } from '@theme-ui/presets';
import merge from 'lodash.merge';
import defaultTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default merge(defaultTheme, {
  useCustomProperties: true,
  initialColorMode: 'default',
  colors: {
    modes: {},
    prism: {
      background: `#061526 !important`,
      highlightBorder: `#d23669`
    }
  },
  fonts: {
    serif: `${funk.fonts}, 'Merriweather', Georgia, Serif`
    // sansSerif:
    //   "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    // monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`
  }
});
