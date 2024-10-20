import { InferRequestType, InferResponseType } from "hono";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/backend/utils/hono.";
import { toast, useToast } from "@/hooks/use-toast";
// HONO RPC TYPES
type classResponseType = InferResponseType<typeof client.api.class.$post>;
type classRequestType = InferRequestType<typeof client.api.class.$post>["json"];

export const useClass = () => {
	const query = useMutation<classResponseType, Error, classRequestType>({
		mutationKey: ["classes"],
		mutationFn: async (json) => {
			const res = await client.api.class.$post({ json });
			if (!res.ok) {
				throw new Error("server error");
			}
			return await res.json();
		},

		onSuccess: () => {
			toast({
				variant: "default",
				title: "Class Created Successfully!!!",
			});
		},
		onError: () => {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
			});
		},
	});
	return query;
};
