// sprites and where we'll store them


class Furry {
    constructor(x, y, w, h, img){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img
        this.blocking = false
        this.health = health
        this.strength = strength
        // can possibly add defense if time
    }
    attack()
        executes an attack animation
        if player b.x, y, w, h is == to player a.x, y, w, h  
            attack successful
            reduce player b's health bar = to player a strength
    block()   
    specialAttack()
        executes a different attack animation
        checks 
    beingHit() execute animation
}

//gameplay
function (animate)

function (checkCollision) {
    function for checking barrier 
}

function (attack success) {
    if player b's hitboxes are within player a's hitboxes and (notblocking) => attacksuccess    else attackfail
    if player a' is blocking is = true => attackfail
}

//ui components


//control
function control(furry) {
    switch(key) {
        case w
        case s
        case a
        case d
        case " " - jump
        case "1, shift" - attack
        case "2" - block
        case 3, - special 
    }
}