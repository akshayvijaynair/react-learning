import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";

type Props = {
    image: string,
    title:string
}

export default function LlmCard({image, title}:Props) {

    const onClickShare = (): void =>{
        setCount(count+1);
    }

    const onClickLearn = () : void => {
        console.log("We Learning");
    }

    const[count, setCount] = useState(0);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 240 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {count}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickShare}>Share</Button>
                <Button size="small" onClick={onClickLearn}>Learn More</Button>
            </CardActions>
        </Card>
    );
}