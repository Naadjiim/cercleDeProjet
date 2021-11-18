


function levenshtein(a, b) {
  const d = [];
  let i,
    j = 0;
  for (i = 0; i <= a.length; i++) {
    d[i] = [i];
  }

  for (j = 0; j <= b.length; j++) {
    d[0][j] = j;
  }
  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      const cost = a[i - 1] == b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }
  console.log(a,b);
  return d[a.length][b.length];
}
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