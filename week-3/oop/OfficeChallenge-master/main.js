class Document{
    constructor(name){
        this.EmployeeName = name;
    }
}

class Employee{
    constructor(name){
        this.name = name;
    }

    work(office){
        for(let i=1;i<=10;i++){
            office.documents.push(new Document(this.name))
        }
    }
}


class Cleaner{
    constructor(name){
        this.name = name;
    }

    static clean(){
       console.log("Clean")
    }
}


class Manager{
    constructor(name){
        this.employees = [];
        this.name = name;
    }

    static hireEmployee(name){
        this.employees.push(new Employee(name));
    }

    static askEmployeesToWork(office){
        this.employees.forEach( e => e.work(office))
    }
}



class Office{
    constructor(){
        this.documents = [];
        this.managers =[];
        this.cleaners = [];
    }

    static hireManager(name){
        this.managers.push(new Manager(name));
    }

    static hireCleaner(name){
        this.cleaners.push(new Cleaner(name));
    }


    static startWorkDay(){
        this.managers.forEach( managers.askEmployeesToWork(this))
        this.cleaners.forEach( Cleaner.clean())
    }
}


