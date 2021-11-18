import { levenshtein } from "./levenshtein.js";

test("distance de levenshtein", (t) => {
  [
    ["petit dejeune", "petit-déjeuné", 3],
    ["demi pension", "demi-pension", 1],
    ["marseille", "Marseille", 1],
    ["pension complete", "pension-complète", 2],
    ["all inclusive", "all inclusive", 0],
    ["tous inclut", "tout inclut", 1],
    ["martinique", "Martinique", 1],
    ["hebergement seul", "hébergements seuls", 3],
    ["contre proposition", "contre-proposition", 1],
    ["cinque nuits", "5 nuits", 6],
    ["douze juillet deux mille vingt deux", "12 juillet 2022", 26],
    ["deux adultes deux enfants un bb", "2 adultes 2 enfants 1 bébé", 12],
  ].forEach(([a, b, expected]) => {
    t.is(levenshtein(a, b), expected);
  });
});
