import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
// import Header from "./components/Header";

class App extends Component {
  state = {
    friends,
    highscore: 0,
    score: 0
  };


  removeFriend = id => {
    // friends.sort(() => Math.random() - 0.5);
    this.setState({ friends, score: this.state.score + 1, });
    //  this.setState({ highscore: this.state.highscore + 1 });
       this.setState(prevState => {
         const friendsinfo = prevState.friends.map(friends => {
            if (friends.id === id) {
              friends.clicked = true;
              console.log(friends);
          } return friends;
        });
        return{
          friends: friendsinfo
        }
      })
  };

  booleanFriend = id => {
    
    friends.sort(() => Math.random() - 0.5);
  const friendsinfo = this.state.friends.map( friends => {
    if(friends.id === id) {
     
      if (friends.clicked === false) {
        friends.clicked = true;
        console.log(friends.clicked);
        this.removeFriend();
        this.win();
        

        console.log("clicked a new pic");
      } else {
        this.endGame();
       
      }
    } return friendsinfo
  })

  }

  endGame = () => {
    alert("Sorry. You lose 😥")
      this.setState({ score : 0})  
      
      // this.randomize();
      friends.clicked = false;
      console.log("Did change the click?");
      console.log(friends.clicked);

      this.setState(gameState => {
        const newGame = gameState.friends.map(friends => {
          friends.clicked = false;
          return newGame;
        })
      })
 

    console.log("end game function");
  }

  //Would like to thank Melvin Hernandez for this bit of logic here in maintaining
    win = () => {
      if(this.state.highscore < 12 && this.state.highscore === this.state.score) {
        this.setState({
          highscore: this.state.highscore + 1
        });
      }

      if(this.state.score === 11 && this.state.highscore > 12) {
         alert("Congrats! You won!");
         this.endGame(); 
         this.setState({highscore: 0});
       } 
    }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    return ( 
      <Wrapper>
        <div className="container">
          <Navbar
            score={this.state.score}
            highscore={this.state.highscore}
           
            
            />
             
        </div>
          

            {this.state.friends.map(friend => ( 
           <FriendCard
            booleanFriend={this.booleanFriend}
            id={friend.id}
            win={this.win}
            key={friend.id}
            
            image={friend.image}
          /> 
        ))}


        <Footer 
        />
      </Wrapper>

    );
  }
}

export default App;

