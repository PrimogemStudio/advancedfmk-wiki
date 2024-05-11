#!/bin/bash

export CUR=$(pwd)
git add .
vim temp.log
git commit -F "temp.log"
git push
rm temp.log

export COMMIT_ID=$(git rev-parse HEAD)
rm -rf /tmp/advwi_dep
git clone -b gh-pages https://github.com/PrimogemStudio/advancedfmk-wiki /tmp/advwi_dep &
yarn build &
wait
cp -r ./build/* /tmp/advwi_dep
cd /tmp/advwi_dep
git add .
git commit -m "Script deploy -- build from $COMMIT_ID"
git push

cd "$CUR"
yarn serve
