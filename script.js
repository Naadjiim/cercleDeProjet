var tab = ["petit dejeune",
        'petit déjeuner',
        "demi pension",
        "marseille",
        "pension complète",
        "all inclusive",
        "tous inclut",
        "martinique",
        "hébergements seuls",
        "contre proposition",
        "nuits",
        "douze juillet deux mille vingt deux",
        "deux adultes deux enfants un bb",
        "bonjour",
        'petit dejeuné',
        'demi-pension',
        'Marseille',
        'conditions d’annulation',
        'condition annulation',
        'contre-proposition',
        'contre proposition',


]

function getText() {
        var text = document.getElementById('text').value.toLowerCase();

        for (var i = 0; i-1 <= tab.length; i++) {
                var output = text.match(tab[i])
                console.log(output);
                if ( output == tab[i] ) {
                        var test = text.match(tab[i])
                        document.getElementById('modal').style.display = "block";
                        document.getElementById('key').innerText = tab[i];
                        console.log(test[0])
                }
        }
        return test[0]
}

function Close(str){
        console.log(str);
        document.getElementById('modal').style.display = "none";
        var new_value = parseInt(localStorage.getItem(str)) + 1
        localStorage[str] = new_value;
        document.getElementById(str).innerText = localStorage[str];
}

