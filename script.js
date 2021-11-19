var tab = ["petit dejeune",
        "petit déjeuner",
        "demi pension",
        "marseille",
        "pension complète",
        "pension complete",
        "all inclusive",
        "tout inclus",
        "martinique",
        "hébergement seul",
        "hébergements seuls",
        "hébergements seul",
        "hébergement seuls",
        "contre proposition",
        "nuit",
        "nuits",
        "douze juillet deux mille vingt deux",
        "deux adultes deux enfants un bb",
        'demi-pension',
        'Marseille',
        'conditions d’annulation',
        'condition annulation',
        'conditions d\'annulation',
        'contre-proposition',
        'contre proposition',
        'deux mille pension',
        'deux mille pensions',
        'deux mi pension',
        'inclusive',
        'deux mil pension'
]

function getText() {
        var text = document.getElementById('text').value.toLowerCase();

        for (var i = 0; i-1 <= tab.length; i++) {
                var output = text.match(tab[i])
                console.log(output);
                if ( output == tab[i] ) {
                        if (
                                tab[i] == 'deux mille pension' 
                                || tab[i] == 'deux mille pensions' 
                                || tab[i] =='deux mi pension' 
                                || tab[i]=='deux mil pension' 
                                || tab[i] == "demi pension"){

                                tab[i] = 'demi-pension'
                                document.getElementById('text').value = tab[i]
                        }

                        if (tab[i] == 'inclusive'){
                                
                                tab[i] = 'all inclusive'
                                document.getElementById('text').value = tab[i]
                        }
                        var test = text.match(tab[i])
                        document.getElementById('modal').style.display = "block";
                        document.getElementById('key').innerText = tab[i];
                        console.log(test[0])
                        this.Close(a)
                }
        }
        return test[0]
}

function Close(str){
        var strrr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        document.getElementById('modal').style.display = "none";
        var new_value = parseInt(localStorage.getItem(strrr)) + 1
        localStorage[strrr] = new_value;
        document.getElementById(strrr).innerText = localStorage[strrr];
        document.getElementById('text').value = "";
}


