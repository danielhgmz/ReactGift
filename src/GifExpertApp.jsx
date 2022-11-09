import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = data => {
    if (categories.find(item => item.toUpperCase() === data.toUpperCase()))
      return;

    setCategories([data, ...categories]);
    //setCategories(cat => [...cat, 'pokemon']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* imput */}
      <AddCategory onAddCategory={onAddCategory}></AddCategory>

      {/* listado */}
      {categories.map(category => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};
