export const App = () => {
  const onClickButton = () => {
    alert();
  }
  return (
    <>
      <h1 style={{ color: 'red'}}>こんにちは</h1>
      <p>お元気ですか</p>
      <button onclick={onClickButton}>ボタン</button>
    </>
  );
}