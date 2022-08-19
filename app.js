// Copy and Paste the Below code HAPPY CODING 
function miniMaxSum(arr) {
    // Write your code here
   let a =  Math.max(...arr)
   let b = Math.min(...arr)

        let sum =0
        let c = arr.indexOf(a)
        let d = arr.indexOf(b)
        arr.splice(c,1)

            for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    // console.log(sum)
        // console.log(sum)
        arr.push(a)

   function max(){
           
     let c=arr.indexOf(a)
    let d = arr.indexOf(b)
       arr.splice(d, 1)
       let sum2 = 0
       for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
}
console.log(sum, sum2);
   }
//    mini()
   max()

}
