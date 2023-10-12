//STRING METHODS
const variable1 = 'ILoveYou';
    
  /* console.log(variable1.search('Y'));
    console.log(variable1.at('5'));
    console.log(variable1.charAt('5'));
    console.log(variable1.indexOf('Y'));
    console.log(variable1.lastIndexOf('o'));
    console.log(variable1.toLowerCase(''));
    console.log(variable1.toUpperCase(''));
    console.log(variable1.slice('5'));
    console.log(variable1.split('Y'));
    console.log(variable1.repeat('5'));
    console.log(variable1.replace('You'));
    console.log(variable1.concat('You'));
    console.log(variable1.trim(''));
    console.log(variable1.length);
    console.log(variable1.valueOf(''));*/
    
    

    //MATH METHODS AND PROPERTIES

    console.log(Math.PI);
    console.log(Math.round(Math.PI));
    console.log(Math.trunc(Math.PI));
    console.log(Math.ceil(Math.PI));
    console.log(Math.floor(Math.PI));
    console.log(Math.random());
    console.log(Math.pow(7,9));
    console.log(Math.min(3,5,7,11,44,5,22,99));
    console.log(Math.max(4,99,2,34,928,3920,233,39));
    //console.log(location.reload());
    //0 to 100 random numbers

    console.log(Math.floor(Math.random()*100)+1);

    //TASK-1
    console.log(variable1.charAt(Math.random()*variable1.length));

    //TASK-2 (Condition (ternary) operator)

    const age = 18;
    const voteRight = age >= 18 ? "eligible" : "not eligible";
    console.log(voteRight);

    //TASK-3

    const playerMove = 'paper';
    const computerMove = 'paper';

    const result = 
    playerMove === 'rock' && computerMove === 'rock' ? "Tie!" : 
    playerMove === 'paper' && computerMove === 'paper' ? "Tie!" : 
    playerMove === 'scissors' && computerMove === 'scissors' ?"Tie!" : 
    playerMove === 'rock' && computerMove === 'scissors' ? "Player Win!" :
    playerMove === 'rock' && computerMove === 'paper' ? "Player Lose!" :
    playerMove === 'paper' && computerMove === 'scissors' ? "Player Lose!" :
    playerMove === 'paper' && computerMove === 'rock' ? "Player Win!" :
    playerMove === 'scissors' && computerMove === 'rock' ? "Player Lose!" :
    playerMove === 'scissors' && computerMove === 'paper' ? "Player Win!" : "invalid";

    console.log(result);

    /*//USER INPUT

    const myName = prompt("Enter your Name:");

    if (myName) {
        console.log(myName ?? "you didn't enter your name");
    }else{
        console.log("you didn't enter your name");
    }*/

    //Project-1

   /* const welCome = confirm("Welcome! .\n Shall We Play the Game.");
    let reply = "";
    if (welCome) {
        confirm("Please click Ok to Start!");
    }else if (welCome) {
        alert(welCome ?? "you didn't enter your move");
    }else {
        alert("Ok Thanks!");
    }

    const myMove = prompt("Enter your Move:");

    if (myMove) {
        alert(`Your move: ${myMove}`);

    }else if (myMove) {
        alert(myMove ?? "you didn't enter your move");
    }else{
        alert("you didn't enter your move")
        
    }

    let computerMoves = Math.random();

    if (computerMoves >= 0 && computerMoves <= 1/3) {
         computerMoves = 'rock';
    }else if (computerMoves >= 1/3 && computerMoves <= 2/3){
        computerMoves = 'paper';
    }else {
        computerMoves = 'scissors';
    }
    alert(` computerMove: ${computerMoves}`);

   let result2 = 
    myMove === 'rock' && computerMoves === 'rock' ? "Tie!" : 
    myMove === 'paper' && computerMoves === 'paper' ? "Tie!" : 
    myMove === 'scissors' && computerMoves === 'scissors' ?"Tie!" : 
    myMove === 'rock' && computerMoves === 'scissors' ? "Player Win!" :
    myMove === 'rock' && computerMoves === 'paper' ? "Player Lose!" :
    myMove === 'paper' && computerMoves === 'scissors' ? "Player Lose!" :
    myMove === 'paper' && computerMoves === 'rock' ? "Player Win!" :
    myMove === 'scissors' && computerMoves === 'rock' ? "Player Lose!" :
    myMove === 'scissors' && computerMoves === 'paper' ? "Player Win!" : "invalid";
    
    confirm(result2);*/

    //LOOPS

    //WHILE LOOPS
    let i=1;
    while (i<=10){
        console.log(i);
        i++;
    } 
     
    // DO WHILE LOOPS
    let j=1;
    do {
        console.log(j);
        j++;
    } while (j<=10)
     
    
    //FOR LOOPS
    for (x = 1;x<=10;x++) {
        console.log(x);

    }

    //NESTED LOOPS

    for (y=1;y<=10;y++) {
        if (y===5) {
            break;
        }
        console.log(y);
    }

    let a= 1;
    while (a<=10) {
        if (a===7) {
            continue;
        }
        
        console.log(a);
        a++;
    }