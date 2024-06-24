const form = document.querySelector('form');
let msgContainer = document.querySelector('.msg-Container')
let hideContainer = document.querySelector('.container')





form.addEventListener('submit', (e)=> {
  e.preventDefault();
  hideContainer.classList.add('hide')
  msgContainer.classList.remove('hide')
})






