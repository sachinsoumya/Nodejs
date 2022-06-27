const string = "virat kohli is one of the best crickter in india";
const words = string.split(' ');
let el=" ";
words.sort();
console.log("The sorted words are :");
for(const element of words){
     el +=element
     el+=" ";
}
console.log(el);