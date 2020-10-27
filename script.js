let favList= document.getElementById('list');
let mealContainer = document.getElementById('meal-container')

 const  getMeals=async()=>{
   
    let  response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
    let favMeals = await response.json();
    renderMeals(favMeals)
 }
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
                <button>
                   <i class="fas fa-heart"></i>
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

favList .addEventListener('click',getFavMeals)