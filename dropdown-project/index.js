const products = [
    { name: 'Laptop', category: 'electronics', price: 800 },
    { name: 'T-shirt', category: 'fashion', price: 20 },
    { name: 'Washing Machine', category: 'home', price: 400 },
    { name: 'Smartphone', category: 'electronics', price: 600 },
    { name: 'Jeans', category: 'fashion', price: 50 },
    { name: 'Fridge', category: 'home', price: 700 }
  ];

const categorySelect = document.getElementById('category');
const productList = document.getElementById('product-list'); 

function displayProducts(filterProducts){
    productList.innerHTML = '';
    filterProducts.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product-item')
        productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>${product.price}:Rs</P>
        `;
        productList.appendChild(productDiv)
        console.log(productDiv)
    });
}

function filterProducts(){
    const selectedCategory = categorySelect.value

    if(selectedCategory === 'all'){
        displayProducts(products)
    }else{
        const filterd = products.filter((product) => product.category === selectedCategory)
        displayProducts(filterd)
    }
}
categorySelect.addEventListener('change', filterProducts)

displayProducts(products)

    

    