import React from 'react';
import "./Pricing.css"
import { Heading ,Button} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';


const Pricing = () => {
const [p1,setP1]=useState(true)
const [p2,setP2]=useState(false)

function changefn(){
  setP1(!p1)
  setP2(!p2)
}
console.log(p1,p2)
  return (
    <div className='pricing'>
        <p className='p'>PRICING</p>
        <Heading as='h2' size='xl'>
        Your time cost more
        </Heading>
        <br />
        <p>
        Use free forever plan or subscribe to a paid plan to get more features!
        </p>
        <Tabs onChange={()=>changefn()} variant='soft-rounded' colorScheme='whatsapp' width="30%" margin="auto" marginTop="30px"  className='tab'>
  <TabList onChange={()=>changefn()}>
    <Tab padding="20px" >Anually 10% discount</Tab>
    <Tab>Monthly</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
 {/* box div */}
   <div className='main_box'>
        <div className='box'>
        <Heading as='h2' size='2xl' color="#25CF60">
         Free
        </Heading>
        <br />
        <p>Free forever plan</p>
        <br />
        <hr
        style={{
          background: 'green',
          color: '#25CF60',
          borderColor: '#25CF60',
          height: '1px',
        
        margin:"auto"
        }}
      />
      <br />
      <p style={{color:"grey"}}>Measure on which activities you spend time while working</p>
        <br />
        <Button padding="1.5rem" color="white" colorScheme="whatsapp" borderRadius="30px">Join for free</Button>
        <br />
        <br />
        <div style={{textAlign:"left"}}>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Unlimited users</li>
                <li>Unlimited Projects & tasks</li>
                <li>Desktop & Mobile app</li>
            </ul>
        </div>
        
        </div>
        <div className='box'>
        <Heading as='h2' size='2xl' color="#25CF60">
        {p1===true?"$7":"$6.3"}
        </Heading>
        <br />
        <p>user/mon</p>
        <br />
        <hr
        style={{
          background: 'green',
          color: 'green',
          borderColor: 'green',
          height: '1px',
         
        margin:"auto"
        }}
      />
      <br />
      <p style={{color:"grey"}}>Measure on which activities you spend time while working</p>
        <br />
        <Button padding="1.5rem" color="white" colorScheme="whatsapp" borderRadius="30px">Join for free</Button>
        <br />
        <br />
        <div style={{textAlign:"left"}}>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Time rounding</li>
                <li>Custom report</li>
                <li>Hide time from users</li>
                <li>Management roles</li>
                <li>Team productivity tracking</li>
                <li>Billable time & budgeting</li>
            </ul>
        </div>
        
        </div>
        <div className='box3' >
        <Heading as='h2' size='2xl'  color="white">
         {p2===true?"$10" :"$9"}
        </Heading>
        <br />
        <p>user/mon</p>
        <br />
        <hr
        style={{
          background: 'green',
          color: 'green',
          borderColor: 'green',
          height: '1px',
         
        margin:"auto"
        }}
      />
      <br />
      <p style={{color:"white"}}>Measure on which activities you spend time while working</p>
        <br />
        <Button padding="1.5rem" color="green"  borderRadius="30px">Join for free</Button>
        <br />
        <br />
        <div style={{textAlign:"left"}}>
          <h1>Everything in Basic plus</h1>
          <br />
            <ul style={{ listStyleType: 'disc' }}>
                <li>Custom user roles</li>
                <li>Billing rates</li>
                <li>Invoicing</li>
                <li>Timesheet approvals</li>
                <li>Screenshots</li>
                <li>2-factor authentication</li>
            </ul>
        </div>
        
        </div>
        <div className='box'>
        <Heading as='h2' size='2xl'>
        Let's discuss
        </Heading>
        <br />
        
        <br />
        <hr
        style={{
          background: 'green',
          color: 'green',
          borderColor: 'green',
          height: '1px',
         
        margin:"auto"
        }}
      />
      <br />
      <p style={{color:"grey"}}>Customize TImecamp to your Custom needs</p>
        <br />
        <Button padding="1.5rem" color="white" colorScheme="whatsapp" borderRadius="30px">Join for free</Button>
        <br />
        <br />
        <div style={{textAlign:"left"}}>
          <h1>Everything in Pro plus</h1>
          <br />
          <br />
            <ul  style={{ listStyleType: 'disc' }}>
                <li>Personalized training</li>
                <li>Private cloud implementation</li>
                <li>Self hosted server</li>
            </ul>
        </div>
         
        </div>
        
   </div>
      <div id='mytime'>
        <img src="https://scontent.fbek1-3.fna.fbcdn.net/v/t39.30808-6/309496892_526288336167419_4692006231252640386_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=um4nfh-9b-UAX--0Aok&_nc_ht=scontent.fbek1-3.fna&oh=00_AT8K7ER5rUsxvpJ68d-Aw__sbdY_kAzpVyQQXpK7h-dkfA&oe=633B5D55" alt="image" />
      </div>
    </div>
  )
}

export default Pricing