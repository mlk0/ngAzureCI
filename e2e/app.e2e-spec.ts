import { NgAzureCiPage } from './app.po';

describe('ng-azure-ci App', () => {
  let page: NgAzureCiPage;

  beforeEach(() => {
    page = new NgAzureCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
