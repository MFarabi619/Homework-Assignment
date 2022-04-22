# Homework-Assignment
This project is a full-stack web application that queries for crypto currency prices from external services using Node.js (Express library) and 
exposes a front-end application using React.js.

## 📋 Table of Contents
- [Features](#-features)
- [Setup](#-setup)

## 💻 Features

A drop-down list that allows a user to select one of 8 crypto-currencies, with the current value of the crypto-currency
displayed below in Canadian dollars.
![image](https://user-images.githubusercontent.com/54924158/164591435-05372b6f-46bc-4e05-aafe-274e03d00f87.png)


## 🛠️ Setup

The IDE used is VS Code.

Installation of Node.js onto the machine is necessary for this project to run. This can done by navigating to https://nodejs.org/en/ 
and downloading the LTS release. 

List of commands used in the command prompt terminal to get project running: 

npm init -y (To create package.json file)

npm i express (Install express library)

npm i --save-dev nodemon (To install Nodemon, which restarts node.js automatically when any changes are made)


NOTE: This line in the package.json file runs nodemon: "devStart": "nodemon server.js"

npm install request (To install request package for parsing JSON from external URL)
