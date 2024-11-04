import Person from './Person';

const List = ({ people }) => {
  return (
    <section>
      {people.map((p) => (
        <Person key={p.id} {...p} />
      ))}
    </section>
  );
};
export default List;
