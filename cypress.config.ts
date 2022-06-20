import { defineConfig } from "cypress";
module.exports = {
  env: {
    loginUrl: "https://app.clickup-qa.com/",
    fixtureFile: "dataFile.json",
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },
};
