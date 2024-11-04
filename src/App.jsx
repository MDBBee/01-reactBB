import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [persons, setPersons] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{persons.length} Birthdays today</h3>
        <List people={persons} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPersons([])}
        >
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
