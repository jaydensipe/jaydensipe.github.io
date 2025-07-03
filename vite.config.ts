import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [enhancedImages(), tailwindcss(), sveltekit(), Icons({
		compiler: 'svelte',
	})]
});
