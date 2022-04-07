import React from "react";

import { SvgXml } from "react-native-svg";
import {Spacer} from '../../../components/spacer/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {Icon, RestaurantCard, RestaurantCardCover,Address, Info, Rating, Section, SectionEnd} from './restaurant-info-card.styles';
import { Favourite } from "../../../components/favourites/favourite.component";
import star from '../../../../assets/star';
import open from '../../../../assets/open';


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
        placeId
    }=restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return(
        <RestaurantCard elevation={5} >
            <Favourite restaurant={restaurant}/>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
            <Text variant='label'>{name}</Text>
            <Section>
                <Rating>
                    {ratingArray.map((_,i) => (
                    <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporarily && (
                        <Text variant='error'>
                            CLOSED TEMPORARILY
                        </Text>
                    )}
                    
                        <Spacer position='left' size='large'>
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                
                        <Spacer position='left' size='large'>
                        <Icon style={{width:15, height:15}} source={{uri: icon}}/>
                        </Spacer>
                </SectionEnd>
            
            </Section>
            <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )

    
}