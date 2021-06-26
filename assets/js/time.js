// times
var cold = document.querySelector('#cold')
var ambiant_temp = document.querySelector('#ambiant_temp')
var ready_at = document.querySelector('#ready_at')
var cooking_time = document.querySelector('#cooking_time')
var second_ferm = document.querySelector('#second_ferm')
var first_ferm = document.querySelector('#first_ferm')
var starter_feed = document.querySelector('#starter_feed')


// ---------- times ----------------
ready_at.oninput = function(e) {
    var time = new Date('2000-01-01 '+e.target.value + ':00')
    // cooking time (1h pour 500g, ...) change with flour quantity
    time.setMinutes(time.m() - 60)
    cooking_time.val(time.h() +':'+ (time.m()<10? '0'+time.m() : time.m()))

    // TODO change with temp
    // second fermentation
    time.setMinutes( time.m() - 60*1.5)
    second_ferm.val(time.h() +':'+ (time.m()<10? '0'+time.m() : time.m()))
    // first fermentation
    time.setMinutes( time.m() - 60*4)
    first_ferm.val(time.h() +':'+ (time.m()<10? '0'+time.m() : time.m()))
    // starter feed
    time.setMinutes( time.m() - 60*3)
    starter_feed.val(time.h() +':'+ (time.m()<10? '0'+time.m() : time.m()))
}

// ----------- util -------------------
function format(number, asFloat) {
    if (typeof asFloat === 'undefined' || asFloat === false)
        return parseInt(number)
    else
        return parseFloat(number).toLocaleString(undefined, {maximumFractionDigits: 1})
}
