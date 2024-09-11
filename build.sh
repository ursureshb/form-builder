#!/bin/bash
cd /home/bandi/Workspace/FrontendProjects/form-builder
echo "***********Inside the app source !*************"
git pull
echo "***********Data pulled from repo !*************"
echo "***********Build started*************"
ng build
echo "***********Build Completed*************"
sudo cp -r dist/form-builder/* /var/www/angular-app/
echo "***********Build data copy to server Completed !*************"