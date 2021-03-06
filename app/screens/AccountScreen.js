import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparatorComponent from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems = [
    {
        title:"My Listings",
        icon:{
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title:"My Messages",
        icon:{
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

const AccountScreen = (props) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Mohamed"
                    subTitle="naroto102hn2@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItems=>menuItems.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item})=>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                        />    
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }
            />
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})
