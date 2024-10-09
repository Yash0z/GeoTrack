import { useEffect, useState } from "react";
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
} from "@/components/ui/dialog";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { CreateClassSchema } from "@/types";
import { LocateFixed } from "lucide-react";
import getUser from "@/hooks/getUser";
// Props for the class form
interface CreateClassProps {
	open: boolean;
	onFormOpen: (open: boolean) => void;
}

export default function CreateClass({ open, onFormOpen }: CreateClassProps) {
	const [mapOpen, setMapOpen] = useState(false); // State to control the map modal
	useEffect(() => {
		if (mapOpen) {
			setMapOpen(true);
		}
	}, [mapOpen]);

	// 1. Define your form.
	const form = useForm<z.infer<typeof CreateClassSchema>>({
		resolver: zodResolver(CreateClassSchema),
		defaultValues: {
			classname: "",
			description: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof CreateClassSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className='font-ClashGrotex flex items-center '>
			{/* form dial */}
			<Dialog open={open} onOpenChange={onFormOpen}>
				<DialogContent className='sm:max-w-[625px] '>
					<DialogHeader>
						<DialogTitle className=' text-2xl  font-Euclid '>
							Create New Class
						</DialogTitle>
					</DialogHeader>
					{/* zod form */}
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-8 relative '
						>
							<FormField
								control={form.control}
								name='classname'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='font-ClashGrotex text-xl'>
											Classname
										</FormLabel>
										<FormControl>
											<Input
												placeholder='enter class name'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='description'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='font-ClashGrotex text-xl'>
											Description
										</FormLabel>
										<FormControl>
											<Input
												placeholder='enter description'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* map selector */}
							<div className='flex items-center  gap-5'>
								<Label className='font-ClashGrotex text-xl '>
									Location
								</Label>
								<Button
									variant='outline'
									onClick={() => {
										setMapOpen(true);
									}}
									className='w-60 p-3 font-ClashGrotex text-lg'
								>
									<LocateFixed />
									<span className='m-2 text-lg'>Select on map</span>
								</Button>
							</div>

							<div className='relative w-full'>
								<Button
									type='submit'
									className='w-full font-ClashGrotex text-lg'
								>
									Save Class
								</Button>
							</div>
						</form>
					</Form>
				</DialogContent>
			</Dialog>

			{/* Map Dialog for selecting the location */}
			{mapOpen && (
				<Dialog open={mapOpen} onOpenChange={setMapOpen}>
					<DialogContent className='border-4  max-w-full h-full p-0'>
						<DialogTitle className='hidden p-0 m-0'></DialogTitle>
						{/* geofence map */}
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
}
