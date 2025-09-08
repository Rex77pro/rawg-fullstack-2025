import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { ColorModeSwitch } from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={15}></Image>
        <Text>Navbar</Text>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar