# usage: ./push_to_github.sh "<change description>"
clear
git add -A
git commit -m "update"
git push origin master
