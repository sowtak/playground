import RIO

main :: IO ()
main = do
  contents <- readFileUtf8 "myfile.txt"
  logInfo $ "The contents of the file are: " <> display contents

