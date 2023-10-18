import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Container, Divider, ListItem, ListItemAvatar } from "@mui/material";
import { Column, ItemDescription, Price, Rating, Row, SecondaryText, StyledCircle } from "../../../components/RestaurantList/RestaurantItem/styles";

export const GostList = ():JSX.Element => {
    return (
        <Container maxWidth="sm">
        <ListItem sx={{gap:'1em'}}>
            <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56 }} src="" />
            </ListItemAvatar>
            <Column>
                <ItemDescription>
                    <span>Loading</span>
                </ItemDescription>           
                <Row>
                    <Rating>
                        <StarIcon fontSize="small" sx={{color: "#E9B824"}}/>
                        <span>Loading</span>
                    </Rating>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>Loading</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>Loading</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <Price>
                        <AttachMoneyIcon fontSize="small" sx={{color: "#17594A"}}/>
                        <span>Loading</span>
                    </Price>
                </Row>
            </Column>
               
        </ListItem>
        <ListItem sx={{gap:'1em'}}>
            <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56 }} src="" />
            </ListItemAvatar>
            <Column>
                <ItemDescription>
                    <span>Loading</span>
                </ItemDescription>           
                <Row>
                    <Rating>
                        <StarIcon fontSize="small" sx={{color: "#E9B824"}}/>
                        <span>Loading</span>
                    </Rating>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>Loading</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>Loading</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <Price>
                        <AttachMoneyIcon fontSize="small" sx={{color: "#17594A"}}/>
                        <span>Loading</span>
                    </Price>
                </Row>
            </Column>
        </ListItem>
        <ListItem sx={{gap:'1em'}}>
            <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56 }} src="" />
            </ListItemAvatar>
            <Column>
                <ItemDescription>
                    <span>Loading</span>
                </ItemDescription>           
                <Row>
                    <Rating>
                        <StarIcon fontSize="small" sx={{color: "#E9B824"}}/>
                        <span>Loading</span>
                    </Rating>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>Loading</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <SecondaryText>
                        <span>Loading</span>
                    </SecondaryText>
                    <StyledCircle/>
                    <Price>
                        <AttachMoneyIcon fontSize="small" sx={{color: "#17594A"}}/>
                        <span>Loading</span>
                    </Price>
                </Row>
            </Column>
        </ListItem>
        <Divider variant="inset" component="li" />
    </Container>
    )
}