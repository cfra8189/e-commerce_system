import { Product } from "../models/Product";
import { calculateDiscountedPrice } from "./discountCalculator";
export function computeTaxedPrice(product: Product, taxRate: number): number {
    const discountedPrice = calculateDiscountedPrice(product);
    const taxAmount = discountedPrice * (0.475 / 100);
    const totalPrice = discountedPrice + taxAmount;

    if(product.category === 'groceries'){
       const taxAmount = product.price * (0.03 / 100);
    }
    return totalPrice;
}