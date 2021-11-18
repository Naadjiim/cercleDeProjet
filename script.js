function getText(){

var str = document.getElementById('text').value;
console.log(str)

if(str.includes( 'déjeuner'))
        document.getElementById('modal').style.display = "block";
else if(str.includes('pension')) //GOOD
        document.getElementById('modal').style.display = "block";
else if(str.includes('hébergements'))
        document.getElementById('modal').style.display = "block";
else if(str.includes('inclus')) //GOOD
        document.getElementById('modal').style.display = "block";
else if(str.includes('martinique')) //GOOD
        document.getElementById('modal').style.display = "block";
else if(str.includes('marseille')) //GOOD
        document.getElementById('modal').style.display = "block";
else
        document.getElementById('modal').style.display = "none";

}