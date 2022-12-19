import { CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addFood, removeFood } from "../store/foodSlice";
import { addDrinks, removeDrinks } from "../store/drinkSlice";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  border: "1px solid black",
  padding: "1rem",
  borderRadius: "1rem",
};

const FoodDrinks = () => {
  const foodData = useAppSelector((state) => state.food.foodQuantity);
  const drinksData = useAppSelector((state) => state.drink.drinksQuantity);
  const dispatch = useAppDispatch();

  const addFoodHandler = () => dispatch(addFood(1));
  const removedFoodHandler = () => dispatch(removeFood(1));

  const addDrinksHandler = () => dispatch(addDrinks(1));
  const removeDrinksHandler = () => dispatch(removeDrinks(1));

  return (
    <section
      style={{ display: "flex", flexDirection: "column", rowGap: "1.5rem" }}
    >
      <h2>Food & Drinks</h2>
      <div style={styles}>
        <p>food quantity {foodData}</p>
        <button onClick={addFoodHandler}>Add Food</button>
        <button onClick={removedFoodHandler}>Remove Food</button>
      </div>
      <div style={styles}>
        <p>drinks quantity {drinksData}</p>
        <button onClick={addDrinksHandler}>Add Drinks</button>
        <button onClick={removeDrinksHandler}>Remove Drinks</button>
      </div>
    </section>
  );
};

export default FoodDrinks;
