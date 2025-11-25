#!/bin/sh
git pull
docker compose down --rmi all
docker rmi se-new-energy-cloud-frontend-nginx-react
docker compose up -d --build