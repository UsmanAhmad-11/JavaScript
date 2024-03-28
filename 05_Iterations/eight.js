const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)


const myTotal = myNums.reduce( (acc, cur) => acc+cur , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 299,
    },
    {
        itemName : "Python Course",
        price : 999,
    },
    {
        itemName : "Mobile Development Course",
        price : 5999,
    },
    {
        itemName : "DataScience Course",
        price : 11999,
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);