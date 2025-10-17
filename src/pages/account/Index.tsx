import { JSX, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {
  children?: JSX.Element; // optional qilish ham mumkin
}

interface User {
  id: string;
  username: string;
}

const Index = ({ children }: Props) => {
  const isAuthenticated = localStorage.getItem("users");

  if (!isAuthenticated) {
    return <Navigate to="/registration" replace />;
  }

  const [authenticatedUser, setAuthenticatedUser] = useState<User[]>(
    isAuthenticated ? JSON.parse(isAuthenticated) : []
  );

  const handleEdit = async (inx: number) => {
    const userEdit = authenticatedUser[inx];
    const { value: name } = await Swal.fire({
      title: "Enter new username",
      input: "text",
      inputLabel: userEdit.username,
      showCancelButton: true,
    });

    if (name) {
      const updatedUsers = [...authenticatedUser];
      updatedUsers[inx].username = name;
      setAuthenticatedUser(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      Swal.fire(`Updated username to ${name}`);
    }
  };

  return (
    <>
      {authenticatedUser.map((el, inx) => (
        <div key={inx}>
          <p>{el.username}</p>
          <button onClick={() => handleEdit(inx)}>Edit</button>
        </div>
      ))}
    </>
  );
};

export default Index;
