import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <Navbar
  fluid={true}
  rounded={false}
>
  <Navbar.Brand href="/">
    <img
      src="https://i.postimg.cc/PfCPQ67n/logo-transparent.png"
      className="mr-2 h-14 sm:h-15"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Banking Simplified.
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bashir Tarif
        </span>
        <span className="block truncate text-sm font-medium">
          Bashir@test.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link to={'/'}>
      Home
    </Link>
    <Link to={"/accounts"}>
      Accounts
    </Link>
    <Link to={"/users"}>
      Users
    </Link>
  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default NavBar