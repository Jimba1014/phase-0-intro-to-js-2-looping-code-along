// Code your solutions in this file

function writeCards(name, event){
    let thankYouMessage = []
    for (let i=0; i<name.length; i++){
        thankYouMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouMessage
}
writeCards();

function countDown(number){
   // let integer=number;
    while (number>=0){
        console.log(number--)
    }
}