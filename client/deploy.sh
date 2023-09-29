#!/bin/bash

projRoot=/home/ubuntu/videosync-plus

cd $projRoot/client
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
npm run preview