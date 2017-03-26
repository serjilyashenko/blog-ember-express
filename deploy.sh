#!/bin/bash

cd back
npm install

cd ../front
npm install
bower install

ember b -prod
