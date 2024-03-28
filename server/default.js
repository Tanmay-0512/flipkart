// import { products } from "./constants/data.js";
// import Product from "./model/product.schema.js";

// const DefaultData = () =>{
//     try {
//         Product.insertMany(products);
//         console.log('Data imported succesfully');
//     } catch (error) {
//         console.log('Error while inserting default data',error.message);
//     }
// }

// export default DefaultData;
import Product from "./model/product.schema.js";

const DefaultData = async () => {
    try {
        // Loop through each product in the array
        for (const product of products) {
            // Check if a product with the same id already exists in the database
            const existingProduct = await Product.findOne({ id: product.id });

            // If a product with the same id exists, update it
            if (existingProduct) {
                await Product.updateOne({ id: product.id }, { $set: product });
                console.log(`Product with id '${product.id}' updated successfully`);
            } else {
                // If the product doesn't exist, insert it
                await Product.create(product);
                console.log(`Product with id '${product.id}' inserted successfully`);
            }
        }

        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;