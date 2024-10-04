import Link from "next/link";
import { Map, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-gray-100 text-gray-900  py-8 font-ClashGrotex  text-xl'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<h3 className='font-bold flex items-center gap-2  mb-4'>
							<Map />
							GeoTrack
						</h3>
						<p className='text-sm'>
							Revolutionizing attendance tracking with geolocation
							technology.
						</p>
					</div>
					<div>
						<h4 className='font-semibold text-md mb-4'>Quick Links</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link href='/about' className='hover:text-gray-900'>
									About Us
								</Link>
							</li>
							<li>
								<Link href='/features' className='hover:text-gray-900'>
									Features
								</Link>
							</li>
							<li>
								<Link href='/pricing' className='hover:text-gray-900'>
									Pricing
								</Link>
							</li>
							<li>
								<Link href='/contact' className='hover:text-gray-900'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className='font-semibold text-md mb-4'>Legal</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link href='/privacy' className='hover:text-gray-900'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href='/terms' className='hover:text-gray-900'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href='/gdpr' className='hover:text-gray-900'>
									GDPR Compliance
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className='font-semibold text-md mb-4'>
							Connect With Us
						</h4>
						<div className='flex space-x-4'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-gray-900'
							>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-gray-900'
							>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</a>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-gray-900'
							>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-gray-900'
							>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 pt-8  border-t border-gray-200 text-sm text-center'>
					<p>
						&copy; {new Date().getFullYear()} GeoAttend. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
