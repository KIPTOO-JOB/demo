export default function Navbar() {
	return (
		<div className=" m-6  p-6">
			<div className="flex flex-row items-center justify-center border-b-gray-300 drop-shadow-sm shadow-md p-7 rounded-sm">
				<ul className="flex flex-row flex-1 justify-between">
					<ul className=" font-bold">
						<a href="">Nav Bar</a>{" "}
					</ul>
					<ul className="flex flex-row space-x-4 md:hidden lg:flex">
						<li>
							<a href=""> Home</a>{" "}
						</li>
						<li>
							<a href="">About</a>{" "}
						</li>
						<li>
							<a href="">Contact Us</a>{" "}
						</li>

						<li>
							<a href="">Buy Me Coffee</a>{" "}
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
}
