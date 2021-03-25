//function statement named twoSort with parameter s
function twoSort(s) {
    //return s as property with sort method that sorts in acending order
    //for ascii characters then 0 index as a pointer to use on split with
    //exclamation mark no space, as pattern and join method with three stars
    // as the pattern
        return s.sort()[0].split('').join('***');
    }