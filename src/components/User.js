//import withCurrentUser from "../hoc/withCurrentUser";

function User({ user }) {
  return (
    <div className='App'>
      <h1>
        {user.name} | {user.username}
      </h1>
      <p>{user.email}</p>
    </div>
  );
}

export default User;

//export default withCurrentUser(User);
