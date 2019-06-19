#!/bin/bash
yarn generateSchema
cp src/schema.json docs/schema-$npm_package_version.json
git add docs/schema-$npm_package_version.json
git commit --amend --no-edit
#git push --tags && yarn publish . --tag $npm_package_version && git push && echo "Successfully released version $npm_package_version!"