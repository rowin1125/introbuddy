import { Button } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const SignupPage = () => {
  const { client } = useAuth()

  const login = async () => {
    const { user } = await client.auth.signIn({
      provider: 'google',
    })
    console.log('user', user)
  }
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <Button onClick={login}>Login</Button>
    </>
  )
}

export default SignupPage
