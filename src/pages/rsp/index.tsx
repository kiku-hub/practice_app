import React from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";
import { HandType } from "../../interfaces/handType";

interface State {
  selectHand: HandType;
}

// ジェネリックでStateの型をinterface Stateに設定
export default class Index extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Stateの値の型が決まったので、Enum型HandTypeに値を置き換える
      selectHand: HandType.Rock,
    };
  }

  handleOnClick = (val: HandType): void => {
    this.setState({ selectHand: val });
  };

  render() {
    const handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>じゃんけんページ</h1>
        <div style={{ display: "flex" }}>
          {handTypes.map((handType: HandType) => (
            <Hand
              selectHand={handType}
              selectedHand={this.state.selectHand}
              clickHand={this.handleOnClick}
            />
          ))}
        </div>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}