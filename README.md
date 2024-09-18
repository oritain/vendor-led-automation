# vendor-led-automation
Test automation framework using Playwright for end-to-end web application testing. This repo features robust test scripts, reusable components, and configurations to streamline automation. Ideal for validating UI functionality, cross-browser compatibility, and user workflows with Playwright's reliable API.

# Installing playwright
Start with:
**`npm init playwright`**

Do you want to use TypeScript or JavaScript? **`JavaScript`**

Where to put your end-to-end tests? **`e2e`**

Add a GitHub Actions workflow? **`No`**

Install Playwright browsers (can be done manually via 'npx playwright install')? **`Yes`**

`\vendor-led-automation\playwright.config.js` already exists. Override it? **`No`**

`\vendor-led-automation\tests-examples\demo-todo-app.spec.js` already exists. Override it? **`No`**

# Running the tests
`npx playwright test tests/UIBasics.spec.js`
