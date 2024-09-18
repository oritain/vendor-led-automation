@echo off
setlocal

pushd
cd /D "%~dp0"

:: this is because https://github.com/Azure/azure-cli/issues/29004
cmd.exe /c az config set core.login_experience_v2=off

cmd.exe /c az login --tenant 404fb92d-8391-4566-ac05-cf626f418030 > nul

cmd.exe /c run_test.bat OOE_DEV ooe-dev-kv-next

popd
