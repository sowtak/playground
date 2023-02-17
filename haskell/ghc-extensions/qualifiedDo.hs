{-# LANGUAGE QualifiedDo #-}

import Control.Monad.State

myFunc :: State Int Int
myFunc = do
    put 5
    get 
