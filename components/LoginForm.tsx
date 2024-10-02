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
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/types";
import { SignIn } from "@/actions/auth.actions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function LoginForm() {
	const router = useRouter();
	// 1. Define your form.
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof LoginSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const res = await SignIn(values);
		if (res.error) {
			console.log(res.error);
			toast({
				variant: "destructive",
				description: "Something Went Wrong",
			});
		} else if (res.success) {
			toast({
				variant: "default",
				description: "Logged in successfully",
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

				<Button className='w-full mt-2' type='submit'>
					Login
				</Button>
			</form>
		</Form>
	);
}
