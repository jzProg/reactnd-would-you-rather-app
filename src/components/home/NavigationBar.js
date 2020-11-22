function NavigationBar(props) {
  const { users, username, onLogout, selected, categories, onToggle } = props;

  return (
    <div className="container" style={{ backgroundColor: 'gray', width: '100%', fontFamily: 'Open Sans' }}>
      <div className="row">
        {categories.map((item, index) => (
         <div className="col-md-3 navItem" style={{  backgroundColor: index === selected ? 'darkgray' : '' }} key={index} onClick={() => onToggle(index)}>
           <b>{ item.text }</b>
         </div>
        ))}
        <div className="col-md-3">
          <button type="button" className="btn btn-danger" onClick={onLogout}><b>LOGOUT</b></button>
          <span style={{ margin: '1%'}}>{username}</span>
          <img src={users[username] && users[username].avatarURL} alt="Avatar" className="avatar"/>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;
