// Задача 1

function fizzBuzz() {
    for (i = 1; i < 31; i++) {
        let str = '';
        if (i % 3 === 0) {
            str += 'Fizz';
        }
        if (i % 5 === 0) {
            str += 'Buzz';
        }
        if (i % 3 && 5 === 0) {
            str += 'fizzBuzz';
        }
        console.log(str ? str : i);
    }
}
fizzBuzz()


// Задача 2

function findAllPrimes(n) {
    prime: for (let y = 2; y <= n; y++) {
        for (let x = 2; x < y; x++) {
            if (y % x === 0) {
                continue prime;
            }
        }
        console.log(y);
    }
}
findAllPrimes(100)
