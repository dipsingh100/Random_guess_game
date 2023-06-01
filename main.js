var random_num, c=100, high_score=0, n=0;
function startGame(){
    c=100;
    document.getElementById("chances").textContent = c;
    random_num = Math.floor((Math.random() * 100) + 1);
    if(n>0){
        document.getElementsByTagName("body")[0].style.backgroundColor = "#222222";
        document.getElementById("hidden_ans").textContent = "?";
        document.getElementById("user_input").value = "";
        document.getElementById("check_btn").style.display = "block";
    }
    n++;
}

function checkAns(){
    let inp = document.getElementById("user_input").value;
    if(inp==random_num){
        document.getElementById("hidden_ans").textContent = inp;
        document.getElementsByTagName("body")[0].style.backgroundColor = "green";
        document.getElementById("greet").textContent = "🤩🤩 Hurray You Won 🤩🤩";
        if(c>high_score)
            high_score = c;
        document.getElementById("highscore").textContent = high_score;
        document.getElementById("check_btn").style.display = "none";
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
startGame();