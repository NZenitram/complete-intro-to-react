const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'House of Cards', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Orange is the New Black', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Stanger Things', color: 'Green' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
