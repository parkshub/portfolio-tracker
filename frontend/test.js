let a = {"b": 3, "c": 5, "d":10}

let replace = {
    "b": 1000
}

let b= {
    ...a,
    ...replace
}

console.log(b)