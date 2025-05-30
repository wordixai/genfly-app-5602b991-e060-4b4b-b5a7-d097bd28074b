import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { JobCard } from '@/components/JobCard';
import { CompanyCard } from '@/components/CompanyCard';
import { jobs, companies, getJobsByCompany } from '@/data/mockData';
import { BriefcaseIcon, BuildingIcon, ArrowRightIcon } from 'lucide-react';

export default function HomePage() {
  const featuredJobs = jobs.slice(0, 4);
  const featuredCompanies = companies.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Your Dream Job Today
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Browse thousands of job listings from top companies and find the perfect role for your skills and experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/jobs">Browse Jobs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/post-job">Post a Job</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Job search"
                className="rounded-lg object-cover w-full max-w-md aspect-video"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured jobs section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5" />
                Featured Jobs
              </h2>
              <p className="text-muted-foreground">
                Explore our handpicked selection of top job opportunities
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link to="/jobs" className="flex items-center gap-1">
                View all jobs
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured companies section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <BuildingIcon className="h-5 w-5" />
                Featured Companies
              </h2>
              <p className="text-muted-foreground">
                Discover great places to work and advance your career
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link to="/companies" className="flex items-center gap-1">
                View all companies
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCompanies.map((company) => (
              <CompanyCard 
                key={company.id} 
                company={company} 
                jobCount={getJobsByCompany(company.id).length}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-primary p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to take the next step in your career?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of job seekers who have found their dream jobs through our platform. Start your job search today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/jobs">Find Jobs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link to="/post-job">For Employers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}