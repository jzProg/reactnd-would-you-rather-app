function ProgressBar(props) {
   const { options } = props;

   return (
      <div>
       <h3>Results</h3>
       { options.map(option => <div>{option.text}</div>)}
      </div>
   )
}

export default ProgressBar;
