let favList= document.getElementById('list');
let mealContainer = document.getElementById('meal-container')
let input = document.getElementById('input-text');
let searchBtn = document.getElementById('search')

 const  getMeals=async()=>{
    let  response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
    let favMeals = await response.json();
    renderMeals(favMeals)
 }

// when webpage initializes invoking the meals with category chicken
 getMeals()

const  getFavMeals=async(e)=>{
    let queryString = e.target.alt ||e.target.innerText;
    let  response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${queryString}`)
    let favMeals = await response.json();
    renderMeals(favMeals)
   
}


const addMeals = (meals)=>{
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML=`
    <div class="meal-header">
        <span class="meal-title">Random Recipe </span>
        <img src="${meals.strMealThumb}" alt="${meals.strMeal}">
            <div class="meal-body">
                <h4>${meals.strMeal.length < 20 ? `${meals.strMeal}` : `${meals.strMeal.substring(0, 20)}...`}</h4>
                <button id="fav">
                   <i class="far fa-heart"></i>
                </button>
            </div>
    </div>
  `
 mealContainer.appendChild(meal)
}

const renderMeals = (mealList)=>{

    mealContainer.innerHTML="";
  mealList.meals.forEach(meal => {
     addMeals(meal)
 });
  
}

const searchMeals= async()=>{
    let searchInput = input.value
    let  response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    let favMeals = await response.json();
    if(favMeals.meals){
        mealContainer.innerHTML="";
        renderMeals(favMeals )
        
    }
    searchInput ="";
    
}

favList .addEventListener('click',getFavMeals)
searchBtn.addEventListener('click',searchMeals)