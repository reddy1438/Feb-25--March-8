var gameOfLife = function(board) {
    if(!board) return;
  
  let m=board.length,n=board[0].length;
  
  let moves=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
  
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          let count=0;
          
         
          for(let [dx,dy] of moves){
              let x=i+dx;
              let y=j+dy;
              
              if(x<0 || x>=m || y<0 || y>=n || board[x][y]==0 || board[x][y]=='Live'){
                  continue;
              }
              count++;
          }
          
          
          if(board[i][j]==1){
              if(count<2 || count>3) board[i][j]='Dead';
          }
         
          if(count==3 && board[i][j]==0){
              board[i][j]='Live';
          }
      }
  }
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          if(board[i][j]=="Dead") board[i][j]=0;
          if(board[i][j]=="Live") board[i][j]=1;
      }
  }
};


console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))