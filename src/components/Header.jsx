import { Link } from 'react-router-dom';
import mangaforgeLogo from '../assets/mangaforgeLogo.png';

export const Header = () => {
	return (
		<header>
			<section className='web-name'>
				<img src={mangaforgeLogo} alt='Website logo for Mangaforge' />
				<h1>
					<Link to={`/home`}>Mangaforge</Link>
				</h1>
			</section>
			<section>
				<p className='users-name'>Guest</p>
			</section>
		</header>
	);
};
