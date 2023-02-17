pub fn fn_longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let ret = fn_longest(&"aa", &"aaa");
    println!("{}", ret);
}
