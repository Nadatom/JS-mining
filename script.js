var mezisklad;
var hlavniSklad;

mezisklad = 0;
hlavniSklad = 0;


    document.querySelector(".tezic").textContent = 0;
    document.querySelector(".sklad").textContent = 0;
    

    document.querySelector(".miningBtn").addEventListener("click", function(){
    var tezba = Math.ceil(Math.random()*4);    
    // přičítá rudu do meziskladu, pokud klikáme
    mezisklad = mezisklad + tezba;
    document.querySelector(".tezic").textContent = mezisklad;
    //připojíme loader, který se aktivuje po kliknutí, ale znovu lze užít až dojede předchozí čas těžby
    

    });

    document.querySelector(".withdrawBtn").addEventListener("click", function(){
    // vynuluje těžič    
    document.querySelector(".tezic").textContent = 0;
    //přepíše číslo z těžiče do hlavniSklad
    hlavniSklad = hlavniSklad + mezisklad;   
    document.querySelector(".sklad").textContent = hlavniSklad;
    mezisklad = 0;
    
    });
