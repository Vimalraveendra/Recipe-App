let favList= document.getElementById('list');
let mealContainer = document.getElementById('meal-container')


const  getFavMeals=async(e)=>{
    let queryString = e.target.alt
    let  response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${queryString}`)
    let favMeals = await response.json();
    renderMeals(favMeals)
   
}

const addMeals = (meals)=>{
    console.log("meal",meals.strMeal)
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML=`
    <div class="meal-header">
        <span class="meal-title">Random Recipe </span>
        <img src="${meals.strMealThumb}" alt="${meals.strMeal}">
            <div class="meal-body">
                <h4>${meals.strMeal}</h4>
                <button>
                   <i class="fas fa-heart"></i>
                </button>
            </div>
    </div>
  `
 mealContainer.appendChild(meal)
}

const renderMeals = (mealList)=>{
    console.log("meallist",mealList.meals)
  mealList.meals.forEach(meal => {
     addMeals(meal)
 });
  
}

favList .addEventListener('click',getFavMeals)