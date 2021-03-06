import React from 'react'

import UserList from '../user/UserList'
import { Auth } from './../../features/auth/auth-slice'

interface UserManagementProps {
  auth: Auth
}

const UserManagement = ({ auth }: UserManagementProps) => {
  return (
    <>
      <UserList auth={auth} />
    </>
  )
}

export { UserManagement }
