import { test } from 'setup/page-setup';
import * as LoginPage from '../pages/preferred-pom/magnus-login-page';
//import * as ProductsPage from '../pages/preferred-pom/sauce-demo-products-page';

//If you want to run the tests in parallel, you can use the test.describe.configure() method to set the mode to parallel. By default, tests are run sequentially.
test.describe.configure({ mode: 'parallel' });

test.describe('Saucedemo tests success and failures cases', () => {
  test('Saucedemo tests - Successful test', async () => {
    await LoginPage.navigateToMagnusLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed only on successful login
    // await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - Failure test', async () => {
    await LoginPage.navigateToMagnusLoginPage();
    await LoginPage.failureLogin();
    //verifying products page is displayed only on successful login
    // await ProductsPage.verifyProductsPageDisplayed();
  });
});
