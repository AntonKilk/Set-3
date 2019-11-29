/* 
Task 3.3.
Given a single stranded DNA string, compute how many times each nucleotide occurs in the string.

The genetic language of every living thing on the planet is DNA. DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides. 4 types exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

Here is an analogy: nucleotides are to DNA as legos are to lego houses.

*/

function countNucleotides(string) {
  let arr = string.split("")
  let counted = arr.reduce( (count, n) => {
    count[n] = (count[n] || 0 ) + 1
    return count
  }, {})
  return counted
}

console.log(countNucleotides("ACGTACGTTTGGAA"))