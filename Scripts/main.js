// sidebar

const menuBtn = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
const backBtn = document.getElementById('back')
const searchBtn = document.getElementById('searchBtn')
const searchBar = document.getElementById('searchBar')
const cancelSearch = document.getElementById('cancelSearch')

// let header = document.querySelector('header')



menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0px'
})

backBtn.addEventListener('click', () => {
    sidebar.style.left = '-10000px'
})

searchBtn.addEventListener('click', () => {
    searchBar.style.display = 'flex'
})

cancelSearch.addEventListener('click', () => {
    searchBar.style.display = 'none' 
})


