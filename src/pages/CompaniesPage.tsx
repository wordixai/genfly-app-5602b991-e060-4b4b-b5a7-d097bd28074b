import { useState } from 'react';
import { CompanyCard } from '@/components/CompanyCard';
import { companies, getJobsByCompany } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { BuildingIcon, SearchIcon, Leaf } from 'lucide-react';

export default function CompaniesPage() {
  const [search, setSearch] = useState('');
  
  const filteredCompanies = companies.filter((company) => 
    company.name.toLowerCase().includes(search.toLowerCase()) ||
    company.industry.toLowerCase().includes(search.toLowerCase()) ||
    company.location.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary w-fit">
          <Leaf className="mr-1 h-3 w-3" />
          Explore employers
        </div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <BuildingIcon className="h-6 w-6 text-primary" />
          Browse Companies
        </h1>
        <p className="text-muted-foreground">
          Discover great places to work and advance your career
        </p>
      </div>
      
      <div className="max-w-md mx-auto md:mx-0 mb-8">
        <div className="grid gap-2">
          <Label htmlFor="search">Search Companies</Label>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Company name, industry, or location"
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <Separator className="mb-8" />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <CompanyCard 
              key={company.id} 
              company={company} 
              jobCount={getJobsByCompany(company.id).length}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2">No companies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}