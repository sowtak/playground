elementAt :: [a] -> Int -> a
elementAt [] _ = error "empty" 
elementAt [a] _ = a
elementAt (a:as) k 
    | k <= 0 = error "index should be greater than 0"
    | k > length (a:as) = error "index is larger than the size of the list"
    | k == 1 = a
    | otherwise = elementAt as (k-1) 
