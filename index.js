function scuberGreetingForFeet(travelDistanceFeet){
  let greeting
  if (travelDistanceFeet < 400) {
    greeting = 'This one is on me!'
  } else if (travelDistanceFeet > 400 && travelDistanceFeet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  } else if (travelDistanceFeet > 2500) {
    greeting = 'No can do.'
  }
  return greeting
}

function ternaryCheckCity(cityName){
  let cityConfirmation
  if (cityName === 'NYC'){
    cityConfirmation = 'Ok, sounds good.'
  } else {
    cityConfirmation = 'No go.'
  }
  return cityConfirmation
}

function switchOnCharmFromTip(tipAmount){
  let thankYou
  if (tipAmount === 'generous'){
    thankYou = 'Thank you so much.'
  }else if (tipAmount === 'not as generous'){
    thankYou = 'Thank you.'
  } else {
    thankYou = 'Bye.'
  }
  return thankYou
}