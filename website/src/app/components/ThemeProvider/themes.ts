import { MuiTypography as MuiTypographyBase } from './themes/base/typography/MuiTypography';
import { MuiTypography as MuiTypographyDark } from './themes/dark/typography/MuiTypography';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { MuiButtonBase as MuiButtonBaseBase } from 'app/components/ThemeProvider/themes/base/components/MuiButtonBase';
import { MuiButton as MuiButtonBase } from 'app/components/ThemeProvider/themes/base/components/MuiButton';
import { MuiAccordion as MuiAccordionBase } from 'app/components/ThemeProvider/themes/base/components/MuiAccordion';
import { MuiAccordionSummary as MuiAccordionSummaryBase } from 'app/components/ThemeProvider/themes/base/components/MuiAccordionSummary';
import { primary as primaryLight } from 'app/components/ThemeProvider/themes/light/palette/primary';
import { secondary as secondaryLight } from 'app/components/ThemeProvider/themes/light/palette/secondary';
import { primary as primaryDark } from 'app/components/ThemeProvider/themes/dark/palette/primary';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary:
      mode === 'dark'
        ? { ...primaryDark }
        : {
            ...primaryLight,
          },
    secondary: {
      ...secondaryLight,
    },
  },
  typography:
    mode === 'dark'
      ? { ...MuiTypographyDark }
      : {
          ...MuiTypographyBase,
        },
  components: {
    ...MuiButtonBaseBase,
    ...MuiButtonBase,
    ...MuiAccordionBase,
    ...MuiAccordionSummaryBase,
  },
});

export const generateTheme = (PaletteMode: PaletteMode) => {
  let theme = createTheme(getDesignTokens(PaletteMode));
  theme = responsiveFontSizes(theme);
  return theme;
};
