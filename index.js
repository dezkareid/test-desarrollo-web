function sayHello() {
  alert('Hi Everyone')
}

function setup() {
  const button = document.getElementById('sayHello')

  button.addEventListener('click', sayHello)
}

window.addEventListener('load', setup)
