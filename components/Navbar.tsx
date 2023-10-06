import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constant'
import AuthProviders from './AuthProviders'


const Navbar = () => {
	const session = {}

	return (
		<nav className="flexBetween navbar">
			<div className="flex-1 flexStart gap-10">
				<Link href="/">
					<Image
						src={"/logo.svg"}
						height={43}
						alt="Flexibble"
						width={115}
					/>
				</Link>
				<ul className="xl:flex hidden text-small gap-7">
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.key}>{link.text}</Link>
					))}
				</ul>
			</div>
			
			<div className="flexCenter gap-4">
				{session ?
					<ul>
						UserPhoto
						<Link href="/create-project">
							Share Work
						</Link>
					</ul>
					: (
						<AuthProviders />
					)
				}
			</div>
		</nav>
	)
}

export default Navbar