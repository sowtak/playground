reverseList :: [Int] -> [Int]
reverseList = \list ->
    case list of 
        [] -> []
        x:xs -> reverseList xs ++ [x]
main = print (reverse [1,2,3])
