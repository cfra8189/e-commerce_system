export class Product {
    id: number = 1;
    title: string = '';
    description: string = '';
    category: string = '';
    price: number = 0;
    discountPercentage: number = 0;
    rating: number = 0;
    stock: number = 0;
    tags: string[] = [];
    brand: string = '';
    sku: string = '';
    weight: number = 0;
    dimensions: { length: number; width: number; height: number } = { length: 0, width: 0, height: 0 };
    warrantyInformation: string = '';
    shippingInformation: string = '';
    availabilityStatus: string = '';
    reviews: {
        rating: number;
        comment: string;
        date: Date;
        reviewerName: string;
        reviewerEmail: string;
    }[] = []
    returnPolicy: string = '';
    minimumOrderQuantity: number = 1;
    meta: {
        createdAt: Date;
        updatedAt: Date;
        barcode: string;
        qrCode: string;
    } = {
            createdAt: new Date(),
            updatedAt: new Date(),
            barcode: '',
            qrCode: ''
        };
    thumbnail: string = '';
    images: string[] = [];
    total: number = 0;
    skip: number = 0;
    limit: number = 0;

    displayInfo(): Promise<void> {
        return fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(`ID: ${data.products[0].id}`);
                console.log(`Title: ${data.products[0].title}`);
                console.log(`Description: ${data.products[0].description}`);
                console.log(`Price: ${data.products[0].price}`);
                console.log(`Discount Percentage: ${data.products[0].discountPercentage}`);
                console.log(`Rating: ${data.products[0].rating}`);

            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });

    }

    getPriceWithDiscount(): number {
        let finalPrice: number;
        if (this.price >= 100) {
            finalPrice = this.discountPercentage += 0.10;
        } else{
            finalPrice = this.price - (this.price * this.discountPercentage);
        }
        return finalPrice;
    }
}




// async function main() {
//     const product = new Product();
//     await product.displayInfo();
//     const discountedPrice = product.getPriceWithDiscount();
//     console.log(`Price after discount: ${discountedPrice}`);
// }

// main();

// fetch('https://dummyjson.com/products')
// .then(response => response.json())
// .then(data => {
//     console.log(`ID: ${data.products[0].id}`);
//     console.log(`Title: ${data.products[0].title}`);
//     console.log(`Description: ${data.products[0].description}`);
//     console.log(`Price: ${data.products[0].price}`);
//     console.log(`Discount Percentage: ${data.products[0].discountPercentage}`);
//     console.log(`Rating: ${data.products[0].rating}`);
//     console.log(`Stock: ${data.products[0].stock}`);
//     console.log(`Tags: ${data.products[0].tags.join(', ')}`);
//     console.log(`Brand: ${data.products[0].brand}`);
//     console.log(`SKU: ${data.products[0].sku}`);
//     console.log(`Weight: ${data.products[0].weight}`);
//     console.log(`Dimensions: ${data.products[0].dimensions.width} x ${data.products[0].dimensions.height} x ${data.products[0].dimensions.depth}`);
//     console.log(`Warranty Information: ${data.products[0].warrantyInformation}`);
//     console.log(`Shipping Information: ${data.products[0].shippingInformation}`);
//     console.log(`Availablity Status: ${data.products[0].availabilityStatus}`);
//     console.log(`
//         Reviews: ${data.products[0].reviews[0].rating} - ${data.products[0].reviews[0].comment}
//         Commenter: ${data.products[0].reviews[0].reviewerName}(${data.products[0].reviews[0].reviewerEmail})
//         on ${data.products[0].reviews[0].date} `);
//     console.log(`Return Policy: ${data.products[0].returnPolicy}`);
//     console.log(`Minimum Order Quantity: ${data.products[0].minimumOrderQuantity}`);
//     console.log(`meta:
//         ${data.products[0].meta.createdAt}
//         ${data.products[0].meta.updatedAt}
//         ${data.products[0].meta.barcode}
//         ${data.products[0].meta.qrCode}
//     `);
//     console.log(`Thumbnail: ${data.products[0].thumbnail}`);
//     console.log(`Images: ${data.products[0].images.join(', ')}`);
//     console.log(`Total Products: ${data.total}`);
//     console.log(`Skip: ${data.skip}`);
//     console.log(`Limit: ${data.limit}`);

// })
// .catch(error => {
//     console.error('Error fetching product data:', error);
// });

