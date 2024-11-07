import Entry from "../Entry/Entry";

const Timeline = ()=>{
    
    return(
    <div>
        <Entry 
            upper="Javascript Developer / DWC-Consulting" 
            lower="Javascript, Typescript, Docker, Kubernetes,  Swagger,  Jest, Bigquery, React, Google Cloud, Cloud functions, Cloud Run, Postgres, Mysql, MSSQL, Devops, Bitbucket pipelines. Jira/Confluence for tickets/Documentation." 
            date="Feb 2024- Current"
        />
        <Entry
                    upper="Fullstack Developer / Marktbox GmbH" 
                    lower="Javascript, Typescript, Docker, Jest, Angular, ngrx, Azure Cloud, oAuth2 via Microsoft Identity" 
                    date="Jul 2023 - Jan 2024"
        />
        <Entry/>
        <Entry/>
        <Entry/>
    </div>)
}

export default Timeline;