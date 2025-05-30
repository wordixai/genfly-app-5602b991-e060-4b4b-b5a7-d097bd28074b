import { Company } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPinIcon, UsersIcon, CalendarIcon, ExternalLinkIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CompanyCardProps {
  company: Company;
  jobCount?: number;
}

export function CompanyCard({ company, jobCount }: CompanyCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-14 w-14">
          <AvatarImage src={company.logo} alt={company.name} />
          <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{company.name}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPinIcon className="h-3 w-3" />
            {company.location}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {company.description}
        </p>
        {jobCount !== undefined && (
          <Badge variant="secondary">
            {jobCount} {jobCount === 1 ? 'job' : 'jobs'} available
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLinkIcon className="h-4 w-4" />
            Website
          </a>
        </Button>
        <Button asChild>
          <Link to={`/companies/${company.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}