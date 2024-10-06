"use client";


import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
interface ClassFormProps {
	open: boolean;
	onFormOpen: (open: boolean) => void;
}
export default function ClassForm({ open, onFormOpen }: ClassFormProps) {

   const [polygonCoordinates, setPolygonCoordinates] = useState([]);


	const [mapOpen, setMapOpen] = useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [formData, setFormData] = useState({
		classname: "",
		description: "",
		latitude: "",
		longitude: "",
		reportingTime: "",
		exitingTime: "",
		classCode: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		onFormOpen(false);
		setFormData({
			classname: "",
			description: "",
			latitude: "",
			longitude: "",
			reportingTime: "",
			exitingTime: "",
			classCode: "",
		});
	};

	return (
		<div className='font-ClashGrotex'>
			<Dialog open={open} onOpenChange={onFormOpen}>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Create New Class</DialogTitle>
						<DialogDescription>
							Enter the details for the new class
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleSubmit}>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='classname' className='text-right'>
									Class Name
								</Label>
								<Input
									id='classname'
									name='classname'
									value={formData.classname}
									onChange={handleInputChange}
									className='col-span-3'
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='description' className='text-right'>
									Description
								</Label>
								<Input
									id='description'
									name='description'
									value={formData.description}
									onChange={handleInputChange}
									className='col-span-3'
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label className='text-right'>Location</Label>
								<Button
									type='button'
									onClick={() => setMapOpen(true)}
									className='col-span-3'
								>
									Select on Map
								</Button>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='reportingTime' className='text-right'>
									Reporting Time
								</Label>
								<Input
									id='reportingTime'
									name='reportingTime'
									type='time'
									value={formData.reportingTime}
									onChange={handleInputChange}
									className='col-span-3'
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='exitingTime' className='text-right'>
									Exiting Time
								</Label>
								<Input
									id='exitingTime'
									name='exitingTime'
									type='time'
									value={formData.exitingTime}
									onChange={handleInputChange}
									className='col-span-3'
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='classCode' className='text-right'>
									Class Code
								</Label>
								<Input
									id='classCode'
									name='classCode'
									value={formData.classCode}
									onChange={handleInputChange}
									className='col-span-3'
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type='submit'>Save Class</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
