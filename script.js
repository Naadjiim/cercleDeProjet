var tab = ["petit dejeune",
        "demi pension",
        "marseille",
        "pension complÃ¨te",
        "all inclusive",
        "tous inclut",
        "martinique",
        "hÃ©bergements seuls",
        "contre proposition",
        "cinque nuits",
        "douze juillet deux mille vingt deux",
        "deux adultes deux enfants un bb",
        "bonjour"
]

function getText() {
        var text = document.getElementById('text').value.toLowerCase();

        for (var i = 0; i-1 <= tab.length; i++) {
                var output = text.match(tab[i])
                console.log(output);
                if ( output == tab[i] ) {
                        var test = text.match(tab[i])
                        document.getElementById('modal').style.display = "block";
                        console.log(test[0])
                }
        }
        return test[0]
}

function Close(){
        document.getElementById('modal').style.display = "none";
        //var new_value = parseInt(localStorage.getItem('Counterr')) + 1
        //localStorage["bonjour"] = new_value;
}

