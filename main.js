/**
 Code war stuff messing around
**/

//looping through a function at set intervals

function loopingThrough(min, max, int){
    for (let i = min; i <= max; i += int){
        console.log(i)
    }
}

loopingThrough(2, 10, 2)

//practicing arrow functions

//if there are more basketballs to hoolahoops, return - to many balls?

function ballsToHoops(balls, hoops){
    return (balls > hoops) ? "to many balls" : "it's iight" ;
}

console.log(ballsToHoops(4, 3))