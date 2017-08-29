import { TttFormPage } from './app.po';

describe('ttt-form App', () => {
  let page: TttFormPage;

  beforeEach(() => {
    page = new TttFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
