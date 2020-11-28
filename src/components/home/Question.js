function Question(props) {
   const { id, author, optionOne } = props.question;

   return (
      <div className="question">
        <h3>
        <span style={{ color: '#800000' }}>{ author }</span> asked: { optionOne.text }...
        </h3>
        <button className="btn btn-primary" onClick={() => props.onDetails(id)}>See Polls</button>
      </div>
   )
}

export default Question;
