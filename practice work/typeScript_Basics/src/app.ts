// :::::::::::: variable in TS:::::::::::
const ppds: number = 1;
console.log(ppds);
// ::::::::::::::function in TS:::::::::::::::
const main = (one: String, two: String): String => {
  console.log(one, two);
  return one + "    " + two;
};
const myName: String = main("suresh", "kumawat");
console.log(myName);
// :::::::::::::Object in TS::::::::::::::
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
// :::::::::: uniouns:::::::::::::::
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
let someData: number | null | undefined | object | string;
type TODO = ID[] | null;
let todoArr: TODO = ["go to market", "write a song"];

// :::::::::: Any / void / never / unknown ::::::::

// void******
const dontDo =(myName:string):void=>{
    console.log("My name is ",myName);
}
const iAmEmpty :void=null || undefined;
dontDo("suresh kumawat")
// any**** dont use "any" in your code 
let mtlbii:any = 34;
mtlbii="sdfs"
// console.log(mtlbii.fus())
mtlbii ={fd:"fgd"}
 
//never *********** it can never give any return value 
const neverEnd=(): never=>{
    console.log("hello brother !")
    while(true){}
    // throw "Error"
}

// unkonown*********** like any but not exactly
let pageNumberUnknown :unknown = "10" // the type is not known(string or number or...)
let pageInString :string =pageNumberUnknown as string;
let pageInNumber :number=pageNumberUnknown as number;
// or can use in type conversion 
let strIs: string = "5000"
let intIS:number = (strIs as unknown) as number
// **********keep in touch with unknown and void******
// *************try to avoide to use any******
// **********never is not used mostly**********


// ::::::::::::::working with DOM::::::::::::::::::
// const mainElement = document.querySelector(".classNameAny") as HTMLInputElement;
// console.log(mainElement.value); //html element has value property as above we defined the type first

// mainElement.addEventListener('click',(event)=>{
//     const Target =event.target as HTMLInputElement;
// console.log(Target.value);
// })
console.log()
console.log()
// :::::::::::::: classes in typeScript :::::::::::::
// ******* accessifire : public(default), private, protected******** ||public: access by every where ||protected : access by Child classes or self ||private : only  access by self
//***** readonly : work like const *****
//****static : it not the property of instaints of class while it is property of class and access by only class name. */
interface UniqueInterface{
    getUniqeName():string 
}

class UniqueClass {
// class UniqueClass implements UniqueInterface{
    private firstUniqeName :string; 
    private lastUniqeName :string; 
    readonly cantChangeMe: string;
    static readonly maxAge:number = 50;
    constructor(firstUniqeName:string,lastUniqeName:string) {
        this.firstUniqeName=firstUniqeName;
        this.lastUniqeName=lastUniqeName;
        this.cantChangeMe = " And you father is awesome."
    }
    changeReadeOnly(){
        // this.cantChangeMe ="i am Awesome" //it will throws error
        this.firstUniqeName ="rahul"
    }
    getUniqeName():string {
        return this.firstUniqeName +" "+ this.lastUniqeName+" is my Unique name."+this.cantChangeMe }
    static getMaxAge(uniqueAge:number) :string{
        if (this.maxAge< uniqueAge) return "not set"; 
        return "you are fit for doing this work"
    }

}

// const objUniuqeOne = new UniqueClass("suresh","kumawat")
// console.log(objUniuqeOne.getUniqeName());
// objUniuqeOne.changeReadeOnly()
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

const addId =<T extends object>(newObj:T)=>{
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

// ::::::::::ENUM:::::::::::: enum is used to provide sense of values.
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

// ::::::enum + interface:::::::::: highly use

interface EnumInterface{
  id: string,
  enumState: statusEnum  //only gives the value of that enum
}