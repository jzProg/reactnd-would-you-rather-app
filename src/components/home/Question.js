function Question(props) {
   const { id, author, optionOne } = props.question;

   return (
      <div className="question">
        <h3>
        <span style={{ color: 'orange' }}>{ author }</span> asked <span style={{ color: 'green' }}><i>{ optionOne.text }...</i></span>
        </h3>
        <button className="btn btn-primary" onClick={() => props.onDetails(id)}>See Polls</button>
      </div>
   )
}

export default Question;
