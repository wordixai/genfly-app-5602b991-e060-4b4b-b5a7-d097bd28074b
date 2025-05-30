import { useState, useEffect } from 'react';
import { JobCard } from '@/components/JobCard';
import { JobFilters } from '@/components/JobFilters';
import { jobs } from '@/data/mockData';
import { Job, JobType, LocationFilter } from '@/types';
import { Separator } from '@/components/ui/separator';
import { BriefcaseIcon } from 'lucide-react';

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState({
    search: '',
    location: '' as LocationFilter,
    type: '' as JobType | '',
  });
  
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      // Search filter
      const searchMatch = !filters.search || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());
      
      // Location filter
      const locationMatch = !filters.location || job.location === filters.location;
      
      // Job type filter
      const typeMatch = !filters.type || job.type === filters.type;
      
      return searchMatch && locationMatch && typeMatch;
    });
    
    setFilteredJobs(filtered);
  }, [filters]);
  
  const handleFilterChange = (newFilters: {
    search: string;
    location: LocationFilter;
    type: JobType | '';
  }) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <BriefcaseIcon className="h-6 w-6" />
          Browse Jobs
        </h1>
        <p className="text-muted-foreground">
          Find the perfect job opportunity for your skills and experience
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
        <div className="md:sticky md:top-20 md:self-start">
          <JobFilters onFilterChange={handleFilterChange} />
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredJobs.length}</span> jobs
            </p>
          </div>
          
          <Separator />
          
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No jobs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}