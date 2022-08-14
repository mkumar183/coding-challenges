var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var Weeks;
(function (Weeks) {
    Weeks[Weeks["Saturday"] = 6] = "Saturday";
    Weeks[Weeks["Sunday"] = 7] = "Sunday";
})(Weeks || (Weeks = {}));
console.log(Weeks[6]);
console.log(Weeks[7]);
