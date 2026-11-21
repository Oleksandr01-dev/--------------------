function ages(persons) {
    const result = {};

    for (const name in persons) {
        const person = persons[name];
        result[name] = person.died - person.born;
    }

    return result;
}

const persons = {
    alice: { born: 1900, died: 1980 },
    bob: { born: 1925, died: 1995 },
    charlie: { born: 1950, died: 2020 }
};

console.log(ages(persons));