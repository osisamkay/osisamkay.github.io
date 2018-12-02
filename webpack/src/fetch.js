(function(){
  const host = 'https://api.giphy.com/v1';
  const apiKey = 'OB060zxrMKSeSARlNX33j6ohNTm3DUED&limit=12';
  const form = document.getElementById('form');
  const input = document.getElementById('searchInput');
  const output = document.getElementById('output');
  const images = {
    img0: document.getElementById('img1'),
    img1: document.getElementById('img2'),
    img2: document.getElementById('img3'),
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const gif=document.createElement('img')
    gif.src='../../assets/load.gif'
    output.appendChild(gif);

    axios.get(`${host}/gifs/search?q=${input.value}&api_key=${apiKey}&limit=3`)
    .then(function (response) {
      // handle success
      output.textContent = '';
      // response.data.data
      const { data: { data } } = response;
      data.forEach((gif, index) => {
        images[`img${index}`].src = gif.images.original.url;
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      output.textContent = error;
    })
  });
}());