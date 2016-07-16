const React = require('react');

const Tabs = React.createClass({
  getInitialState: function() {
    return {selectedTab: 0};
  },

  render: function () {
    return(
      <ul>
        {
          this.props.tabContent.map( (tab, i) => {
            let tabHeader;
            if (i === this.state.selectedTab) {
              tabHeader = <h1>{tab.title}</h1>;
            } else {
              tabHeader = <h2>{tab.title}</h2>;
            }

            return(
              <li key={i} id={i} onClick={this.tabClick}>
                {tabHeader}
              </li>
            );
          })
        }
        <article>{this.props.tabContent[this.state.selectedTab].content}</article>
      </ul>
    );
  },

  tabClick: function(event) {
    this.setState({selectedTab: parseInt(event.currentTarget.id) });
  }

});

module.exports = Tabs;
