import Control.Concurrent
import Control.Concurrent.Chan

parallelFunc :: Int -> IO ()
parallelFunc i = do
    putStrLn $ "running function in parallel: " ++ show i
    threadDelay 1000000

main :: IO ()
main = do
    t1 <- forkIO $ parallelFunc 1
    t2 <- forkIO $ parallelFunc 2

    wait t1
    wait t2

    putStrLn "both finished"
