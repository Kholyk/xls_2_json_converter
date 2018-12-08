install:
	npm install
start:
	npm run babel-node -- dist/bin/convert.js
build:
	npm run build
publish:
	npm publish
lint:
	npm run eslint "src"
