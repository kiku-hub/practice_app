import React from 'react'; // Reactライブラリをインポート
import ReactDOM from 'react-dom/client'; // ReactDOMをインポートし、DOM操作に使用
import './index.css'; // グローバルなCSSファイルをインポート
import App from './App'; // メインコンポーネントAppをインポート
import reportWebVitals from './reportWebVitals'; // パフォーマンス測定用の関数をインポート

const root = ReactDOM.createRoot(document.getElementById('root')); // idがrootのDOM要素にReactのルートを作成
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // React.StrictModeでAppコンポーネントをレンダリング

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // パフォーマンス測定を実行するための関数を呼び出し