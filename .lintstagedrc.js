export default {
  '**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier --write'],
  '**/*.{html,css,scss}': ['prettier -w'],
};
