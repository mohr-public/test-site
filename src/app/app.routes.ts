import { Routes } from '@angular/router';
import { PageHome } from './pages/page-home/page-home';
import { PageAboutUs } from './pages/page-about-us/page-about-us';
import { PageAboutMe } from './pages/page-about-me/page-about-me';
import { PageBlogStandard } from './pages/page-blog-standard/page-blog-standard';
import { PageBlogSingle } from './pages/page-blog-single/page-blog-single';
import { PagePortfolioFour } from './pages/page-portfolio-four/page-portfolio-four';
import { PagePortfolioThree } from './pages/page-portfolio-three/page-portfolio-three';
import { PagePortfolioTwo } from './pages/page-portfolio-two/page-portfolio-two';
import { PagePortfolioSingle } from './pages/page-portfolio-single/page-portfolio-single';
import { PageJob } from './pages/page-job/page-job';
import { PageClients } from './pages/page-clients/page-clients';
import { PageFaq } from './pages/page-faq/page-faq';
import { PageTypography } from './pages/page-typography/page-typography';
import { PageContact } from './pages/page-contact/page-contact';

export const routes: Routes = [
  {
    path: '', pathMatch:"full", children: [
      { path: '', component: PageHome, pathMatch: 'full' },
      { path: 'edit/:id', component: PageHome }
    ]
  },
  { path: 'acerca-de-nosotros', component: PageAboutUs },
  { path: 'acerca-de-mi', component: PageAboutMe },
  { path: 'blog-standard', component: PageBlogStandard },
  { path: 'blog-single', component: PageBlogSingle },
  { path: 'portfolio-four', component: PagePortfolioFour },
  { path: 'portfolio-three', component: PagePortfolioThree },
  { path: 'portfolio-two', component: PagePortfolioTwo },
  { path: 'portfolio-single', component: PagePortfolioSingle },

  { path: 'job', component: PageJob },
  { path: 'clients', component: PageClients },
  { path: 'faq', component: PageFaq },
  { path: 'typography', component: PageTypography },
  { path: 'contact', component: PageContact }
];
