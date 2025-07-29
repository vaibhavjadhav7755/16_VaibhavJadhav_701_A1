const readline = require('readline');
const { getBotResponse } = require('./chatbot');


const rl = readline.createInterface({input:process.stdin,output:process.stdout});

console.log("Help Desk 🧑‍💻");
console.log("Type your Questions below OR you can quit by type 'exit'");

function chat(){
    rl.question("You: ",(input)=>{
        if(input.toLowerCase() == 'exit'){
            console.log("Session Ended !");
            rl.close()
        }else{
            const res = getBotResponse(input);
            console.log("Bot: ", res);
            chat();
        }
    })
}

chat();