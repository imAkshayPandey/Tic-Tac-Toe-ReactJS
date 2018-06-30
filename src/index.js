import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './App.css';


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            turn: 'X',
            board: Array(9).fill(null),
            totalMoves: 0,
            Winner: 'Winner ??',
            gameEnded:'false'
        };
    }
    onclick(event) {
        if (this.state.board[event.target.dataset.square] === null) {
            event.target.innerText = this.state.turn;
            this.state.board[event.target.dataset.square] = this.state.turn;
            this.setState({
                turn: this.state.turn === 'X' ? '0' : 'X',
                board: this.state.board,


            });
  this.state.totalMoves++;
            console.log(this.state.totalMoves);
            console.log(this.state.board);
        }

        var result = this.checkWinner();
        if (result === 'X'||result==='0') {
            this.setState({
                Winner:'Winner is '+result,
                gameEnded:true
            });
            
        }

        if(this.state.totalMoves===9){
            this.state.Winner="draw";

}

             

 }

    checkWinner() {
        var match = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
        ];
        var board = this.state.board;
        for (let i = 0; i < match.length; i++) {
            if (board[match[i][0]] === board[match[i][1]] && board[match[i][1]] === board[match[i][2]]) {
                return board[match[i][0]];
            }
        }
    }

    render() {
        return (
            <div id="Game">
                <div id="board" onClick={(e) => this.onclick(e)}>

                        <div className="square" data-square="0"></div>
                        <div className="square" data-square="1"></div>
                        <div className="square" data-square="2"></div>
                        <div className="square" data-square="3"></div>
                        <div className="square" data-square="4"></div>
                        <div className="square" data-square="5"></div>
                        <div className="square" data-square="6"></div>
                        <div className="square" data-square="7"></div>
                        <div className="square" data-square="8"></div>



                </div>
                <div className="info">{this.state.Winner}</div>
            </div>
        );
    }
}



ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
