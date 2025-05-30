import { useParams, Link } from 'react-router-dom';
import { getJobById, getCompanyById } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, MapPinIcon, BuildingIcon, ExternalLinkIcon, ArrowLeftIcon, BriefcaseIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = getJobById(id || '');
  const company = job ? getCompanyById(job.companyId) : undefined;
  
  if (!job || !company) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The job you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/jobs">Browse All Jobs</Link>
        </Button>
      </div>
    );
  }
  
  const postedDate = new Date(job.postedDate);
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });
  
  return (
    <div className="container py-8 md:py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/jobs" className="flex items-center gap-1">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Jobs
        </Link>
      </Button>
      
      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={job.logo} alt={job.company} />
              <AvatarFallback>{job.company.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <div className="flex items-center gap-1 text-muted-foreground">
                <BuildingIcon className="h-4 w-4" />
                <Link to={`/companies/${company.id}`} className="hover:underline">
                  {job.company}
                </Link>
                <span>•</span>
                <MapPinIcon className="h-4 w-4" />
                {job.location}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="outline">{job.salary}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              Posted {timeAgo}
            </Badge>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="whitespace-pre-line mb-6">{job.description}</p>
            
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="space-y-2 mb-6">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <Button size="lg" className="w-full md:w-auto">Apply Now</Button>
          </div>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Learn more about {company.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={company.logo} alt={company.name} />
                  <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">{company.industry}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{company.size}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>Founded {company.founded}</span>
                </div>
              </div>
              
              <Separator />
              
              <p className="text-sm line-clamp-4">{company.description}</p>
              
              <div className="flex gap-3 pt-2">
                <Button variant="outline" asChild className="flex-1">
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <ExternalLinkIcon className="h-4 w-4" />
                    Website
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <Link to={`/companies/${company.id}`}>View Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}