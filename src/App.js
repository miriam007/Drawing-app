import React from 'react';
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div class="sidebar">
    <ul>
        <li>
            <label for="color">Color:</label>
            <input type="color" id="color" />
        </li>
        <li>
            <label for="weight">Stroke:</label>
            <input type="number" id="weight" min="2" max="200" value="3" />
        </li>
        <li>
            <button id="clear"><i><DeleteIcon/></i></button>
        </li>
    </ul>
</div>
  );
}

export default App;
