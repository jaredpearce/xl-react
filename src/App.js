import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import '@modeln/ui-elements';
import '@exalink/ui-components-web/ui-checkbox.js'
import './App.css';


export default function App() {
  const btnLabel = useHandleClick('Angular Button');

  return (
    <div className="App">
      <section>
        <p>Trying to load Angular components... {btnLabel}</p>
        <ui-checkbox d-name="Stufff!!" d-label-position="right" disabled="false"></ui-checkbox>
        <ui-simple-button btn-label={btnLabel}></ui-simple-button>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function useHandleClick(initVal) {
  const [value, setValue] = useState(initVal);

  useEffect(() => {
    const handleBtnClick = () => setValue('React Button');
    document.addEventListener('click', handleBtnClick);
    return () => {
      // removes memory leaks
      document.removeEventListener('click', handleBtnClick);
    }
  });

  return value;
}
// class App extends Component {
//   btnLabel = 'Angular Button';
//   msg = '';
//   constructor(props) {
//     super(props);
//     this.simpleBtn = React.createRef();
//     this.state = {
//       btnLabel: 'New Angular Button',
//       msg: ''
//     };
//
//     this.reactHandler = this.reactHandler.bind(this);
//   }
//
//   reactHandler(e) {
//     console.log('reactHandler', this.simpleBtn);
//     this.btnLabel = 'Clicked Button';
//     this.msg = 'angular web component button was pushed!';
//   }
//
//   componentDidMount() {
//     // console.log('simpleBtn', this.simpleBtn, this.props);
//     // // capture web component click event...
//     // this.simpleBtn.current.addEventListener('click', (e) => {
//     //   console.log('e', e.target, e);
//     //   e.preventDefault();
//     //   this.msg = 'Angular button was pressed';
//     // });
//   }
//
//   componentDidUpdate(prevProps) {
//       console.log('prevProps', prevProps);
//   }
//
//   render() {
//     return (
//         <div className="App">
//           <section>
//             <p>Trying to load Angular components... {this.msg}</p>
//             <ui-simple-button ref={this.simpleBtn} btn-label={this.btnLabel} onClick={this.reactHandler}></ui-simple-button>
//           </section>
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//     );
//   }
// }
//
// export default App;
