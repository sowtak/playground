{-# LANGUAGE TemplateHaskell #-}

import Language.Haskell.TH

addInts :: Int -> Int -> Int
addInts x y = x + y

main :: IO ()
main = do
  let expr = LitE (IntegerL 7)
  runQ (reify 'addInts >>= \info ->
         case info of
           VarI _ ty _ _ -> return (FunD 'addInts [Clause [] (NormalB (AppE (VarE 'addInts) expr)) []])
           _ -> fail "Not a variable with a type")

