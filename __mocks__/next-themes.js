/** @type {import("next-themes").ThemeProviderProps} */
const ThemeProvider = ({ children }) => children;

module.exports = {
  ThemeProvider,
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
};