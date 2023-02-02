import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CreatePoll } from 'app/features/poll/create'
import { HomeScreen } from '../../features/home/screen'

const Stack = createNativeStackNavigator<{
  home: undefined,
  'create-poll': undefined,
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="create-poll"
        component={CreatePoll}
        options={{
          title: 'Create Poll',
        }}
      />
    </Stack.Navigator>
  )
}
