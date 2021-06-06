import React from 'react';
import HandWriting from './HandWrinting';

function App() {
  const [dataUrl, setDataUrl] = React.useState(null);
  const onUpdateCanvas = (e: HTMLCanvasElement) => {
    setDataUrl(e.toDataURL('image/png'));
  }

  const downloadCanvasImage = () => {
    const dlLink = document.createElement("a"); 
    dlLink.href = dataUrl;
    dlLink.download = 'handwriting.png';
    dlLink.click();
    dlLink.remove();  
  }

  return (
    <>
      <h1>HandWritingコンポーネント利用サンプル</h1>
      <div>
        <h2>HandWritingコンポーネント</h2>
          <HandWriting onUpdateCanvas={onUpdateCanvas}/>
      </div>
      <div>
        <h2>HandWritingの更新イベントサンプル(画像更新時にimgタグに反映)</h2>
          <img id="newImg" alt="" src={dataUrl} />
      </div>
      <div>
        <button type="button" onClick={downloadCanvasImage}>
          HandWriting画像のダウンロード
        </button>
      </div>
    </>
  );
}

export default App;
