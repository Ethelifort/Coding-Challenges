//Problem - Given a two-dimensional array of integers, return the flattened version of
// the array with all the integers in the sorted (ascending) order.



function flattenAndSort(array) {
    // Good luck, brave code warrior!
    //Flatten the Dimentional arrays to one dimension.
    
    let flatArray = array.flat();
    //Sort in acending order
    orderedFlatArray = flatArray.sort((a,b) => a-b);
    
    //console.log(orderedFlatArray);
    
    return orderedFlatArray;
    
    }
    
    flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]], [1, 2, 3, 4, 5, 6, 7, 8, 9]);