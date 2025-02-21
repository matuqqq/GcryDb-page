import { Container, Grid } from "@mui/material"
import ServiceCard from "./service-card"
import { styled } from "@mui/material/styles"

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
}));

const services = [
  {
    "title": "Accidentes de Tránsito",
    "description": "Si tuviste un accidente de tránsito, tenés derecho al cobro de una indemnización que repare íntegramente TODOS los daños ocasionados (daños materiales, físicos, gastos realizados, daño moral, lucro cesante y otros). Para esto tenés un plazo de tres años, pero es conveniente que inicies los trámites INMEDIATAMENTE para no perder pruebas y que lo hagas SIEMPRE con el asesoramiento de un ABOGADO.",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Sucesiones",
    "description": "Es muy común la consulta respecto a las 'sucesiones de UN BIEN' y es importante destacar que la sucesión se realiza sobre la persona fallecida y de esta manera transmite TODOS sus derechos y bienes a sus herederos declarados en el expediente sucesorio.",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Derecho de Familia",
    "description": "En el campo de derecho de familia hay muchas áreas en las que se puede requerir el asesoramiento de un abogado especializado y de confianza. Es importante destacar que las socias de este Estudio Jurídico son mediadoras experimentadas y con su ayuda es...",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Accidentes de Trabajo (A.R.T)",
    "description": "Si sufriste un accidente en tu trabajo o en camino a tu lugar de trabajo o si padeces una enfermedad causada por tu labor podemos ayudarte a reclamar ante tu ART las prestaciones que te corresponden como así también tu indemnización.",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Derechos del Trabajo",
    "description": "Si fuiste despedido, o crees que pronto van a hacerlo, no pierdas tiempo y comunícate con nosotros para asesorarte y reclamar tus derechos. Es importante que envíes un telegrama laboral antes de que se rompa el contrato de trabajo para reclamar la...",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Desalojos",
    "description": "Si sos el propietario de un inmueble y el mismo ha sido ocupado, usurpado, o tus inquilinos no se fueron una vez vencido el contrato de alquiler, tenés derecho a que un Juez emita una orden de desalojo ANTICIPADO y que esas personas abandonen el...",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Jubilaciones, Pensiones, Reajustes y otras Prestaciones de Seguridad Social",
    "description": "Si llegaste a la edad jubilatoria, reúnas o no la cantidad de aportes requeridos (30 años), podemos iniciar ante Anses la solicitud de tu beneficio jubilatorio. Como así también el reajuste de tu haber jubilatorio. También consultanos para gestionar pensiones por fallecimiento, discapacidad, etc.",
    "redirect": {
      "url": "https://www.google.com"
    }
  },
  {
    "title": "Contratos",
    "description": "Con nuestra experiencia legal y aptitudes de negociación adquiridas en nuestros años como mediadoras, podemos ayudar a negociar y confeccionar el contrato que requieras ya sea para dirimir un conflicto o para prevenirlo.",
    "redirect": {
      "url": "https://www.google.com"
    }
  }
]

export default function ServiceGrid() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
      className="animate-on-scroll"
    >
      <StyledContainer maxWidth="lg">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                redirect={service.redirect.url} 
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </div>
  )
}