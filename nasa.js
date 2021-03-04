//Cambia todo lo del light mode
function changeBodyBg(color, color2){
    document.body.style.background = color;
    document.getElementById("explicacion").style.color = color2;
    document.getElementById("date").style.color = color2;
    document.getElementById("results").style.color = color2;
    document.getElementById("titleMain").style.color = color2;
    document.getElementById("logo").src ="https://fontmeme.com/permalink/210304/da534ab0d3957077c289cc6250e5e6fa.png";
}
//Cambia todo el fondo (solo el fondo y si le pusimos light mode antes igual se ve la letra)
document.getElementById('changeBack').addEventListener(
    'click',
    function(){
      var imagen = document.body.style.backgroundImage;
      document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2019/01/02/03/58/background-3907970_1280.jpg")';
    });


//mi apikey de la nasa:
const apiKey = "hX1Ltyal9eUgo8OBJ4mJfdfYAbD6waxXJSNnfczF";
let searchInput = document.getElementById("search");
let searchButton = document.getElementById("searchButton");
let result = document.getElementById("results");
let explanation = document.getElementById("explicacion");
let dates = document.getElementById("date");
let imagen = document.getElementById("createImg")

//Trae título, fecha, explicación todo de la API
function search(){
    async function newSearch(title){
        let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const response = await fetch(url); //Espera y devuelve promesa
        const info = await response.json(); //Devuelve promesa y datos
        console.log("Datos: ", info); //Es como result
        return info;
    }
    let title = newSearch(searchInput.value);
    title.then(response =>{
        results.textContent  = `${response.title}` //Imprime título
    })
    let dateDay = newSearch(dates.value);
    dateDay.then(response =>{
        date.textContent = `Today's Day: ${response.date}` //Imprime fecha
    })

    let explanations = newSearch(newExp.value);
    explanations.then(response =>{
        explicacion.textContent = `${response.explanation}` //Imprime explicación
    })
}

searchButton.addEventListener("click", ()=>{
    search();
})

