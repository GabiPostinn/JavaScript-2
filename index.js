console.log("---Divizibilitate---");
console.log("---");
function divizibilitate(numar) {
  return numar % 2 === 0;
}
console.log(divizibilitate(10));
console.log(divizibilitate(11));

console.log("---Statistica---");
console.log("---");
function tellFortune(numarCopii, partener, locuinta, job) {
  return `Vei fi un ${job} de succes in ${locuinta} si vei avea ${numarCopii} copii. Partenerul tau va fi ${partener}`;
}
console.log(tellFortune(2, "Maria", "Bucuresti", "programator"));

console.log("---Comanda Aliexpress---");
console.log("---");
function comandaAliexpress(pret, cantitate, produs, site) {
  return `Multumim ca ati comandat de pe ${site}. Produsul: ${produs} , ${cantitate} Buc, la pretul de ${pret} Lei. `;
}
console.log(comandaAliexpress(5000, 4, "Rondell 0058", "Wrt Parts"));

console.log("---Zilele Saptamanii---");
console.log("---");
function ziuaSaptamanii(numarZii) {
  switch (numarZii) {
    case 1:
      return "Luni";
    case 2:
      return "Marti";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sambata";
    case 7:
      return "Duminica";
    default:
      return "de cand Saptamana are mai mult de 7 Zile?";
  }
}
console.log(ziuaSaptamanii(1));
console.log(ziuaSaptamanii(2));
console.log(ziuaSaptamanii(3));
console.log(ziuaSaptamanii(4));
console.log(ziuaSaptamanii(5));
console.log(ziuaSaptamanii(6));
console.log(ziuaSaptamanii(7));
console.log(ziuaSaptamanii(8));

console.log("---Nevoie Permis---");
console.log("---");
function nevoiePermis(kind) {
  if (kind === "car" || kind === "truck") return true;
  else {
    return false;
  }
}
console.log(nevoiePermis("car"));
console.log(nevoiePermis("motocycle"));
console.log(nevoiePermis("truck"));
