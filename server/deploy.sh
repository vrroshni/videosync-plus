#!/bin/bash

projRoot=/home/ubuntu/videosync-plus

.  $projRoot/server/env/bin/activate
cd $projRoot/server
gunicorn --bind 127.0.0.1:8000 server.wsgi:application