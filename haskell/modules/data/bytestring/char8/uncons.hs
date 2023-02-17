import Data.ByteString.Char8 (ByteString, uncons)

bs = "Test" :: ByteString

main = do
    let (head, tail) = uncons bs
