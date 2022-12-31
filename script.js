const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.style.color = 'red';
redPara.textContent = "Hey I'm red!";

const blueHeading = document.createElement('h3');
blueHeading.style.color = 'blue';
blueHeading.textContent = "I'm a blue h3!";

container.appendChild(redPara);
container.appendChild(blueHeading);

const pinkDiv = document.createElement('div');
pinkDiv.style.border = 'black solid';
pinkDiv.style.backgroundColor = 'pink';

container.appendChild(pinkDiv);

const pinksChildHeading = document.createElement('h1');
pinksChildHeading.textContent = "I'm in a div";

const pinksChildPara = document.createElement('p');
pinksChildPara.textContent = 'ME TOO!'

pinkDiv.appendChild(pinksChildHeading);
pinkDiv.appendChild(pinksChildPara);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
})

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});