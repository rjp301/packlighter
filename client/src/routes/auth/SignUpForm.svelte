<script lang="ts">
	import { goto } from '$app/navigation';
	import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
	import { Button } from '@/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import { pb } from '@/lib/pocketbase';
	import { AlertTriangle } from 'lucide-svelte';
	import type { ClientResponseError } from 'pocketbase';

	type Schema = {
		email: string;
		password: string;
		passwordConfirm: string;
		username: string;
	};
	type PbValidationError = { message: string; code: string };

	let data: Schema = {
		email: '',
		password: '',
		passwordConfirm: '',
		username: ''
	};

	let error: {
		identity?: PbValidationError;
		password?: PbValidationError;
		passwordConfirm?: PbValidationError;
		username?: PbValidationError;
		overall?: string;
	} = {};

	const submitForm = (data: Schema) =>
		pb
			.collection('users')
			.create(data)
			.then((res) => {
				console.log('account creation successful');
				goto('/');
			})
			.catch((err: ClientResponseError) => {
				console.log(err.data);
				error = { ...error, ...err.data.data };
				error.overall = err.data.message;
			});
</script>

<form on:submit|preventDefault={() => submitForm(data)}>
	{#if error.overall}
		<Alert variant="destructive" class="mb-2">
			<AlertTriangle className="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>{error.overall}</AlertDescription>
		</Alert>
	{/if}
	<Card>
		<CardHeader>
			<CardTitle>Sign Up</CardTitle>
			<CardDescription>Create a new account</CardDescription>
		</CardHeader>
		<CardContent class="space-y-2">
			<Input placeholder="Username" type="text" name="username" bind:value={data.username} />
			{#if error.username}
				<span class="text-destructive text-xs">{error.username.message}</span>
			{/if}
			<Input placeholder="Email" type="email" name="email" bind:value={data.email} />
			{#if error.identity}
				<span class="text-destructive text-xs">{error.identity.message}</span>
			{/if}
			<Input placeholder="Password" type="password" name="password" bind:value={data.password} />
			{#if error.password}
				<span class="text-destructive text-xs">{error.password.message}</span>
			{/if}
			<Input
				placeholder="Password Confirm"
				type="password"
				name="passwordConfirm"
				bind:value={data.passwordConfirm}
			/>
			{#if error.passwordConfirm}
				<span class="text-destructive text-xs">{error.passwordConfirm.message}</span>
			{/if}
		</CardContent>
		<CardFooter>
			<Button type="submit" class="w-full">Submit</Button>
		</CardFooter>
	</Card>
</form>
