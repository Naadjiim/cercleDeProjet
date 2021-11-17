function getText(){

var text = document.getElementById('text').innerText;
console.log(text)
console.log(this.findWord(text))

}

function findWord(str) {
    var word = str.split(' ').some(
        function(w){
            if(w == 'déjeuner')
            document.getElementById('modal').style.display = "block";
            else if(w == 'pension')
            document.getElementById('modal').style.display = "block";
            else if(w == 'hébergements')
            document.getElementById('modal').style.display = "block";
            else if(w == 'pension')
            document.getElementById('modal').style.display = "block";
            else if(w == 'inclus')
            document.getElementById('modal').style.display = "block";
            else if(w == 'martinique')
            document.getElementById('modal').style.display = "block";
            else if(w == 'marseille')
            document.getElementById('modal').style.display = "block";
            else
            document.getElementById('modal').style.display = "none";

            return w
        })
  }