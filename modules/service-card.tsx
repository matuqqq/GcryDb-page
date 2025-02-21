import { Card, CardContent, CardActions, Typography, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  "& .MuiCardContent-root": {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    "& .MuiCardContent-root": {
      padding: theme.spacing(2),
    },
  },
}));

const StyledButton = styled(Button)({
  color: "#2f5241",
  borderColor: "#2f5241",
  "&:hover": {
    backgroundColor: "#2f5241",
    color: "#ffffff",
    borderColor: "#2f5241",
  },
});

interface ServiceCardProps {
  title: string;
  description: string;
  redirect: string;
}

export default function ServiceCard({ title, description, redirect }: ServiceCardProps) {
  return (
    <StyledCard elevation={2}>
      <CardContent>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
          <PushPinOutlinedIcon sx={{ color: "#2f5241" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: "#2f5241",
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            {title}
          </Typography>
        </div>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2, paddingTop: 0, justifyContent: 'center' }}>
        <a href={redirect} style={{ textDecoration: 'none' }}>
          <StyledButton 
            variant="outlined" 
            size="small"
            sx={{
              minWidth: { xs: '100px', sm: '120px' },
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
            }}
          >
            + INFO
          </StyledButton>
        </a>
      </CardActions>
    </StyledCard>
  );
}