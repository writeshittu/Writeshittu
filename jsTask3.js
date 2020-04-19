function divisor (arr) {
    let element;
    for (const number in arr) {
        if (number% 2 ===0 ) {
            element = arr[number];
            element = element.push("yu") 
            
        } 
        if (number % 3 === 0) {
            element = arr[number];
            element = element.push("gi")

        }
        if (number % 5 === 0 ) {
            element = arr[number];
            element = element.push("oh")
            
        }
    }
    
}