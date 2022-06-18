import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import { trpc } from "../utils/trpc";
import Layout from "./components/layout";
import Navbar from "./components/navbar";

export default function Home() {
	const { data, isLoading } = trpc.useQuery(["hello", { text: "Kian" }]);

	if(isLoading) return <div>Loading...</div>;

	if(data) return <div>{data.greeting}</div>

	return (
		<div className="">
		<Navbar />
		</div>
	);
}
