function Employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

function Spinner(){
    var count = 0;
    this.up = function(){
        return ++count;
    };
    this.down = function(){
        return --count;
    };
}

