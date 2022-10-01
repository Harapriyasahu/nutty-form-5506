import React from 'react';
import "./Timesheet.css";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';

  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react';

const Timesheet = () => {
  return (
    <div>
        <div className='timesheetmain'>

            {/* <div className='trialdiv'>
                <div className='trialheaddiv'>
                    <p className='trialheadpara'>12 days left in your pro trial</p>
                </div>
                <div className='trialbttnsdiv'>
                    <button className='trialbttn'>Subrcribe to Pro</button>
                    <button className='trialbttn1'>Book a Demo</button>
                </div>
            </div> */}

            {/* <div className='userdiv'>
                <div className='userdivuser'>
                    <h1 className='userdivuserhead'>Timesheet</h1>
                </div>
                <div className='userdivuser1'>

                    <button>
                    <Menu>
                    <MenuButton >
                    <img className='userdivuser1img1' src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" alt="" />
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Integrations</MenuItem>
                    <MenuItem>Subscription</MenuItem>
                    </MenuList>
                    </Menu>
                    </button>
                    
                    <button>
                    <Menu>
                    <MenuButton >
                    <img className='userdivuser1img1' src="https://cdn-icons-png.flaticon.com/128/471/471664.png" alt="" />
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Help</MenuItem>
                    <MenuItem>Knowledge base</MenuItem>
                    <MenuItem>Send feedback</MenuItem>
                    <MenuItem>Become a Partner</MenuItem>
                    <MenuItem>What's new</MenuItem>
                    <MenuItem>Suggest a feature</MenuItem>
                    </MenuList>
                    </Menu>
                    </button>

                    <button>
                    <img className='userdivuser1img1' src="https://cdn-icons-png.flaticon.com/128/3817/3817079.png" alt="" />
                    </button>

                    <button>
                    <Menu>
                    <MenuButton >
                    <img className='userdivuser1img1' src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="" />
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Username</MenuItem>
                    <MenuItem>Download App</MenuItem>
                    <MenuItem>Browser pluggin</MenuItem>
                    <MenuItem>Logout</MenuItem>
                    </MenuList>
                    </Menu>
                    </button>

                </div>
            </div>*/}

            <div className='datediv'>
                <div className='datediv1'> 
                    <div className='datedivinside1'>
                        <button className='datedivinside1right'>
                            <img className='datedivinside1arrow' src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png" alt="" />
                        </button>
                        <button className='datedivinside1middle'>
                        {/* <Accordion defaultIndex={[0]} allowMultiple>
                         <AccordionItem>
                             <h2>
                         <AccordionButton>
                        <Box>
                        <img className='datedivinside1middleimg' src="https://cdn-icons-png.flaticon.com/128/747/747310.png" alt="" />
                        </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <input type="date" />
                        </AccordionPanel>
                        </AccordionItem>
                        </Accordion> */}

                        <input type="date" />
                            
                        </button>
                        <button className='datedivinside1left'>
                            <img className='datedivinside1arrow' src="https://cdn-icons-png.flaticon.com/128/2952/2952047.png" alt="" />
                        </button>
                    </div>
                    <div className='datedivinside2'>
                        {/* <h2 className='datedivinside2day'>Thursday, 29 September</h2> */}
                    </div>
                </div>
                <div className='datediv2'>
                      <div className='datediv2inside1'>
                        <button className='datediv2inside1left'>
                            <p className='datediv2inside1leftpara'>Day</p>
                        </button>
                        <button className='datediv2inside1right'>
                        <p className='datediv2inside1leftpara'>Calender</p>
                        </button>
                      </div>

                      <button className='datediv2inside2'>
                        <img className='datediv2inside2refresh' src="https://cdn-icons-png.flaticon.com/128/1549/1549456.png" alt="" />
                      </button>

                      <button className='datediv2inside3'>
                      <Menu>
                    <MenuButton >
                        <div className='display'>
                    <img className='datediv2inside3img' src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="" />
                    <img className='datediv2inside3icon' src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="" />
                    </div>
                    </MenuButton>
                    <MenuList>
                    <MenuItem><input type="text" placeholder='Search...' /></MenuItem>
                    <MenuItem className='people'>People</MenuItem>
                    <MenuItem className='invitecoworker'>Invite your co-worker by searching emailID</MenuItem>
                    </MenuList>
                    </Menu>
                       
                      </button>

                      <button className='datediv2inside4'>
                        <img className='datediv2inside4img' src="https://t3.ftcdn.net/jpg/03/08/40/24/240_F_308402417_GqkJdF2DQE05p84aWzYKbbMn0IKbhQFn.jpg" alt="" />
                        <p className='datediv2inside4para'>Bulk edit</p>
                      </button>

                      <button className='datediv2inside5'>
                        <img className='datediv2inside5img' src="https://cdn-icons-png.flaticon.com/128/512/512222.png" alt="" />
                      </button>

                </div>
            </div>

            <div className='taskproject'>
                <div className='selecttask'>
                    <input className='selecttaskinput' type="text" placeholder='Select task and Project' />
                </div>
                <div className='notediv'>
                    <input className='notedivinput' type="text" placeholder='note'/>
                </div>
                <div className='tasktime'></div>
                <div className='starttimer'>
                    <button className='starttimerbuttn'>Start timer</button>
                </div>
                <div className='addtimeentry'>
                    <button className='addtimeentrybttn'>ADD TIME ENTRY</button>
                </div>
            </div>

            <div className='timings'>
                <div className='timings1'><p>1am</p></div>
                <div className='timings1'><p>2am</p></div>
                <div className='timings1'><p>3am</p></div>
                <div className='timings1'><p>4am</p></div>
                <div className='timings1'><p>5am</p></div>
                <div className='timings1'><p>6am</p></div>
                <div className='timings1'><p>7am</p></div>
                <div className='timings1'><p>8am</p></div>
                <div className='timings1'><p>9am</p></div>
                <div className='timings1'><p>10am</p></div>
                <div className='timings1'><p>11am</p></div>
                <div className='timings1'><p>12pm</p></div>
                <div className='timings1'><p>1pm</p></div>
                <div className='timings1'><p>2pm</p></div>
                <div className='timings1'><p>3pm</p></div>
                <div className='timings1'><p>4pm</p></div>
                <div className='timings1'><p>5pm</p></div>
                <div className='timings1'><p>6pm</p></div>
                <div className='timings1'><p>7pm</p></div>
                <div className='timings1'><p>8pm</p></div>
                <div className='timings1'><p>9pm</p></div>
                <div className='timings1'><p>10pm</p></div>
                <div className='timings1'><p>11pm</p></div>
            </div>

            <div className='entries'>

            </div>

        </div>
    </div>
  )
}

export default Timesheet