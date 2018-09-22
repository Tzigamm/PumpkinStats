#!/bin/bash
#

while true
do
	fileName="Data/$(date)"
	echo "$fileName"
	wget -O "$fileName" https://challenge.pumpkin-app.com/jme-insa-rennes/
	sleep 1m
done
