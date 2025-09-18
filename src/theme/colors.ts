// Keen Agents Brand Colors from Brand Guidelines
export const colors = {
  // Primary brand colors
  blue: '#04a5fa',
  gray: '#656565',
  white: '#ffffff',
  
  // Extended palette for UI
  blueLight: '#e6f4ff',
  blueDark: '#0388d1',
  grayLight: '#f5f5f5',
  grayMedium: '#999999',
  grayDark: '#333333',
  
  // Semantic colors
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#04a5fa',
  
  // Background variations
  background: '#ffffff',
  backgroundSecondary: '#f8f9fa',
  backgroundDark: '#1a1a1a',
  
  // Text colors
  textPrimary: '#333333',
  textSecondary: '#656565',
  textLight: '#999999',
  textWhite: '#ffffff',
  
  // Border colors
  border: '#e0e0e0',
  borderLight: '#f0f0f0',
  borderDark: '#cccccc',
  
  // Gradient
  gradient: 'linear-gradient(135deg, #04a5fa 0%, #0388d1 100%)',
  gradientSubtle: 'linear-gradient(135deg, #e6f4ff 0%, #f0f8ff 100%)',
} as const;

export type ColorKey = keyof typeof colors;
