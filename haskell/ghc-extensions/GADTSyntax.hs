{-# LANGUAGE GADTSyntax #-}

data Tree a where
    Leaf :: a -> Tree a
    Node :: Tree a -> Tree a -> Tree a

data Tree2 a = Leaf2 a | Node2 (Tree2 a) (Tree2 a) 

instance Show a => Show (Tree a) where
    show (Leaf x) = "Leaf: " ++ show x
    show (Node l r) = "Node: (" ++ show l ++ "," ++ show r ++ ")"


instance Show a => Show (Tree2 a) where
    show (Leaf2 x) = "Leaf: " ++ show x
    show (Node2 l r) = "Node: (" ++ show l ++ "," ++ show r ++ ")"

main = do
    let t = Leaf "x"
    print $ show t
