// Implement program to print all permutations of a given string
// Example  
// Input: ABC
// Output: ABC, ACB, BAC, BCA, CAB, CBA

// *Print all permutations in sorted (lexicographic) order
// Push code to repo “momentoMemory”

function permute(str) {
    let permutations = [];

    if (str.length === 1) {
        permutations.push(str);
        return permutations;
    }

    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let remainingSubstr = str.slice(0, i) + str.slice(i + 1);
        let restPermutations = permute(remainingSubstr);

        for (let j = 0; j < restPermutations.length; j++) {
            permutations.push(firstChar + restPermutations[j]);
        }
    }
    return permutations.sort();
}
console.log(permute('ABC'));
console.log(permute('CBA'));
console.log(permute('1234'));