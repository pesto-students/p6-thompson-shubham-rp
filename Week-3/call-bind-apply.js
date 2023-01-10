let car1 = {
  brand: "Tata",
  name: "Punch",
};

let car2 = {
  brand: "Nissan",
  name: "Magnite",
};

let listCarDetails = function (model, fuelType) {
  console.log(
    this.brand + " " + this.name + " Model: " + model + " " + fuelType
  );
};

listCarDetails.call(car1, "Adventure", "Petrol");

listCarDetails.call(car2, "XV Executive", "Petrol");

// apply method - similar to call - arguments are provided in an array

listCarDetails.apply(car2, ["XV Premium", "Diesel", "Nana"]);

//bind - used to create a function which is bound to a this value;

let punchBind = listCarDetails.bind(car1);

punchBind("Kaziranga Edition", "Electric Vehicle");
punchBind("Adventure Rhythm", "Petrol");

let magniteBind = listCarDetails.bind(car2);

magniteBind("Red Edition", "Petrol");
magniteBind("Red Edition", "Diesel");
