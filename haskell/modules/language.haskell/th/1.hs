import Language.Haskell.TH

main = print $ runQ [| 1 + 2|]
