function Application(props) {
  return {
    <div className='container'>
      <h1>{props.title}</h1>
    </div>
  }
}

ReactDOM.render(<Application title="Score Board" />, document.getElementsById('container'));
