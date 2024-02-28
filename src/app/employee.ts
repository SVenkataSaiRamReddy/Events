// this class must be map to json data 
// retrieve from json-server or backend technology spring boot 
export class Employee {
    constructor(public id:number,public fname:string,
        public lname:string, public email:string){}
}