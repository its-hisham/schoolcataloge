class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfstudents(value) {
    if (value.isNaN()) {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this.numberOfStudents = value;
    }
  }
  quickFacts() {
    console.log(
      `${this.name}educates ${this.numberOfStudents} students at the ${this.level} school level`
    );
  }
  static pickSubstituteTeachers(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickupPolicy() {
    return this._pickUpPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, SportsTeams) {
    super(name, "high", numberOfStudents);
    this._SportsTeams = SportsTeams;
  }
  get SportsTeams() {
    return this._SportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();
const sub = School.pickSubstituteTeachers([
  "jamal",
  "lou",
  "james",
  "jason",
  "manu",
  "smith",
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(alSmith.SportsTeams)
