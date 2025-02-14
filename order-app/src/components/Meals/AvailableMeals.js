import classes from './AvailableMeals.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';


 
const AvailableMeals = () => {
 const [meals, setMeals ] =  useState([])
 const [error, setError]  = useState()
 const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
  const fetchMeals = async () =>{
   const response = await fetch('https://bookingapp-93bb7-default-rtdb.firebaseio.com/meals.json');

   if (!response.ok) {
    throw new Error('something went wrong')
   }
    const responseData = await response.json();

    const loadedMeals = [];

    for (const key in responseData){
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      })
    }
    setMeals(loadedMeals)
    setIsLoading(false)
  }
  
    fetchMeals().catch((error) =>{
      setIsLoading(false)
    setError(error.message)
    });
 
  },[])

if (isloading) {
  return (
    <section className={classes.MealsLoading}>
      <p>Loading....</p>
    </section>
  )
}  

if (error) {
  <section className={classes.MealsError}>
    <p>{error}</p>
  </section>
}

  const mealsList = meals.map((meal) => 
    <MealItem 
      key={meal.id}
      id={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price}
    />)

  return (
    <section className={classes.meals}>
      <Card>
       <ul>
        {mealsList}
       </ul>
       </Card>
    </section>
  )
}

export default AvailableMeals