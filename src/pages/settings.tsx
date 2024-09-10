import { TLocale, IPost } from "@/types/index";
import { List, ListItem, ListItemText } from "@kindle-ui/core";
import Link from "next/link";

export async function getStaticProps({ locale, locales }) {
	return {
		props: {
			currentPage: {
				title: "设置",
				path: "/settings",
			},
			locale,
		},
	};
}

interface HomePageProps {
	locale: TLocale;
}

const HomePage = (props: HomePageProps) => {
	return (
		<>
			<div>
				<List>
					<ListItem>
						<ListItemText primary="导出所有文章" />
					</ListItem>
					<Link href="/rss/feed.xml" legacyBehavior>
						<ListItem>
							<ListItemText primary="XML" />
						</ListItem>
					</Link>

					<ListItem>
						<ListItemText primary="开源软件" />
					</ListItem>
				</List>
			</div>
		</>
	);
};

export default HomePage;
