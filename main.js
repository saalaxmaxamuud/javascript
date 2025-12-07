    let car={
     brand:'toyota',
    model:'corolla',
    year:2020
   };
 console.log(car) 
//  create constructor
 function product(productName,price,instock){
    this.productName=productName,
    this.price=price,
    this.instock=instock
 }

 product1=new product('laptop',200,true)
 console.log(product1)
  product2=new product('phone',500,false)
 console.log(product2)
  product3=new product('tv',1000,true)
 console.log(product3)
//  creating class
class bankAccount{
    constructor(AccountNumber,ownerName,balance){
        this.AccountNumber=AccountNumber;
        this.ownerName=ownerName;
        this.balance=balance;
    }
}
bankAccount1=new bankAccount('ca1234','saalax mohamud mohamed',300)
console.log(bankAccount1)
bankAccount2=new bankAccount('ca555','caadil nor hilowle',500)
console.log(bankAccount2)


