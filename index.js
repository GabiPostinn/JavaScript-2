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
