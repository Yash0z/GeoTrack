import { InferRequestType, InferResponseType } from "hono";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { client } from "@/backend/utils/hono.";
import { toast, useToast } from "@/hooks/use-toast";
// HONO RPC TYPES
type classResponseType = InferResponseType<typeof client.api.class.$post, 200>;
type classRequestType = InferRequestType<typeof client.api.class.$post>["json"];

export const getClass = () => {
	const query = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			const res = await client.api.class.$get();
			if (!res.ok) {
				throw new Error("server error");
			}
			return await res.json();
		},
	});
	return query;
};

export const useClass = () => {
	const queryClient = useQueryClient();
	const query = useMutation<classResponseType, Error, classRequestType>({
		mutationKey: ["class"],
		mutationFn: async (json) => {
			const res = await client.api.class.$post({ json });
			if (!res.ok) {
				throw new Error("server error");
			}
			return await res.json();
		},

		onSuccess: (json) => {
			queryClient.invalidateQueries({ queryKey: ["classes"] });
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
