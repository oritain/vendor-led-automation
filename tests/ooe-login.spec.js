import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-ooe.provenorigin.com/');
  await page.goto('https://dev-ooe.provenorigin.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Oritain Team Login' }).click();
  // const page1 = await page1Promise;
  // await page1.getByPlaceholder('ILastname@oritain.com').click();
  // await page1.getByPlaceholder('ILastname@oritain.com').fill('pbhosale@oritain.com');
  // await page1.getByRole('button', { name: 'Next' }).click();
  
  // await page1.getByPlaceholder('Password').click();
  // await page1.getByPlaceholder('Password').fill('Greentree@2024');
  // await page1.getByRole('button', { name: 'Sign in' }).click();
  // await page1.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
  // await page1.goto('https://dev-ooe.provenorigin.com/frontends/login/blank.html#code=0.AWcALblPQJGDZkWsBc9ib0GAMLUcnDpWTZJGl85iAnPtJ1hnAAA.AgABBAIAAAApTwJmzXqdR4BN2miheQMYAgDs_wUA9P_RCZxHCdSG3SrQbJW2QCnOWLAOySweVmAVr_mkzOattdQ6lkntBHa3QNaVn8SWI4v_4HeF6Q7FX9U7aKMPKNCuAnsn3VkgqUnIQI5cKHA_NiCO0qeZGe3_Hx79RoIwAJeAnn6VTuSJ1PH7PiOiX4QVDzYDgtmqndkl63URq79-iLmdIUGee99Jl9NXKp8936Pu9hZb-k80UeEV5VrfgmbcE52ayAQ6iUrxZSiTL-aWDhslzvG-ewluC5DM8_8hVFPglbBlkpa7Et8MBhQZKkH2-BUyME5hvVB-TVGmhbkytdnQDRoFgMo3iuCL4KHbaXMq5_3CTah6Jg9A8PUzzz4QmzbbPrOKB3en_J0N-uqIze-mILnSUeJPvhDmeig3yf4HAmFwqg4k4Wyof7w5yNj1BoPEtd6HfkzrQS2SWw-mX_a3Wxe3gG2bWlrHYoYZl8S565Mi9d7ybJG7171r42Q7jTfsrfCSPVKVK0JBhBWDaxK242YvEjxUsjNFBiRiqYfPt92tm5ptv72GkE5xcFBNEtpHSBOzKo-_KzOdvOOXt-jF9VEjC5IXT55B7FoVE7Ubge8gS3JErrvoXnob940BxHvSeE7Wbe4WnTvyHt6zS5z5E3J8EovAtSGeL_awPB67QfOXjBl8P9eFG3w5VMcTGokZa3rfppBzT-99GlKmpioDlYRJ34BAqTLeJyyp2COvLUGIydWZketqYXLOPI0Fc5bHNCkfLU87zpTZBGLYfZUe4mQHksMpX23RToC_LLBAsuFiVmFafxHB73e1MtP-Ro_hntLamb1MbdqriyQ0nvbPiYpm_Z6eflOpquPr8p-BrwZ4W9HG4v6qAFbxt5rEyGJo8VNG0KOIGoRQuDbtAsbbAerx9LambNjMmBAe9T489sdA&state=eyJpZCI6ImZkYmRhZjg2LTRiMjYtNGQ2Mi1hYzU4LTIzNzUyZjM0ZjA5MyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicG9wdXAifX0%3D&session_state=5aefb9cf-80e7-456f-8bc9-66660873ed92&client_info=eyJ1aWQiOiIwZDc4ZTcyOS0yOTJjLTQ3YTAtYjRkZi02YWEwZmI3NmEzYmEiLCJ1dGlkIjoiNDA0ZmI5MmQtODM5MS00NTY2LWFjMDUtY2Y2MjZmNDE4MDMwIn0');
  await page.goto('https://dev-ooe.provenorigin.com/samples');
  await expect(page).toHaveURL("https://dev-ooe.provenorigin.com/samples");
  await page.goto('https://dev-ooe.provenorigin.com/samples/planning');
});