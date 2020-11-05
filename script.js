setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
};

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
};

setClock();

// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//   const currentDate = new Date()
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//   setRotation(secondHand, secondsRatio)
//   setRotation(minuteHand, minutesRatio)
//   setRotation(hourHand, hoursRatio)
// }

// function setRotation(element, rotationRatio) {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()

// let name = ('AYO')
// console.log(name);


// let kl = 0;
// while (kl <= 5) {
//     // if (i % 2 !==0)
//     console.log(kl);
//     kl++;
// }






































