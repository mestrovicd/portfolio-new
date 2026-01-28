import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  experiences = [
    {
      company: 'Xtreme Software Solutions d.o.o.',
      position: 'Mid-Level Frontend Developer',
      period: '2023 - Present',
      description: 'Frontend development, code reviews & optimization, team collaboration, planning sprints, and mentoring junior developers',
      skills: ['Angular', 'RxJS', 'TypeScript', 'Code Reviews', 'Azure DevOps']
    },
    {
      company: 'CMG Digital',
      position: 'CMS Web Editor / Developer',
      period: '2021 - 2023',
      description: '3 years working with various CMS systems including AEM, Webflow, and WordPress as an editor & frontend developer',
      skills: ['AEM', 'Webflow', 'WordPress', 'JavaScript', 'Jira', 'Confluence']
    }
  ];

  skills = [
    { category: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'SCSS', 'HTML5', 'CSS3', 'RxJS'] },
    { category: 'Tools & Libraries', items: ['jQuery', 'Git', 'Webpack', 'REST APIs', 'npm'] },
    { category: 'CMS', items: ['Adobe AEM', 'Webflow', 'WordPress'] },
    { category: 'Soft Skills', items: ['Code Review', 'Team Collaboration', 'Problem Solving', 'Communication'] }
  ];
}
