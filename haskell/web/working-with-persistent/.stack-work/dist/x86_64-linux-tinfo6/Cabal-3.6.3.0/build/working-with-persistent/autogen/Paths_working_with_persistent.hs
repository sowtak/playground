{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
{-# OPTIONS_GHC -w #-}
module Paths_working_with_persistent (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where


import qualified Control.Exception as Exception
import qualified Data.List as List
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude


#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,1,0,0] []

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir `joinFileName` name)

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath



bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath
bindir     = "/home/sowtak/haskell-practice/web/working-with-persistent/.stack-work/install/x86_64-linux-tinfo6/f6d71e6e4f57fa128800febf4126675abe634c6b9fc5e4e4f9b84c649bac8774/9.2.5/bin"
libdir     = "/home/sowtak/haskell-practice/web/working-with-persistent/.stack-work/install/x86_64-linux-tinfo6/f6d71e6e4f57fa128800febf4126675abe634c6b9fc5e4e4f9b84c649bac8774/9.2.5/lib/x86_64-linux-ghc-9.2.5/working-with-persistent-0.1.0.0-Gr546bIGfpmE2u6WCxYtNc-working-with-persistent"
dynlibdir  = "/home/sowtak/haskell-practice/web/working-with-persistent/.stack-work/install/x86_64-linux-tinfo6/f6d71e6e4f57fa128800febf4126675abe634c6b9fc5e4e4f9b84c649bac8774/9.2.5/lib/x86_64-linux-ghc-9.2.5"
datadir    = "/home/sowtak/haskell-practice/web/working-with-persistent/.stack-work/install/x86_64-linux-tinfo6/f6d71e6e4f57fa128800febf4126675abe634c6b9fc5e4e4f9b84c649bac8774/9.2.5/share/x86_64-linux-ghc-9.2.5/working-with-persistent-0.1.0.0"
libexecdir = "/home/sowtak/haskell-practice/web/working-with-persistent/.stack-work/install/x86_64-linux-tinfo6/f6d71e6e4f57fa128800febf4126675abe634c6b9fc5e4e4f9b84c649bac8774/9.2.5/libexec/x86_64-linux-ghc-9.2.5/working-with-persistent-0.1.0.0"
sysconfdir = "/home/sowtak/haskell-practice/web/working-with-persistent/.stack-work/install/x86_64-linux-tinfo6/f6d71e6e4f57fa128800febf4126675abe634c6b9fc5e4e4f9b84c649bac8774/9.2.5/etc"

getBinDir     = catchIO (getEnv "working_with_persistent_bindir")     (\_ -> return bindir)
getLibDir     = catchIO (getEnv "working_with_persistent_libdir")     (\_ -> return libdir)
getDynLibDir  = catchIO (getEnv "working_with_persistent_dynlibdir")  (\_ -> return dynlibdir)
getDataDir    = catchIO (getEnv "working_with_persistent_datadir")    (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "working_with_persistent_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "working_with_persistent_sysconfdir") (\_ -> return sysconfdir)




joinFileName :: String -> String -> FilePath
joinFileName ""  fname = fname
joinFileName "." fname = fname
joinFileName dir ""    = dir
joinFileName dir fname
  | isPathSeparator (List.last dir) = dir ++ fname
  | otherwise                       = dir ++ pathSeparator : fname

pathSeparator :: Char
pathSeparator = '/'

isPathSeparator :: Char -> Bool
isPathSeparator c = c == '/'
