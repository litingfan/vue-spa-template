module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    indent: 0,              // 缩进调整为 4 空格，airbnb 为 2 空格
    'max-statements': 'off',       // 不限制单个函数的行数，require最外层的方法太大
    'max-len': 0,
    // 单行长度不超过150
    'max-nested-callbacks': 0,  // 回调嵌套层次不能超过4
    'no-console': 'off',                             // 不禁用 console
    'func-names': 'off',                             // 不强制函数表达式有名字
    'import/no-amd': 'off',                          // 不禁用 amd 的 require
    'import/no-unresolved': 'off',                   // 不禁用 ES6 import 无法解析的模块
    'global-require': 'off',                         // 不强制全局 require
    'no-restricted-syntax': 0, // 不禁止 for in 循环
    'no-underscore-dangle': ['off'],                 // 不禁止使用下划线作为变量名前缀
    'consistent-return': ['off'],                    // 不强制 return
    'prefer-arrow-callback': ['off'],                // 不强制使用 => 代替函数
    'camelcase': ['off'],                              // 不强制使用 camel case 命名
    'newline-per-chained-call': ['off'],             // 不强制链式操作另起一行
    'no-param-reassign': 'off',                     // 不禁止给参数重新赋值
    'linebreak-style': 'off',                       // 不强制换行风格
    'no-var': 'off',                                  // 不禁用var，用let和const代替
    'prefer-template': 'off',                        // 不使用es6字符串连接
    'complexity': 'off',                              // 不使用圈复杂度
    'object-shorthand': 'off',                        // 不强制使用es6对象字面量缩写语法
    'space-in-brackets': 'off',                     // 不强制数组、对象有多余的空格
    'no-alert': 'off',
    'import/no-dynamic-require': 'off',
    'no-bitwise': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
