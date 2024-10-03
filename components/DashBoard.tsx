"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Map,
	Plus,
	Settings,
	LogOut,
	Bell,
	Search,
	AlertTriangle,
	Calendar,
} from "lucide-react";
import Navbar from "./Navbar";

export default function Dashboard() {
	const [classes, setClasses] = useState([
		{
			id: 1,
			name: "Mathematics 101",
			students: 30,
			lastActive: "2 hours ago",
		},
		{ id: 2, name: "History 202", students: 25, lastActive: "1 day ago" },
		{ id: 3, name: "Physics 301", students: 20, lastActive: "3 hours ago" },
	]);

	return (
		<div className='flex flex-col min-h-screen'>
		
			<main className='flex-1 py-6 px-4 lg:px-8'>
				<div className='flex justify-between items-center mb-6'>
					<h1 className='text-2xl font-bold'>Dashboard</h1>
					<div className='flex items-center gap-4'>
						<div className='relative'>
							<Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
							<Input placeholder='Search classes' className='pl-8' />
						</div>
						<Button>
							<Plus className='mr-2 h-4 w-4' /> Create Class
						</Button>
					</div>
				</div>
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6'>
					<Card>
						<CardHeader>
							<CardTitle>Classes</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className='space-y-4'>
								{classes.map((cls) => (
									<li
										key={cls.id}
										className='flex justify-between items-center'
									>
										<div>
											<p className='font-medium'>{cls.name}</p>
											<p className='text-sm text-muted-foreground'>
												{cls.students} students
											</p>
										</div>
										<p className='text-sm text-muted-foreground'>
											{cls.lastActive}
										</p>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center'>
								<Calendar className='mr-2 h-5 w-5 text-blue-500' />
								Monthly Attendance
							</CardTitle>
							<CardDescription>
								Attendance percentage by class
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</main>
			<footer className='py-6 px-4 lg:px-8 border-t'>
				<p className='text-center text-sm text-muted-foreground'>
					© 2024 AttendanceApp. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
