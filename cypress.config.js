const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  numTestsKeptInMemory: 3,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://todomvc.com/examples/react/dist/'
      // implement node event listeners here
    },
  },
});
