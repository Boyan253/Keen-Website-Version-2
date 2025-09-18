import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { breakpoints, mediaQueries } from './breakpoints';

export { colors, typography, spacing, breakpoints, mediaQueries };

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  mediaQueries,
} as const;
