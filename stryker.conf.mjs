// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  mutator: {
    name: 'javascript',
    excludedMutations: ['StringLiteral', 'ArrayDeclaration'] // optional: exclude very trivial ones
  },
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/jest-runner for information about the jest plugin.",
  coverageAnalysis: "perTest",
  mutate: ["src/**/*.js"],
  thresholds: {
    "high": 80,
    "low": 60,
    "break": 70
  },
  incremental: true,
  dashboard: {
    project: "github.com/MadhupaMinoli/Temperature-Converter", // Full GitHub path
    version: "main", // Branch name or version tag
    module: "temperature-converter", // Optional: module name
    baseUrl: "https://dashboard.stryker-mutator.io/api/reports", // Optional: custom URL
    reportType: "full" // Optional: "full" (default) or "mutationScore"
  }
};
export default config;
