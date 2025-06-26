<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(""),
		class: className,
		...restProps
	}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	bind:value
	bind:ref
	data-slot="command"
	class={cn(
		// Modified bg-popover/50 backdrop-blur-lg p-2 decoration-trasparent
		"bg-popover/50 text-popover-foreground flex h-full w-full flex-col overflow-hidden backdrop-blur-lg p-2 decoration-trasparent",
		className
	)}
	{...restProps}
/>
