var salon={
    name:"The Fashion Pet",
    address:{
        number:  "23",
        street: "University Rd.",
        city:"Silver Back",
        state:"Ny",
        zip: "20001",

    },
    hours:{
        open:"9:00 a.m.",
        close: "5:00 p.m",
    },
    pets: []  
}

var {name,hours:{open,close},address:{number,street,city,state,zip,}}=salon;

document.getElementById("footer-info").innerHTML= `
<p>
    ${name} opens at ${open} and it close at ${close} from Monday to Friday <br> 
    ${number}  ${street} ${city} ${state} ${zip} 
</p>`;


//var {name,hours:{open,close}, address:{street,number}}=salon;
//document.getElementById("footer-info").innerHTML= `
//<p>
  //  ${name} opens at ${open} and it close at ${close} from Monday to <br> ${street} ${number}
//</p>`;


class Pet{
    constructor(nameA,ageA,genderA,breedA,serviceA,ownerA,phoneA,paymentMethodA,){
        this.name=nameA;
        this.age=ageA;
        this.gender=genderA;
        this.breed=breedA;
        this.service=serviceA;
        this.owner=ownerA;
        this.phone=phoneA;
        this.paymentMethod=paymentMethodA
    }
}



var scooby = new Pet("Scooby",50, "Male", "Dane", "Full Service", "Shaggy","555-555-555");
var kilo = new Pet("Kilo",50, "Male", "Dane", "Full Service", "Shaggy","555-555-5555");
var mike = new Pet("Mike",50, "Male", "Dane", "Full Service", "Shaggy","555-555-555");

//salon.pets[0]=scooby;

//salon.pets[0]=mike;
//salon.pets[0]=kilo;

salon.pets.push(scooby);
salon.pets.push(kilo);
salon.pets.push(mike);

//function register(){
  //     console.log("Register function")

//}


// for (var i=0; i<salon.pets.length;i++){
//    console.log(salon.pets[i].name);




//    document.getElementById("numpets").innerHTML=(salon.pets[i].name);
// }




let clientName = [];
for(let i=0;i<salon.pets.length;i++){
    clientName.push(salon.pets[i].name);
}

document.getElementById("number-pets").innerHTML=` Number of pets ${clientName.length}`;
document.getElementById("pets").innerHTML=` Name of pets here ${clientName}`;

function register(){
    var inputName=document.getElementById("petName").value;
    var inputAge=document.getElementById("petAge").value;
    var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwner=document.getElementById("ownerName").value;
    var inputPhone=document.getElementById("contactPhone").value;
    var inputPhone=document.getElementById("paymentType").value;

    var thePet= new Pet(inputName,inputAge,inputGender,inputBreed, inputService, inputOwner, inputPhone,inputpaymentMethod,);
    salon.pets.push(thePet);
    console.log(thePet);
    console.log(salon.pets);
}