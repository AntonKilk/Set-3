/* 
Task 3.2
Translate RNA sequences into proteins.

RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:

RNA: "AUGUUUUCU" => translates to
Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>
Protein: "Methionine", "Phenylalanine", "Serine"
There are 64 codons which in turn correspond to 20 amino acids; however, all of the codon sequences and resulting amino acids are not important in this exercise. If it works for one codon, the program should work for all of them. However, feel free to expand the list in the test suite to include them all.

There are also three terminating codons (also known as 'STOP' codons); if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated.

All subsequent codons after are ignored, like this:

RNA: "AUGUUUUCUUAAAUG" =>
Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>
Protein: "Methionine", "Phenylalanine", "Serine"
Note the stop codon "UAA" terminates the translation and the final methionine is not translated into the protein sequence.

Below are the codons and resulting Amino Acids needed for the exercise.

Codon              | Protein 
-----------------------------------
AUG                | Methionine 
UUU, UUC           | Phenylalanine 
UUA, UUG           | Leucine 
UCU, UCC, UCA, UCG | Serine 
UAU, UAC           | Tyrosine 
UGU, UGC           | Cysteine 
UGG                | Tryptophan 
UAA, UAG, UGA      | STOP
Learn more about protein translation on Wikipedia.

*/

let rna = "AUGUUUUCUUAAAUG";

function rnaToProteins(rna) {
  let codons = rna.match(/.{1,3}/g)
  console.log(codons)

  let proteins = [];

  for (let i = 0; i < codons.length; i++){
    let x = codons[i];
    if (x == "UAA" || x == "UAG" || x == "UGA"){
      break; 
    } else if (x == "AUG"){
      proteins.push("Methionine")
    } else if (x == "UUU" || x == "UUC"){
      proteins.push( "Phenylalanine")
    } else if (x == "UUA" || x == "UUG"){
      proteins.push("Leucine")
    } else if (x == "UCU" || x == "UCC" || x == "UCA" || x == "UCG"){
      proteins.push("Serine")
    } else if (x == "UAU" || x == "UAC"){
      proteins.push( "Tyrosine")
    } else if (x == "UGG"){
      proteins.push( "Tryptophan")
    } 
  }
 
  /* Map function does not work with "break" */
  // let proteins = codons.map( x => {
  //   if (x == "UAA" || x == "UAG" || x == "UGA"){
  //     break; 
  //   } else if (x == "AUG"){
  //     return "Methionine"
  //   } else if (x == "UUU" || x == "UUC"){
  //     return "Phenylalanine"
  //   } else if (x == "UUA" || x == "UUG"){
  //     return "Leucine"
  //   } else if (x == "UCU" || x == "UCC" || x == "UCA" || x == "UCG"){
  //     return "Serine"
  //   } else if (x == "UAU" || x == "UAC"){
  //     return "Tyrosine"
  //   } else if (x == "UGG"){
  //     return "Tryptophan"
  //   } 
  // })
 
  return proteins;
}

console.log(rnaToProteins(rna));
