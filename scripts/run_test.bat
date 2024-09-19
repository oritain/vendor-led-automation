::
:: This script runs the playwright automation.
::
:: run_test_*.bat calls this file and provides various command line args to make this work across different envs.
::

@echo off
setlocal

pushd
cd /D "%~dp0"
cd..

echo --- current Azure Subscription: %1
echo ---                 current KV: %2
cmd.exe /c az account set --subscription %1

set LOGIN_USERNAME=nah
set LOGIN_PASSWORD=what

for /f %%i in ('az keyvault secret show --name playwright-login-username --vault-name %2 --query value -o tsv') do set LOGIN_USERNAME=%%i
for /f %%i in ('az keyvault secret show --name playwright-login-password --vault-name %2 --query value -o tsv') do set LOGIN_PASSWORD=%%i

echo --- playwright will log in as %LOGIN_USERNAME%

cmd.exe /c az logout

:: run the test
npx playwright test tests/UIBasics.spec.js

popd
