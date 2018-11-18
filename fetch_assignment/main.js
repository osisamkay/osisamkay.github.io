const clickButton = document.querySelector('#searchform');
const content = document.getElementById('search');
let newContent = content.value;
clickButton.addEventListener('click', function(event) {
    event.preventDefault();

    // fetch api
    let api = 'http://api.giphy.com/v1/gifs/search?';
    let apikey = '&api_key=OB060zxrMKSeSARlNX33j6ohNTm3DUED&limit=3'
    let query = `q=${content.value}`;
    const newapi = api + query + apikey;
    async function getgiphy() {
        let response = await fetch(newapi);
        if (response.status == 200) {
            let json = await response.json() // (3)
                //     return json;
            for (let index = 0; index < json.data.length; index++) {

                console.log(json.data[index].images.fixed_width.url);
                let img = document.createElement("img");
                img.src = json.data[index].images.original.url;
                let ol = document.querySelector("#imagesection");
                let li = document.createElement("li");
                li.appendChild(img);
                ol.appendChild(li);
            }
            throw new Error(response.status);
        }

        loadJson('no-such-user.json')
            .catch(alert); // Error: 404 (4)

    }
    getgiphy();

})