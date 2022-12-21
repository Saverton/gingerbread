import React from 'react';

function normalizeFromCamelCase(str) {
  let newStr = '';
  for (let letter of str) {
    newStr += /[A-Z]/.test(letter) ? ` ${letter}` : letter;
  }
  newStr = newStr[0].toUpperCase() + newStr.slice(1);
  return newStr;
}

function Tallmanometer({ points }) {
  const getTotalPoints = () => {
    return Object.values(points).reduce((sum, element) => sum + element, 0);
  }

  const pointBreakdown = Object.keys(points).map(
    (scoringCategory, index) => (
      <tr key={`scoring-${index}`}>
        <td>{normalizeFromCamelCase(scoringCategory)}</td>
        <td>{Object.values(points)[index]}</td>
      </tr>
    )
  );
  pointBreakdown.push(
    <tr key='total'>
      <td>Total</td>
      <td>{getTotalPoints()}</td>
    </tr>
  )

  return (
    <div className="tallmanometer">
      <div className='tallmanometer-button'></div>
      <div className='tallmanometer-antenna'></div>
      <div className='tallmanometer-antenna-bulb'></div>
      <h3>Tallman-ometer</h3>
      <meter value={getTotalPoints()} min="0" max="50" low="25"></meter>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {pointBreakdown} 
        </tbody>
      </table>
    </div>
  );
}

export default Tallmanometer;