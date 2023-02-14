const prompt = require("prompt-sync")({sigint:true})

let rows = prompt("Enter number of rows: ")
n = Number.parseInt(rows)
printPattern1(n)
printPattern2(n)
printPattern3(n)
printPattern4(n)
printPattern5(n)
printPattern6(n)
printPattern7(n)
printPattern8(n)
printPattern9(n)
printPattern10(n)
printPattern11(n)
printPattern12(n)
printPattern13(n)
printPattern14(n)
printPattern15(n)
printPattern16(n)
printPattern17(n)
printPattern18(n)
printPattern19(n)
printPattern20(n)
printPattern21(n)
printPattern22(n)
/*
Pattern:
****
****
****
****
*/
function printPattern1(n){
    let pattern = ""
    for (let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 1: ")
    console.log(pattern)
}

/*
Pattern:
*
**
***
****
*/
function printPattern2(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 2: ")
    console.log(pattern)
}

/*
Pattern:
1
12
123
1234
*/
function printPattern3(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=j.toString()
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 3: ")
    console.log(pattern)
}

/*
Pattern:
1
22
333
4444
*/
function printPattern4(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        let val = i
        for(let j=1; j<=i; j++){
            pattern+=val.toString()
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 4: ")
    console.log(pattern)
}

/*
Pattern:
****
***
**
*
*/
function printPattern5(n){
    let pattern = ""
    for (let i=n; i>=1; i--){
        for(let j=1; j<=i; j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 5: ")
    console.log(pattern)
}

/*
Pattern:
4321
321
21
1
*/
function printPattern6(n){
    let pattern = ""
    for (let i=n; i>=1; i--){
        for(let j=i; j>=1; j--){
            pattern+=(j).toString()
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 6: ")
    console.log(pattern)
}

/*
Pattern:
    *    
   ***   
  *****  
 ******* 
*********
*/
function printPattern7(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        for(let j=1; j<=((2*i)-1); j++){
            pattern+="*"
        }
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 7: ")
    console.log(pattern)
}

/*
Pattern:
*********
 *******
  *****
   ***
    *
*/
function printPattern8(n){
    let pattern = ""
    for (let i=n; i>=1; i--){
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        for(let j=1; j<=((2*i)-1); j++){
            pattern+="*"
        }
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 8: ")
    console.log(pattern)
}

/*
Pattern:
    *    
   ***   
  *****  
 ******* 
*********
*********
 *******
  *****
   ***
    *
*/
function printPattern9(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        for(let j=1; j<=((2*i)-1); j++){
            pattern+="*"
        }
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        pattern+="\n"
    }
    for (let i=n; i>=1; i--){
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        for(let j=1; j<=((2*i)-1); j++){
            pattern+="*"
        }
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 9: ")
    console.log(pattern)
}

/*
Pattern:
*    
***   
*****  
******* 
*********
*********
*******
*****
***
*
*/
function printPattern10(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=((2*i)-1); j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    for (let i=n; i>=1; i--){
        for(let j=1; j<=((2*i)-1); j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 10: ")
    console.log(pattern)
}

/*
Pattern:
1
01
101
0101
10101
*/
function printPattern11(n){
    let pattern = ""
    let odd = false
    for (let i=1; i<=n; i++){
        if (i%2==1){
           odd = true
        }
        for(let j=1; j<=i; j++){
            if (odd==true){
            pattern+="1"
            } else {
                pattern+="0"
            }
            odd=!odd
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 11: ")
    console.log(pattern)
}

/*
Pattern:
1      1
12    21
123  321
12344321
*/
function printPattern12(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=(j).toString()
        }
        for(let j=1; j<=(2*(n-i)); j++){
            pattern+=" "
        }
        for(let j=i; j>=1; j--){
            pattern+=(j).toString()
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 12: ")
    console.log(pattern)
}

/*
Pattern:
1
23
456
78910
*/
function printPattern13(n){
    let pattern = ""
    let count = 1
    for (let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=(count).toString()
            count++
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 13: ")
    console.log(pattern)
}

/*
Pattern:
A
AB
ABC
ABCD
*/
function printPattern14(n){
    let pattern = ""
    let alphabet = 64
    for (let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=String.fromCharCode(alphabet+j)
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 14: ")
    console.log(pattern)
}

/*
Pattern:
ABCD
ABC
AB
A
*/
function printPattern15(n){
    let pattern = ""
    let alphabet = 64
    for (let i=n; i>=1; i--){
        for(let j=1; j<=i; j++){
            pattern+=String.fromCharCode(alphabet+j)
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 15: ")
    console.log(pattern)
}

/*
Pattern:
A
BB
CCC
DDDD
*/
function printPattern16(n){
    let pattern = ""
    let alphabet = 64
    for (let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=String.fromCharCode(alphabet+i)
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 16: ")
    console.log(pattern)
}

/*
Pattern:
    A    
   ABA
  ABCBA
 ABCDCBA
*/
function printPattern17(n){
    let pattern = ""
    let alphabet = 64
    for (let i=1; i<=n; i++){
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        for(let j=1; j<=i; j++){
            pattern+=String.fromCharCode(alphabet+j)
        }
        for(let j=i-1; j>=1; j--){
            pattern+=String.fromCharCode(alphabet+j)
        }
        for(let j=1; j<=(n-i); j++){
            pattern+=" "
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 17: ")
    console.log(pattern)
}

/*
Pattern:
E
DE
CDE
BCDE
*/
function printPattern18(n){
    let pattern = ""
    let alphabet = 70
    for (let i=1; i<=n; i++){
        for(let j=i; j>=1; j--){
            pattern+=String.fromCharCode(alphabet-j)
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 18: ")
    console.log(pattern)
}

/*
Pattern:
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
*/
function printPattern19(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=(n-i+1); j++){
            pattern+="*"
        }
        for(let j=0; j<=(2*(i-1)); j++){
            pattern+=" "
        }
        for(let j=1; j<=(n-i+1); j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    for (let i=n; i>=1; i--){
        for(let j=1; j<=(n-i+1); j++){
            pattern+="*"
        }
        for(let j=0; j<=(2*(i-1)); j++){
            pattern+=" "
        }
        for(let j=1; j<=(n-i+1); j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 19: ")
    console.log(pattern)
}

/*
Pattern:
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
*/
function printPattern20(n){
    let pattern = ""
    for (let i=n; i>=1; i--){
        for(let j=1; j<=(n-i+1); j++){
            pattern+="*"
        }
        for(let j=0; j<=(2*(i-1)); j++){
            pattern+=" "
        }
        for(let j=1; j<=(n-i+1); j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    for (let i=1; i<=n; i++){
        for(let j=1; j<=(n-i); j++){
            pattern+="*"
        }
        for(let j=0; j<=(2*(i)); j++){
            pattern+=" "
        }
        for(let j=1; j<=(n-i); j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 20: ")
    console.log(pattern)
}

/*
Pattern:
****
*  *
*  *
****
*/
function printPattern21(n){
    let pattern = ""
    for (let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            if((i==1)||(i==n)|| (j==1)||(j==n)){
            pattern+="*"
            } else {
                pattern+=" "
            }
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 21: ")
    console.log(pattern)
}

/*
Pattern:
4444444
4333334
4322234
4321234
4322234
4333334
4444444
*/
function printPattern22(n){
    let pattern = ""
    for (let i=0; i<((2*n)-1); i++){
        for(let j=0; j<((2*n)-1); j++){
               let top=j
               let left=i
               let down=((2*n)-2)-j
               let right=((2*n)-2)-i
               let minimum = Math.min(Math.min(top, down), Math.min(left,right))
               pattern+=(4-minimum).toString()
        }
        pattern+="\n"
    }
    console.log("Printing Pattern 22: ")
    console.log(pattern)
}
