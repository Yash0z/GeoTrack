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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	ClipboardSignature,
	Plus,
	Settings,
	LogOut,
	Bell,
	Search,
	AlertTriangle,
	Calendar,
} from "lucide-react";
import Navbar from "./navigation";

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

	const [activities, setActivities] = useState([
		{
			id: 1,
			description: "John Doe marked attendance for Mathematics 101",
			time: "10 minutes ago",
		},
		{
			id: 2,
			description: "New student added to History 202",
			time: "1 hour ago",
		},
		{
			id: 3,
			description: "Attendance report generated for Physics 301",
			time: "2 hours ago",
		},
	]);

	const [defaulters, setDefaulters] = useState([
		{ id: 1, name: "Alice Johnson", class: "Mathematics 101", absences: 5 },
		{ id: 2, name: "Bob Smith", class: "History 202", absences: 4 },
		{ id: 3, name: "Charlie Brown", class: "Physics 301", absences: 6 },
	]);

	const [monthlyAttendance, setMonthlyAttendance] = useState([
		{ id: 1, class: "Mathematics 101", attendance: 92 },
		{ id: 2, class: "History 202", attendance: 88 },
		{ id: 3, class: "Physics 301", attendance: 95 },
	]);
	<Navbar />;
	return (
		<div className='flex flex-col min-h-screen'>
			<header className='px-4 lg:px-6 h-14 flex items-center border-b'>
				<Link className='flex items-center justify-center' href='#'>
					<ClipboardSignature className='h-6 w-6 mr-2' />
					<span className='font-bold'>AttendanceApp</span>
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
							<CardTitle>Recent Activity</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className='space-y-4'>
								{activities.map((activity) => (
									<li key={activity.id}>
										<p className='text-sm'>{activity.description}</p>
										<p className='text-xs text-muted-foreground'>
											{activity.time}
										</p>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Quick Actions</CardTitle>
						</CardHeader>
						<CardContent className='space-y-2'>
							<Button className='w-full justify-start'>
								<ClipboardSignature className='mr-2 h-4 w-4' /> Take
								Attendance
							</Button>
							<Button className='w-full justify-start'>
								<Plus className='mr-2 h-4 w-4' /> Add New Student
							</Button>
							<Button className='w-full justify-start'>
								<Settings className='mr-2 h-4 w-4' /> Manage Classes
							</Button>
						</CardContent>
					</Card>
				</div>
				<div className='grid gap-6 md:grid-cols-2'>
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center'>
								<AlertTriangle className='mr-2 h-5 w-5 text-yellow-500' />
								Defaulter List
							</CardTitle>
							<CardDescription>
								Students with high absenteeism
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Name</TableHead>
										<TableHead>Class</TableHead>
										<TableHead>Absences</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{defaulters.map((defaulter) => (
										<TableRow key={defaulter.id}>
											<TableCell>{defaulter.name}</TableCell>
											<TableCell>{defaulter.class}</TableCell>
											<TableCell>{defaulter.absences}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
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
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Class</TableHead>
										<TableHead>Attendance %</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{monthlyAttendance.map((item) => (
										<TableRow key={item.id}>
											<TableCell>{item.class}</TableCell>
											<TableCell>{item.attendance}%</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
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
