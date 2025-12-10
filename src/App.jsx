import { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

export default function App() {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => setIsShowFace((prev) => !prev);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Do not include "isShowFace" in the dependency list
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button type="button" onClick={onClickButton}>
        ボタン
      </button>
      <p>{num}</p>
      <button type="button" onClick={onClickToggle}>
        on/off
      </button>
      {isShowFace && <p>( *´艸｀)</p>}
    </>
  );
}
