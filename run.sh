#!/bin/bash

docker stop tete-about-app

docker rm tete-about-app

docker build -t tete-about .

docker run -dit --name tete-about-app -p 8080:80 tete-about