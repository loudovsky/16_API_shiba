const images = document.querySelector('.images');
const select = document.querySelector('.select');

function generate() {
    fetch(`http://shibe.online/api/shibes?count=${select.value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    images.innerHTML= "";
    data.forEach(function(oneImage){
        images.innerHTML += `<div class="image"><img src="${oneImage}" alt="shiba, le joli chien"></div>`
    })
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})
}

generate()

select.addEventListener('change', function(){
    generate()
})