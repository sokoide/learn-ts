export default [
  {
    ignores: ["dist", "coverage", "node_modules"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
