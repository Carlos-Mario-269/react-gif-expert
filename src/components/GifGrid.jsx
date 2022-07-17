import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs(category);

  console.log({images, isLoading});


    
  return (
    <>
      <h3>{category}</h3>
      <div>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
