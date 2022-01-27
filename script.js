let 
front = 0, 
back = 0, 
coin = document.querySelector("#coin"), 
flipBtn = document.querySelector("#flip-btn"), 
restBtn = document.querySelector("#rest-btn");

flipBtn.addEventListener("click", ()=> {
    let i = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-front 3s ease forwards";
        },100);
        front++;
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-back 3s ease forwards";
        },100);
        back++;
    }

    setTimeout(up,3000);
    dis();
});

function up(){
    document.querySelector("#front-count").textContent = `Front: ${front}`;
    document.querySelector("#back-count").textContent = `Back: ${back}`;
}

function dis(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

restBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    front = 0;
    back = 0;
    up();
    flipBtn.disabled = false;0
});