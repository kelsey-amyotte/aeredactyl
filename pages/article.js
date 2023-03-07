import store from '../reducers/state';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), 
      // we will update local component state and force component to rerender 
      // with new data.

      this.setState({
        redactedText: store.getState().redactedText
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.redactedText}
      </div>
    );
  }
};

render(<Article />, document.getElementById('app'));