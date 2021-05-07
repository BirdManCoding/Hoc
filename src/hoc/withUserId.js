import { useState, useEffect } from "react";
import axios from "axios";

const withUserId = Component => {
  const NewComponent = props => {
    const [user, setUser] = useState({});
    console.log(props);

    const id = props.id;

    useEffect(() => {
      (async () => {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(data);
      })();
    }, [id]);

    return <Component {...props} user={user} />;
  };

  return NewComponent;
};

export default withUserId;
