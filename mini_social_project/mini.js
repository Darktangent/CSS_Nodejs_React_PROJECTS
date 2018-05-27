var database = [
    {
        username: "andrei",
        password:"password"
    }


];

var newsFeed = [

    {
        username:"Bobby",
        timeline:"So tired from all that learning"
    },
    {
        username:"Sally",
        timeline: "Javaswcript is so cool"
    }

]


var userNamePrompt=prompt("Whats your username");
var passwordPrompt=prompt("Whats your password");

function signIn(user, pass) {
    if (user===database[0].username &&
         pass===database[0].password){
         console.log(newsFeed)
         }else {
             alert("Sorry wrong username and password");
         }
}

signIn(userNamePrompt,passwordPrompt)