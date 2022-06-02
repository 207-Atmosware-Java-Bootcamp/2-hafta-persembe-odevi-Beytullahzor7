// HOMEWORK (IF ELSE BREAK CONTINUE)

// 1 ile kullanıcının verecegi bitis sayisina göre
// 1) Toplam kac tane sayi vardir
// 2) Sayilarin toplami nedir?
// 3) Kac tane tek sayi vardir?
// 4) Tek sayilarin toplami nedir?
// 5) Bu tek sayilari ekrana bastir

// 6) Kac tane cift sayi vardir?
// 7) Cift sayilar toplami nedir?
// 8) Bu cift sayilari ekrana bastir

// Eger verilen sayilarda 7 sayisi varsa bunu eklemesin
// Eger bitis sayisi 100 den fazla ise 100 e kadar olanları toplasın
// Eger kullanıcı baslangic sayisinden kücük girerse uyaralım ve baslangıctan büyük bir sayi girmesini isteyelim
// Eger kullanıcı secret-key girerse yani 44 sayisini girerse program calistirmayi direkt durdursun

var number = Number(prompt("Please input a number"))

if (secretNumber(number) && isNumberLessThanOne(number)) {
    countNumbers(number)
    sumOfNumbers(number)
    oddNumbers(number)
    evenNumbers(number)
}

//BUSINESS RULES
function isNumberLessThanOne(number) {
    if (number < 1) {
        alert("Please input a higher number than 1")
        return false
    }
    return true
}

function secretNumber(number) {
    if (number === 44) {
        alert("Your input should not equal to 44")
        return false
    }
    return true
}

function isNumberBiggerThanOneHundred(number) {
    if (number >= 100) {
        number = 99
    }
    return number
}

// 1
function countNumbers(number) {
    var ending = isNumberBiggerThanOneHundred(number)
    var count = 0
    for (var i = 1; i <= ending; i++) {
        if (i === 7) {
            continue
        }
        count++
    }
    document.write("How many numbers : " + count + "<br>")
}

// 2
function sumOfNumbers(number) {
    var ending = isNumberBiggerThanOneHundred(number)
    var sum = 0
    for (var i = 1; i <= ending; i++) {
        if (i === 7) {
            continue
        }
        sum += i
    }
    document.write("Sum of numbers : " + sum + "<br>")
}

function oddNumbers(number) {
    var ending = isNumberBiggerThanOneHundred(number)

    var countOddNumbers = 0
    var sumOfOddNumbers = 0
    const listOfOddNumbers = [];

    for (var i = 1; i <= ending; i++) {
        if (i === 7) {
            continue
        }
        if (i % 2 == 1) {
            listOfOddNumbers.push(i)
            sumOfOddNumbers += i
            countOddNumbers++
        }
    }
    document.write("Count Odd numbers : " + countOddNumbers + "<br>")
    document.write("Sum of Odd numbers : " + sumOfOddNumbers + "<br>")
    document.write("List Of Odd Numbers : " + listOfOddNumbers + "<br>")
}

function evenNumbers(number) {
    var ending = isNumberBiggerThanOneHundred(number)

    var countEvenNumbers = 0
    var sumOfEvenNumbers = 0
    const listOfEvenNumbers = [];

    for (var i = 1; i <= ending; i++) {
        if (i === 7) {
            continue
        }
        if (i % 2 == 0) {
            listOfEvenNumbers.push(i)
            sumOfEvenNumbers += i
            countEvenNumbers++
        }
    }
    document.write("Count Even numbers : " + countEvenNumbers + "<br>")
    document.write("Sum of Even numbers : " + sumOfEvenNumbers + "<br>")
    document.write("List Of Even Numbers : " + listOfEvenNumbers + "<br>")
}
