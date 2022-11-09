import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, IsLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {IsLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

{
  /* image.map(({id,title}) => {
        return <li key={id}>{title}</li>
      }) 
      {images.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })}

        <GifItem key={id} title={title} url={url} />
      */
}
