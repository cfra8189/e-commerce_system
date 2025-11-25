import

async function main() {
    const product = new Product();
    await product.displayInfo();
    const discountedPrice = product.getPriceWithDiscount();
    console.log(`Price after discount: ${discountedPrice}`);
}

main();

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(`ID: ${data.products[0].id}`);
        console.log(`Title: ${data.products[0].title}`);
        console.log(`Description: ${data.products[0].description}`);
        console.log(`Price: ${data.products[0].price}`);
        console.log(`Discount Percentage: ${data.products[0].discountPercentage}`);
        console.log(`Rating: ${data.products[0].rating}`);
        console.log(`Stock: ${data.products[0].stock}`);
        console.log(`Tags: ${data.products[0].tags.join(', ')}`);
        console.log(`Brand: ${data.products[0].brand}`);
        console.log(`SKU: ${data.products[0].sku}`);
        console.log(`Weight: ${data.products[0].weight}`);
        console.log(`Dimensions: ${data.products[0].dimensions.width} x ${data.products[0].dimensions.height} x ${data.products[0].dimensions.depth}`);
        console.log(`Warranty Information: ${data.products[0].warrantyInformation}`);
        console.log(`Shipping Information: ${data.products[0].shippingInformation}`);
        console.log(`Availablity Status: ${data.products[0].availabilityStatus}`);
        console.log(`Return Policy: ${data.products[0].returnPolicy}`);
        console.log(`Minimum Order Quantity: ${data.products[0].minimumOrderQuantity}`);
        console.log(`Meta:${data.products[0].meta.createdAt} ${data.products[0].meta.updatedAt} ${data.products[0].meta.barcode} ${data.products[0].meta.qrCode}`);
        console.log(`Thumbnail: ${data.products[0].thumbnail}`);
        console.log(`Images: ${data.products[0].images.join(', ')}`);
        console.log(`Total Products: ${data.total}`);
        console.log(`Skip: ${data.skip}`);
        console.log(`Limit: ${data.limit}`);
        console.log(`Reviews: ${data.products[0].reviews[0].rating} - ${data.products[0].reviews[0].comment} Commenter: ${data.products[0].reviews[0].reviewerName} ${data.products[0].reviews[0].reviewerEmail} on ${data.products[0].reviews[0].date}`);
    })
    .catch(error => {
        console.error('Error fetching product data:');
    });

