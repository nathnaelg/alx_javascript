#!/usr/bin/node
// create function to change DOM
function changeMode (size, weight, transform, background, color) {
    const myStyles = `
      font-size: ` + size + ';' +
          'font-weight: ' + weight + ';' +
          'text-transform: ' + transform + ';' +
          'background-color: ' + background + ';' +
          'color: ' + color + ';';
  
    const element = document.querySelector('body');
  
    element.style.cssText = myStyles;
  }
  
  function main () {
    const spooky = () => changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = () => changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = () => changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const par = document.createElement('p');
    par.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(par);
    const btnsp = document.createElement('button');
    btnsp.addEventListener('click', spooky);
    btnsp.innerText = 'Spooky';
    const btnda = document.createElement('button');
    btnda.addEventListener('click', darkMode);
    btnda.innerText = 'Dark Mode';
    const btnsc = document.createElement('button');
    btnsc.addEventListener('click', screamMode);
    btnsc.innerText = 'Scream Mode';
    document.body.appendChild(btnsp);
    document.body.appendChild(btnda);
    document.body.appendChild(btnsc);
  }
