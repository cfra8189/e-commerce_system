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




