var mark = {
    name: "Mark",
    tshirtColor: "navy blue"
};

var lisa = {
    name: "Lisa",
    tshirtColor: "red"
};


// constructor 
function Friend( name, tshirtColor ) {
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var denny = new Friend ("Denny", "green");
var lisa = new Friend ("Lisa", "red");

alert(denny.name);