import { PersonalSitePage } from './app.po';

describe('personal-site App', () => {
  let page: PersonalSitePage;

  beforeEach(() => {
    page = new PersonalSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
