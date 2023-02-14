/*Parameterised Way of Recursion*/
const prompt = require("prompt-sync")({sigint:true})

let x = prompt("Enter the value of number: ")

num = Number.parseInt(x)

const print1ToNSum = function(num, sum){

      if(num<1){

        console.log(sum)

        return

      }



      sum += num

      print1ToNSum(num-1, sum)

}



let sum=0

print1ToNSum(num,sum)


/*Functional Way of Recursion*/
const prompt = require("prompt-sync")({sigint:true})

let x = prompt("Enter the value of number: ")

num = Number.parseInt(x)

const print1ToNSum = function(num){

      if(num<1){

        return 0

      }

      return print1ToNSum(num-1)+num

}



const sum = print1ToNSum(num)

console.log(sum)



/* Factorial Functional*/

const prompt = require("prompt-sync")({sigint:true})

let x = prompt("Enter the value of number: ")

num = Number.parseInt(x)

const factorial = function(num){

      if(num==1){

        return 1

      }

      return factorial(num-1)*num

}



const ans = factorial(num)

console.log(ans)



/* Factorial Parameterised */

const prompt = require("prompt-sync")({sigint:true})

let x = prompt("Enter the value of number: ")

num = Number.parseInt(x)

const factorial = function(num, fact){

      if(num<=1){

        console.log(fact)

        return

      }

      factorial(num-1, fact*num)

}

let fact = 1

factorial(num, fact)



/* Reverse Array Functional */

let arr = [1,2,3,4,5,"hello", 'a']



let start = 0

let end = arr.length-1



reverseArray = function(arr,start,end){

  if(end<start){

    return

  }

  let temp=arr[start]

  arr[start]=arr[end]

  arr[end]=temp

  reverseArray(arr,start+1,end-1)

}



reverseArray(arr,start,end)

console.log(arr)


/* Reverse Array parameterised*/

let arr = [1,2,3,4,5,"hello", 'a']



let start = 0

let end = arr.length-1



reverseArray = function(arr,start,end){

  if(end<start){

    return

  }

  let temp=arr[start]

  arr[start]=arr[end]

  arr[end]=temp

  reverseArray(arr,start+1,end-1)

}



reverseArray(arr,start,end)

console.log(arr)





/* Palindrome Functional*/

//const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter the value of number: ")



let str = "abbbbbbbbbbbbbba"

let start = 0

let end = str.length-1



const palindrome = function(str,start,end){

  if(end<start){

    return true

  }



  if(str[start]!=str[end]){

    return false

  } else {

     return palindrome(str,start+1, end-1)

  }

}



let ifPalindrome= palindrome(str,start,end)

console.log(ifPalindrome)



————leetcode:125: if string is palindrome—————————

/**

 * @param {string} s

 * @return {boolean}

 */

var isPalindrome = function(s) {

   s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

   let str= s.toLowerCase()

   if(str.length==1||str.length==0){

    return true

   }



  if(str[0]!=str[str.length-1]){

    return false

  } else {

     return isPalindrome(str.slice(1,(str.length-1)))

  }

}



const prompt = require("prompt-sync")({sigint:true})

let num = prompt("Enter the value of number: ")

x=Number.parseInt(num)



const fibonacci = function(x){

  if(x==1|x==0){

    return 1

  }



  return fibonacci(x-1)+fibonacci(x-2)

}



let fibo = fibonacci(x)

console.log("The result is " +fibo)
