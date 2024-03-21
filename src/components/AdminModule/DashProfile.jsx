
import { Button, TextInput } from "flowbite-react"
import { useNavigate } from "react-router-dom";

const DashProfile = () => {
  const navigate = useNavigate()

  const name = localStorage.getItem("user");
  const loginData = JSON.parse(name).loginData;

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/")
  }

  const deleteAccount = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
        >
          <img src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=1024x1024&w=is&k=20&c=6XEZlH2FjqdpXUqjUK4y0LlWF6yViZVWn9HZJ-IR8gU="}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-8`} />
        </div>
        <TextInput type="text" id="username" placeholder="username" defaultValue={loginData.firstName} />
        <TextInput type="text" id="email" placeholder="email" defaultValue={loginData.email} />
        <TextInput type="text" id="password" placeholder="**********" />
        <Button type="submit" gradientDuoTone='purpleToBlue' outline>
          Submit
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span onclick={() => deleteAccount()} className="cursor-pointer">Delete Acount</span>
        <span onClick={() => signOut()} className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile;


