import { HomeRounded } from '@mui/icons-material';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { StackedIconButton } from '../components/StackedIconButton.component';
import { useRouter } from 'next/router';

export default function SomethingWentWrong() {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Paper
        elevation={2}
        sx={{
          boxShadow: 'none',
          border: 'none',
          width: 'auto',
          maxWidth: { xs: '90%', md: '450px' },
          px: 3,
          py: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h1">Ooops!</Typography>
        <Typography variant="h2" sx={{ mt: 1.5 }}>
          HTTP 500
        </Typography>

        <Typography sx={{ my: 1 }}>Something on our side went wrong...</Typography>

        <Grid container spacing={1} sx={{ width: '60%', mx: 'auto', justifyContent: 'center' }}>
          <Grid item xs={6}>
            <StackedIconButton
              size="large"
              startIcon={<HomeRounded />}
              sx={{ width: '100%', mt: 1 }}
              onClick={() => router.push('/')}
            >
              Home
            </StackedIconButton>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
