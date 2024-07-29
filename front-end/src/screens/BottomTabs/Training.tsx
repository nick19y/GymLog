import CardTraining from "@/src/components/CardTraining";
import { Logo } from "@/src/components/Logo";
import { Center, ScrollView, Text, VStack } from "native-base";

export default function Training(){
    return(
        <VStack flex={1}>
            <VStack mt={5}>
                <Logo/>
                <Text alignSelf={"center"} color={"green.500"} mt={4} fontSize={30} fontWeight={"600"}>Treinos</Text>
            </VStack>
            <ScrollView contentContainerStyle={{paddingBottom:30}}>
                <CardTraining/>
                <CardTraining/>
                <CardTraining/>
                <CardTraining/>
            </ScrollView>
        </VStack>
    )
}