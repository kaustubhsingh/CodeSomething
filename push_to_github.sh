# usage: ./push_to_github.sh "<change description>"
git add -A
git commit -m "$1"
git push origin master
