import { useParams, Link } from 'react-router-dom';
import { getCompanyById, getJobsByCompany } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { JobCard } from '@/components/JobCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPinIcon, CalendarIcon, UsersIcon, ExternalLinkIcon, ArrowLeftIcon, BuildingIcon } from 'lucide-react';

export default function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const company = getCompanyById(id || '');
  const companyJobs = company ? getJobsByCompany(company.id) : [];
  
  if (!company) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The company you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/companies">Browse All Companies</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-8 md:py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/companies" className="flex items-center gap-1">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Companies
        </Link>
      </Button>
      
      <div className="grid gap-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Avatar className="h-24 w-24 rounded-lg">
            <AvatarImage src={company.logo} alt={company.name} className="object-cover" />
            <AvatarFallback className="rounded-lg text-xl">{company.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold">{company.name}</h1>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPinIcon className="h-4 w-4" />
                  {company.location}
                </div>
              </div>
              
              <Button asChild variant="outline" className="md:self-start">
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLinkIcon className="h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline">{company.industry}</Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <UsersIcon className="h-3 w-3" />
                {company.size}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <CalendarIcon className="h-3 w-3" />
                Founded {company.founded}
              </Badge>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
          <p className="whitespace-pre-line">{company.description}</p>
        </div>
        
        <Separator />
        
        <div>
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BuildingIcon className="h-5 w-5" />
            Open Positions at {company.name}
          </h2>
          
          {companyJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {companyJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <h3 className="text-lg font-medium mb-2">No open positions</h3>
              <p className="text-muted-foreground mb-4">
                {company.name} doesn't have any job openings at the moment.
              </p>
              <Button asChild>
                <Link to="/jobs">Browse All Jobs</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}