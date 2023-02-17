import Data.Ratio

a = 1 % 2
b = 3 % 4

c = a + b
d = a - b
e = a * b
f = a / b

g = numerator f `div` denominator f
h = fromRational f

main = do
    putStrLn $ show c
    putStrLn $ show d
    putStrLn $ show e
    putStrLn $ show f
    putStrLn $ show g
    putStrLn $ show h
