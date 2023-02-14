—————————— Selection Sort ————————————————





const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter string: ")

//let str = x.replace(/\s+/g, "")

//console.log(str)

const selectionSort = function(arr){

     for(let i=0; i<arr.length-1; i++){

      let min = i



      for(let j=min+1; j<arr.length; j++){

        if(arr[j]<arr[min]){

          min=j

        }

      }



      if(min!=i){

          // Swapping the elements

          ;[arr[i],arr[min]]=[arr[min], arr[i]] 

      }

     }

     return arr

}



let arr = []

let size = 6

for(let i=0; i<size; i++){

  let a=prompt("Enter Number: ")

  num = Number.parseInt(a)

  arr.push(num)

}

let a = selectionSort(arr)

console.log(a)





———————————Bubble Sort ———————————————————



const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter string: ")

//let str = x.replace(/\s+/g, "")

//console.log(str)

const bubbleSort = function(arr){

     for(let i=arr.length-1; i>0; i--){

      for(let j=0; j<i; j++){

        if(arr[j]>arr[j+1]){

          ;[arr[j],arr[j+1]]=[arr[j+1], arr[j]] 

        }

      }

     }

     return arr

}



let arr = []

let size = 6

for(let i=0; i<size; i++){

  let a=prompt("Enter Number: ")

  num = Number.parseInt(a)

  arr.push(num)

}

let a = bubbleSort(arr)

console.log(a)



—————————— Insertion Sort ————————————————————



const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter string: ")

//let str = x.replace(/\s+/g, "")

//console.log(str)

const insertionSort = function(arr){

     for(let i=0; i<arr.length; i++){

      let j=i

      while(j>0&&arr[j]<arr[j-1]){

        ;[arr[j],arr[j-1]]=[arr[j-1],arr[j]]

        j--

      }

     }

     return arr

}



let arr = []

let size = 6

for(let i=0; i<size; i++){

  let a=prompt("Enter Number: ")

  num = Number.parseInt(a)

  arr.push(num)

}

let a = insertionSort(arr)

console.log(a)



——————————— Merge Sort —————————————————————



const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter string: ")

//let str = x.replace(/\s+/g, "")

//console.log(str)



const merge = function(left,right){

  let l=0

  let r=0

  let arr=[]

  for(let i=0; l<left.length&&r<right.length;i++){

    if(left[l]<right[r]){

      arr[i]=left[l]

      l++

    } else {

      arr[i]=right[r]

      r++

    }

  }



    while(l!=left.length){

       arr.push(left[l])

       l++

    }



    while(r!=right.length){

      arr.push(right[r])

      r++

    }

    return arr

}



const mergeSort = function(arr){

  if(arr.length<=1){

    return arr

  }



  let mid = Math.floor(arr.length/2)

  let left=mergeSort(arr.slice(0,mid))

  let right=mergeSort(arr.slice(mid))

  let result = merge(left,right)

  return result

}



let arr = []

let size = 6

for(let i=0; i<size; i++){

  let a=prompt("Enter Number: ")

  num = Number.parseInt(a)

  arr.push(num)

}



let a = mergeSort(arr)

console.log(a)



——————— Recursive Bubble Sort ———————————————————



const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter string: ")

//let str = x.replace(/\s+/g, "")

//console.log(str)



function recBubbleSort(arr, n)

{

    if (n == 1)

        return;

  

    var count = 0;

      

    for (var i = 0; i < n - 1; i++)

        if (arr[i] > arr[i + 1])

        {

          

            // swap arr[i], arr[i+1]

            var temp = arr[i];

            arr[i] = arr[i + 1];

            arr[i + 1] = temp;

            count++;

        }



    if (count == 0)

        return;

  

    recBubbleSort(arr, n - 1);

}

  

let arr = []

let size = 6

for(let i=0; i<size; i++){

  let a=prompt("Enter Number: ")

  num = Number.parseInt(a)

  arr.push(num)

}

console.log(arr)

recBubbleSort(arr,size)

console.log(arr)



————————— Recursive Insertion Sort ———————————————————————



const prompt = require("prompt-sync")({sigint:true})

//let x = prompt("Enter string: ")

//let str = x.replace(/\s+/g, "")

//console.log(str)



function recInsertSort(arr, n)

{

    if (n<=1) {

        return

    }



    recInsertSort(arr, n - 1)



    let j = n-1

    while(j>0 && arr[j-1]>arr[j]){

      let temp = arr[j]

      arr[j]=arr[j-1]

      arr[j-1]=temp

      j--

    }

}

  

let arr = []

let size = 6

for(let i=0; i<size; i++){

  let a=prompt("Enter Number: ")

  num = Number.parseInt(a)

  arr.push(num)

}

console.log(arr)

recInsertSort(arr,size)

console.log(arr)
