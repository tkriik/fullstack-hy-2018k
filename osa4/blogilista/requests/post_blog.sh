#!/bin/sh

curl -s \
     -X POST 'localhost:3003/api/blogs' \
     -H 'Content-Type: application/json' \
     -d "{
           \"title\": \"$1\",
           \"author\": \"$2\",
           \"url\": \"$3\",
           \"likes\": $4
         }" | jq .
