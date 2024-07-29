import { Button } from "native-base";

interface ButtonProps{
    title:string;
    color:string;
    onPress?:()=>any;
}

export function CustomButtom({title, color, onPress}:ButtonProps){
    return(
        <Button alignSelf={"center"} w={"75%"} _pressed={{bg:'gray.400'}} bg={color} onPress={onPress} borderRadius={"lg"}>{title}</Button>
    )
}