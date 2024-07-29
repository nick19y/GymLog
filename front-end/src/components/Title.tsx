import { Text } from "native-base";

interface TitleProps{
    text: string;
}

export function Title({text}:TitleProps){
    return(
        <Text alignSelf={"center"} fontSize={40} fontWeight={600} color={"green.500"}>{text}</Text>
    )
}