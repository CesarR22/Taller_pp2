import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title;

  constructor(page: Page) {
    this.page = page;
    // Soporta UI vieja (.product_label) y la nueva (.title)
    this.title = page.locator('.product_label, .title');
  }

  async verifyIsOnProductsPage() {
    // Espera a que el título de Products sea visible
    await this.title.waitFor();
  }
}
