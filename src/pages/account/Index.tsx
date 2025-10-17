import { JSX, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2';

interface Props {
  children: JSX.Element
}

interface User {
  id: string
  username: string
}

const Index = ({ children }: Props) => {
  const isAuthenticated = localStorage.getItem('users')

  if (!isAuthenticated) {
    return <Navigate to="/registration" replace />
  }

  const [authenticatedUser,setAuthenticatedUser] = useState(
      isAuthenticated ? JSON.parse(isAuthenticated) : []
  )

  const handleEdit = async (inx: number) => {
    const userEdit = authenticatedUser[inx]
    const { value: name } = await Swal.fire({
      title: 'Enter new username',
      input: 'text',
      inputLabel: authenticatedUser[inx].username,
      showCancelButton: true,
    });
    if (name) {
      const updateUser = [...authenticatedUser]
      updateUser[inx].username = name
      setAuthenticatedUser(updateUser)
      localStorage.setItem('users',JSON.stringify(updateUser))
    }
        Swal.fire( `Update username ${name}` )
  }

  return (
    <>
      {authenticatedUser.map((el, inx) => (
        <div key={inx}>
          <p>{el.username}</p>
          <button onClick={() => handleEdit(inx)}>edit</button>
        </div>
      ))}
    </>
  )
}

export default Index
