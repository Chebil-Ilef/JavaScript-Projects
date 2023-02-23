
function play(){
alert("Bienvenue! Voulez vous jouer?")
let nb=Math.floor(Math.random()*11);
let diff=prompt("Choisissez un niveau de difficulté entre 1 et 3");

switch(diff){
    case "1":
        let a=prompt("Entrez un nombre entre 0 et 10");
        if(a==nb){
            alert("Bravo, vous avez gagné !");
        }
        else{
            alert("Vous avez perdu! le nombre était "+nb);
        }
    case "2":
        let b=prompt("Entrez un nombre entre 0 et 10");
        if(b==nb){
            alert("Bravo, vous avez gagné !");
        }
        else{
            alert("Vous avez enocre 1 essai!");
            let c=prompt("Entrez un nombre entre 0 et 10");
            if(c==nb){
                alert("Bravo, vous avez gagné !");
            }
            else{
                alert("Vous avez perdu! le nombre était "+nb);
            }
        }  
    case "3":
        let d=prompt("Entrez un nombre entre 0 et 10");
        if(d==nb){
            alert("Bravo, vous avez gagné !");
        }
        else{
            alert("Vous avez enocre 2 essais!");
            let e=prompt("Entrez un nombre entre 0 et 10");
            if(e==nb){
                alert("Bravo, vous avez gagné !");
            }
            else{
                alert("Vous avez enocre 1 essai!");
                let f=prompt("Entrez un nombre entre 0 et 10");
                if(f==nb){
                    alert("Bravo, vous avez gagné !");
                }
                else{
                    alert("Vous avez perdu! le nombre était "+nb);
                }
            }
        }
}
}

play();