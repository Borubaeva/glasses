const ourBrands=document.querySelector('#ourBrands')

const cart=document.querySelector('#cart')

const root=document.querySelector('.root')

const btns=document.querySelectorAll('button')

const glasses=document.querySelector('#glasses')

const categories=document.querySelector('.categories')

const _baseUrl='https://65c73adce7c384aada6e4cf5.mockapi.io/glasses/'

async function getProducts(){
    const res=await fetch(_baseUrl)
    const data= await res.json()
    dataBase=data
    console.log(data);
    showProducts(data)
 
}


function showProducts(arr){
    root.innerHTML=''
    for (const product of arr) {
        root.innerHTML+=`
        <div class="card" style="width: 18rem; " onclick='getItemById(${product.id})'>
        <img class="card-img-top" src="${product.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.category}</p>
          <h6>${product.price}$</h6>
        </div>
      </div>
        `
    }
}

btns[2].onclick=()=>{
    getProducts()
}




btns[0].onclick=()=>{


    // const sunGlasses=_baseUrl.filter(product=>product.category==='sunglasses')
    // showProducts(sunGlasses)
}




function showOneCard(obj){
    root.innerHTML=''
    glasses.innerHTML=''
    categories.innerHTML=''
    categories.innerHTML+=`
    <div  class="card" style="width: 50%; ">
    <img class="card-img-top" src="${obj.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${obj.title}</h5>
      <p class="card-text">${obj.category}</p>
      <h4>${obj.price}$</h4>
      <a href="#" onclick='addItemToCard(${obj.id})' class="btn btn-primary">Добавить в корзину</a>
    </div>
  </div>
    `
  }

  cart.onclick=()=>{
    root.innerHTML=''
    glasses.innerHTML=''
    categories.innerHTML=''

  }

