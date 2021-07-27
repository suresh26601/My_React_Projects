var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// :::::::::::: variable in TS:::::::::::
var ppds = 1;
console.log(ppds);
// ::::::::::::::function in TS:::::::::::::::
var main = function (one, two) {
    console.log(one, two);
    return one + "    " + two;
};
var myName = main("suresh", "kumawat");
console.log(myName);
var objOne = {
    name: "Rahul",
    friendsCount: 300,
    sleepAlways: function () {
        return "Always, we sleep together.";
    }
};
var objTwo = {
    name: "Suresh",
    sleepAlways: function () {
        return "I sleep always alone.";
    }
};
console.log(objOne.friendsCount);
console.log(objOne.sleepAlways());
console.log(objTwo.sleepAlways());
// :::::::::: uniouns:::::::::::::::
var userName = "alex";
var pageName = "19";
//  console.log(pageName);
//  pageName=parseInt(pageName)
console.log(pageName);
var id = "1";
var userDetail = null;
var someData;
var todoArr = ["go to market", "write a song"];
// :::::::::: Any / void / never / unknown ::::::::
// void******
var dontDo = function (myName) {
    console.log("My name is ", myName);
};
var iAmEmpty = null || undefined;
dontDo("suresh kumawat");
// any**** dont use "any" in your code 
var mtlbii = 34;
mtlbii = "sdfs";
// console.log(mtlbii.fus())
mtlbii = { fd: "fgd" };
//never *********** it can never give any return value 
var neverEnd = function () {
    console.log("hello brother !");
    while (true) { }
    // throw "Error"
};
// unkonown*********** like any but not exactly
var pageNumberUnknown = "10"; // the type is not known(string or number or...)
var pageInString = pageNumberUnknown;
var pageInNumber = pageNumberUnknown;
// or can use in type conversion 
var strIs = "5000";
var intIS = strIs;
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
console.log();
console.log();
var UniqueClass = /** @class */ (function () {
    function UniqueClass(firstUniqeName, lastUniqeName) {
        this.firstUniqeName = firstUniqeName;
        this.lastUniqeName = lastUniqeName;
        this.cantChangeMe = " And you father is awesome.";
    }
    UniqueClass.prototype.changeReadeOnly = function () {
        // this.cantChangeMe ="i am Awesome" //it will throws error
        this.firstUniqeName = "rahul";
    };
    UniqueClass.prototype.getUniqeName = function () {
        return this.firstUniqeName + " " + this.lastUniqeName + " is my Unique name." + this.cantChangeMe;
    };
    UniqueClass.getMaxAge = function (uniqueAge) {
        if (this.maxAge < uniqueAge)
            return "not set";
        return "you are fit for doing this work";
    };
    UniqueClass.maxAge = 50;
    return UniqueClass;
}());
// const objUniuqeOne = new UniqueClass("suresh","kumawat")
// console.log(objUniuqeOne.getUniqeName());
// objUniuqeOne.changeReadeOnly()
// console.log(objUniuqeOne.getUniqeName());
// console.log(UniqueClass.getMaxAge(40))
// :::::::::Inharitance::::::::::::
var ChildUnique = /** @class */ (function (_super) {
    __extends(ChildUnique, _super);
    function ChildUnique() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildUnique.prototype.setChildName = function (uniqueChildName) {
        this.uniqueChildName = uniqueChildName;
    };
    ChildUnique.prototype.getChildName = function () {
        console.log(this.uniqueChildName + " is my baby name");
    };
    return ChildUnique;
}(UniqueClass));
var uniqueChildObjOne = new ChildUnique("dev", "pani");
// console.log(uniqueChildObjOne.getUniqeName());
uniqueChildObjOne.setChildName("Romiyo");
uniqueChildObjOne.getChildName();
// ::::::::::::Generics::::::::::::
var addId = function (newObj) {
    var id = Math.random().toString(16); //gives the random value as a hax value string.
    return __assign({ uniqueId: id }, newObj);
};
var genericObj = {
    name: "suresh the boss",
    code: { password: 567898343 },
    moreCode: ["sursh", "ganesh", "devta"]
};
var genericFun = addId(genericObj);
console.log("result", genericFun);
// ::::::::::ENUM:::::::::::: enum is used to provide sense of values.
var statusLikeEnum = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    thursday: 4
};
console.log(statusLikeEnum.tuesday);
var statusEnum;
(function (statusEnum) {
    statusEnum[statusEnum["jan"] = 1] = "jan";
    statusEnum[statusEnum["feb"] = 2] = "feb";
    statusEnum[statusEnum["march"] = 3] = "march";
    statusEnum[statusEnum["april"] = 4] = "april";
    statusEnum[statusEnum["may"] = 5] = "may";
    statusEnum[statusEnum["oct"] = 10] = "oct";
    statusEnum[statusEnum["nov"] = 11] = "nov";
    statusEnum[statusEnum["dec"] = 12] = "dec";
    statusEnum["whatIsThis"] = "Month's Name";
})(statusEnum || (statusEnum = {}));
console.log(statusEnum.whatIsThis);
var newEnumDataType = statusEnum.march;
console.log(newEnumDataType);
