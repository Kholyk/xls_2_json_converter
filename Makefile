install:
	npm install
start:
	npm run babel-node -- src/bin/convert.js
publish:
	npm publish
lint:
	npm run eslint "src"
