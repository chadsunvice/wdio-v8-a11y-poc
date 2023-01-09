# wdio-v8-a11y-poc
Test project to integrate A11y tooling using the latest WDIO version.

### INSTALLATION STEPS:
* Install software dependencies: `npm install`
* *[OPTIONAL]* Clean local environment: `npm run pretest`
* Run checks against local: `npm run test:wdio:local`
* Run checks against SauceLabs: `npm run test:wdio:sauce`
* Generate **Allure Report** using the data from `/allure-results`: `npm run report-generate`
* Open the **Allure Report** generated: `npm run report-open`
