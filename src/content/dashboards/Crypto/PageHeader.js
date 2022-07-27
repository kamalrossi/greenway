import { Typography, Avatar, Grid, useTheme } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Tomislav Ivan',
    avatar: '/static/images/avatars/face.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.name}!
        </Typography>
        <Typography variant="subtitle2">
          Have a good day!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
