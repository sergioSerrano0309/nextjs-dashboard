import { signIn } from "../../auth"
 
export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("forwardemail", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit" >Signin with Forward Email</button>
    </form>
  )
}