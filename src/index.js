module.exports = function check(str, bracketsConfig) {
   console.log(str, bracketsConfig)
   let open = [];
   let pair = {};
   for (let i = 0; i < bracketsConfig.length; i++) {
      open.push(bracketsConfig[i][0]);
      pair[bracketsConfig[i][1]] = bracketsConfig[i][0];
   }
   console.log(open, pair)
   let stack = [];
   for (let i = 0; i < str.length; i++) {
      let current = str[i];
      if (open.includes(current)) {
         stack.push(current);
      }
      else {
         if (stack.length === 0) {
            return false
         }

         let topElm = stack[stack.length - 1];
         if (pair[current] == topElm) {
            stack.pop();
         }
         else {
            return false
         }


      }
   }
   return stack.length === 0
}

//console.log(check('([{}])', config3));