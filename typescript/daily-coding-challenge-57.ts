// Given a string s and an integer k, break up the string into multiple lines such that each line has a
// length of k or less. You must break it up so that words don't break across lines. Each line has to have
// the maximum possible amount of words. If there's no way to break the text up, then return null.
// You can assume that there are no spaces at the ends of the string and that there is exactly one
// space between each word.
// For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should
// return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a
// length of more than 10.

let s: string = "the quick brown fox jumps over the lazy dog";
console.log(s);
const k: number = 10
let start:number = 0
let end:number = 0
let last:number = 0
let blanks:number = 0
console.log(s.length)
for (let c of s) {
    if (c === ' ' && end-start-1 <= k){
        last = end;
        blanks++
    }
    if (end - start > k) {
        console.log(s.substring(start,last));
        console.log(start,end,last)
        start = last + 1
        last = end
        blanks = 0
    }
    end++
    // at the end print whatever is remaining
    if (end === s.length){
        console.log(s.substring(start,end));
    }
}
