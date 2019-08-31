import { funk } from '@theme-ui/presets';
import merge from 'deepmerge';
import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';
import wavesTheme from 'gatsby-theme-waves/src/gatsby-plugin-theme-ui/index';

const waves = merge(wavesTheme, {
  breakpoints: ['1000px'],
  colors: {
    primary: 'rebeccapurple',
    modes: { dark: { background: '#1e1e1e' } }
  }
});

const novela = merge(novelaTheme, {
  colors: {
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

export default merge(novela, waves);
