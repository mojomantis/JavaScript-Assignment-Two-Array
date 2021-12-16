// Q 1

var array = [];

//Q 2

var students = new Array();

//Q 3

var stringsArr = ["abc", "efg", "hij"];

//Q 4

var nums = [1, 2 , 3];

//Q 5

var boolArr = [true, false, true, true];

//Q 6

var mixArr = [true, 10, "abc", 123];

//Q 7

var networksInPakistan = ["jazz", "zong", "telenor", "warid"];

//Q 8

var eduQualificationPakistan = ["ssc", "hsc", "bcs", "bs", "bcom", "ms", "m. phil.", "phd" ];

console.log("Qualifications:");
for (let i=0; i<eduQualificationPakistan.length; i++){
    console.log((i + 1) + ") " + (eduQualificationPakistan[i]));
}

//Q 9

var topMovies = [];
topMovies.push("Avengers: Age of Ultron");
topMovies.push("Spectre");
topMovies.push("Jurassic World");
topMovies.push("Inside Out");

console.log("Top Movies of 2015");
for (let i=0; i<topMovies.length; i++){
    console.log((i + 1) + ") " + (topMovies[i]));
}
console.log("Length of the array: " + (topMovies.length));

//Q 10

var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

if (favCars.length === 0){
    console.log("array is empty");
}
else{
    console.log("first index of array: 0");
}

console.log("Car at first index of array: " + favCars[0]);
console.log("last index of array: " + (favCars.length-1));
console.log("Car at last index of array: " + favCars[(favCars.length-1)]);

//Q 11

var stdNames = ["Michael", "John", "Tony"];
var stdScores = [320, 230, 480];

for (let i = 0; i < stdNames.length; i++){
    console.log("Score of " + stdNames[i] + " is " + stdScores[i] + ". " + "Percentage: " + ((stdScores[i]/500)*100) + "%");
}

//Q 12

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];
var newColor;
console.log(colors);

//a
newColor = prompt("Enter the color you want to add in the BEGINNING.");
colors.unshift(newColor);
console.log(colors);

//b
newColor = prompt("Enter the color you want to add at the END.");
colors.push(newColor);
console.log(colors);

//c
colors.unshift("Black", "White");
console.log(colors);

//d
colors.shift();
console.log(colors);

//e
colors.pop();
console.log(colors);

//f

var newColorIndex = Number(prompt("At what Index do you want to add another Color."));
newColor = prompt("What color do you want to add at index " + newColorIndex);
colors.splice(newColorIndex, 0, newColor);
console.log(colors);

//g

newColorIndex = Number(prompt("At what Index do you want to delete"));
var howManyToDelete = Number(prompt("How many do you want to delete"));
colors.splice(newColorIndex, howManyToDelete);
console.log(colors);


//Q 13

stdScores = [320, 230, 480, 120];
stdScores.sort();
console.log(stdScores);


//Q 14

var fruits = ["strawberry", "apple", "orange", "banana"];
fruits.sort();
console.log(fruits);


//Q 15

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(cities);
var selectedCities = cities.slice(1, 4);
console.log(selectedCities);

//Q 16

var sentence = ["This", "is", "my", "cat"];
console.log(sentence);
var newSentence =sentence.join(" ");
console.log(newSentence);

//Q 17

var fifoArr = [];
for (let i = 0; i < 4; i++){
    fifoArr[i]=prompt("Enter name for Fifo Array");
}

console.log(fifoArr);

for (let i = 0; i < fifoArr.length; i++){
    console.log(fifoArr[i]);
}

//Q 18

var lifoArr = [];
for (let i = 0; i < 4; i++){
    lifoArr[i]=prompt("Enter name for lifo Array");
}

console.log(lifoArr);

for (let i = (lifoArr.length-1); i >= 0; i--){
    console.log(lifoArr[i]);
}

//Q 20

var multiDArr = [[],[],[]];

//Q 21

var multiDArrTwo = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for(let i = 0; i < multiDArrTwo[i].length; i++) {
    for(let j = 0; j < multiDArrTwo.length; j++) {
      console.log(multiDArrTwo[j][i]);
    }
  }