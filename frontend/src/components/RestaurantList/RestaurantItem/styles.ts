import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

export const Row = styled("div")({
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '.5em',
    alignItems: 'center',
})

export const ItemDescription = styled('div')({
    span: {
        fontSize: '18px'

    },
})

export const Column = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1em'
})

export const Rating = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '.125em',
    alignItems: 'center',
    span: {
        color: "#E9B824",
        fontWeight:600,
    }
})

export const SecondaryText = styled('div')({
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    span: {
        fontSize: '15px',
        color: '#888888',
    }
})

export const StyledCircle = styled(CircleIcon)({
    fontSize: '.4em',
    color: '#888888',
})

export const Price = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    span: {
        color: "#17594A",
        fontWeight:600,
        marginLeft: '-3px'
    }
})

export const Distance = styled('div')({
    width: '7em'
})
