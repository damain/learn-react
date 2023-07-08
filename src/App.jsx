import Tip from "./Tip";
import "./App.css";

const pokemons = [
  { name: "Absol", hp: 200, url: "/public/images/absol.png" },
  { name: "Bulbasaur", hp: 200, url: "/public/images/bulbasaur.png" },
  { name: "Charuzard", hp: 200, url: "/public/images/charuzard.png" }
];

function App() {
  return (
    <div>
      {/* ----------- Instructions -----------*/}
      <header>
        <h2>Select a pokemon</h2>
        <img src="/public/images/ball.png" alt="pokeball" />
      </header>
      <h3>Tasks</h3>
      <div>
        <b>Step 1</b> Adjust the a pokemon card component to accept the nescessary props to display
        a pokemon
      </div>
      <div>
        <b>Step 2</b> Display the 3 pokemon (you don't need to render as a list yet)
      </div>
      <div>
        <b>Step 3</b> When I click on a pokemon it should display name of the selected pokemon
      </div>
      <div>
        <b>Bonus step</b> Display the pokemon using a map
      </div>
      <Tip>There is a pokemon card starter component in the components folder</Tip>
      <Tip>Images are in /public/images </Tip>
      <Tip>We will need to track the state of the selected pokemon</Tip>
      <hr />
      {/* ----------- End of Instructions -----------*/}
      <div className="flex-container">display pokemon in this div</div>
      <div>Selected pokemon is : none </div>
    </div>
  );
}

export default App;
