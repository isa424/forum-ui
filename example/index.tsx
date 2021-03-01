import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Link, NavLink } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Link href={'/test'}>{"My Link"}</Link>
      <div className={'bg-black'}>
        <NavLink href={'/test'}>{"My Link"}</NavLink>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
