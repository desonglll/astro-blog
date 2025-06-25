---
title: Docker Commands
date: 2025-06-25
description: Some basic docker commands you need to know.
author: desonglll
cover: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3n2blOWSXgLeciUsfa6UiKWR8NhVrEvUAA&s
tags:
  - Docker
published: true
---

## Installation

[docker.com](https://www.docker.com/)

## Offline Installation

[Linux Ubuntu離線安裝Docker](https://medium.com/@WilsonLeee/%E5%A6%82%E4%BD%95%E5%9C%A8ubuntu%E9%9B%A2%E7%B7%9A%E5%AE%89%E8%A3%9Ddocker-8fde0b5c9d30)

## Basic commands

```shell
docker ps -a  # show all containers
docker rm xxx # your container id to remove

docker images # show all images
docker rmi xxx # your image id to remove

docker start xxx
docker stop xxx
```

## Build a image

```shell
docker build --platform=linux/x64 -t my-docker-app .
```

## Save a image as tar

```shell
docker save -o my-docker-app.tar my-docker-app
```

## Load a image from tar

```shell
docker load -i my-docker-app.tar
```

## Run a container

```shell
docker run -p 8080:8080 my-docker-app
```

## Proxy

```shell
docker pull docker.1ms.run/nginx:latest
```

## Build with log

```shell
docker build -t <name> . --no-cache --platform linux/amd64 --progress=plain
```

## Build Docker image using GitHub Action

[Reference](https://medium.com/@wasdsro/tutorial-building-a-docker-container-via-github-actions-8636bdc931b1)

# Windows docker-compose

## Install Docker

[Download Docker for your machine](https://www.docker.com/products/docker-desktop/)

## Install WSL2

Right click Windows icon, open PowerShell(with admin)

```powershell
wsl --install
wsl --set-default-version 2
```

## Docker Compose file

```shell
docker run -d \
  --name sd-pro-backend \
  -p 8000:8000 \
  -e DJANGO_SETTINGS_MODULE=sd_pro.settings \
  -e DEBUG=1 \
  desonglll/sd-pro-backend:latest
```

```shell
docker run -d \
  --name sd-pro-frontend \
  -p 3000:80 \
  desonglll/sd-pro-frontend:latest
```

**ALL IN ONE**

```shell
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -aq) -f
docker network prune -f
docker volume prune -f
docker system prune -a -f


docker network create sd-network
docker run -d --name sd-pro-backend --network sd-network -p 8000:8000 \
    -e DJANGO_SETTINGS_MODULE=sd_pro.settings -e DEBUG=1 \
    desonglll/sd-pro-backend:latest
docker run -d --name sd-pro-frontend --network sd-network -p 3000:80 \
    desonglll/sd-pro-frontend:latest
```

**OR**

Create a `docker-compose.yml` file in a folder.

Then paste the following configuration into `docker-compose.yml`

```yml
# docker-compose.yml
services:
  backend:
    image: desonglll/sd-pro-backend:latest
    container_name: sd-pro-backend
    ports:
      - "8000:8000"
    environment:
      - DJANGO_SETTINGS_MODULE=sd_pro.settings
      - DEBUG=1

  frontend:
    image: desonglll/sd-pro-frontend:latest
    container_name: sd-pro-frontend
    ports:
      - "3000:80"
```

Windows + R enter `cmd` and press enter.

Enter the folder where `docker-compose.yml` located in using `cd` command.

Finally, press

```shell
docker-compose up -d
```