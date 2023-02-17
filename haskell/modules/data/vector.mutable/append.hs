import Data.Vector.Mutable as MV
import Control.Monad.ST

createVectorOfVectors :: Int -> Int -> ST s (MV.STVector s (MV.STVector s Int))
createVectorOfVectors outerVectorSize innerVectorSize = do
  outerVector <- MV.new outerVectorSize
  let
    createInnerVector i = do
      innerVector <- MV.new innerVectorSize
      MV.write innerVector 0 i
      return innerVector
  mapM createInnerVector [0..outerVectorSize-1] >>= MV.write outerVector innerVector

main = do
  result <- runST $ do
    outerVector <- createVectorOfVectors 3 2
    MV.modify outerVector (\innerVector -> MV.modify innerVector (+1)) 0
    MV.read outerVector 0
  print result

