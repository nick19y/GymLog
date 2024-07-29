import { Image, VStack } from "native-base";

export function Logo(){
    return(
        <VStack>
            <Image source={require('../assets/logo1.png')} size={"100"} alignSelf={"center"}/>
        </VStack>
    )
}