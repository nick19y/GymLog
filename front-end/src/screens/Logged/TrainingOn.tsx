import { CustomButtom } from "@/src/components/CustomButton";
import { InputText } from "@/src/components/InputText";
import { Title } from "@/src/components/Title";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Input, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Image, Modal, TextInput, TouchableOpacity, View } from "react-native";

export default function TrainingOn(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [pauseTime, setPauseTime] = useState(60);
    const [currentExercise, setCurrentExercise] = useState(0);

    const exercises = ["Supino Reto", "Agachamento", "Flexão"];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        let pauseInterval:any;
        if (isPaused && pauseTime > 0) {
            pauseInterval = setInterval(() => {
                setPauseTime((prev) => prev - 1);
            }, 1000);
        } else if (pauseTime === 0) {
            setIsPaused(false);
            setPauseTime(10);
        }
        return () => clearInterval(pauseInterval);
    }, [isPaused, pauseTime]);

    const handlePlayPress = () => {
        setIsModalVisible(true);
    };

    const handleStopPress = () => {
        setIsModalVisible(false);
        setIsPaused(true);
    };

    const handleNextExercise = () => {
        setCurrentExercise((prev) => (prev + 1) % exercises.length);
        setIsModalVisible(false);
        setIsPaused(false);
        setPauseTime(10);
    };
    
    return(
        <VStack flex={1}>
            <VStack alignItems={"center"} mt={50}>
                <Title text={exercises[currentExercise]}/>
                <Text mb={2}>Série 1</Text>
                {isPaused ? (
                    <Text fontSize="lg" color="red">{`Pausa: ${pauseTime}s`}</Text>
                ) : (
                    <TouchableOpacity onPress={handlePlayPress}>
                        <Ionicons name="play" size={90} color="#00d435" />
                    </TouchableOpacity>
                )}
                <VStack my={"8"}>
                    <Text mb={2} ml={1}>Carga:</Text>
                    <Input paddingX={4} placeholder={"Carga"}size="lg" width={"80%"} keyboardType="number-pad" value={`${10} Kg`}/>
                </VStack>
                <VStack mb={10}>
                    <Text mb={2} ml={1}>Repetições:</Text>
                    <Input paddingX={4} placeholder={"Repetições"}size="lg" width={"80%"} keyboardType="number-pad" value="12"/>
                </VStack>
                <CustomButtom title="Finalizar Exercício" color="#00d435"/>
                <Button w={"75%"} mt={5} _pressed={{bg:'black'}} borderRadius={"lg"} onPress={handleNextExercise} bg={"gray.400"}>Próximo exercício</Button>
            </VStack>
            <Text alignSelf={"center"} mt={10}>{time}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style={{
                        width: '80%',
                        padding: 20,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        alignItems: 'center'
                    }}>
                        <Text fontSize="lg" mb={4}>Exercício em andamento</Text>
                        <TouchableOpacity onPress={handleStopPress}>
                            <Ionicons name="stop" size={90} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNextExercise} style={{ marginTop: 20 }}>
                            <Text style={{ color: "#00d435", fontSize: 18 }}>Próximo Exercício</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </VStack>
    )
}
