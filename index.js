/**
 * replace back-slash to slash
 * Exceptions:
 *  "a\b\c" =>"ac" because \b is escaped in chrome console
 *   "a\\b\\c" => become "a\b\c" because `\\` is escaped to `\`
 */
function back2slash(str){
  return str.replace(/\\/g,"/");
}

/**
 * replace slash to back-slash
 */
function slash2back(str){
  return str.replace(/\//g,"\\");
}


module.exports = {
  back2slash,
  slash2back
}
