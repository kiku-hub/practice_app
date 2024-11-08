// Reactをインポートします。これでReactの機能がこのファイル内で使えるようになります。
import React from "react";

// Indexクラスを作成し、それを他のファイルでも使用できるようにエクスポートします。
// このクラスはReactのComponent（コンポーネント）を継承しています。
export default class Index extends React.Component {

  // renderメソッドを定義します。renderは、このコンポーネントが画面に表示されるときに呼び出されます。
  render() {
    
    // renderメソッドは、JSXを返します。JSXは、HTMLのように見える特別なJavaScript構文です。
    // ここでは、div要素の中にh1要素で「ジャンケンアプリ！」というテキストを表示するようにしています。
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>ジャンケンに挑戦しよう！</h1>
      </div>
    );
  }
}

// まとめ：
// 1. Reactをインポートし、クラスコンポーネントを作成しています。
// 2. IndexクラスはReact.Componentを継承し、renderメソッドで表示内容を定義しています。
// 3. renderメソッドは「ジャンケンアプリ！」というタイトルをh1タグで表示する内容を返します。
// 4. このクラスを他のファイルで使えるようにexport defaultでエクスポートしています。