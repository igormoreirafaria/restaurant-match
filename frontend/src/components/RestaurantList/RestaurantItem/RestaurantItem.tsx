import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Divider, ListItem, ListItemAvatar } from "@mui/material";
import Container from "@mui/material/Container";
import { Column, ItemDescription, Price, Rating, Row, SecondaryText, StyledCircle } from "./styles";
export interface RestaurantItemProps {
    name:string;
    customerRating:string;
    distance:string;
    price:string;
    cuisineName:string;
}


const RestaurantItem = ({
    name,
    customerRating,
    distance,
    price,
    cuisineName
}:RestaurantItemProps):JSX.Element => {
return (
    <Container maxWidth="sm">
        <ListItem sx={{gap:'1em'}}>
            <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56 }} src={`/images/${cuisineName}.jpg`} />
            </ListItemAvatar>
            <Column>
                <ItemDescription>
                    <span>{name}</span>
                </ItemDescription>           
                <Row>
                    <Rating>
                        <StarIcon fontSize="small" sx={{color: "#E9B824"}}/>
                        <span>{customerRating}</span>
                    </Rating>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>{cuisineName}</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>{distance} mi</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <Price>
                        <AttachMoneyIcon fontSize="small" sx={{color: "#17594A"}}/>
                        <span>{price}</span>
                    </Price>
                </Row>
            </Column>
               
        </ListItem>
        <Divider variant="inset" component="li" />
    </Container>
);}

export {
    RestaurantItem
};
