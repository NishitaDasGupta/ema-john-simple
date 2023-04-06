import { getShoppingCart } from "../utilities/fakedb";

const cartProduction = async () => {
    const loadedData = await fetch('products.json');
    const products = await loadedData.json();
    // console.log(products)

    const storedCart = getShoppingCart();
    // console.log(savedCart);
    const savedCart = [];

    for (const id in storedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
    return savedCart;
}

export default cartProduction;