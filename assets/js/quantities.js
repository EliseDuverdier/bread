// definitions
let flourField = document.querySelector('#flour')
let waterField = document.querySelector('#water')
let hydrationField = document.querySelector('#hydration')
let saltMinField = document.querySelector('#salt-min')
let saltMaxField = document.querySelector('#salt-max')
let starterField = document.querySelector('#starter_weight')
let starterHydrationField = document.querySelector('#starter_hydration')
let totalWeightField = document.querySelector('#total_weight')

const flourDefault = 500
const starterHydrationDefault = 1
const desiredHydrationDefault = .7
const saltMinPercent = 2 / 100
const saltMaxPercent = 3.5 / 100
const starterPercent = 30 / 100

// calculations
calc(flourDefault, desiredHydrationDefault*100, starterHydrationDefault*100)

flourField.oninput = function (e) {
    calc(e.target.value, hydrationField.val(), starterHydrationField.val())
}
hydrationField.oninput = function (e) {
    calc(flourField.val(), e.target.value, starterHydrationField.val())
}
starterHydrationField.oninput = function (e) {
    calc(flourField.val(), hydrationField.val(), e.target.value)
}

function calc(flour, desiredHydration, starterHydration) {
    flour = parseInt(flour)
    desiredHydration = parseInt(desiredHydration)
    starterHydration = parseInt(starterHydration)
    // console.log('flour: '+flour +' /  desiredHydration: '+desiredHydration +' /  starterHydration: '+starterHydration)

    saltMinField.val(format(flour * saltMinPercent, true))
    saltMaxField.val(format(flour * saltMaxPercent, true))

    let starterWeight = flour * starterPercent
    starterField.val(format(starterWeight))

    let flourInStarter = starterWeight * (1/(1 + (starterHydration/100)))
    let waterInStarter = (1-(1/(1 + (starterHydration/100)))) // = starterHydration/(starterHydration+100)
    let newWater = (flour + flourInStarter) * (desiredHydration/100) - starterWeight * waterInStarter
    waterField.val(format(newWater))

    totalWeightField.val(format(flour + newWater + starterWeight));
}
