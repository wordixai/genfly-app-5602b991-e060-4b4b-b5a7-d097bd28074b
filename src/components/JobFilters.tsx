import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { JobType, LocationFilter } from '@/types';
import { getUniqueLocations, getJobTypes } from '@/data/mockData';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface JobFiltersProps {
  onFilterChange: (filters: {
    search: string;
    location: LocationFilter;
    type: JobType | '';
  }) => void;
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState<LocationFilter>('');
  const [type, setType] = useState<JobType | ''>('');
  
  const locations = getUniqueLocations();
  const jobTypes = getJobTypes();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ search, location, type });
  };
  
  const handleReset = () => {
    setSearch('');
    setLocation('');
    setType('');
    onFilterChange({ search: '', location: '', type: '' });
  };
  
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="search">Search Jobs</Label>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Job title, company, or keywords"
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Any location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any location</SelectItem>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="type">Job Type</Label>
              <Select value={type} onValueChange={setType as (value: string) => void}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any type</SelectItem>
                  {jobTypes.map((jobType) => (
                    <SelectItem key={jobType} value={jobType}>
                      {jobType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">Apply Filters</Button>
            <Button type="button" variant="outline" onClick={handleReset}>Reset</Button>
          </div>
        </form>
      </div>
      
      {/* Mobile filters */}
      <div className="md:hidden">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="pl-8 pr-4"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                onFilterChange({ search: e.target.value, location, type });
              }}
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <FilterIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Jobs</SheetTitle>
                <SheetDescription>
                  Narrow down your job search with filters
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="mobile-location">Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="mobile-location">
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any location</SelectItem>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="mobile-type">Job Type</Label>
                  <Select value={type} onValueChange={setType as (value: string) => void}>
                    <SelectTrigger id="mobile-type">
                      <SelectValue placeholder="Any type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any type</SelectItem>
                      {jobTypes.map((jobType) => (
                        <SelectItem key={jobType} value={jobType}>
                          {jobType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    className="flex-1" 
                    onClick={() => onFilterChange({ search, location, type })}
                  >
                    Apply Filters
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}