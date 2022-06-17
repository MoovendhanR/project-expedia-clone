import {
    Container,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Input,
    InputGroup,
    InputLeftAddon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    // PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    useMediaQuery,
    Flex,
    Text,
    // useCounter,
    HStack,
    Spinner,
    Heading,
    Image,
    // Center,
    // Spacer,
    // Image,
    // Stack,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { BoxShadow, hoverColor } from "../Components/Variables";
  
  function HomePage(){
    const [isLoading, setIsLoading] = useState(true);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan492] = useMediaQuery("(min-width: 492px)");



  const Stays = () => {
    const [stayData, setStayData] = useState({
      city: "",
      checkin: "",
      checkout: "",
      room: 1,
      adult: 1,
      children: 1,
    });

    const onChangeInput = (e) => {
        const { id, value } = e.target;
        setStayData({ ...stayData, [id]: value });
      };
  
      const onIncrementCounter = (e) => {
        let { id, value } = e.target;
        if (value >= 10) {
          return false;
        }
        value = parseInt(value);
        console.log(value, typeof value);
        setStayData({ ...stayData, [id]: value + 1 });
      };
      
      const onDecrementCounter = (e) => {
        let { id, value } = e.target;
        if (
          (id === "room" && stayData.room <= 1) ||
          (id === "adult" && stayData.adult <= 1)
        ) {
          return false;
        }
        if (value <= 0) {
          return false;
        }
        value = parseInt(value);
        setStayData({ ...stayData, [id]: value - 1 });
      };
  
      const navigate = useNavigate();
      const redirect = (e) => {
        localStorage.setItem("staySearch", JSON.stringify(stayData));
        console.log(`redirecting to /stays/${stayData.city}`);
        navigate(`/stays/${stayData.city}`);
      };
  
     

    return(
        <>
             <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
            <Input
              value={stayData.city}
              type="text"
              id="city"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter a location e.g.Goa,Bengaluru,Jammu"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
            <Input
              value={stayData.checkin}
              id="checkin"
              onChange={(e) => {
                onChangeInput(e);
              }}
              type="date"
              placeholder="Basic usage"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
            <Input
              value={stayData.checkout}
              id="checkout"
              onChange={(e) => {
                onChangeInput(e);
              }}
              type="date"
              placeholder="Basic usage"
            />
          </InputGroup>
          <InputGroup>
            <Popover>
              <PopoverTrigger>
                <Button>
                  Travellers :-{" "}
                  {isLargerThan492
                    ? ` ${stayData.room} room , ${
                        stayData.adult + stayData.children
                      } travellers`
                    : `${stayData.room}R ,  ${
                        stayData.adult + stayData.children
                      }T`}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Travellers</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                   
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Adults </Text>
                      <HStack w="150px" m={2}>
                        <Button
                          id="adult"
                          value={stayData.adult}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input m={2} value={stayData.adult} readOnly={true} />
                        <Button
                          id="adult"
                          value={stayData.adult}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Children</Text>
                      <HStack w="150px" m={2}>
                        <Button
                          id="children"
                          value={stayData.children}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input
                          m={2}
                          value={stayData.children}
                          readOnly={true}
                        />
                        <Button
                          id="children"
                          value={stayData.children}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </InputGroup>
        </Flex>
        <Button
          colorScheme="blue"
          onClick={(e) => {
            console.log(stayData);
            redirect(e);
          }}
        >
          Search
        </Button>
      </>
    );
  };
  const Packages = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Leaving from" : "LF"}
            />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Cars = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Pick-up" : "PL"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Pick-up date" : "PD"}
            />
            <Input type="date" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Drop-off date" : "DD"}
            />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };
  const Cruise = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Pick-up" : "PL"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Pick-up date" : "PD"}
            />
            <Input type="date" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Drop-off date" : "DD"}
            />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Flights = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Leaving from" : "LF"}
            />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };
  const TabSection = ({ name }) => {
    return (
      <Tab
        _selected={{
          boxShadow: "none",
          borderBottom: "2px solid blue",
          color: hoverColor,
        }}
        _hover={{ borderBottom: "2px solid red", color: hoverColor }}
      >
        {name}
      </Tab>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  

  const navigate = useNavigate();
  const tripHandler=(e)=>{
    navigate("/trips")
  }
  const accountHandler=(e)=>{
    navigate("/useraccount")
  }
  const rewardsHandler=(e)=>{
    navigate("/points")
  }
  return (
    <Container maxW="container.xl">
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <>
          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            overflow={"hidden"}
            marginTop="50"
            boxShadow={BoxShadow}
          >
            <Tabs align="center">
              <TabList w="90%">
                <Flex
                  flexWrap="wrap"
                  justify="center"
                  backgroundColor= 'gray'
                  borderRadius="10px"
                  gap={isLargerThan768 ? "2" : null}
                >
                  <TabSection name={"Stays"} />
                  <TabSection name={"Flights"} />
                  <TabSection name={"Cars"} />
                  <TabSection name={"Packages"} />
                  <TabSection name={"Things to do"} />
                  <TabSection name={"Cruise"} />
                </Flex>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stays />
                </TabPanel>
                <TabPanel>
                  <Flights />
                </TabPanel>
                <TabPanel>
                  <Cars />
                </TabPanel>
                <TabPanel>
                  <Packages />
                </TabPanel>
                <TabPanel>
                  <Stays />
                </TabPanel>
                <TabPanel>
                  <Cruise />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Container
            boxShadow={BoxShadow}
            maxW="container.xl"
            mt="50px"
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5183/US-CA-MX-HP-Hero-928x398.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              h="400px"
              direction="column"
              gap={4}
              justify="center"
              align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
            >
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Box mr={"35rem"}>
                <Heading as="h1" color="white">
                  Save instantly with Expedia Rewards
                </Heading>
              </Box>
              <Box mr={"35rem"}>
                <Text color="white" fontSize="xl">
                  You can enjoy access to perks like Member Prices, saving you
                  10% or more on select hotels. Terms may apply.
                </Text>
              </Box>
              <Box>
                <Link to="/" mb="3%" mt="1%" w="200px" size="lg" >
                  <Button
                  mr={"35rem"}
                    mb="3%"
                    mt="1%"
                    w="200px"
                    colorScheme="blue"
                    size="lg"
                  >
                    See Member Prices
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Container>
          <br/>

       <Heading mr={"51%"}>
       Here to help keep you on the move
       </Heading>
          <Flex>
            <Container
            boxShadow={BoxShadow}
            borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            h={"100px"}
            cursor="pointer"
            onClick={tripHandler}
            >
              <Box>
                <Box display="flex" justifyContent="space-between" mt="1rem">
                
                  <Text fontSize="25px">Change or cancel a trip</Text>
                  <Image width="20px" hight="20px" src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__mode_edit.svg" alt="tripspage"/>
            
                </Box>
                <Box mt="0.5rem" mr="5px">
                  <Text>Make updates to your itinerary or cancel a booking </Text>
                </Box>
              </Box>
            </Container>
            <Container
             boxShadow={BoxShadow}
             borderRadius="10px"
             bgPosition="center"
             bgRepeat="no-repeat"
             bgSize="cover"
             mt={"15px"}
             ml={"17px"}
             h={"100px"}
             cursor="pointer"
             onClick={accountHandler}
            >
            <Box>
                <Box display="flex" justifyContent="space-between" mt="1rem">
                  <Text fontSize="25px">Use a credit or coupen</Text>
                  <Image width="20px" hight="20px" src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__monetization_on.svg" alt="tripspage"/>
                </Box>
                <Box mt="0.5rem" mr="50px">
                  <Text color="gray">Apply a coupon code or credit to a new trip</Text>
                </Box>
              </Box>

            </Container>
            <Container
            boxShadow={BoxShadow}
            borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            ml={"17px"}
            h={"100px"}
            cursor="pointer"
            onClick={rewardsHandler}
            >
              <Box >
                <Box display="flex" justifyContent="space-between" mt="1rem">
                  <Text fontSize="25px">Track Your refund</Text>
                  <Image width="20px" hight="20px" src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__chat.svg" alt="tripspage"/>
                </Box>
                <Box mt="0.5rem" mr="20px" >
                  <Text color="gray">Check the status of a refund currently in progress</Text>
                </Box>
              </Box>

            </Container>
            </Flex>



          <Container
            boxShadow={BoxShadow}
            maxW="container.xl"
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-3517/3517-HP-Hero-D-928x398.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"30px"}
            h={"300px"}
          >
            <Flex
              h="400px"
              direction="column"
              justify="center"
              align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
              gap={"20px"}
            >
             <br/>
              
             
              <Box mr={"40rem"} textShadow="0 0 20px black">
                <Heading  as="h3" color="white" fontSize="20px">
                  Plan ahead and save
                </Heading>
              </Box>
              <Box mr={"40rem"}>
                <Heading textShadow="0 0 20px black" as="h3" color="white" fontSize="20px">
                  Book 60 days in advance for 20% off seletct stays.
                </Heading>
              </Box>
            </Flex>
          </Container>
        </>
      )}
     <Container
            maxW="container.xl"
            borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"35px"}
            h={"300px"}
          >
            <Flex>
            <Container
            boxShadow={BoxShadow}
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/egip-collections/zvrbYGu.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            h={"270px"}
            ></Container>
            <Container
             boxShadow={BoxShadow}
             borderRadius="10px"
             bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Editorial-3up-384x256-1.jpg')"
             bgPosition="center"
             bgRepeat="no-repeat"
             bgSize="cover"
             mt={"15px"}
             ml={"17px"}
             h={"270px"}
            ></Container>
            <Container
            boxShadow={BoxShadow}
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/egip-collections/Ss1epnX.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            ml={"17px"}
            h={"270px"}
            ></Container>
            </Flex>
            <Container
            display="flex"
            justify="space-between"
            maxW="container.xl"
            borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            h={"300px"}
          >
          <Container>
          <Text fontSize='xl' color='black'>BEACHES</Text>
            <Text fontSize='lg' color="gray">Breathe in those beach vibes</Text>
          </Container>
          <Container>
          <Text fontSize='xl' color='black'>URBAN ESCAPE</Text>
            <Text fontSize='lg' color="gray">Hit the town</Text>
          </Container>
          <Container>
          <Text fontSize='xl' color='black'>TRAVEL SMARTER</Text>
            <Text fontSize='lg' color="gray">Save instantly with Expedia Rewards</Text>
          </Container>
          </Container>
          </Container>



          <Container
            maxW="container.xl"
            borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"65px"}
            h={"370px"}
          >
            <Flex>
            <Container
            boxShadow={BoxShadow}
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5157/US-CA-MX-HP-Editorial-2up-457x257.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            h={"370px"}
            w={"600px"}
            ></Container>
           
            <Container
            boxShadow={BoxShadow}
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5276/US-HP-Edi-2UP-457x257.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            w={"600px"}
            // ml={"17px"}
            h={"370px"}
            ></Container>
            </Flex>
            <Container
            display="flex"
            justify="space-between"
            maxW="container.xl"
            borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"15px"}
            h={"300px"}
          >
          <Container>
          <Text fontSize='xl' color='black'>FOR THE LOVE OF SUMMER</Text>
            <Text fontSize='lg' color="gray">Chase the sun to someplace extraordinary</Text>
          </Container>
          
          <Container>
          <Text fontSize='xl' color='black'>OFF & AWAY</Text>
            <Text fontSize='lg' color="gray">Grab a 25% of coupon--only in the app.Terms apply</Text>
          </Container>
          </Container>
          </Container>


          <Container
        //   width="80%"
            boxShadow={BoxShadow}
            bgImage="url(https://tpc.googlesyndication.com/simgad/13894557073736811777?)"
            justify="space-between"
            maxW="container.lg"
            //maxW="922px"

            // borderRadius="10px"
            bgPosition="center"
            bgRepeat="no-repeat"
             bgSize="cover"
            mt={"122px"}
            h={"100px"}
          ></Container>



             <Flex>
             <Container
             boxShadow={BoxShadow}
             borderRadius="10px"
             bgImage="url('https://a.travel-assets.com/travel-assets-manager/5348/MTT-LP-D-928x398.jpg')"
             bgPosition="center"
             bgRepeat="no-repeat"
             maxW="container.xl"
             bgSize="cover"
             h={"220px"}
             mt="35px"
              w="75%"
            >
             <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
                <Box>
                <Heading as="h3" color="white" fontSize="20px" mr={"30rem"}    textShadow="0 0 20px black"
              fontWeight="bold">
                Find flights that will take you to the most loved places                </Heading>
              </Box>
            </Container>
             <Container
             boxShadow={BoxShadow}
             borderRadius="10px"
             bgImage="url('https://s0.2mdn.net/simgad/91865042476660274')"
             bgPosition="center"
             maxW="container.sm"
             bgRepeat="no-repeat"
              bgSize="fit"
             h={"220px"}
             mt='35px'
             w="20%"
            ></Container>
             </Flex>
             <br/>
              <Text fontSize="23px">Be inspired and discover more with Expedia</Text>
              <Text color="blue"   _hover={{color:"red",cursor:"pointer"}}>Discover new places and experiences</Text>
    </Container>
  );
    
  }




  export default  HomePage;