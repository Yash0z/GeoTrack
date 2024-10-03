"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export default function Navbar() {
	return (
		<>
			<header className='px-4 lg:px-6 h-14 flex items-center border-b'>
				<Link className='flex items-center justify-center' href='#'>
					<Map className='h-6 w-6 mr-2' />
					<span className='font-bold'>GeoTrack</span>
				</Link>
				<nav className='ml-auto flex items-center gap-4 sm:gap-6'>
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
									<AvatarImage src='/avatars/01.png' alt='@johndoe' />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-56' align='end' forceMount>
							<DropdownMenuLabel className='font-normal'>
								<div className='flex flex-col space-y-1'>
									<p className='text-sm font-medium leading-none'>
										John Doe
									</p>
									<p className='text-xs leading-none text-muted-foreground'>
										john@example.com
									</p>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Settings className='mr-2 h-4 w-4' />
								<span>Settings</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<LogOut className='mr-2 h-4 w-4' />
								<span>Log out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>
			</header>
		</>
	);
}
