# basic-nginx-node
NGINX load balancing for NodeJS backend. All are in docker container.

### Create a Bridge network:
`docker network create backend-bridge-network`

### Build an image
`docker build -t nodeapp .` 

### Create backend application containers
We are going to create 3 backend node container.

1. `docker run --hostname nodeapp1 --name nodeapp1 -d --network=backend-bridge-network nodeapp`
2. `docker run --hostname nodeapp2 --name nodeapp2 -d --network=backend-bridge-network nodeapp`
3. `docker run --hostname nodeapp3 --name nodeapp3 -d --network=backend-bridge-network nodeapp`

### NGINX server
`docker run -p 80:8080 -v <YOUR_ABS_PATH_TO_NGINX.CONF>:/etc/nginx/nginx.conf --network=backend-bridge-network nginx`

example: `docker run -p 80:8080 -v /Users/sharan/Desktop/workplace/Git/basic-nginx-container/nginx.conf:/etc/nginx/nginx.conf --network=backend-bridge-network nginx`

### OUTPUT
Go to `http://localhost` or `http://127.0.0.1`, try refresh the page, you will see load balancing in `round robin`.
