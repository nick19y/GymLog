import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/BottomTabs/Home";
import Login from "./screens/Login";
import BottomTabs from "./screens/BottomTabs";
import TrainingOn from "./screens/Logged/TrainingOn";
import TrainingPreparation from "./screens/Logged/TrainingPreparation";
import CreateAccount from "./screens/CreateAccount";
import Exercises from "./screens/Logged/Exercises";
import CreateExercise from "./screens/Logged/CreateExercise";
import AddTraining from "./screens/Logged/AddTraining";

const Tab = createNativeStackNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="TrainingPreparation" component={TrainingPreparation} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="TrainingOn" component={TrainingOn} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="Exercises" component={Exercises} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="CreateExercise" component={CreateExercise} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="AddTraining" component={AddTraining} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="BottomTabs" component={BottomTabs} options={{headerShown:false}}></Tab.Screen>
        </Tab.Navigator>
    )
}