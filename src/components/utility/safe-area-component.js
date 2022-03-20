import {  SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
flex:1px;
margin-top:${StatusBar.currentHeight}px;
`;