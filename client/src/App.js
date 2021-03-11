import React from 'react'
import LeftSelect from './components/LeftSelect'
import Screen from './components/Screen'
import RightEdit from './components/RightEdit'
import './index.css'

function App() {
  return (
    <div className="container">
        <LeftSelect/>
        <Screen />
        <RightEdit/>
        {/*欢迎来到网站建设器*/}
    </div>
  );
}

export default App;
