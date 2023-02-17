import Data.List
import qualified Data.Map as Map
import qualified Data.Set as Set

data Graph a = Graph { vertices :: Set.Set a, edges :: Map.Map a [a] }

reverseGraph :: (Ord a) => Graph a -> Graph a
reverseGraph (Graph vs es) = Graph vs $ Map.fromList [(v, [u | (u, vs) <- Map.toList es, v `elem` vs]) | v <- Set.toList vs]

dfs :: (Ord a) => Graph a -> a -> [a] -> [a]
dfs g v visited = v : (foldl' (\acc w -> if w `elem` visited then acc else dfs g w acc) visited $ Map.findWithDefault [] v (edges g))

kosaraju :: (Ord a) => Graph a -> [[a]]
kosaraju g = stronglyConnectedComponents (reverseGraph g) [] (Set.toList $ vertices g) 
    where 
        stronglyConnectedComponents _ acc [] = acc
        stronglyConnectedComponents rg acc (v:vs) =
            if v `elem` visited then stronglyConnectedComponents rg acc vs
            else stronglyConnectedComponents rg (scc : acc) (vs ++ scc)
                where 
                    visited = concat acc
                    scc = dfs rg v []
