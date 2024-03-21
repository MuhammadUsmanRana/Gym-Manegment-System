import { Avatar, Button, Dropdown } from 'flowbite-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { FaSun, FaMoon } from "react-icons/fa"
import { toggleTheme } from '../../Store/theme/theme'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = useSelector(state => state.theme)
    return (
        <header className=" body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={"/"} className='flex'>
                    <span className="ml-3 text-2xl font-bold hover:text-gray-900">GymLife </span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Button
                        className='w-12 h-10 hidden sm:inline mr-2'
                        color='gray'
                        pill
                        onClick={() => {
                            dispatch(toggleTheme())
                        }}
                    >
                        {theme.theme === "light" ? <FaSun /> : <FaMoon />}
                    </Button>
                    {localStorage.getItem("token") || localStorage.getItem("user") ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar
                                    alt='user'
                                    img={''}
                                    rounded
                                />
                            }
                        >
                            <Link to="/admin-module"><Dropdown.Item className='text-center flex'>User</Dropdown.Item></Link>
                            <Dropdown.Item onClick={() => {
                                localStorage.removeItem("token")
                                localStorage.removeItem("user")
                                navigate("/");
                            }}>Sign Out</Dropdown.Item>
                        </Dropdown>
                    ) : (
                        <Link to={"/sign-up"}>
                            <Button>
                                Sign up
                            </Button>
                        </Link>)
                    }
                </nav>
            </div>
        </header >
    )
}

export default Header;