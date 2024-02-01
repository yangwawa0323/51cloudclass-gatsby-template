#!/bin/bash

find  -name "*.js" -o -name "*.css" -o -name "*.json" -o -name "*.png" -o -name "*.webp" -o -name "*.jpg" | sed s#./#https://assets.51cloudclass.com/assets/#  > /d/Projects/51cloudclass.com.qiniu.txt
