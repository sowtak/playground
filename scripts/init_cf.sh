#!/bin/bash
((i=0))
mkdir -p codeforces && cd codeforces && mkdir -p {5..35} && for d in "./"{5..35}; do mv "$d" "$d$i$i"; done;
