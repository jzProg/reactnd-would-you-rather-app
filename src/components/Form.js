function Form(props) {
  const { fields, onFocus, selected } = props;

  return (
    <div className="formContainer">
     { fields.map(field =>
       <div key={field.name}>
        { field.type !== 'radio' && (<label>{ field.name }</label>)}
        { field.options && field.options.length ?
            (<select name={ field.name } id={ field.name }>
              { field.options.map(option => <option key={option} value={option}>{option}</option>) }
             </select>)
         : field.type === 'radio' ?
             (<label className={`${selected === field.name ? 'checked' : ''} radio-label`}>
               <span style={{marginRight: '1%'}}>{field.name} </span>
               <input id={field.id}
                      type={ field.type }
                      name={'radio-selection'}
                      value= {field.id}
                      onChange={onFocus}/>
               <span className="checkmark"></span>
               </label>)
             :
             (<input id={ field.name } type={ field.type } onFocus={onFocus}/>)
        }
       </div>)
     }
    </div>
  )
}

export default Form;
