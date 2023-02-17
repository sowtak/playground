myButLast :: [a] ->  a
myButLast [] = error "empty"
myButLast [x] = error "the number of elements should be more than two"
myButLast x = head.tail.reverse $ x
