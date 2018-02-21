#!/bin/sh

curl -s -X GET "localhost:3003/api/blogs" | jq .
