  global  _start

  section .text
_start:   mov rax, 1
          mov rdi, 1
          mov rsi, message

  section .data
message:  db  "Hello, World", 10  
