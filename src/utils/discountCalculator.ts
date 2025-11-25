import { Product } from "../models/Product.ts";
function calculateDiscountedPrice(product: Product): number {
    const discountAmount = product.price * (product.discountPercentage / 100);
    const discountedPrice = product.price - discountAmount;
    return discountedPrice;
}
export { calculateDiscountedPrice };