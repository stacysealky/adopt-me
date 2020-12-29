const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Linny",
      animal: "Dog",
      breed: "Goldendoodle",
    }),
    React.createElement(Pet, {
      name: "Shae",
      animal: "Dog",
      breed: "Pointer Pit Mix",
    }),
    React.createElement(Pet, {
      name: "Puppy",
      animal: "Dog",
      breed: "Goldendoodle",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
