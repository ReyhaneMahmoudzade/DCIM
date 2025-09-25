import './HomeFeature.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function HomeFeature({ text1, text2, text4 }) {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {text1}
          </Typography>
          <Typography variant="h5" component="div">
            {text2}
          </Typography>
          <Typography variant="body2">
            {text4}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}






