// const currentDate = document.querySelector('.current-date')
// const calendarDays = document.querySelector('.days')
// const prev = document.querySelector('#prev')
// const next = document.querySelector('#next')

// let date = new Date()
// currYear = date.getFullYear()
// currMonth = date.getMonth()

// // console.log(date,currYear,currMonth)

// const Months = ['January', 
//                 'February', 
//                 'March', 
//                 'April', 
//                 'May', 
//                 'June', 
//                 'July', 
//                 'August', 
//                 'September', 
//                 'October', 
//                 'November', 
//                 'December']

// const renderCalendar = () => {
//     let firstDayofMonth = new Date(currYear, currMonth, 1).getDate()
//     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate()
//     lastDayofMonth = new Date(currYear, currMonth , lastDateofMonth).getDate()
//     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate()
//     let eachDate = "";

//     for(let i = firstDayofMonth; i > 0; i--) {
//         eachDate += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
//     }

//     for (let i=1; i<= lastDateofMonth; i++) {
//         eachDate += `<li>${i}</li>`
//     }
    
//     for (let i=lastDayofMonth; i<6; i++) {
//         eachDate += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
//     }

//     //render header part
//     currentDate.innerText = `${Months[currMonth]} ${currYear}`
//     //render each day
//     calendarDays.innerHTML = eachDate
// }
// renderCalendar()

// //adding functionality to previous and next buttons

// prev.addEventListener('click', ()=> {    
//     currMonth--
//     renderCalendar()
// })
// next.addEventListener('click', ()=> {
//     currMonth++
//     renderCalendar()
// })


const calendarpane = document.getElementById('calendarpane')
const closecalendar = document.getElementById('calendarCancel')
const datepicker = document.getElementById('datepicker')
const startdate = document.getElementById('startDate')
const choosetdate = document.getElementById('chooseDate')
const startbtn = document.getElementById('start')


startdate.addEventListener('click', () => {
    console.log('check in date clicked')
    calendarpane.style.top = '0';
})

closecalendar.addEventListener('click', () => {
    calendarpane.style.top = '-10000px'
})

choosetdate.addEventListener('click', () => {
    let selectedDate = datepicker.value
    calendarpane.style.top = '-10000px'
    startbtn.innerText = selectedDate
    console.log(`user chose ${selectedDate}`)
})