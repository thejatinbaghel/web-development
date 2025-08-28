const a = {
    name: 'Jatin',
    age: 21
}


Object.freeze(a)
a.age=22

console.log(a)