#!/bin/bash

if [[ $1 -ne 0 ]]
then
	python -m SimpleHTTPServer $1

else
	python -m SimpleHTTPServer
fi
