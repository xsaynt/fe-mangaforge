import { useEffect, useState } from 'react';

export const Homepage = () => {
	const [isLoading, setIsLoading] = useState(null);

	useEffect(() => {
		setIsLoading(true);
	});

	return (
		<ul>
			{allManga.map((manga) => {
				return <MangaCard />;
			})}
		</ul>
	);
};
