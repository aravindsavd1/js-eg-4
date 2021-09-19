var n = parseInt(prompt("Enter the Number of Inputs:"))
var names = []
var k = 0
while(k<n)
{
    var value = prompt("Enter Name:")
    names.push(value)
    k++
}
names.sort()
console.log("Asending order\n"+names)
console.log("descending order\n"+names.reverse())
