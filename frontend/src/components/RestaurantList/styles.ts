import { Container, List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledList = styled(List)({
    border: '1px solid #cecece',
    borderRadius: '6px',
    boxShadow: '2px 2px 5px #888888'
})

export const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5em',
    alignSelf: 'center',
    gap: '1em',
    width: '100vw'
})