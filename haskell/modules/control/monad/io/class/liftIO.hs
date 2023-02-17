import Control.Monad.IO.Class

test :: IO Int
test = do
    x <- readLn :: IO Int
    if x > 0 then return x else putStrLn "Invalid" >> return 0
