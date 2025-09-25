import './Home.css'
import HomeFeature from "../../components/homeFeature/HomeFeature"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chart from '../../components/chart/Chart';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item><HomeFeature
                        text1='Summary'
                        text2='5'
                        text4='total'
                    /></Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item><HomeFeature
                        text1='Datacenters'
                        text2='3'
                        text4='sample text'
                    /></Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item><HomeFeature
                        text1='Racks'
                        text2='2'
                        text4='sample text'
                    /></Item>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                    <div style={{ width: '100%', height: 400, marginTop: 30 }}>
                        <Chart />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}








