import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  }

  const contentPinkStyle = {
    color: 'pink',
    fontSize: '20px'
  };
  return (
    <>
      <h1 style={{ color: 'red'}}>こんにちは</h1>
      <ColoredMessage color='blue' message='お元気ですか？' />
      <p style={contentPinkStyle}>元気です!</p>
      <button onclick={onClickButton}>ボタン</button>
    </>
  );
}