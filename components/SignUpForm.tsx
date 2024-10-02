"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SignUpSchema } from "@/types";
import { SignUp } from "@/actions/auth.actions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function SignUpForm() {
	const router = useRouter();
	// 1. Define your form.
	const form = useForm<z.infer<typeof SignUpSchema>>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			role: "User",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof SignUpSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const res = await SignUp(values);
		if (res.error) {
			toast({
				variant: "destructive",
				description: "Something Went Wrong",
			});
		} else if (res.success) {
			toast({
				variant: "default",
				description: "account Created successfully",
			});
			if (res.role === "Admin") {
				router.push("/admin");
			} else {
				router.push("/user");
			}
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-6  font-Euclid '
			>
				{/* Username */}
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg ml-2 text-card'>
								Username
							</FormLabel>
							<FormControl>
								<Input
									className='p-5'
									placeholder='username'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Email */}
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg ml-2 text-card'>
								Email
							</FormLabel>
							<FormControl>
								<Input
									className='p-5'
									placeholder='name@youcompany.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Password */}
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg ml-2 text-card'>
								Password
							</FormLabel>
							<FormControl>
								<Input
									className='p-5'
									placeholder='password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* role */}
				<FormField
					control={form.control}
					name='role'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg ml-2 text-card'>
								Role
							</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									value={field.value}
								>
									<SelectTrigger className='w-[180px]'>
										<SelectValue placeholder='Select a Role' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Select a Role</SelectLabel>
											<SelectItem value='User'>User</SelectItem>
											<SelectItem value='Admin'>Admin</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button className='w-full mt-2' type='submit'>
					Submit
				</Button>
			</form>
		</Form>
	);
}
