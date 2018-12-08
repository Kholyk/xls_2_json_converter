# xls_2_json_converter
Extended version of `xls-to-json` 
Thanks to [@chilijung](https://github.com/chilijung) - [](https://www.npmjs.com/package/xls-to-json)
Converter for XLS files into JSON format (CLI helper)

 
## Usage in CLI:
---
Install procedure (global):
1. Install nodejs (if nessesary);
2. Install package globally:
   `npm install -g xls-to-json`
3. Run converter as follows:
   `convert save source.xlsx destination.json sheet`

Notice: Only source file (***source.xlsx***) is required, you can leave ***destination.json*** and ***sheet*** as blank or `null`, in this case putput file will be created as following pattern: ***source.xlsx***`.json`, first datasheet in a book will be used for compile result.



