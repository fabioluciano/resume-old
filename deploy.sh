#!/bin/bash
set -e # exit with nonzero exit code if anything fails

cd target

git init

git config user.name "Travis CI"
git config user.email "fabio@naoimporta.com"

git add . -A
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1