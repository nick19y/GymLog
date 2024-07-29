import { CustomButtom } from "@/src/components/CustomButton";
import { Logo } from "@/src/components/Logo";
import { Title } from "@/src/components/Title";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Text, VStack } from "native-base";

export default function Home({navigation}:any){
    return(
        <VStack>
            <VStack mt={10} mb={20}>
                <Logo/>
            </VStack>
            <Title text="Treino de hoje:"/>
            <VStack display={"flex"} alignItems={"center"} bg={"white"} w={"85%"} alignSelf={"center"} borderRadius={30} padding={8}>
                <VStack alignItems={"center"} mb={6}>
                    <Text color={"green.500"} fontSize={"3xl"} fontWeight={"600"}>Treino A</Text>
                    <Text>Peito, Tríceps e Ombro</Text>
                    <Ionicons name="play-outline" color={"#00d435"} size={100}/>
                </VStack> 
                <CustomButtom title="Iniciar" color="green.500" onPress={()=>navigation.navigate('TrainingPreparation')}/>
            </VStack>
        </VStack>
    )
}