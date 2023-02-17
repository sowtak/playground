import {exit} from 'process'

function main(input) {
    const a = input.split(/[\n]/).map(Number)
    console.log(a[0]-a[1])
    exit
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
