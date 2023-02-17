import Unsafe.Coerce

x :: Int
x = unsafeCoerce "hello"

main = print x
