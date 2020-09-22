var rotate = function(matrix) {
    var temp = 0;
    for (i=0;i<matrix.length;i++) {
      for (j=0;j<matrix.length;j++) {
        temp = matrix[i][j];
        matrix[i][j] = -1010;
        matrix[j].splice(matrix[j].length-1*i,0,temp);
      }  
    }
    for (i=0;i<matrix.length;i++) {
      for (j=0;j<matrix.length;j++) {
          matrix[i].shift();
      }
    }      
    return matrix;
};
  