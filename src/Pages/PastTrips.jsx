import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { BoxShadow } from "../Components/Variables";
import axios from "axios";
// import { isLogin } from "";
import API from "../Components/API";
import { useSelector } from "react-redux";

function PastTrips() {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    axios.get(`${API()}/payment/${isLoginObj.user._id}`).then((res) => {
      console.log(res.data);
      setTrips(res.data);
    });
  }, [isLoginObj.user._id]);

  return (
    <>
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
        <Container maxW="container.xl" mt="10">
          <TableContainer
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            marginTop="50"
            boxShadow={BoxShadow}
          >
            <Table variant="simple">
              <Thead>
                <Tr bgColor="grey">
                  <Th color="white">Sr.No</Th>
                  <Th color="white">Hotel Name</Th>
                  <Th color="white">Rooms Book</Th>
                  <Th color="white">Total Nights</Th>
                  <Th color="white">Total Amount (Rs)</Th>
                  <Th color="white">Booking Date</Th>
                  <Th color="white">Checkin Date</Th>
                  <Th color="white">Checkout Date</Th>
                  <Th color="white">Transaction Id</Th>
                </Tr>
              </Thead>
              <Tbody>
                {trips.length > 0
                  ? trips.map((e, i) => (
                      <Tr
                        key={e._id}
                        _hover={{
                          bgColor: "#f7f9fb",
                          cursor: "pointer",
                        }}
                      >
                        <Td>{i + 1}</Td>
                        <Td>{e.hotelId.hotelName}</Td>
                        <Td>{e.rooms}</Td>
                        <Td>{e.night}</Td>
                        <Td>{e.amount}</Td>
                        <Td>{e.bookingDate}</Td>
                        <Td>{e.checkinDate}</Td>
                        <Td>{e.checkoutDate}</Td>
                        <Td>{e.transactionId}</Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default PastTrips;
