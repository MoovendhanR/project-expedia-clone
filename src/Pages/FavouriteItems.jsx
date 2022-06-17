import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import API from "../Components/API";
import { useSelector } from "react-redux";
import { HotelCard } from "../Components/HotelCard";
import NotFound from "../Components/NotFound";

function FavouriteItems() {
  const [favouriteList, setFavouriteList] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  useEffect(() => {
    let url = `${API()}/favourite/userFavList/${isLoginObj.user._id}`;
    axios.get(url).then((res) => {
      setFavouriteList(res.data.hotelId);
    });
  }, [isLoginObj.user._id]);

  return (
    <Flex justify="center" gap={5} flexWrap="wrap">
      {favouriteList
        ? favouriteList.map((e) => <HotelCard key={e._id} data={e} />)
        : <NotFound/>}
    </Flex>
  );
}

export default FavouriteItems;
