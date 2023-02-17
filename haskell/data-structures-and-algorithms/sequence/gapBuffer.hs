data GapBuffer = GapBuffer String Int Int

create :: String -> GapBuffer 
create s = GapBuffer s 0 (length s) -- create a gap with the length of s

moveLeft :: GapBuffer -> GapBuffer
moveLeft (GapBuffer s i j) = GapBuffer s (i-1) (j-1) -- shift the gap to the left by 1


moveRight :: GapBuffer -> GapBuffer
moveRight (GapBuffer s i j) = GapBuffer s (i+1) (j+1) -- shift the gap to the right by 1


