var random_num, c, high_score;
function startGame(){
    c=100;
    document.getElementById("chances").textContent = c;
    random_num = Math.floor((Math.random() * 100) + 1);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#222222";
}

function checkAns(){
    let inp = document.getElementById("user_input").value;
    if(inp==random_num){
        document.getElementById("hidden_ans").textContent = inp;
        document.getElementsByTagName("body")[0].style.backgroundColor = "green";
        document.getElementById("greet").textContent = "🤩🤩 Hurray You Won 🤩🤩";
        document.getElementById("highscore").textContent = c;
        document.getElementById("check_btn").style.display = "none";
        high_score = c;
        return ;
    }
    else if(inp<random_num){
        document.getElementById("greet").textContent = "Your Guess Is Low";
    }
    else if(inp>random_num){
        document.getElementById("greet").textContent = "Your Guess Is High";
    }

    c--;
    document.getElementById("chances").textContent = c;
}