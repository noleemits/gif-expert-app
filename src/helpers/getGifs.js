async function getGifs (category){
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wsP2n0BW1kW7FPxRFQsE5W9iu8tj2jHc&q=${category}&limit=20&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}

export default getGifs;