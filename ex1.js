/*
Welcome to module 1 assignment of Harkirat Singh Brar. At first I have declaired variables regarding coffee order
*/
var customerName;
var typeOfDrink = ["latte","coffee","expresso"];
var sizeOfCoffee = ["short","tall","grande","venti"];
var drizzle ;
var whippedCream;
var sweetener;
var coldFoam;
var dairyCream = ["cream","2% milk","almond milk"];

//Here I have made an object named myCoffeeOrder that containd information about a certain order
const myCoffeeOrder = 
{
  customerName : "Harkirat Singh Brar",
  typeOfDrink : "coffee",
  sizeOfCoffee : "venti",
  drizzle : "no",
  whippedCream : "yes",
  sweetener : "yes",
  coldFoam : "yes",
  dairyCream : "2% milk",
// this function gives the information about our order in alert box
    orderInformation : function(){
    if(this.drizzle == "no" && this.whippedCream == "no" && this.sweetener =="no" && this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream 
      );
    } else if(this.drizzle == "yes" && this.whippedCream == "no"&& this.sweetener =="no" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Drizzle"
      );
    }else if(this.drizzle == "no" && this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Whipped Cream"
      );
    }else if(this.drizzle == "no"&& this.whippedCream == "no"&& this.sweetener =="yes" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Sweetener"
      );
    }else if(this.drizzle == "no"&& this.whippedCream == "no"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Coldfoam"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, whipped Cream"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "no"&& this.sweetener =="yes" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, sweetener"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "no"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, coldfoam"
      );
    }
    
    else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="yes" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, whipped Cream, Sweetener"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="yes" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, whipped Cream, Sweetener, ColdFoam"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle , whippedcream , coldfoam"
      );
    }else if(this.drizzle == "no" && this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons =  whippedcream , coldfoam "
      );
    }else if(this.drizzle == "no" && this.whippedCream == "yes"&& this.sweetener =="yes" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons =  whippedcream , sweetener, coldfoam "
      );
    }
  } 
};
console.log(myCoffeeOrder);
myCoffeeOrder.orderInformation();

const friendCoffeeOrder = 
{
  customerName : "Shivpartap Singh",
  typeOfDrink : "latte",
  sizeOfCoffee : "tall",
  drizzle : "yes",
  whippedCream : "no",
  sweetener : "yes",
  coldFoam : "no",
  dairyCream : "almond milk",
 
    orderInformation : function(){
    if(this.drizzle == "no" && this.whippedCream == "no" && this.sweetener =="no" && this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream 
      );
    } else if(this.drizzle == "yes" && this.whippedCream == "no"&& this.sweetener =="no" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Drizzle"
      );
    }else if(this.drizzle == "no" && this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Whipped Cream"
      );
    }else if(this.drizzle == "no"&& this.whippedCream == "no"&& this.sweetener =="yes" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Sweetener"
      );
    }else if(this.drizzle == "no"&& this.whippedCream == "no"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = Coldfoam"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, whipped Cream"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "no"&& this.sweetener =="yes" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, sweetener"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "no"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, coldfoam"
      );
    }
    
    else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="yes" &&this.coldFoam =="no" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, whipped Cream, Sweetener"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="yes" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle, whipped Cream, Sweetener, ColdFoam"
      );
    }else if(this.drizzle == "yes"&& this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons = drizzle , whippedcream , coldfoam"
      );
    }else if(this.drizzle == "no" && this.whippedCream == "yes"&& this.sweetener =="no" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons =  whippedcream , coldfoam "
      );
    }else if(this.drizzle == "no" && this.whippedCream == "yes"&& this.sweetener =="yes" &&this.coldFoam =="yes" )
    {
      alert
      (
        "Name of Customer is " + this.customerName + " The drink he chose is " + this.typeOfDrink
        + " The size is " + this.sizeOfCoffee + " The dairy cream is " + this.dairyCream + " Add-ons =  whippedcream , sweetener, coldfoam "
      );
    }
  } 
};
console.log(friendCoffeeOrder);
friendCoffeeOrder.orderInformation();
/*
m.customerName ;
m.typeOfDrink[1];
m.sizeOfCoffee[3];
m.drizzle[1];
m.whippedCream[0];
m.sweetener[0];
m.coldFoam[1];
m.dairyCream[1];
*/









