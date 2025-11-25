import { Product } from "./models/Product";
import { computeTaxedPrice } from "./utils/taxCalculator";
import { calculateDiscountedPrice } from "./utils/discountCalculator";

async function main() {
    const product = new Product();
    await product.displayInfo();
    const discountedPrice = product.getPriceWithDiscount();
    console.log(`Price after discount: $${discountedPrice}`);
    const taxedPrice = computeTaxedPrice(product, 0.475);
    console.log(`Price after tax: $${taxedPrice}`);
}

main();