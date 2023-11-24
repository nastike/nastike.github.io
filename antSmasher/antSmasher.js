const WORLD_SIZE = 500;
const $container = document.getElementById('container');

function generateRandomValueBetween(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}
function generateRandomDirection() {
  return Math.floor(Math.random() * 3) - 1;
}

function initAnts(numberOfAnts = 10) {
  const data = [];
  for (let i = 0; i < numberOfAnts; i++) {
    const x = generateRandomValueBetween(0, WORLD_SIZE);
    const y = generateRandomValueBetween(0, WORLD_SIZE);
    const dx = generateRandomDirection();
    const dy = generateRandomDirection();

    const element = document.createElement('div');
    element.classList.add('ant');
    $container.appendChild(element);

    const ant = { x, y, dx, dy, element };
    data.push(ant);
  }
  return data;
  // console.log(data);
}

function plotAnts(ants) {
  ants.forEach((ant) => {
    ant.element.style.left = `${ant.x}px`;
    ant.element.style.top = `${ant.y}px`;
  });
}
function updateAnts(ants) {
  ants.forEach((ant) => {
    ant.x += ant.dx;
    ant.y += ant.dy;

    if (ant.x < 0) {
      ant.x = 0;
      ant.dx = -ant.dx;
    }
    if (ant.x > WORLD_SIZE) {
      ant.x = WORLD_SIZE;
      ant.dx = -ant.dx;
    }

    if (ant.y < 0) {
      ant.y = 0;
      ant.dy = -ant.dy;
    }
    if (ant.y > WORLD_SIZE) {
      ant.y = WORLD_SIZE;
      ant.dy = -ant.dy;
    }
  });
}

const ants = initAnts();
plotAnts(ants);

setInterval(() => {
  updateAnts(ants);
  plotAnts(ants);
}, 60);
