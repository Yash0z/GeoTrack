
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Map, Settings, LogOut, Bell } from "lucide-react";
import React from "react";
import { signOut } from "@/actions/auth.actions";
import { Button } from "./ui/button";
import UserProfile from "./Profile";

export default function Navbar() {
	return (
		<>
			<header className='px-4 lg:px-6 h-14 font-Euclid flex items-center border-b'>
				<Link className='flex items-center justify-center' href='#'>
					<Map className='h-6 w-6 mr-2' />
					<span className='font-bold'>GeoTrack</span>
				</Link>
				<nav className='ml-auto flex items-center font-Euclid gap-4 sm:gap-6'>
					<Button variant='ghost' size='icon'>
						<Bell className='h-5 w-5' />
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='ghost'
								className='relative h-8 w-8 rounded-full'
							>
								<Avatar className='h-8 w-8'>
									<AvatarImage  alt='@johndoe' />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='w-56 font-Euclid text-md'
							align='end'
							forceMount
						>
							<DropdownMenuLabel className='font-normal'>
								<UserProfile/>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<form action={signOut} className='w-full relative'>
									<Button
										variant='ghost'
										size='sm'
										className=' w-full pr-28 '
									>
										<Settings className=' pr-1 h-4 w ' />
										Settings
									</Button>
								</form>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<form action={signOut} className='w-full '>
									<Button
										variant='ghost'
										size='sm'
										className='w-full pr-28 '
									>
										<LogOut className='pr-1 h-4 w ' />
										Sign out
									</Button>
								</form>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>
			</header>
		</>
	);
}
