import { tailwind } from '@theme-ui/presets';
import merge from 'lodash.merge';
import defaultTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default merge(defaultTheme, {
  colors: {
    prism: {
      background: `#061526 !important`,
      highlightBorder: tailwind.colors.pink[6]
    }
  }
});
