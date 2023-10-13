DIRECTORY='../blog_by_vuepress_v2/blog/.vuepress/dist/'
if [ "`ls -A $DIRECTORY`" = "" ]; then
    echo "$DIRECTORY is empty, stop upload!!!"
else
    # rm -rf assets categories category detail tag tags 404.html favicon.ico index.html robots.txt search-pro.worker.js
    rm -rf assets categories category detail page tag tags 404.html favicon.ico index.html omega-sign.png sitemap.xml robots.txt search-pro.worker.js
    mv $DIRECTORY* .
    git add --all
    git commit -m "Update"
    git push
fi
