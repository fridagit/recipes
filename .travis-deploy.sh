#!/bin/bash
set -e
echo "Branch is $TRAVIS_BRANCH"
subdir=""
if [ "$TRAVIS_BRANCH" != "master" ]; then
  subdir="beta-$TRAVIS_BRANCH"
fi
export SSHPASS=$SSH_PASS
sshpass -e rsync --archive --delete --chmod=Du=rwx,go=rx,Fu=rwx,og=rx "dist/" "$SSH_USER@frick.site:Docker/recipes/"
