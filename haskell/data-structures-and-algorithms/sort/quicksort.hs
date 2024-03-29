quicksort :: Ord a => [a] -> [a]
quicksort []    = []
quicksort  (x:xs) = quicksort smaller ++ [x] ++ quicksort larger
    where
        smaller = [y | y <- xs, y <= x]
        larger = [y | y <- xs, y >= x]
