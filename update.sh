rm -rf 404.html assets categories detail index.html page tags

mv ../blog_by_vuepress/blog/.vuepress/dist/* .

git add --all

git commit -m "Update"

git push
