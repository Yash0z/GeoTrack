import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeNav() {
	return (
		<nav className='inset-0 fixed h-20 z-10 bg-background border-b w-full'>
			<div className=' mx-auto px-4 sm:px-6 lg:px-8 w-full'>
				<div className='flex justify-around  h-16 w-full'>
					<div className='flex justify-between w-full relative'>
						<div className='flex-shrink-0 flex items-center'>
							<Link href='/' className='text-2xl font-bold text-primary'>
								GeoTrack
							</Link>
						</div>
						<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
							<Link
								href='#features'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground'
							>
								Features
							</Link>
							<Link
								href='#pricing'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground'
							>
								Pricing
							</Link>
							<Link
								href='#testimonials'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground'
							>
								Testimonials
							</Link>
							<Link
								href='#contact'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground'
							>
								Contact
							</Link>
							<div className='hidden sm:ml-6 sm:flex sm:items-center'>
								<Button>Get Started</Button>
							</div>
						</div>
					</div>

					<div className='flex items-center sm:hidden'>
						<Button
							variant='ghost'
							className='inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='block h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
