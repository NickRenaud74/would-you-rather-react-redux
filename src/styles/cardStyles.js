import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        margin: '1rem',
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    avatar: {
        margin: 'auto',
        width: '140px',
        height: '140px'
    },
    avatarBox: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        width: '-webkit-fill-available',
        '&:hover': {
            backgroundColor: `${theme.palette.secondary.dark} !important`,
        }
    },
    form: {
        margin: '1rem',
        textAlign: 'center'
    },
    paper: {
        padding: '1rem',
        margin: `1rem`,
        textAlign: 'center',
        border: `2px solid ${theme.palette.secondary.dark}`
    },
    bar: {
        height: '1.5rem',
        margin: '10px'
    },
    badge: {
        padding: '8px',
    },
    vote: {
        backgroundColor: '#b8ffef'
    }
}))
