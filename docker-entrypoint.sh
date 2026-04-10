#!/bin/sh
set -e
cd /app
# Kubernetes sets HOSTNAME to the pod name; Next standalone uses HOSTNAME as bind address.
# `env` applies these for the Node process only, overriding the pod hostname.
exec env HOSTNAME=0.0.0.0 PORT="${PORT:-8000}" node server.js
