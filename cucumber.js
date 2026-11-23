const { format } = require("node:path");

module.exports = {
    default: {
        paths: ["features/**/*.feature"],

        requireModule: ["tsx/cjs"],

        require: ["step_definition/**/*.ts"],

        format: [
            "progress",
            "html:reports/cucumber-report.html",
            "allure-cucumberjs/reporter"
        ],

        formatOptions: {
            resultsDir: "allure-results"
        }
    }
};