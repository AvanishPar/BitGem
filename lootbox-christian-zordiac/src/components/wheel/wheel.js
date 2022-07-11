import React from "react";
import NameComponet from "../nameComponent/nameComponent";

import "./style.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      Item: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }
  selectItem() {
    if (this.state.selectedItem === null) {
      const prob = Math.floor(Math.random() * 100);
      let selectedItem = 0;
      if (prob <= 13) {
        selectedItem = 0;
      }
      if (prob > 13 && prob <= 25) {
        selectedItem = 1;
      }
      if (prob > 25 && prob <= 36) {
        selectedItem = 2;
      }
      if (prob > 36 && prob <= 46) {
        selectedItem = 3;
      }
      if (prob > 46 && prob <= 55) {
        selectedItem = 4;
      }
      if (prob > 55 && prob <= 63) {
        selectedItem = 5;
      }
      if (prob > 63 && prob <= 71) {
        selectedItem = 6;
      }
      if (prob > 71 && prob <= 79) {
        selectedItem = 7;
      }
      if (prob > 79 && prob <= 85) {
        selectedItem = 8;
      }
      if (prob > 85 && prob <= 91) {
        selectedItem = 9;
      }
      if (prob > 91 && prob <= 96) {
        selectedItem = 10;
      }
      if (prob > 96 && prob <= 100) {
        selectedItem = 11;
      }
      console.log(this.props.items.length, selectedItem, "check length");
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
      this.setState({ Item: null });
      const timer = setTimeout(() => {
        this.setState({ Item: selectedItem });
      }, 10000);
      return () => clearTimeout(timer);
    } else {
      this.setState({ Item: null });
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { items } = this.props;
    let pp = items.filter(
      (ele, ind) =>
        ind ===
        items.findIndex(
          (elem) => elem.jobid === ele.jobid && elem.id === ele.id
        )
    );

    const { selectedItem } = this.state;
    const wheelVars = {
      "--nb-item": pp.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";
    return (
      <>
        <NameComponet items={pp} selectedItem={this.state.selectedItem} />
        <img src="center.png" className="btn" onClick={this.selectItem}></img>
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars}>
            {pp.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ "--item-nb": index }}
              >
                {this.state.Item === index ? (
                  // <div id="win">
                  // {" "}
                  <>
                    <div style={{ marginLeft: "-81px" }} className="hr"></div>
                    <img className="img-win" src={item.img} />
                  </>
                ) : (
                  <>
                    <div className="hr"></div>
                    <img className="img" src={item.img} />
                  </>
                )}
              </div>
            ))}
            {pp.map((item, index) => (
              <>
                <div
                  className="wheel-item-2"
                  key={index}
                  style={{ "--item-nb": index }}
                >
                  <img id="mid" src={item.txt_img} />
                </div>
              </>
            ))}
            {pp.map((item, index) => (
              <>
                {" "}
                <div
                  className="wheel-item-2"
                  key={index}
                  style={{ "--item-nb": index }}
                >
                  <img id="txt" src={item.txt_name} />
                  {/* <div id="txt"> text</div> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
