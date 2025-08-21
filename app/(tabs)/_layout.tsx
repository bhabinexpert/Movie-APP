
import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground, Image, } from 'react-native'
import { images } from '@/constants/images'
import { Text, View } from 'react-native'
import { icons } from '@/constants/icons'

const TabIcons = ({ focused, icons, title}: any)=>{
  if(focused){
  return(
   <ImageBackground
          source={images.highlight}
          className='flex flex-row w-full flex-1 min-w-[120px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'>
            <Image
            source = {icons}
            tintColor= "#151312" className='size-5'/>
            <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
          </ImageBackground>
  )}
  return(
    <View className='size-full w-full justify-center items-center mt-3 rounded-full'>
      <Image source ={icons} tintColor="#A8B5DB" className='size-5' />
    </View>
  )
}

const _Layout = () => {
  return (
   <Tabs
   screenOptions={{
    tabBarShowLabel: false,
    tabBarItemStyle :{
      width : "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    tabBarStyle:{
      backgroundColor : '#0f0D23',
      borderRadius : 50,
      marginHorizontal : 22,
      marginBottom: 38,
      height:46,
      position: 'absolute',
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: '#0f0d23',
      
    }
   }}
   >

    <Tabs.Screen
    name='index'
    options={{
        title: "Home",
        headerShown : false,
        tabBarIcon : ({focused})=>(
          <TabIcons
          focused = {focused}
          icons = {icons.home}
          title="Home"
          />
        )
    }}/>

    <Tabs.Screen
    name='search'
    options={{
        title: "Search",
        headerShown : false,
        tabBarIcon:({focused})=>(

          <TabIcons 
          focused = {focused}
          icons = {icons.search}
          title="Search"
          />

        )
    }}/>

    <Tabs.Screen
    name='saved'
    options={{
        title: "Saved",
        headerShown : false,
         tabBarIcon:({focused})=>(
          
          <TabIcons 
          focused = {focused}
          icons = {icons.save}
          title="Saved"
          />

        )
    }}/>

    <Tabs.Screen
    name='profile'
    options={{
        title: "Profile",
        headerShown : false,
         tabBarIcon:({focused})=>(
          
          <TabIcons 
          focused = {focused}
          icons = {icons.person}
          title="Profile"
          />

        )
    }}/>


    
   </Tabs>
  )
}

export default _Layout