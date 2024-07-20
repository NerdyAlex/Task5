// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(reponse => reponse.json())
//     .then(data => console.log(data))
// .catch(error => console.error(error))


async function fetchData(){
    try {
        const name = document.getElementById("name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const info = document.getElementById("info");

        if(!response.ok){
            info.textContent = "Pokemon Not Found";
            image.style.display = "none"
            return
            
        }

        let data = await response.json();
        const image = document.getElementById("image");
        let dataImage = data.sprites.front_default
        info.textContent = "" 
        image.src = dataImage
        image.style.display = "block"

    }

    catch(error){
        console.error(error)
        image.style.display = "none"
    }

}
