section .text
    global _start
_start:
    mov eax, 1111
    mov edx, eax
    add eax, eax
    add eax, edx

section .data
