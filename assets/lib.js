// NODES
Node.prototype.val = function(value) {
    if (value === undefined) {
        return this.value
    } else {
        if (this.nodeName === 'INPUT') {
            return this.setAttribute('value', value)
        } else {
            return this.innerHTML = value;
        }
    }
}

Date.prototype.h = function(value) {
    if (value === undefined) {
        return this.getHours()
    } else {
        return this.setHours(value)
    }
}
Date.prototype.m = function(value) {
    if (value === undefined) {
        return this.getMinutes()
    } else {
        return this.setMinutes(value)
    }
}

// UTIL
function format(number, asFloat) {
    if (isNaN(number)) {
        return '';
    } else if (typeof asFloat === 'undefined' || asFloat === false) {
        return parseInt(number)
    } else {
        return parseFloat(number).toLocaleString(undefined, {maximumFractionDigits: 1})
    }
}
