const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');


let n = 0;


function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        
        imgs[i].style.display = 'none';

    }
    imgs[n].style.display = 'block';
}

changeSlide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n <imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

const imagePath = 'htthttps://fakestoreapi.com/img';

const mainGridTitle  = document.querySelector(".movies-container h1");
const mainGrid = document.querySelector(".movies-container .movies-grid");

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

async function addProductsToDOM() {
  const products = await getProducts();
  mainGridTitle.innerText = "";
  mainGrid.innerHTML = products
    .map(
      (product) => `
        <div class="box-col card">
          <h3>${product.title}</h3>
          <img class="img1" src="${product.image}" alt="" />
          <p>${product.price} Rs</p>
          <a href="#">Shop More</a>
        </div>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  addProductsToDOM();
});
addProductsToDOM();