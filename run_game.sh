#!/bin/bash
echo "Stopping old servers..."
pkill -f "http.server"
echo "Starting Mindcraft Server on port 8888..."
# Start server in background
nohup python3 -m http.server 8888 > server.log 2>&1 &
SERVER_PID=$!
echo "Server started with PID $SERVER_PID"
sleep 2
echo "Opening Browser..."
open "http://localhost:8888/mindcraft-web/index.html"
echo "Done! You can close this terminal window if you want, but don't quit the process."
