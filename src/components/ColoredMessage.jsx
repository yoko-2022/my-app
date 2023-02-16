export const ColoredMessage = (props) => {
  console.log(props);

  const contentStyle = {
    color: 'blue',
    fontSize: '20px'
  };

  return <p style={contentStyle}>お元気ですか</p>;
};

