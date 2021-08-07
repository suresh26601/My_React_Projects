// typeScript transpiles everything in ES3

// :::::::::::: variable in TS:::::::::::
const day: number = 1;
console.log(day);
let hello :string="hii";
hello ="hii bro";
// hello =34;  // gives error
// ::::::::::::::function in TS:::::::::::::::
const main = (one: String, two: String): String => {
  console.log(one, two);
  return one + "    " + two;
};
const myName: String = main("suresh", "kumawat");
console.log(myName);
// :::::::::::::Object in TS::::::::::::::
const normalUser :{firstName:string,lastName:string} ={
  firstName:"shunya",
  lastName:"devta"
}
// ::::::::::interface in TS::::::::::::::
interface UserInterface {
  name: String;
  friendsCount?: Number;
  sleepAlways(): String;
}
const objOne: UserInterface = {
  name: "Rahul",
  friendsCount: 300,
  sleepAlways() {
    return "Always, we sleep together.";
  },
};
const objTwo: UserInterface = {
  name: "Suresh",
  sleepAlways() {
    return "I sleep always alone.";
  },
};
console.log(objOne.friendsCount);
console.log(objOne.sleepAlways());
console.log(objTwo.sleepAlways());
// :::::::::: uniouns:operator to combine data types:::::::::::::::
let userName: string = "alex";
let pageName: string | number = "19";
//  console.log(pageName);
//  pageName=parseInt(pageName)
console.log(pageName);
//  :::::::::::type::::::::::::
type ID = string;
const id: ID = "1";
// ::::::::::::::::::type+ union::::::::::
type UI = null | UserInterface;
let userDetail: UI = null;
let someData: number | null | undefined | object | string;//bad code
type TODO = ID[] | null;
let todoArr: TODO = ["go to market", "write a song"];

// :::::::::: Any / void / never / unknown ::::::::

// void:(set of undefined and null)******
const dontDo =(myName:string):void=>{
    console.log("My name is ",myName);
} //return nothing 
const iAmEmpty :void=null || undefined; //single pipe `|` for defining the types and double `||` for assigning the values as a unioun.
dontDo("suresh kumawat")

// any**** dont use "any" in your code 
let mtlbii:any = 34;
mtlbii="sdfs"
mtlbii ={fd:"fgd"}
//  console.log(mtlbii.fus()) //gives error not in TS bcoz of any but in JS transpile ,so dont use any 
 
//never *********** it cant give `return value` //no endpoint
const neverEnd=(): never=>{
    console.log("hello brother !")
    while(true){}
    // throw "Error"
}

// unkonown*********** like any but not exactly
let pageNumberUnknown :unknown = "10" // the type is not known(string or number or...)
//  console.log(pageNumberUnknown.fus()) // gives error in TS 
let pageInString :string =pageNumberUnknown as string;
// console.log("i am",3+ pageInString,typeof pageInString);
let pageInNumber :number=pageNumberUnknown as number;
// console.log("i am",4+ pageInNumber,typeof pageInNumber);

// or can use in type conversion 
let strIs: string = "5000"
let intIS:number = (strIs as unknown) as number
// console.log(typeof intIS)

// :::::::::points:::::::::::::
// **********keep in touch with unknown and void******
// *************try to avoide the use of any******
// **********never is not used mostly**********


// ::::::::::::::working with DOM::::::::::::::::::
// const mainElement = document.querySelector(".classNameAny") as HTMLInputElement;
// console.log(mainElement.value); //html element has value property as above we defined the type first

// mainElement.addEventListener('click',(event)=>{
//     const Target =event.target as HTMLInputElement;
// console.log(Target.value);
// })
// :::::::::::::: classes in typeScript :::::::::::::
// ******* accessifire : public(default), private, protected******** ||public: accessed every where ||protected : accessed by Child classes or self ||private : only accessed by self
//***** readonly : works like const *****
//****static : it is not the property of instance of class while it is property of class and accessed by only class name. */
interface UniqueInterface{
    getUniqeName():string 
}

// class UniqueClass {
class UniqueClass implements UniqueInterface{
  private firstUniqeName :string; 
  // firstUniqeName: string; //puclic by default
    private lastUniqeName :string; 
    readonly cantChangeMe: string;
    static readonly maxAge:number = 50;
    constructor(firstUniqeName:string,lastUniqeName:string) {
        this.firstUniqeName=firstUniqeName;
        this.lastUniqeName=lastUniqeName;
        this.cantChangeMe = " And you father is awesome."
    }
    changeReadeOnly():void{
        // this.cantChangeMe ="i am Awesome" //it will throws error
        console.log("is me",this.cantChangeMe);
        
        this.firstUniqeName ="rahul"
    }
    getUniqeName():string {
        return this.firstUniqeName +" "+ this.lastUniqeName+" is my Unique name."+this.cantChangeMe }
    static getMaxAge(uniqueAge:number) :string{
        if (this.maxAge< uniqueAge) return "not set"; 
        return "you are fit for doing this work"
    }

}

const objUniuqeOne = new UniqueClass("suresh","kumawat")
// console.log(objUniuqeOne.getUniqeName());
objUniuqeOne.changeReadeOnly()
// console.log(objUniuqeOne.getUniqeName());
// console.log(UniqueClass.getMaxAge(40))

// :::::::::Inharitance::::::::::::
class ChildUnique extends UniqueClass{
    private uniqueChildName:string;
    setChildName(uniqueChildName:string):void{
        this.uniqueChildName=uniqueChildName;
    }
    getChildName():void{
        console.log(this.uniqueChildName+" is my baby name");
    }
}

const uniqueChildObjOne=new ChildUnique("dev","pani")
// console.log(uniqueChildObjOne.getUniqeName());
uniqueChildObjOne.setChildName("Romiyo")
uniqueChildObjOne.getChildName()

// ::::::::::::Generics::::::::::::

const addId = <T extends object> (newObj:T)=>{
  const id = Math.random().toString(16) //gives the random value as a hax value string.
  return {
    uniqueId:id,
    ...newObj
  }
}
interface GenericInterface<V,T>{
  name:string,
  code:V,
  moreCode:T[]
}
const genericObj : GenericInterface<{password:number},string>={
  name:"suresh the boss",
  code :{password:567898343},
  moreCode:["sursh","ganesh","devta"]
}
const genericFun=addId<GenericInterface<{password:number},string>>(genericObj)
console.log("result",genericFun);

// ::::::::::ENUM:::::::::::: Enum is used to make the value meaningful
const statusLikeEnum={
  sunday:0,
  monday:1,
  tuesday:2,
  thursday:4
}
console.log(statusLikeEnum.tuesday);
enum statusEnum{    
  jan=1,
  feb,
  march,
  april,
  may,
  oct=10,
  nov,
  dec,
  whatIsThis="Month's Name"
}
console.log(statusEnum.whatIsThis);

let newEnumDataType:statusEnum=statusEnum.march
console.log(newEnumDataType);

// ::::::enum + interface:::::::::: highly used

interface EnumInterface{
  id: string,
  enumState: statusEnum  //only gives the value of that enum
}
const enumInterfaceObj :EnumInterface={
  id:"10",
  enumState:statusEnum.may
}
console.log(enumInterfaceObj.enumState);

const p : number=34;
const ss:string="shunya";