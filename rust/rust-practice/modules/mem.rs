use std::mem;

struct MyStruct {
    a: u32,
    b: u32,
    c: u32,
}

fn main() {
    println!("{}", mem::size_of::<MyStruct>())
}
