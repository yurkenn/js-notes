// Storage Controller 
const StorageController = (function () {



})()

// Product Controller 
const ProductController = (function () {
    //private 
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }
    return {
        //public
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        getProductById: function (id) {
            let product = null;
            data.products.forEach(function (prd) {
                if (prd.id == id) {
                    product = prd;
                }
            })
            return product;
        },
        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },
        getCurrentProduct: function(){
            return data.selectedProduct
        },
        addProduct: function (name, price) {
            let id;
            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }
            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        getTotal: function () {
            let total = 0;
            data.products.forEach(function (item) {
                total += item.price;
            });
            data.totalPrice = total;
            return data.totalPrice;
        }
    }

})();

// Ui Controller 
const UIController = (function () {

    const Selectors = {
        productList: "#item-list",
        addButton: ".addBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalTl: '#total-tl',
        totalDolar: "#total-dolar"
    }

    return {
        createProductList: function (products) {
            let html = "";

            products.forEach(prd => {
                html += `
                <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price} $</td>
                <td class="text-end">
                    <i class="fa-solid fa-pen-to-square edit-product"></i>
                </td>
                </tr>
                `;
            });
            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelector: function () {
            return Selectors;
        },
        addProduct: function (prd) {
            document.querySelector(Selectors.productCard).style.display = 'block';
            var item = `
            <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price} $</td>
                <td class="text-end">
                    <i class="fa-solid fa-pen-to-square edit-product"></i>
                </td>
                </tr>
            `;
            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs: function () {
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal: function (total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total * 14
        },
        addProductForm: function(){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
            
        }
    }


})()

// App Controller 
const App = (function (ProductCtrl, UICtrl) {

    const UISelectors = UIController.getSelector();

    //Load Event Listeners
    const loadEventListeners = function () {
        //add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);

        //edit product 
        document.querySelector(UISelectors.productList).addEventListener('click', productEditSubmit)

    }

    const productAddSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            //add item to list 
            UIController.addProduct(newProduct);

            //get totla
            const total = ProductCtrl.getTotal();

            //show total
            UIController.showTotal(total);


            //clear inputs
            UIController.clearInputs();
        }

        e.preventDefault();
        console.log(productName, productPrice);
    }

    const productEditSubmit = function (e) {

        if (e.target.classList.contains('edit-product')) {
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //get selected product
            const product = ProductController.getProductById(id);


            //set current product
            ProductCtrl.setCurrentProduct(product);

            // add product to UI
            UICtrl.addProductForm();

        }


        e.preventDefault();
    }

    return {
        init: function () {
            console.log("starting app...");
            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }



            //load event listeners
            loadEventListeners()
        }
    }

})(ProductController, UIController);

App.init();