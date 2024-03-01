const btnContainer = document.getElementById('btn-container')
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
        btnContainer.appendChild(newBtn)
       });
    })
}

fetchCategories()

