'use strict';

const e = React.createElement;

fetch('ticker.json')
    .then(res => res.json())
    .then(data => {
  		const element = document.querySelector('#marquee-horizontal')
  		ReactDOM.render(e(MarqueeHorizontal, {coins: data.coins}), element)	
	})

class MarqueeHorizontal extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {        
    return (
      <div>
        {this.props.coins.map((coin, index) => {
        	return React.createElement(ListItem, {...coin, key:index })
        })}
      </div>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {    
    return (
      <li className="list-item">
      	<div className="list-item-currency">
          {this.props.keyName}
        </div>
        <div className={"list-item-currency " + this.props.fluctuation}>
        <span>
          {this.props.value}
        	<span className={this.props.fluctuationKey}>
          		{this.props.unicode}	
        	</span>
        </span>
        </div>
      </li>
    );
  }
}