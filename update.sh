DIRECTORY='../blog_by_vuepress/blog/.vuepress/dist/'
if [ "`ls -A $DIRECTORY`" = "" ]; then
    echo "$DIRECTORY is empty, stop upload!!!"
else
    rm -rf 404.html assets categories detail index.html page tags
    mv `$DIRECTORY*` .
    git add --all
    git commit -m "Update"
    git push
fi
