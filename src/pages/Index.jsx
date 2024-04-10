import { Box, Heading, Text, Image, Button, Stack, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaCode, FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mt={6} mb={2}>
        Find Your{" "}
        <Text as="span" color="teal.500">
          {"<"}TechMate{"/>"}
        </Text>
      </Heading>
      <Text color={"gray.500"} mb={6}>
        The dating app for code-savvy bros looking for their perfect merge
      </Text>

      <Stack spacing={4} direction={{ base: "column", md: "row" }} justify="center" mt={8}>
        <Feature icon={FaHeart} title="Match on Tech Stacks">
          No more swiping on incompatible types. Find your pair programming partner based on favorite languages and frameworks.
        </Feature>
        <Feature icon={FaCode} title="Geek Out Together">
          Bond over late night coding sessions, hackathons, and geeky movie marathons. No judgment, just shared passions.
        </Feature>
      </Stack>

      <Flex mt={8} mb={12} justify="center">
        <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRpbmclMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjcxMTE5MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="App screenshot" boxSize={{ base: "300px", md: "500px" }} objectFit="contain" rounded="lg" shadow="xl" />
      </Flex>

      <Button leftIcon={<FaDownload />} colorScheme="teal" size="lg">
        Download TechMate
      </Button>
    </Box>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default Index;
