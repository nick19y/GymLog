import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import AddTraining from './Training';
import Profile from './Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exercises from '../Logged/Exercises';
import Training from './Training';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();


const screenOptions = {
    tabBarStyle:{
        backgrounfColor: '#00ff04',
        height: 65,
        padding: 8
    },
    tabBarLabelStyle:{
        marginBottom:10
    },
    tabBarActiveTintColor: '#00d435',
    tabBarInactiveTintColor: 'gray' 
}

const tabs: any=[
    {
        name: 'Home',
        component: Home,
        icon: 'home',
    },
    {
        name: 'Treinos',
        component: Training,
        icon: 'barbell-outline',
    },
    {
        name: 'Perfil',
        component: Profile,
        icon: 'person',
    }
]

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <HomeStack.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}


export default function BottomTabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((tab:any)=>(
            <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{headerShown:false, tabBarIcon:({color, size})=>(
                <Ionicons name={tab.icon} size={size} color={"#00d435"}/>)
            }}></Tab.Screen>
        ))}
        </Tab.Navigator>
    )
}