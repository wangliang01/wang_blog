import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
	Button,
	ListItem,
	ListItemIcon,
	ListItemText,
	EllipsisVerticalIcon,
	Card,
	CardContent,
	CardTitle,
	Grid,
	GridItem,
	Section,
	SectionTitle,
} from "@kindle-ui/core";
import Tab from "@/themes/components/Tab";
import Text from "@/utils/i18n";
import { postList, homePage } from "../i18n.json";
import type { IPost } from "@/types/index";

const MAX_POST_COUNT = 15;
const FLAG_ENABLE_SORT_BY_DATE = true;

function PostList({
	allPosts,
	falttedPosts,
	activeCategory,
}: {
	activeCategory: string;
	allPosts: any;
	falttedPosts: IPost[];
}) {
	const classfiedPosts =
		activeCategory !== "All"
			? falttedPosts.filter((post) => post.category === activeCategory)
			: falttedPosts;

	// const sortedPosts = useMemo(
	// 	() => sortByDate(classfiedPosts),
	// 	[classfiedPosts]
	// );

	return (
		<>
			{classfiedPosts.slice(0, MAX_POST_COUNT).map((post) => (
				<Link
					key={post.id}
					passHref
					href={"/p/" + post.id}
					legacyBehavior
				>
					<ListItem
						style={{
							cursor: "pointer",
						}}
					>
						<ListItemText
							primary={
								post.frontmatter
									? post.frontmatter.title
									: post.slug
							}
							second={
								post.frontmatter
									? post.frontmatter.date
									: "1970/01/01"
							}
						/>
						<ListItemIcon
							onClick={() => {
								console.log("Clicked");
							}}
						>
							<EllipsisVerticalIcon />
						</ListItemIcon>
					</ListItem>
				</Link>
			))}
		</>
	);
}

const Home = (props: any) => {
	const { allPosts, falttedPosts, locale, allCategories } = props;
	const [activeCategory, setActiveCategory] = useState("All");

	const tabs = useMemo<{ name: string; text: string }[]>(
		() =>
			[{ name: "All", text: "全部" }].concat(
				allCategories.map((item) => {
					return { name: item.slug, text: item.config.name };
				})
			),
		[allCategories]
	);

	// TODO Customize the Banner

	return (
		<>
			<Section>
				<Text dictionary={homePage} language={locale}>
					<SectionTitle label={"Features"} />
				</Text>

				<Grid>
					{/* <Link
								passHref
								href="/p/Macisfy-Your-Windows"
								legacyBehavior
							>
								<GridItem src="https://cdn.sspai.com/2022/09/14/323d5392b32276f64959c20977cbe81a.png?imageMogr2/auto-orient/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1" />
							</Link> */}
					<GridItem
						href="https://fav.rene.wang"
						src="/image/cover/fav.png"
					/>
					<GridItem
						href="https://febook.rene.wang"
						src="https://febook.rene.wang/images/cover.png"
					/>
				</Grid>
			</Section>
			<Section>
				<Tab
					lang={locale}
					tabs={tabs}
					activeIndex={activeCategory}
					onChange={(index) => {
						setActiveCategory(index);
					}}
				/>

				<PostList
					activeCategory={activeCategory}
					allPosts={allPosts}
					falttedPosts={falttedPosts}
				/>

				<br />
				<div className="Dis(flex) JC(center)">
					<Text dictionary={postList} language={locale}>
						<Link legacyBehavior passHref href="/archive">
							<Button variant="outline" className="center">
								<Text allPosts={[falttedPosts.length]} />
							</Button>
						</Link>
					</Text>
				</div>
			</Section>
		</>
	);
};

export default Home;
