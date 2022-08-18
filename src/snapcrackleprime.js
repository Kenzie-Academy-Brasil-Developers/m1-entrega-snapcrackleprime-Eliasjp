function snapCracklePrime (maxValue){
    let snapCracklePrimeString = ""
    for (i = 1; i <= maxValue; i++){
        if (i == 2){
            snapCracklePrimeString += `Prime`
         }else if (i % 2 == 0 && i % 5 != 0){
            snapCracklePrimeString += `${i}`
        }else if (i % 2 != 0 && i % 5 != 0){
            snapCracklePrimeString += `Snap`
        }else if (i % 2 != 0 && i % 5 == 0){
            snapCracklePrimeString += `SnapCrackle`
        }else if (i % 2 == 0 && i % 5 == 0){
            snapCracklePrimeString += `Crackle`
        }

        if (i == 3 || i == 5 || i == 7){
            snapCracklePrimeString += `Prime`
        }
        if (i != 1 && i % 1 == 0 && i % 2 != 0 && i % 3 != 0 && i % 4 != 0 && i % 5 != 0 && i % 6 != 0 && i % 7 != 0 && i % i == 0){
            snapCracklePrimeString += `Prime`
        }
        
        if (i != maxValue){
            snapCracklePrimeString += ", "
        }
    }
    let snapCracklePrimeResultado = snapCracklePrimeString
    return snapCracklePrimeResultado
}

console.log(snapCracklePrime(100))