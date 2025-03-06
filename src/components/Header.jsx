import { Link } from 'react-router-dom';
import mangaforgeLogo from '../assets/mangaforgeLogo.png';

export const Header = () => {
	return (
		<header>
			<section className='web-name'>
				<Link to={`/home`}>
					<img src={mangaforgeLogo} alt='Website logo for Mangaforge' />
					<h1>Mangaforge</h1>
				</Link>
			</section>
			<section>
				<p className='users-name'>Guest</p>
			</section>
		</header>
	);
};
