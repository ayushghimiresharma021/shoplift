const filteredProducts = (productData,term) => {
    return  productData.filter((product) => product.toLowerCase().includes(term.toLowerCase()))
}



export {filteredProducts} ;