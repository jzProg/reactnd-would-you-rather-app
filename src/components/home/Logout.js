function Logout(props) {
  const { users, onLogout, username } = props.data;

  return (
    <div className="col-md-3">
      <button type="button" className="btn btn-danger" onClick={onLogout}><b>LOGOUT</b></button>
      <span style={{ margin: '1%'}}>{username}</span>
      <img src={users[username] && users[username].avatarURL} alt="Avatar" className="avatar"/>
    </div>
  )
}

export default Logout;
