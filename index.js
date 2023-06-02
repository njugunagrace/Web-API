const produ=document.getElementById('products');

const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response=>response.json())
    .then(respose=>respose)
    .catch(error=>error)
}

const displayProducts=async()=>{
    const products=await getProducts();

    products.products.map(x=>{
        let div=document.createElement('div');
        let image=document.createElement('img');
        let title=document.createElement('h2');
        let rating=document.createElement('p')
        let price=document.createElement('p');
        let button=document.createElement('button');
  


        image.src=x.thumbnail;
        title.innerHTML=x.title;
        rating.innerHTML=x.rating;
        price.innerHTML=x.price;
        button.innerHTML='Add To Cart';
      

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(rating);
        div.appendChild(price);
        div.appendChild(button);
    

        div.setAttribute('key',x.id);

        div.setAttribute('class','prods');
        produ.appendChild(div);

    })
}
displayProducts();