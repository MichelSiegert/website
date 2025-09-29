import Entry from '../Entry/Entry.tsx';

function Timeline() {
  return (
    <div
      style={{ marginLeft: '10%', marginTop: '10%' }}
    >
      <div style={{ marginLeft: '40px', marginBottom: '20px' }}> My Career:</div>
      <Entry
        upper="Fullstack Developer / DWC-Consulting"
        lower="Javascript, Typescript, Docker, Kubernetes,  Swagger,  Jest, Bigquery, React, Google Cloud, Cloud functions, Cloud Run, Postgres, Mysql, MSSQL, Devops, Bitbucket pipelines. Jira/Confluence for tickets/Documentation."
        date="Currently - Feb 2024"
      />
      <Entry
        upper="Fullstack Developer / Marktbox GmbH"
        lower="Javascript, Typescript, Docker, Jest, Angular, ngrx, Azure Cloud, oAuth2 via Microsoft Identity"
        date="Jan 2024 - Jul 2023 "
      />
      <Entry
        upper="Fullstack Developer / Crossnative"
        lower="Javascript, Typescript, Docker, Kubernetes, Helm, Jest, JUnit, Cypress, Oauth, Swagger,ngrx, Hibernate, Spring boot, MYsql, Jira, Confluence, Bitbucket, Angular, ORM"
        date="Jun 2023 - Jan 2023"
      />
      <Entry
        upper="Java Developer / PAYONE"
        lower="Java, Spring, Javascript, Jira, Confluence"
        date="Dez 2021 - Aug 2021"
      />
      <Entry
        upper="Test Engineer / HAW Kiel"
        lower="Jest, Java, Kotlin, Cypress, Docker"
        date="Aug 2021 - Mar 2021"
      />
      <Entry
        upper="Bachelor Degree Computer Science"
        lower="Computer Sciecne At the University of Applied Sciences Kiel"
        date="Jan 2024 - Mar 2019"
        color="#df3377"
      />
      <Entry
        upper="Test Developer / EDEKA NORD MBH "
        date="Jul 2019 - Aug 2018"
        lower="Reproducing testcases and writing scripts using their own scripting library (now deprecated). "
      />
      <Entry
        upper="Apprenticeship IT Assistant "
        date="Aug 2016 - Jul 2018"
        lower="at the Theodor Litt School.
                TCP, HTML, Css, Js, Visual Basic, Assembly "
        color="#df3377"
      />
      <Entry
        upper="Life Guard / Kieler Bäder"
        date="Aug 2013 - Jul 2016"
        lower=""
        color="#7787cb"
      />
    </div>
  );
}

export default Timeline;
