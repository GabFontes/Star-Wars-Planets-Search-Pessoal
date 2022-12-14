import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { data, search } = useContext(planetsContext);
  let results = [];

  if (data.length > 0) {
    results = Object.keys(data[0]);
    delete results[9];
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {results.map((e, i) => (
              <th key={ i }>{ e }</th>))}
          </tr>
        </thead>
        <tbody>
          {search.length > 0 && search.map((e, i) => (
            <tr key={ i }>
              <td>{ e.name }</td>
              <td>{ e.rotation_period }</td>
              <td>{ e.orbital_period }</td>
              <td>{ e.diameter }</td>
              <td>{ e.climate }</td>
              <td>{ e.gravity }</td>
              <td>{ e.terrain }</td>
              <td>{ e.surface_water }</td>
              <td>{ e.population }</td>
              <td>{ e.films }</td>
              <td>{ e.created }</td>
              <td>{ e.edited }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
