import { Button } from "@/components/ui/button";
import { CircleFadingPlus, UserPlus } from "lucide-react";

export default function Dashboard() {
	return (
		<>
			<div className='flex flex-col gap-5 sm:flex-row  p-5 sm:items-center sm:justify-between mb-5 '>
				<span className='text-5xl text-muted font-Satoshi_B'>
					Hello, User
				</span>
				<div className='flex gap-2'>
					<Button variant='outline' className='text-lg hover:bg-hover1'>
						<UserPlus />
						Join Class
					</Button>
					<Button
               
						variant='outline'
						className='text-lg  border-primary hover:bg-hover2 bg-secondary'
					>
						<CircleFadingPlus />
						Create Class
					</Button>
				</div>
			</div>
			{/* Classes */}
			<div className='flex-col border-2 px-5 py-2 '>
				<span>Your Classes</span>
			</div>
		</>
	);
}
