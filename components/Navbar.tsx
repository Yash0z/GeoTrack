"use client";
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
import { Map, Settings, LogOut, Bell, Check, CheckCheck } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useLogout } from "@/features/auth/auth";

export default function Navbar() {
	const { mutate } = useLogout();
	return (
		<>
			<header className='px-4 lg:px-6 h-16  font-Euclid flex items-center border-b'>
				<Link
					className='flex items-center justify-center'
					href='/dashboard'
				>
					<Map className='h-6 w-6 mr-2' />
					<span className='font-bold text-xl'>GeoTrack</span>
				</Link>
				<nav className='ml-auto flex items-center font-Euclid gap-2 sm:gap-2'>
					<Button variant='ghost' size='icon'>
						<Bell className='h-220 w-220' />
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='ghost'
								className='relative h-10 w-10 rounded-full'
							>
								<Avatar className='h-8 w-8'>
									<AvatarImage alt='@johndoe' />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='w-56 font-Euclid bg-background border border-primary z-10 text-md'
							align='end'
							forceMount
						>
							<DropdownMenuLabel className='font-normal'>
								{/* profile */}
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{/* logout */}
							<DropdownMenuItem>
								<Button
									onClick={() => mutate()}
									variant='ghost'
									size='sm'
									className='w-full pr-28 '
								>
									<span className='text-lg justify-center flex items-center gap-2'>
										<LogOut size={48} />
										Log out
									</span>
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>
			</header>
		</>
	);
}
