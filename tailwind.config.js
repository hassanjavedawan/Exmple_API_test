/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import keepPreset from "keep-react/src/keep-preset.js";
module.exports = {
  content: [
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [keepPreset],
};
