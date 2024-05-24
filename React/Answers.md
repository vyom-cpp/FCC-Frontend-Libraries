1. Create a Simple JSX Element
```jsx
const JSX = <h1>Hello JSX!</h1>;
```

2. Create a Complex JSX Element
```jsx
const JSX = <div>
  <h1></h1>
  <p></p>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>;
```

3. Add Comments in JSX
```jsx
const JSX = (
  <div>
  {/* Le bhai maar li comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

4. Render HTML Elements to the DOM
```jsx
// ReactDOM.render(componentToRender, targetNode)
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

5. Define an HTML Class in JSX
```jsx
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```

6. Learn About Self-Closing JSX Tags
```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
```

7. Create a Stateless Functional Component
```jsx
const MyComponent = function() {
  // Change code below this line
  return(
    <div>This is a string to text</div>
  );
  // Change code above this line
};
```

8. Create a React Component
```jsx
class MyComponent extends React.Component { 
    // This line declares a new class called MyComponent. The extends React.Component part means that MyComponent is a subclass of React.Component, inheriting its functionality

  constructor(props) {
    // This is the constructor method that takes props as an argument. props are the properties passed to the component from its parent.

    super(props);
    // This line calls the constructor of the parent class (React.Component). This is necessary to properly initialize the component and allows the component to access this.props.

  }
  render() {
    // Change code below this line
    return(
      <div>
        <h1>Hello React!</h1>
      </div>
    )
    // Change code above this line
  }
};
```

9. Create a Component with Composition
```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};

// Summary
{ /* 

ChildComponent:
-> A functional component that returns a div containing a p element with the text "I am the child".

ParentComponent:
- > A class component that initializes itself with a constructor.
The render method returns a div containing an h1 element with the text "I am the parent".

- > Includes the ChildComponent within its JSX, causing the child component's content to be rendered inside the parent component.

HTML STRUCTURE
<div>
  <h1>I am the parent</h1>
  <div>
    <p>I am the child</p>
  </div>
</div>

 */ }
```

10. Use React to Render Nested Components
```jsx
// You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
      <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

11. Compose React Components
```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
```

12. Render a Class Component to the DOM
```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
```

13. Write a React Component from Scratch
```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))
```

14. Pass Props to a Stateless Functional Component
```jsx
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
```

15. Pass an Array as Props
```jsx
const List = props => {
  return <p>{props.tasks.join(', ')}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk dog", "Workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Code", "Sleep", "Eat"]} />
      </div>
    );
  }
}
```

16. Use Default Props
```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 }
```

17. Override Default Props
```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};
```

18. Use PropTypes to Define the Props You Expect
```jsx
// import PropTypes from 'prop-types';
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired }
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

19. Access Props Using this.props
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Jon banega Don"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

20. Review Using Props with Stateless Functional Components
```jsx
// A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```

21. Create a Stateful Component
```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: 'Kamles'
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

22. Render State in the User Interface 
```jsx
// State in React is a powerful feature that lets you track important data and update the UI when this data changes. When the state changes, React automatically re-renders the components using that data, including any child components that receive the data as props. React efficiently updates the actual DOM using a virtual DOM, which keeps track of changes in the background.

// State is local to a component, meaning only that component knows about its state unless it passes the state data to its child components as props. This encapsulation allows you to write and manage logic in one place, making your code more organized and maintainable.


```

23. Render State in the User Interface Another Way
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

24. Set State with this.setState
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

25. Set State with this.setState
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```