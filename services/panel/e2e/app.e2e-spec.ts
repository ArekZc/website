import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  const EXPECTED_MESSAGE = 'Add';

  beforeEach(function () {
    browser.get('');
  });

  it(`should display: ${EXPECTED_MESSAGE}`, function () {
    expect(element(by.css('legend')).getText()).toEqual(EXPECTED_MESSAGE);
  });

});
