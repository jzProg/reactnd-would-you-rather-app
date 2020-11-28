function Form(props) {
  const { fields, onFocus } = props;

  return (
    <div className="formContainer">
     { fields.map(field =>
       <div key={field.name}>
        <label>{ field.name }</label><br/>
        { field.options && field.options.length ?
          (<select name={ field.name } id={ field.name }>
            { field.options.map(option => <option key={option} value={option}>{option}</option>) }
           </select>)
         :
         (<input id={ field.name } type={ field.type } onFocus={onFocus}/>)
        }
       </div>)
     }
    </div>
  )
}

export default Form;
