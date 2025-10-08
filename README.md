# Kubernetes Voting App

A beginner-friendly Kubernetes project deploying a scalable voting app (Cats vs. Dogs) with Node.js frontend and Redis backend.

## Architecture
- **Frontend**: Node.js/Express app for voting UI.
- **Backend**: Redis for vote storage.
- **Kubernetes**: Minikube cluster with deployments, services, and load balancing.

## Setup Instructions
1. Install Docker, Minikube, kubectl on Ubuntu 24.04 (see [Minikube Docs](https://minikube.sigs.k8s.io/docs/start/)).
2. Clone this repo: `git clone <repo-url>`.
3. Build Docker image: `docker build -t voting-app .`.
4. Load to Minikube: `minikube image load voting-app`.
5. Apply YAMLs: `kubectl apply -f redis-deployment.yaml && kubectl apply -f voting-deployment.yaml`.
6. Access: `minikube service voting-service --url`.

## Demo
- Vote via web UI; votes persist in Redis.
- Scaled to 3 replicas: `kubectl scale deployment voting-deployment --replicas=3`.
- Debugged `ImagePullBackOff` using `imagePullPolicy: Never` and Redis connectivity.

## Learned
- Docker containerization.
- Kubernetes deployments, services, and scaling.
- Debugging `ImagePullBackOff`, permissions, and Redis issues.

