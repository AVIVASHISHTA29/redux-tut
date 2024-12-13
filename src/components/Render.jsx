const dateFormatting = (val) => {
  const date = new Date(val);
  const startOfMonth = date.setDate(1);
  const endOfMonth = date.setDate(31);
  return (
    <p>
     {new Date(startOfMonth).toLocaleDateString()} - {new Date(endOfMonth).toLocaleDateString()}
    </p>
  );
};

const Card = ({ heading, desc, date }) => {
  return (
    <div className="card">
      <h3>{heading}</h3>
      <p>{desc}</p>
      <div>{dateFormatting(date)}</div>
    </div>
  );
};

const Card2 = ({ heading, desc, date }) => {
  return (
    <div className="card">
      <h3>Heading:{heading}</h3>
      <p>Desc: {desc}</p>
      <div>Date: {dateFormatting(date)}</div>
    </div>
  );
};

export { Card, Card2, dateFormatting };
