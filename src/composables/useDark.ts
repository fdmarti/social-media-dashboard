import { ref } from 'vue';

export const useDark = () => {
	const dark = ref<boolean>(false);

	const loadDarkMode = (): void => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			dark.value = true;
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			dark.value = false;
		}
	};

	const changeTheme = (): void => {
		dark.value = !dark.value;
		document.documentElement.classList.toggle('dark');

		if (dark.value) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
	};

	return {
		dark,

		loadDarkMode,
		changeTheme,
	};
};
