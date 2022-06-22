module.exports = function toReadable (number) {
  const baseDigit = ['one', 'two', 'three','four','five','six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen','fourteen','fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozensDigit = ['twenty', 'thirty','forty','fifty','sixty', 'seventy', 'eighty', 'ninety']

    if (number === 0){
        return 'zero'
    }
    if (number > 0 && number < 20) {
        return baseDigit[number-1]
    }
    if (number >= 20 && number < 100){
        if(number%10 === 0){
            return dozensDigit[number/10 -2]
        } else {
            return dozensDigit[Math.floor(number/10 ) -2] + ' ' + baseDigit[number%10 -1]
        }
    }
    if (number >= 100 && number < 1000){
        if (number%100 === 0){
            return baseDigit[number/100 -1] + ' ' + 'hundred'
        } else if (number%100 > 0 && number%100 < 20){
            return baseDigit[Math.floor(number/100) -1] + ' ' + 'hundred' + ' ' + baseDigit[number%100 -1]
        } else if (number%100 >= 20 && number%100 < 100){
            if(number%10 === 0){
               return baseDigit[Math.floor(number/100) -1] + ' ' + 'hundred' + ' ' + dozensDigit[(number%100)/10 -2]
            } else {
                return  baseDigit[Math.floor(number/100) -1] + ' ' + 'hundred' + ' ' +  dozensDigit[Math.floor((number%100)/10) -2] + ' ' + baseDigit[number%10 -1]
            }
        }

    }
}
