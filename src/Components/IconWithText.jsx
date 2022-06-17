import { Flex, Box, Text, Icon, Heading } from "@chakra-ui/react";

function IconWithText({ img, text, distnace, w1, w2, w3 }) {
  w1 = w1 !== "" ? w1 : "";
  w2 = w2 !== "" ? w2 : "";
  w3 = w3 !== "" ? w3 : "";

  return (
    <Flex verticalAlign={"middle"}>
      <Box w={w1}>
        <Icon as={img} w="6" h="6" />
      </Box>
      &emsp;
      <Box w={w2} verticalAlign={"middle"}>
        <Text fontSize="lg">{text}</Text>
      </Box>
      {distnace ? (
        <Text w={w3} fontSize="lg">
          {distnace} min
        </Text>
      ) : null}
    </Flex>
  );
}

const TextWithIcon = ({ logo, heading, para,isLargerThan769 }) => {
  return (
    <Flex
      gap={1}
      p="10px"
      direction="row"
      flexWrap="wrap"
      justify={isLargerThan769 ? "left" : "center"}
    >
      <Box m="10px" w="20px">
        <Icon as={logo} h="100%" w="100%" />
      </Box>
      <Flex direction="column" gap="10px">
        <Heading as="h5" size="sm">
          {heading}
        </Heading>
        <Text>{para}</Text>
      </Flex>
    </Flex>
  );
};


export {IconWithText,TextWithIcon};
