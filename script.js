function getText(text){
        var str = text;
        //var str = document.getElementById('text').value;
        var string_norm = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(document.getElementById('modal').style.display != "block") {
                if (string_norm.includes("demi pension"))
                        document.getElementById('modal').style.display = "block";
                else if (string_norm.includes('petit dejeuner'))
                        document.getElementById('modal').style.display = "block";
                else if (string_norm.includes('hebergements'))
                        document.getElementById('modal').style.display = "block";
                else if (string_norm.includes('bonjour')) {
                        document.getElementById('modal').style.display = "block";
                        var new_value = parseInt(localStorage.getItem('Counterr')) + 1
                        localStorage["bonjour"] = new_value;

                        var new_valuee = parseInt(localStorage.getItem('Counterr')) + 1
                        localStorage["Counterr"] = new_valuee;
                } else if (string_norm.includes('martinique'))
                        document.getElementById('modal').style.display = "block";

                        var new_value = parseInt(localStorage.getItem('Counterrr')) + 1
                        localStorage["martinique"] = new_value;

                        var new_valueee = parseInt(localStorage.getItem('Counterrr')) + 1
                        localStorage["Counterrr"] = new_valueee;
                else if (string_norm.includes('marseille'))
                        document.getElementById('modal').style.display = "block";
                else
                        document.getElementById('modal').style.display = "none";

        }
}

function Close(){
        document.getElementById('modal').style.display = "none";
}

