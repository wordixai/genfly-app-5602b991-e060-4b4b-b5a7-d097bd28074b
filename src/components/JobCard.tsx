import { Job } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, BuildingIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const postedDate = new Date(job.postedDate);
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <Link to={`/jobs/${job.id}`} className="block">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={job.logo} alt={job.company} />
            <AvatarFallback>{job.company.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <BuildingIcon className="h-3 w-3" />
              {job.company}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPinIcon className="h-3 w-3" />
              {job.location}
            </Badge>
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="outline">{job.salary}</Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.description}
          </p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex items-center gap-1">
          <CalendarIcon className="h-3 w-3" />
          Posted {timeAgo}
        </CardFooter>
      </Link>
    </Card>
  );
}