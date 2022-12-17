import { Footer } from 'flowbite-react'
import React from 'react'

function MainFooter() {
  return (
    <div className='fixed mt-4 bottom-0 -z-10 w-full bg-white'>
        <Footer container={true} >
          <Footer.Copyright
        href="#"
        by="Bashir&Omer"
        year={2022}
          />
          <Footer.LinkGroup>
        <Footer.Link  className="mr-1" href="#">
          About
        </Footer.Link>
        <Footer.Link  className="mr-1" href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link  className="mr-1" href="#">
          Licensing
        </Footer.Link>
        <Footer.Link  className="mr-1" href="#">
          Contact
        </Footer.Link>
          </Footer.LinkGroup>
        </Footer>
    </div>
  )
}

export default MainFooter