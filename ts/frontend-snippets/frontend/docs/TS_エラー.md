aidlがついてると.mdファイルまで解析されるのでエラー出たら消す

## TS7016: Could not find a declaration file for module ".." . 'path/to/module-name.js' implicitly has an any type.
```
npm i @types/module-name
```

## TS2349: This expression is not callable...
object, undefined型は呼び出しできない。 相応しい型かanyに変える

## TS2339: Property 'property_name' does not exist on type 'type_name'


## TS7031: Binding element 'element_name' implicitly has an 'any' type
```
{element_name}: {element_name: any}
```
で直る


## TS2345: Argument of type "type_name" is not assignable to parameter of type 'type_name2'
```aidl

``` 

## TS2769: No overload matches this call
<Container>を<div>タグの中に囲まずに使っていたのを直したら解決