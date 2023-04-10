function createCube(size) {
    let cube = ""
    for (let i = 1, l = size; i <= size; i++, l--) {
        cube += " ".repeat(l-1)
        cube += "/\\".repeat(i)
        cube += "_\\".repeat(size)
        cube += "\n"
    }
    for (let j = 0, k = size; j < size; j++, k--) {
        cube += " ".repeat(j)
        cube += "\\/".repeat(k)
        cube += "_/".repeat(size)
        if (j == size-1) break
        else cube += "\n"
    }
    return cube
}
console.log(createCube(1))
console.log(createCube(2))
console.log(createCube(3))
console.log(createCube(5))
console.log(createCube(7))
console.log(createCube(10))
