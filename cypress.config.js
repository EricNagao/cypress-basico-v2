const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(off, config) {
      // implement node event listeners here
    },
  },
});
