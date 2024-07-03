import React, {Component} from 'react'
import { createRoot } from 'react-dom/client';
import Gridcomponent from '../../src/GRID/Gridcomponent'
import Example from '../../src'

export default class Demo extends Component {
  render() {
    return (
      <div>
       <Gridcomponent columnCount={4} spacing={8} width="100%" height="480px">
        <div style={{background: 'blue'}}>Item 1</div>
        <div style={{background: 'purple'}}>Item 2</div>
        <div style={{background: 'red'}}>Item 3</div>
        <div style={{background: 'green'}}>Item 4</div>
      </Gridcomponent>
    </div>
    )
    
  }
}

const container = document.getElementById('demo');
const root = createRoot(container);

root.render(<Demo />);
