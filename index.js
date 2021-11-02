function isPrime(...num) {
  let prime = [];
  let notPrime = [];
  // if we put num.length in the for loop, it will be slower than this way cuz it will be calculated every time.
  let length = num.length;
  for (let i = 0; i < length; i++) {
    for (let j = 2; j < num[i]; j++) {
      if (num[i] % j === 0) {
        notPrime.push(num[i]);
        break;
      }
    }
    prime = num.filter((x) => !notPrime.includes(x));
  }
  prime.length > 1
    ? console.log(`${prime} are prime numbers`)
    : console.log(`${prime} is a prime number`);
  notPrime.length > 1
    ? console.log(`${notPrime} are not prime numbers`)
    : console.log(`${notPrime} is not a prime number`);
}

isPrime(4, 6, 5, 7, 11, 8, 9, 10);

function isFriend(a, b) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sumA += i;
    }
  }

  for (let j = 1; j < b; j++) {
    if (b % j === 0) {
      sumB += j;
    }
  }

  if (sumA === b && sumB === a) {
    console.log(`${a} and ${b} are friend numbers`);
  } else {
    console.log(`${a} and ${b} are not friend numbers`);
  }
}
console.log('-----------------------------------------------');
isFriend(220, 284);

// Write a program that lists all perfect numbers up to 1000.

function perfectNumbers(num) {
  let perfect = [];
  for (let i = 1; i < num; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        sum += j;
      }
    }
    if (sum === i) {
      perfect.push(i);
    }
  }
  perfect.length > 1
    ? console.log(`${perfect} are perfect numbers`)
    : console.log(`${perfect} is a perfect number`);
}

console.log('-----------------------------------------------');
perfectNumbers(1000);

// Write a program that lists all prime numbers up to 1000.

function primeNumbers(num) {
    let prime = [];
    let notPrime = [];
  for (let i = 2; i < num; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                notPrime.push(i);
                break;
            }
        }
        if (isPrime) {
            prime.push(i);
        }
    }
    prime.length > 1
        ? console.log(`${prime} are prime numbers`)
        : console.log(`${prime} is a prime number`);
    
    notPrime.length > 1
        ? console.log(`${notPrime} are not prime numbers`)
        : console.log(`${notPrime} is not a prime number`);
}

console.log('-----------------------------------------------');
primeNumbers(10); // 1000 will look bad on console