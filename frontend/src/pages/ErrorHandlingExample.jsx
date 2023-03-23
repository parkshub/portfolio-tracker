import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { registerUser } from '../features/user/userSlice'
import { toast } from 'react-toastify'

const Test1 = () => {

    const dispatch = useDispatch()

    const { isRejected, message } = useSelector((state) => state.auth)

    const blah = {
        userName: "asdf",
        email: "a@a.com",
        password: "a",
        password2: "a"
    }

    const onClick = () => {
        dispatch(registerUser(blah))
    }

    useEffect(() => {
      if(isRejected) {
        toast.error(message)
      }

    }, [isRejected, message])

  return (
    <>
        <button onClick={onClick}>asdasd</button>
        <div>Test1</div>
    </>
  )
}

export default Test1
