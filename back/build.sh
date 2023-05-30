# // build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build
npm run typeorm migration:run -- -d dist/data-source
# yarn 
# yarn build
# yarn typeorm migration:run -d dist/data-source