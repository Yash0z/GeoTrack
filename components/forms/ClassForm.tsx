import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClassSchema } from "@/types";
import { Map } from "../map/map";
import { LatLng } from "leaflet";
import { LocateFixed, MapPin } from "lucide-react";

export default function ClassForm({ trigger }: { trigger: ReactNode }) {
	// map coordinates
	const [coordinates, setCoordinates] = useState<
		LatLng | LatLng[] | LatLng[][] | LatLng[][][]
	>([]);
	const [isMapOpen, setIsMapOpen] = useState(false);

	// dialog state
	const closeMapDialog = () => {
		setIsMapOpen(false);
	};

	// Form validation
	const form = useForm<z.infer<typeof ClassSchema>>({
		resolver: zodResolver(ClassSchema),
		defaultValues: {
			classname: "",
			description: "",
		},
	});

	async function onSubmit(values: z.infer<typeof ClassSchema>) {
		console.log(values);
		console.log(coordinates);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-2xl font-Euclid text-primary'>
						Create Class
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-5'
					>
						{/* classname */}
						<FormField
							control={form.control}
							name='classname'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-ClashGrotex text-xl text-primary'>
										Classname
									</FormLabel>
									<FormControl>
										<Input
											className='h-12 text-lg '
											placeholder='your@classname'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* description */}
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-ClashGrotex text-xl text-primary'>
										Description
									</FormLabel>
									<FormControl>
										<Input
											className='h-12 text-lg '
											placeholder='your@description'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Map Dialog */}
						<div>
							<Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
								<h1 className='text-xl font-ClashGrotex mb-4 text-primary'>
									Create Geofence
								</h1>
								<DialogTrigger asChild>
									<Button
										variant='outline'
										className=' font-ClashGrotex text-lg hover:bg-hover1 p-5'
									>
										<MapPin />
										Open Map
									</Button>
								</DialogTrigger>
								<DialogTitle></DialogTitle>
								<DialogContent className='max-w-[90%] max-h-[90%] h-screen w-screen   m-0 p-0'>
									<Map
										closeDialog={closeMapDialog}
										setMapCoordinates={setCoordinates}
									/>
								</DialogContent>
							</Dialog>
						</div>
						{/* submit */}
						<div className='relative w-full'>
							<Button
								type='submit'
								className='w-full p-5 bg-secondary border-primary border font-ClashGrotex text-xl hover:bg-hover2'
							>
								Save Class
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
