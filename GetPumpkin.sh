#!/bin/bash
#

while true
do
	fileName="Data/$(date)"
	echo "$fileName"
	wget -O "$fileName" https://challenge.pumpkin-app.com/jme-insa-rennes/
	echo "$(date)" >> listFiles
	sleep 1m
done
