import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import MainWrapper from './components/mainWrapper';
import Pics from './pics.json';
import Cards from './components/cards';

class App extends React.Component {
    // Setting this.state.friends to the friends json array
    state = {
      Pics,
      currentScore: 0,
      topScore: 0,
      selected: [13]
    };

    handleShuffle = (array) => {
        for (let i = array.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
          };
          return array;
    };

    handleIncrement = () => {
        const score = this.state.currentScore +1;
        this.setState({currentScore: score});

        if (score === 12) {
        this.state.topScore = score;
        alert("Winner");
        this.handleReset();
        }
        else if (score >= this.state.topScore) {
            this.state.topScore = score;
        }
    }

    handleReset = () => {
        this.setState({
            currentScore: 0,
            selected: []
        })
    }

    handleClick = (id) => {
        if(this.state.selected.indexOf(id) === -1){
            this.setState({selected: this.state.selected.concat(id)});
            this.handleIncrement();
            let Pics = this.handleShuffle(this.state.Pics);
            this.setState({Pics});
            console.log(this.state.selected);
        }
        else if (this.state.selected.indexOf(id) != -1){
            alert("wrong");
            let Pics = this.handleShuffle(this.state.Pics);
            this.setState({Pics});
            this.handleReset();
        }
    };

    render(){
        return (
            <div>
            <Navbar
            score={this.state.currentScore}
            topScore={this.state.topScore}
            />
            <Banner/>
            <MainWrapper>
                {this.state.Pics.map(pic =>(
                    <Cards
                    key={pic.id}
                    src={pic.image}
                    id={pic.id}
                    handleClick={this.handleClick}
                    />
                ))}
            </MainWrapper>
            </div>
        );
    }
}


export default App;