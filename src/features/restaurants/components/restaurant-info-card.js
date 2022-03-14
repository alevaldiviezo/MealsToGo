import React from "react";
import styled from 'styled-components/native';
import {Text, View, Image} from 'react-native';

import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import {Spacer} from '../../../components/spacer/spacer.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard=styled(Card)`
    backgroundColor:${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding:${(props) => props.theme.space[3]};
    backgroundColor:${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color:${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding:${(props) => props.theme.space[3]};

`;


const Rating = styled.View`
    flex-direction:row;
    padding-top:${(props) => props.theme.space[2]};
    padding-bottom:${(props) => props.theme.space[2]};
`;

const Section = styled.View`
    flex-direction:row;
    align-items:center;

`;

const SectionEnd = styled.View`
    flex:1;
    flex-direction:row;
    justify-content: flex-end;
`;

export const RestaurantInfoCard = ({restaurant = {}}) =>{
    const{
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos=[
            'https://www.foodiesfeed.com/wp-content/uploads/2019/10/carving-halloween-pumpkin-683x1024.jpg.webp',
        ],
        address = '100 Main St',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    }=restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return(
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
            <Title>{name}</Title>
            <Section>
                <Rating>
                    {ratingArray.map(() => (
                    <SvgXml xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporarily && (
                        <Text variant='label' style={{color:'red'}}>
                            CLOSED TEMPORARILY
                        </Text>
                    )}
                    
                        <Spacer variant = 'left.large'/>
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                    
                
                        <Spacer variant = 'left.large'/>
                    <Image style={{width:15, height:15}} source={{uri: icon}}/>
                </SectionEnd>
            
            </Section>
            <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )

    
}