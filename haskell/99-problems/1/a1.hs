main = do
    print $ head . rev $ [1,2,3,4]
    where
        rev :: [Int] -> [Int]
        rev = \list ->
            case list of 
                [] -> [] 
                x:xs -> rev  xs ++ [x]
    
            
