import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import Navbar from "@/components/navigation";
import React from "react";
import { SignUpForm } from "@/components/SignUpForm";
export default function Component() {
	return (
		<>
			{/* <Navbar/> */}
			<div className='flex  justify-center min-h-screen bg-background'>
				<div className='flex relative flex-col items-center  justify-center  md:p-16 lg:w-1/2'>
					<h1 className=' flex font-Satoshi absolute top-16  text-4xl gap-2  '>
						<Map size={40} />
						GeoTrack
					</h1>

					<h2 className='text-4xl text-text absolute text-center  top-40 font-Euclid text  mb-2'>
						Simplified Attendance Tracking
					</h2>

					{/* login card */}
					<div className='  w-[32rem] h-[33rem]  p-10 rounded-2xl'>
						{/* google oauth */}
						<Button className='font-Euclid w-full mb-2 bg-gray-200 text-text hover:bg-gray-100'>
							<svg
								className='w-5 h-5 mr-2'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
									fill='#4285F4'
								/>
								<path
									d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
									fill='#34A853'
								/>
								<path
									d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
									fill='#FBBC05'
								/>
								<path
									d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
									fill='#EA4335'
								/>
							</svg>
							Continue with Google
						</Button>

						<div className='font-Euclid text-center my-5 text-md'>OR</div>

						{/* signup form */}
						<SignUpForm />
						<h6 className=' text-center m-4 font-ClashGrotex'>
							<Link className='underline' href='/login'>
								Dont have an account?
							</Link>
						</h6>
						{/* terms */}
						<p className='font-Euclid text-xs mt-8 text-center text-gray-500'>
							By continuing, you agree to Geotrack's{" "}
							<Link className='underline' href='#'>
								Consumer Terms
							</Link>{" "}
							and{" "}
							<Link className='underline' href='#'>
								Usage Policy
							</Link>
							, and acknowledge their{" "}
							<Link className='underline' href='#'>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>

				<div className='hidden lg:flex lg:w-1/2 relative  rounded-2xl bg-accent h-[60rem] items-center justify-center p-8'>
					{/* Carousel */}
				</div>
			</div>
		</>
	);
}
