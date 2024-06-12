#!/bin/bash
sudo apt-get update -y
sudo apt install npm -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install nginx -y
sudo ufw allow 'Nginx HTTP'
sudo mkdir /var/www/html/my-react-app
sudo touch /etc/nginx/conf.d/react.conf
sudo cp react.conf /etc/nginx/conf.d/react.conf
#mkdir my-app
#cd my-app
#git clone https://github.com/georve/team-presentation.git
#cd team-presentation/
npm install
npm run build
sudo cp -R dist/ /var/www/html/my-react-app/
sudo nginx -t && sudo systemctl reload nginx


