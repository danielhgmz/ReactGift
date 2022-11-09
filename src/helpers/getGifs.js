export const getGifs = async category => {
  const api_key = 'HEvxu2ifSsoPanYvrbD6Vr9nXshUncir';
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifts;
};
