import ColorfulMessage from './components/ColorfulMessage';

export default function App() {
  const onClickButton = () => alert();
  const contentStyleA = {
    color: 'blue',
    fontSize: '18px',
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button type="button" onClick={onClickButton}>
        ボタン
      </button>
    </>
  );
}
