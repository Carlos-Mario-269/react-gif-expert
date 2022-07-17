import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //validar que los nombres sean unicos
    if (categories.includes(newCategory)) return;

    //insertar una categoria nueva
    // setCategories([...categories,'Dragon Ball']);
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* El onNewCategory es simplementa una propiedad del componente */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* <button onClick={onAddCategory}> Agregar </button> */}{" "}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
