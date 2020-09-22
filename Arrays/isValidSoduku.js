var isValidSudoku = function (board) {

    var counts = [];

    //check 1: Each row must contain the digits 1-9 without repetition.
    for (k = 0;k < board.length;k++) {
      counts = [];
      for (j = 0;j < board[k].length;j++) {
        if (board[k][j]===".") { continue; }
        if (counts[board[k][j]] === undefined) {
            counts[board[k][j]] = 1;
        } else {
            return false;
        }
      }  
    }
    // end check 1

    //check 2: Each column must contain the digits 1-9 without repetition.
    for (k = 0;k < board.length;k++) {
      counts = [];
      for (j = 0;j < board[k].length;j++) {
        if (board[j][k]===".") { continue; }
        if (counts[board[j][k]] === undefined) {
            counts[board[j][k]] = 1;
        } else {
            return false;
        }
      }  
    }
    //end check 2
 
    //check 3: Each 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    var x = 0;
    var rowGroup = 0;
    var colGroup = 0;
    while  (x < board.length) {
      for (n=0;n<3;n++) {
        counts = [];
        for (i=rowGroup;i<rowGroup+3;i++) {
          for (j=colGroup;j<colGroup+3;j++) {
            if (board[i][j]===".") { continue; }
            if (counts[board[i][j]] === undefined) {
              counts[board[i][j]] = 1;
              //console.log(i,",",j);
            } else {
              return false;
            }
          }
        }
        colGroup = colGroup + 3;
      }
      x = x + 3;
      rowGroup = rowGroup + 3;
      colGroup = 0;
    }
    //end check 3

    return true;

}