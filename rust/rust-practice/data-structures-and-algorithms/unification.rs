pub mod unification;
use std::collections::HashMap;

type Substitution = HashMap<String, String>;

fn unify(x: &str, y: &str, theta: &mut Substitution) -> bool {
    if theta.contains_key(x) {
        return unify(&theta[x], y, theta);
    }
    if theta.contains_key(y) {
        return unify(x, &theta[y], theta);
    }
    if x == y {
        return true;
    }
    if x.starts_with("?") && !y.starts_with("?") {
        theta.insert(x.to_string(), y.to_string());
        return true;
    }
    if y.starts_with("?") && !x.starts_with("?") {
        theta.insert(y.to_string(), x.to_string());
        return true;
    }
    return false;
}

fn main() {
    let mut theta = Substitution::new();
    let x = "?x";
    let y = "hello";
    let result = unify(x, y, &mut theta);
    if result {
        println!("Unification successful: {:?}", theta);
    } else {
        println!("Unification failed");
    }
}
