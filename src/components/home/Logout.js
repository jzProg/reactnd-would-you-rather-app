function Logout(props) {
  const { user, onLogout } = props.data;

  return (
    <div className="col-md-3">
      <button type="button" className="btn btn-danger" onClick={onLogout}><b>LOGOUT</b></button>
      <img style={{ marginLeft: '1%'}} src={user && user.avatarURL} alt="Avatar" className="avatar"/>
      <span style={{ marginLeft: '1%'}}>{user.name}</span>
    </div>
  )
}

export default Logout;
