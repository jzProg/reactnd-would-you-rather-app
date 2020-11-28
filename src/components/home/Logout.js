function Logout(props) {
  const { users, onLogout, username } = props.data;

  return (
    <div className="col-md-3">
      <button type="button" className="btn btn-danger" onClick={onLogout}><b>LOGOUT</b></button>
      <img style={{ marginLeft: '1%'}} src={users[username] && users[username].avatarURL} alt="Avatar" className="avatar"/>
      <span style={{ marginLeft: '1%'}}>{username}</span>
    </div>
  )
}

export default Logout;
