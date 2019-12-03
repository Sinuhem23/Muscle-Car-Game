import React, { Component } from "react";
import CarCard from "./components/CarCard";
import GridMDC from "./components/GridMDC";
import PaperMDC from "./components/PaperMDC";
import Score from "./components/Score";
import Alert from "./components/Alert";
import cars from "./cars.json";
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";

class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars,
    pickedCars: [],
    topScore: 0,
    alertMessage: ""
  };

  handlePicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCars();
    this.checkGuess(name, this.updateTopScore);
  };

  shuffleCars = () => {
    this.setState((this.state.cars = this.shuffleArray(this.state.cars)));
  };

  shuffleArray = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedCars.includes(name)) {
      newState.alertMessage = `YOU LOSE, ALREDY PICKED "${name.toUpperCase()}"!`;
      newState.pickedCars = [];
      this.setState((this.state = newState));
    } else {
      newState.pickedCars.push(name);
      newState.alertMessage = `GOOD CHOICE`;
      this.setState((this.state = newState));
    }
    cb(newState, this.alertWinner);
  };

  updateTopScore = (newState, cb) => {
    if (newState.pickedCars.length > newState.topScore) {
      newState.topScore++;
      this.setState((this.state = newState));
    }
    cb(newState);
  };

  alertWinner = newState => {
    if (newState.pickedCars.length === 6) {
      newState.alertMessage = "YOU WIN!";
      newState.pickedCars = [];
      this.setState((this.state = newState));
    }
  };

  // Map over this.state.cars and render a MuscleCarCard component for each car object
  render() {
    return (
      <div>
        <NavBar
          style={{
            background: "#313133",
            marginBottom: "5px"
          }}
        />

        <GridMDC
          container
          direction="column"
          style={{ margin: "0 auto", maxWidth: 945 }}
        >
          <GridMDC item lg={12}>
            <PaperMDC>
              {this.state.alertMessage === "GOOD CHOICE!" ? (
                <Alert
                  message={this.state.alertMessage}
                  style={{ color: "red " }}
                />
              ) : (
                <Alert
                  message={this.state.alertMessage}
                  style={{ color: "green" }}
                />
              )}
            </PaperMDC>
          </GridMDC>

          <GridMDC container justify="space-between">
            <GridMDC item lg={6} md={6} sm={12} xs={12}>
              <PaperMDC>
                <Score type="Score" score={this.state.pickedCars.length} />
              </PaperMDC>
            </GridMDC>

            <GridMDC item lg={6} md={6} sm={12} xs={12}>
              <PaperMDC>
                <Score type="Top Score" score={this.state.topScore} />
              </PaperMDC>
            </GridMDC>
          </GridMDC>
        </GridMDC>

        <GridMDC
          container
          spacing={24}
          justify="center"
          style={{
            maxWidth: 945,
            margin: "0 auto"
          }}
        >
          {this.state.cars.map(car => (
            <GridMDC item lg={3} md={3} sm={4} xs={6}>
              <CarCard
                id={car.id}
                name={car.name}
                image={car.image}
                key={car.id}
                handlePicked={this.handlePicked}
              />
            </GridMDC>
          ))}
        </GridMDC>

        <BottomNav
          style={{
            background: "#313133",
            marginTop: "17.5px",
            paddingTop: "15px",
            borderTop: "2.5px solid slategray"
          }}
        >
          <a
            href="https://github.com/Sinuhem23"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            alt="github-link"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </BottomNav>
      </div>
    );
  }
}

export default App;
