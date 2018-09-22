#!/bin/bash

inotifywait -me moved_to,close_write --format "%w%f" ../Data/ | while read file; do
    ./SixCentEuros "${file}"
done
