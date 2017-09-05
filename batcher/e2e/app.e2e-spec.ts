import { BatcherPage } from './app.po';

describe('batcher App', () => {
  let page: BatcherPage;

  beforeEach(() => {
    page = new BatcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
