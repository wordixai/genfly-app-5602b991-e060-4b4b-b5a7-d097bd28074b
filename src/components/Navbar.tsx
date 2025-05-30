import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BriefcaseIcon, BuildingIcon, HomeIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="font-bold">JobBoard</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-6">
            <Button asChild variant="link" className="text-sm font-medium">
              <Link to="/">
                <HomeIcon className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button asChild variant="link" className="text-sm font-medium">
              <Link to="/jobs">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                Jobs
              </Link>
            </Button>
            <Button asChild variant="link" className="text-sm font-medium">
              <Link to="/companies">
                <BuildingIcon className="h-4 w-4 mr-2" />
                Companies
              </Link>
            </Button>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild className="hidden md:flex">
            <Link to="/post-job">Post a Job</Link>
          </Button>
          
          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Button asChild variant="ghost" className="justify-start" onClick={() => setOpen(false)}>
                  <Link to="/">
                    <HomeIcon className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start" onClick={() => setOpen(false)}>
                  <Link to="/jobs">
                    <BriefcaseIcon className="h-4 w-4 mr-2" />
                    Jobs
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start" onClick={() => setOpen(false)}>
                  <Link to="/companies">
                    <BuildingIcon className="h-4 w-4 mr-2" />
                    Companies
                  </Link>
                </Button>
                <Button asChild className="mt-4" onClick={() => setOpen(false)}>
                  <Link to="/post-job">Post a Job</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}