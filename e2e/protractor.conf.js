// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/features/**/*.feature"],
  seleniumAddress: "http://localhost:4444",
  baseUrl: "https://mijn-simgroep.docker.local",
  capabilities: {
    browserName: "chrome",
    args: ["no-sandbox"]
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    require: ["./src/steps/**/*.steps.ts"]
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json")
    });
  }
};
