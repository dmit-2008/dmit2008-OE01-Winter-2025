import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AdaptationReviewCard({rating, title, comment}) {

  return (
    <Card
      sx={{marginTop: 6}}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            {rating}
          </Avatar>
        }
        action={
          <IconButton
          >
            <DeleteIcon />
          </IconButton>
        }
        title={
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        }

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}