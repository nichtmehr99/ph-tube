const btnContainer = document.getElementById('btn-container')
const cardContainer = document.getElementById('card-container')
const errorContainer = document.getElementById('error-container')
let selectedCategory = 1000
const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
    .then((res) => res.json())
    .then(({data}) => {
        data.forEach(card => {
            const newBtn = document.createElement('button')
            newBtn.className = 'btn btn-neutral'
            newBtn.innerText = card.category
            newBtn.addEventListener('click', () => fetchDataByCategories(card.category_id))
            btnContainer.appendChild(newBtn)

        });
    })
}

const fetchDataByCategories = (categoryId) => {
    selectedCategory = categoryId
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    fetch(url)
    .then((res) => res.json())
    .then(({data}) => {
        if(data.length === 0 ){
            errorContainer.classList.remove('hidden')
        }else{
            errorContainer.classList.add('hidden')
        }
        cardContainer.innerText = ''
        data.forEach((card) => {
            const newCard = document.createElement('div')
            newCard.innerHTML = `
            <div class="card w-96 h-96 bg-base-100 shadow-xl">
            <figure>
              <img src="${card.thumbnail}" alt="Shoes" />
            </figure>
            <div class="flex space-x-5 p-4">
              <div class="w-14 h-14 mt-4">
                <img class="rounded-full" src="${card.authors[0].profile_picture}" alt="" />
              </div>
              <div>
                <h2 class="text-xl">${card.title}</h2>
                <p>${card.authors[0].profile_name}</p>
                <p>${card.others.views}</p>
              </div>
            </div>
          </div>
            `
            cardContainer.appendChild(newCard)
            
        });
    })
}


fetchCategories()
fetchDataByCategories(selectedCategory)