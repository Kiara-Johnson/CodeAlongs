class Governor {
    static signLaws() {
        return 'This is now a law.';
    }
    static vetoLaws() {
        return 'This will not be law.';
    }
    static disasterRelief(){
        return "i'm from the government and I'm here to help";
    }
}

Governor.signLaws();
Governor.vetoLaws();
Governor.disasterRelief();

class Person {
    constructor(name, birthdate, height){
      this.name = name;
      this.birthdate = birthdate;
      this.height = height;
     
    }
    birthday(){
        this.birthdate = CurrentDate;
      console.log("It's your birthday!");
    }

  }
  

  class PostalWorker extends Person {
    mailSorting(){

    }
  }

  class Chef extends Person {
    constructor(specialty, favoriteDish){
        this.specialty = specialty;
        this.favoriteDish = favoriteDish;
    }
    mealPrep(){
        console.log("Time to prep.");
    }
    cooking(){
        console.log("Cooking time.");
    }
    presentMeal(){
        console.log("Here's your meal.");
    }
  };

//   let chefOne = new Chef()

//coding with a migraine is interesting