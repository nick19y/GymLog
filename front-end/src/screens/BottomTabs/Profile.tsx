import { CustomButtom } from "@/src/components/CustomButton";
import CardProfile from "@/src/components/Profile/CardProfile";
import { CardProfileTraining } from "@/src/components/Profile/CardProfileTraining";
import { VStack } from "native-base";

export default function Profile({navigation}:any){
    return(
        <VStack>
            <CardProfile/>
            <VStack display={"flex"} flexDir={"row"} justifyContent={"space-around"} mt={10} mx={10}>
                <CardProfileTraining title="Exercícios" icon="barbell-outline" onPress={()=>navigation.navigate('Exercises')}/>
                <CardProfileTraining title="Treinos" icon="clipboard-outline" onPress={()=>navigation.navigate('AddTraining')}/>
            </VStack>
            <VStack display={"flex"} flexDir={"row"} justifyContent={"space-around"} mt={10} mx={10}>
                <CardProfileTraining title="Progressão" icon="analytics-outline"/>
                <CardProfileTraining title="Configurações" icon="settings-outline"/>
            </VStack>
            <VStack mt={10}>
                <CustomButtom color="red.500" title="Sair" onPress={()=>navigation.navigate("Login")}/>
            </VStack>
        </VStack>
    )
}