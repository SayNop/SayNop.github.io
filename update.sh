DIRECTORY='../blog_by_vuepress/blog/.vuepress/dist/'
if [ "`ls -A $DIRECTORY`" = "" ]; then
    echo "$DIRECTORY is empty, stop upload!!!"
else
    # rm -rf assets categories detail page tags 404.html favicon.ico index.html omega-sign.png sitemap.xml
    rm -rf assets categories category detail page tag tags 404.html favicon.ico index.html omega-sign.png sitemap.xml robots.txt search-pro.worker.js
    mv $DIRECTORY* .
    git add --all
    git commit -m "Update"
    git push
fi
