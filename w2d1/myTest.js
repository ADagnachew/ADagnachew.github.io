describe("sum", function () {

    let arr1 = [1, 2, 3];
    it(`The summation of ${arr1} is 6`, function () {
        assert.equal(sum(arr1), 6);

    });
    let arr2 = [3, 5, 6, 6, 109];
    it(`The Summation of ${arr2} is 129`, () => {
        assert.equal(sum(arr2), 129);
    })
    let arr3 = [-3, 15, -9];
    it(`The Summation of ${arr3} is 3`, () => {
        assert.equal(sum(arr3), 3);
    })
});
describe("multiply",function(){
    let arr1 = [4,5,7];
    it(`The product of the elemnets of ${arr1} is 140`, ()=>{
        assert.equal(multiply(arr1),140);
    })
    let arr2 = [0,-5,-7];
    it(`The product of the elemnets of ${arr2} is 0`, ()=>{
        assert.equal(multiply(arr2),0);
    })
    let arr3 = [4,-5,7];
    it(`The product of the elemnets of ${arr3} is -140`, ()=>{
        assert.equal(multiply(arr3),-140);
    })
});

describe("Reverse", ()=>{
    let str1 = "Alehegn";
    it(`The reverse of the word ${str1} is ngehelA`,()=>{
        assert.equal(reverse(str1),"ngehelA");
    })
    let str2 = "";
    it(`The reverse of the word ${str2} is ""`,()=>{
        assert.equal(reverse(str2),"");
    })
    let str3 = "madam";
    it(`The reverse of the word ${str3} is madam`,()=>{
        assert.equal(reverse(str3),"madam");
    })
})
describe("Fileter Long words",()=>{
    let strArr1=["Alehegn","Melaku", "Dagnachew"];
    let minlength = 6;
    it(`The strings with length greater than ${minlength} from the list ${strArr1} is Alehegn,Dagnachew`, ()=>{
        assert.deepEqual(filterLongWords(strArr1,minlength),["Alehegn","Dagnachew"]);
    })

    let strArr2=["Alehegn","Melaku", "Dagnachew","Adam","al","wer"];
    let minlength2 = 2;
    it(`The strings with length greater than ${minlength2} from the list ${strArr2} is Alehegn,Dagnachew`, ()=>{
        assert.deepEqual(filterLongWords(strArr2,minlength2),["Alehegn","Melaku","Dagnachew","Adam","wer"]);
    })
})

