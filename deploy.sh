#!/bin/bash

echo ">> npm version:"
if npm -v -eq 0 ; then
    echo "$(tput setaf 4)>> deploy is started"
else
    echo "$(tput setaf 1)>> npm is not found. Install nodeJs and npm, please.$(tput sgr 0)"
    exit 1
fi

# backend side
cd back
echo "$(tput setaf 4)>> installing node dependencies for backend node-server$(tput sgr 0)"
npm install

cd ../front
echo "$(tput setaf 4)>> installing node dependencies for frontend side$(tput sgr 0)"
npm install

echo "$(tput setaf 4)>> installing bower dependencies. bower version:$(tput sgr 0)"
if bower -v -eq 0 ; then
	echo ">> bower installed globally"
	bower install
else
	echo "$(tput setaf 2)>> bower will be installed in node_modules/bower$(tput sgr 0)"
	npm install bower
	./node_modules/bower/bin/bower install
fi

echo "$(tput setaf 4)>> building frontend static. ember-cli version:$(tput sgr 0)"
if ember -v -eq 0 ; then
	echo ">> ember-cli installed globally"
	ember b -prod
else
	echo "$(tput setaf 2)>> ember-cli will be installed in node_modules/ember-cli$(tput sgr 0)"
	./node_modules/ember-cli/bin/ember b -prod
fi

echo "$(tput setaf 2)>> deploying is successfully finished.$(tput sgr 0)"

cd ..
echo "Starting server..."
NODE_ENV=production node back/bin/www
