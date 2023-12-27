import Square from './Square';

// 获取下一个玩家信息
function getNextPlayer(squares) {
  const filledSquares = squares.filter(item => (item === "X" || item === "O"));
  const filledNumber = filledSquares.length;
  const nextLetter = (filledNumber % 2 === 0) ? "X" : "O";
  return nextLetter;
}

function Board({squares, winner, onChange}) {
  // 下一个即将展现的字母
  const nextPlayer = getNextPlayer(squares);
  // 根据情况展示状态文字
  const status = winner ? `${winner} is winner` : `Next player: ${nextPlayer}`;
  // 处理点击的函数
  const clickHandler = (index) => {
    const currentSquare = squares[index];
    if(currentSquare === null && !winner) {
      const newSquares = squares.slice();
      newSquares[index] = nextPlayer;
      onChange(newSquares);
    }
  }

  // 负责页面渲染的 JSX 语法
  return (
    <>
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} index={0} onClick={clickHandler} />
        <Square value={squares[1]} index={1} onClick={clickHandler} />
        <Square value={squares[2]} index={2} onClick={clickHandler} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} index={3} onClick={clickHandler} />
        <Square value={squares[4]} index={4} onClick={clickHandler} />
        <Square value={squares[5]} index={5} onClick={clickHandler} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} index={6} onClick={clickHandler} />
        <Square value={squares[7]} index={7} onClick={clickHandler} />
        <Square value={squares[8]} index={8} onClick={clickHandler} />
      </div>
    </>
  )
}

export default Board;