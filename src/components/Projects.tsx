'use client';

import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import FuturisticBackground from './animated/FuturisticBackground';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
 
  {
    title: 'Sevak Army',
    description: 'Designed and developed the frontend of a live platform using ReactJS, creating responsive interfaces for Admin, NGO, Volunteer, Organization, Influencer, and School/College panels.Integrated APIs to manage operations,enable NGOs to create opportunities, and influencers, organizations,schools/collages to add volunteers ensuring seamless collaboration.',
    image: '/sevak-army.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://sevakarmy.com',
  },
  {
    title: 'Meganotify',
    description: 'Front End Devloper e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard. Features include user authentication, product search, and order tracking.',
    image: '/meganotify.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://meganotify.com',
  },
   {
    title: 'Groofly',
    description: 'Managed the Groofly Admin Panel, adding events,managing polls, handling subscriptions, and implementing features like community reports, SMTP management,and token expiration.',
    image: '/groofly.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://groofly.com',
  },
   {
    title: 'Crunchy Bite',
    description: 'Handled Next.js development for Crunchy Bite, incorporating animations and designing a fully responsive layout.',
    image: '/crunchy-bite.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://crunchy-bite.vercel.app/',
  },
   {
    title: 'Institute of Chartered Accountants of India',
    description: 'The Institute of Chartered Accountants of India (ICAI) developed a dynamic admin panel to manage events for students and members across various associations. Admins can add, update, and categorize events as upcoming, ongoing, or completed. All website data is managed through the panel, making the platform fully dynamic. The system also allows registration approvals, viewing participant details, and managing associations. It ensures smooth handling of all event-related activities from a centralized interface.',
    image: '/icai.png',
    technologies: ['Angular', 'TypeScript','PrimeNG','Responsive'],
    live: 'https://icaipune-admin.neuromonk.com/',
  },
   {
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js, Material-UI, and Framer Motion featuring smooth animations and responsive design.',
    image: '/porfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Material-UI', 'Framer Motion'],
    live: 'https://harshali-portfolio-xi.vercel.app/',
  },
  // {
  //   title: 'AI Task Manager',
  //   description: 'Smart task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide productivity insights. Includes natural language processing for task input.',
  //   image: '/images/taskmanager.jpg',
  //   technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'React'],
  //   github: 'https://github.com/yourusername/ai-taskmanager',
  //   live: 'https://your-taskmanager.com',
  // },
  // Add more projects as needed
];

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <FuturisticBackground variant="projects" />
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center" color="primary">
            Projects
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
            }}
          >
            Here are some of my recent projects that showcase my skills and experience
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: isDark 
                    ? 'rgba(26, 32, 39, 0.7)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: 1,
                  borderColor: isDark 
                    ? 'rgba(144, 202, 249, 0.2)'
                    : 'rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDark 
                      ? '0 4px 12px rgba(144, 202, 249, 0.2)'
                      : '0 4px 12px rgba(33, 150, 243, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottom: 1,
                    borderColor: isDark 
                      ? 'rgba(144, 202, 249, 0.2)'
                      : 'rgba(0, 0, 0, 0.1)',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom 
                    color="primary"
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{
                      mb: 2,
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                      textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        component={motion.div}
                        whileHover={{ y: -2, scale: 1.05 }}
                        sx={{
                          bgcolor: 'transparent',
                          color: isDark ? 'primary.light' : 'primary.main',
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          fontSize: '0.7rem',
                          transition: 'all 0.3s ease',
                          border: 1,
                          borderColor: isDark ? 'primary.light' : 'primary.main',
                          '&:hover': {
                            bgcolor: isDark ? 'primary.dark' : 'primary.light',
                            color: '#fff',
                            borderColor: 'transparent',
                          },
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: { xs: 1.5, sm: 2 }, pt: 0 }}>
                
                  <Button
                    component="a"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<BsGlobe />}
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ 
                      fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 