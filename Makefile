install:
	npm install
start:
	npm run babel-node -- dist/bin/convert.js
teststart:
	npm run babel-node -- src/index.js
build:
	npm run build
publish:
	npm publish
lint:
	npm run eslint "src"
