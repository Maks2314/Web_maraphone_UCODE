function heroName() {
    let animal = prompt('What animal is the superhero most similar to?', '');
    let regex = RegExp('^[a-zA-Z]+$');

    if (animal.length > 20 || !regex.test(animal)) {
        alert('Error name');
        animal = null;
    }
    else {
        alert('Animal name is ' + animal);
    }
    return animal;
}

function heroGender() {
    let gender =  prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
    let resGender = RegExp('^male$|^female$|^$', 'i')

    if (!resGender.test(gender)) {
        alert('Error gender');
        gender = null;
    }
    else {
        alert('Gender is ' + gender);
    }
    return gender;
}

function heroAge() {
    let age = prompt('How old is the superhero?', '');
    let reqAge = RegExp(/^[1-9]|[0-9]{0,4}$/)

    if (age.length > 5 || !reqAge.test(age)) {
        alert('Error age');
        age = null;
    }
    else {
        alert('Age is ' + age);
    }
    return age;
}

function heroSuperName() {
    let status, animal, gender, age;
    while(animal == null) {
        animal = heroName();
    }
    while(gender == null) {
        gender = heroGender();
    }
    while(age == null) {
        age = heroAge();
    }
    if (RegExp('^male$', 'i').test(gender) && age < 18) {
        status  = "boy";
    }
    else if (RegExp('^$').test(gender) && age < 18) {
        status  = "kid";
    }
    else if (RegExp('^female$', 'i').test(gender) && age < 18) {
        status  = "girl";
    }
    else if (RegExp('^male$', 'i').test(gender) && age >= 18) {
        status  = "man";
    }
    else if (RegExp('^female$', 'i').test(gender) && age >= 18) {
        status  = "woman";
    }
    else if (RegExp('^$').test(gender) && age >= 18) {
        status  = "hero";
    }
    alert(animal + '-' + status );
}

heroSuperName();