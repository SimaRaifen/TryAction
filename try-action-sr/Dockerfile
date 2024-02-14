# Container image that runs your code
FROM node

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY dist/index.js /index.js

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/index.js"]
