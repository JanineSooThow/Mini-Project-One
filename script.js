let APIdata = []; //first array for collection
let filteredData = [] //second array to filter through the cards 

//fetching API data
fetch('https://api.thedogapi.com/v1/breeds')
.then((response) => response.json())
.then((json) => {   
    console.log(json)
    APIdata = json
    filteredData = json
    showCards()
})

/*The following code provides information on the 'breed_group' only in the terminal
fetch('https://api.thedogapi.com/v1/breeds')
  .then((response) => response.json())
  .then((json) => {
    const breedGroups = json.map((dogs) => dogs.breed_group);
    console.log(breedGroups);
  })
  .catch((error) => console.error(error)); */

.catch((error) => console.log(error)); //handles the error or .catch(error => {}); 


  //clear existing cards from the container
  /*mainDiv.innerHTML = ''; */
  
  
  const showCards = ()=>{
    mainDiv.replaceChildren() 
  //the forEach method is an iterator (goes through each item).
  filteredData.forEach((dogs) => {  
    const template = document.getElementById('card-template').content.cloneNode(true)
    template.querySelector('.card-img-top').src = dogs.image.url;
    template.querySelector('.card-title').innerText = dogs.name; 
    template.querySelector('.card-breedgroup').innerText = dogs.breed_group;
    template.querySelector('.card-textbred').innerText = 'Bred for:' + " " + dogs.bred_for;
    template.querySelector('.card-temperament').innerText = 'Temperament:' + " " + dogs.temperament;
    template.querySelector('.text-lifespan').innerText = 'Life Span:' + " " + dogs.life_span;

  mainDiv.appendChild(template)

  })
}
 
//filters the cards by clicking on the buttons 
 const filterSelection = (selectedBreed) => {
  if (selectedBreed !== 'all') {
    filteredData = APIdata.filter((dogs) => {
      return dogs.breed_group === selectedBreed;

    });
  } else {
    filteredData = APIdata;
  }
//call the showCards function to display the filtered array 
  showCards();

 } 

//search container that filters by dog name when you type in the names of the dogs - To NOT REMOVE - for learning 
/*function myFunction() {
  var input, filter, cardContainer, cards, dogname, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("mainDiv") 
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i ++) {
    dogname = cards[i].querySelector(".card-body h5.card-title");
    if (dogname.innerText.toUpperCase().indexOf(filter) !== -1) {
       cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
} 
*/ 
/* typing in the name of the dog in the search bar and using the search button to find the dog name */
const searchButton = document.getElementById('search');
searchButton.addEventListener('click', () => {
  myFunction();
});

function myFunction() {
  const input = document.getElementById('myFilter');
  const filter = input.value.toUpperCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const name = card.querySelector('.card-title').innerText.toUpperCase();
    if (name.indexOf(filter) > -1) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}




