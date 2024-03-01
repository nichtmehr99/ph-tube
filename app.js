const btnContainer = document.getElementById('btn-container')
const cardContainer = document.getElementById('card-container')
let selectedCategory = 1000
const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
    .then(res => res.json())
    .then(({data}) => {
       data.forEach(card => {
        console.log(card)
        const newBtn = document.createElement('button')
        newBtn.className = 'btn btn-neutral'
        newBtn.innerText = card.category
        // to get data by its category
        newBtn.addEventListener('click', () => fetchDataByCategories(card.category_id))
        /* ------ */
        btnContainer.appendChild(newBtn)
       });
    })
}
//  aita hoilo dynamically category er data gula re show korar jonno
const fetchDataByCategories = (categoryId) => {
    selectedCategory = categoryId
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    fetch(url)
    .then((res) => res.json())
    .then(({data}) => {
        // must to know to get every time show the data specific for that category
        cardContainer.innerHTML = ''
        data.forEach((video) => {
            const newCard = document.createElement('div')
            newCard.innerHTML = `
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="shape.jpeg" alt="Shoes" />
            </figure>
            <div class="flex space-x-5 p-4">
              <div class="w-14 mt-4">
                <img class="rounded-full" src="noha.jpeg" alt="" />
              </div>
              <div>
                <h2 class="text-xl">Shoes!</h2>
                <p>If a dog chews</p>
                <p>Views</p>
              </div>
            </div>
          </div>

            `
        cardContainer.appendChild(newCard)
        });
    })


}  

fetchDataByCategories(selectedCategory)
fetchCategories()

