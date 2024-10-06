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
import CreateClass from "./CreateClass";

export default function Dashboard() {
	const [isformOpen, setFormOpen] = useState(false);
	return (
		<div className='flex flex-col min-h-screen'>
			{/* dashboard */}
			<main className='flex-1 py-6 px-4 lg:px-8 font-ClashGrotex'>
				{/* heading bar */}
				<div className='flex justify-between items-center mb-6 '>
					<h1 className='text-2xl font-bold'>Dashboard</h1>
					<div className='flex items-center gap-4'>
						<div className='relative'>
							<Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
							<Input placeholder='Search classes' className='pl-8' />
						</div>
						<Button onClick={() => setFormOpen(true)}>
							<Plus className='mr-2 h-4 w-4' /> Create Class
						</Button>
					</div>
				</div>
				<CreateClass open={isformOpen} onFormOpen={setFormOpen} />
				{/* Classes */}
			</main>
		</div>
	);
}
