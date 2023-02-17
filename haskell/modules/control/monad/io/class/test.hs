import Control.Monad.IO.Class
import Data.Typeable
main = do
    input <- liftIO getLine
    let m = liftIO $ putStrLn input
    print $ typeOf input

