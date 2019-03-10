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
    friends.sort(() => Math.random() - 0.5);
    this.setState({ friends, score: this.state.score + 1, });
    this.setState({ highscore: this.state.highscore + 1 });
    //   this.setState(prevState => {
    //      const friendsinfo = prevState.friends.map(friends => {
    //        if (friends.id === id) {
    //          friends.clicked = true;
    //          console.log(friends);
    //      } return friends;
    //    });
    //    return{
    //      friends: friendsinfo
    //    }
    //  })
  };

  booleanFriend = id => {
    this.setState(prevState => {
      const friendsinfo = prevState.friends.map(friends => {
        if (friends.id === id) {
          friends.clicked = true;
          console.log(friends);
        } return friends;
      });
      return {
        friends: friendsinfo
      }
    })
    if (this.state.friends.clicked) {
      this.removeFriend();
    } else {
      this.endGame();
    }
  }

  endGame = () => {
    console.log("end game");
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    //  var mapFriends = friends.map(friend => 
    //    <FriendCard 
    //    key={friend.id}
    //    image={friend.image}
    //    onClick = {friend.clicked ? this.endGame : this.removeFriend}     
    //   />)


    const newFriends = friends.map(friend =>
      <FriendCard
        image={friend.image}
        key={friend.id}
        // quick ternary expression to see if photo is clicked already
        onClick={friend.clicked ? this.endGame : this.removeFriend}
      />
    )
    return (

 
            
      <Wrapper>
        <div className="container">
          <Navbar
            score={this.state.score}
            highscore={this.state.highscore} />
             
        </div>
            {newFriends}
         
          {/* <FriendCard
            //mapFriends={mapFriends}
            //onClick ={this.friends.clicked ? this.endGame :  this.removeFriend}
            removeFriend={this.removeFriend}
            booleanFriend={this.booleanFriend}
            //clicked={this.state.clicked}
            nickname={friend.nickname}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          /> */}
        ))}
        <Footer 
        />
      </Wrapper>

    );
  }
}

export default App;

