import { useState } from "react";

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  /*para poder hacer que el input cambie 
  hay que desestructurar el target y pasarle el
  target.value al setInputValue*/
  const handleChange = ({ target }) => {
    // console.log(target)
    setInputValue(target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    //   console.log(inputValue);

    //eliminar los espacios en blanco de los lados
    if(inputValue.trim().length <= 1)return;
    // setCategories((categories) => [inputValue, ...categories]);
    
    setInputValue('');
    onNewCategory(inputValue.trim())


  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscador..."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddCategory;
