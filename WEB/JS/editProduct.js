
$(function(){

    // Edit the color
    document.getElementById('product-colors').addEventListener('click',function(){
        const colorDisplay = (colors) => {
            const colorSideBar = document.querySelector('.aside-content');
            colorSideBar.innerHTML = "";
            for (let color of colors){
                colorSideBar.innerHTML +=  `<a class="color-list" id="${color.id}" style="background:${color.hexColorValue}">${color.name}</a>`;
            }
            var colorSideBars = document.querySelector('.aside-content');
            var colorsChosen = colorSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(colorsChosen, function(colorChosen){
                colorChosen.addEventListener('click', function(){
                  let id = colorChosen.id;
                  console.log(id);
                  fetch(url + 'model.product/' + productId + "/color/" + id, {
                    'method': 'PUT'
                  })
                  .then(fetchProduct(productId))
                  .catch(error => console.log("Error: " + error))
                });
            });
        }
            /*
            var colorChosen = document.getElementsByClassName().value;
            colorsChosen.color =
            fetch(url + 'model.product/1/color/2',{
                'method': 'PUT',
                'headers': new Headers({'Content-Type': 'application/json'})
            }).then(result => result.json())
            .then(response => console.log('Success', response))
            .catch(error => console.log('error', error));
            */
        fetch(url + 'model.color')
            .then(response => response.json())
        .then(json => colorDisplay(json))
        .catch(error => console.log(error));
    })

    //Edit the material
    document.getElementById('product-materials').addEventListener('click',function(){
        const materialDisplay = (materials) => {
            const materialSideBar = document.querySelector('.aside-content');
            materialSideBar.innerHTML = "";
            for (let material of materials){
                materialSideBar.innerHTML +=  `<a class="material-list" id="${material.id}" >${material.name}</a>`;
            }
            var materialSideBars = document.querySelector('.aside-content');
            var materialsChosen = materialSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(materialsChosen, function(materialChosen){
                materialChosen.addEventListener('click', function(){
                    document.getElementById("product-materials-text-field").textContent += `, ${materialChosen.textContent}`;
                })});
    }
        fetch(url + 'model.material')
            .then(response => response.json())
        .then(json => materialDisplay(json))
        .catch(error => console.log(error));
    })

    //Edit customer
    document.getElementById('customer').addEventListener('click',function(){
        const customerDisplay = (customers) => {
            const customerSideBar = document.querySelector('.aside-content');
            customerSideBar.innerHTML = "";
            for (let customer of customers){
                customerSideBar.innerHTML +=  `<a class="customer-list" id="${customer.id}" >${customer.name}</a>`;
            }
            var customerSideBars = document.querySelector('.aside-content');
            var customersChosen = customerSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(customersChosen, function(customerChosen){
                customerChosen.addEventListener('click', function(){
                    document.getElementById("customer-text-field").textContent += `, ${customerChosen.textContent}`;
                })});
        }
        fetch(url + 'model.customer')
            .then(response => response.json())
        .then(json => customerDisplay(json))
        .catch(error => console.log(error));
    })

    //Edit project
    document.getElementById('project').addEventListener('click',function(){
        const projectDisplay = (projects) => {
            const projectSideBar = document.querySelector('.aside-content');
            projectSideBar.innerHTML = "";
            for (let project of projects){
                projectSideBar.innerHTML +=  `<a class="project-list" id="${project.id}" >${project.name}</a>`;
            }
            var projectSideBars = document.querySelector('.aside-content');
            var projectsChosen = projectSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(projectsChosen, function(projectChosen){
                projectChosen.addEventListener('click', function(){
                    document.getElementById("project-text-field").textContent += `, ${projectChosen.textContent}`;
                })});
        }
        fetch(url + 'model.project')
            .then(response => response.json())
        .then(json => projectDisplay(json))
        .catch(error => console.log(error));
    })

    //Edit outfit
    document.getElementById('outfit').addEventListener('click',function(){
        const outfitDisplay = (outfits) => {
            const outfitSideBar = document.querySelector('.aside-content');
            outfitSideBar.innerHTML = "";
            for (let outfit of outfits){
                outfitSideBar.innerHTML +=  `<a class="outfit-list" id="${outfit.id}" >${outfit.name}</a>`;
            }
            var outfitSideBars = document.querySelector('.aside-content');
            var outfitsChosen = outfitSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(outfitsChosen, function(outfitChosen){
                outfitChosen.addEventListener('click', function(){
                    document.getElementById("outfit-text-field").textContent += `, ${outfitChosen.textContent}`;
                })});
        }
        fetch(url + 'model.outfit')
            .then(response => response.json())
        .then(json => outfitDisplay(json))
        .catch(error => console.log(error));
    })

    //Edit price group
    document.getElementById('product-price-group').addEventListener('click',function(){
        const productPriceGroupDisplay = (productPriceGroups) => {
            const productPriceGroupSideBar = document.querySelector('.aside-content');
            productPriceGroupSideBar.innerHTML = "";
            for (let productPriceGroup of productPriceGroups){
                productPriceGroupSideBar.innerHTML +=  `<a class="product-price-group-list" id="${productPriceGroup.id}" >${productPriceGroup.name}</a>`;
            }
            var productPriceGroupSideBars = document.querySelector('.aside-content');
            var productPriceGroupsChosen = productPriceGroupSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(productPriceGroupsChosen, function(productPriceGroupChosen){
                productPriceGroupChosen.addEventListener('click', function(){
                    document.getElementById("product-price-group-text-field").textContent += `, ${productPriceGroupChosen.textContent}`;
                })});
        }
        fetch(url + 'model.pricegroup')
            .then(response => response.json())
        .then(json => productPriceGroupDisplay(json))
        .catch(error => console.log(error));
    })

    //edit product group
    document.getElementById('product-group').addEventListener('click',function(){
        const productGroupDisplay = (productGroups) => {
            const productGroupSideBar = document.querySelector('.aside-content');
            productGroupSideBar.innerHTML = "";
            for (let productGroup of productGroups){
                productGroupSideBar.innerHTML +=  `<a class="product-price-group-list" id="${productGroup.id}" >${productGroup.name}</a>`;
            }
            var productGroupSideBars = document.querySelector('.aside-content');
            var productGroupsChosen = productGroupSideBars.getElementsByTagName("a");
            Array.prototype.forEach.call(productGroupsChosen, function(productGroupChosen){
                productGroupChosen.addEventListener('click', function(){
                    document.getElementById("product-group-text-field").textContent += `, ${productGroupChosen.textContent}`;
                })});
        }
        fetch(url + 'model.product')
            .then(response => response.json())
        .then(json => productGroupDisplay(json))
        .catch(error => console.log(error));
    })

    //Edit name
    document.getElementById('product-name').addEventListener('click',function(event) {
        this.removeEventListener('click', arguments.callee);
        var nameTextField = document.getElementById('product-name');
        nameTextField.textContent = "Enter your new product name:";
        var createTextInput = document.createElement('input');
        createTextInput.id = 'new-product-name';
        nameTextField.appendChild(createTextInput);
        document.getElementById('new-product-name').addEventListener('click',() =>{
            document.getElementById('new-product-name').addEventListener('keyup',(event) => {
                if (event.keyCode === 13) {
                    if (!document.getElementById('new-product-name').value){
                        alert("Please write the new name");
                        this.addEventListener('click', arguments.callee);
                    } else {
                        nameTextField.innerHTML = `Name:
                        <p class="text-field js--product-name" id="name-text-field">${document.getElementById("new-product-name").value}</p>`;
                        this.addEventListener('click', arguments.callee);
                    }
                }
        })});
    })

    //Edit description
    document.getElementById('product-desc').addEventListener('click',function(event) {
        this.removeEventListener('click', arguments.callee);
        var descTextField = document.getElementById('product-desc');
        descTextField.textContent = "Enter your new product description:";
        var createTextInput = document.createElement('input');
        createTextInput.id = 'new-product-desc';
        descTextField.appendChild(createTextInput);
        document.getElementById('new-product-desc').addEventListener('click',() => {
            document.getElementById('new-product-desc').addEventListener('keyup',(event) => {
                if (event.keyCode === 13) {
                    console.log(document.getElementById('new-product-desc').value);
                    if (!document.getElementById('new-product-desc').value){
                        alert("Please write the new description");
                        this.addEventListener('click', arguments.callee);
                    } else {
                        descTextField.innerHTML = `Description:
                        <p class="text-field js--product-description" id="product-desc-text-field"">${document.getElementById("new-product-desc").value}</p>`;
                        this.addEventListener('click', arguments.callee);
                    }
                }
            })});
    })
})
