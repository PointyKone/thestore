import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { trpc } from "../utils/trpc";
import Layout from "./components/layout";
import Navbar from "./components/navbar";

export default function Home() {
	const { data, isLoading } = trpc.useQuery(["featured"]);

	if(isLoading) return <div>Loading...</div>;

	if(data) return <div>{data.map((p: any) => {
		return <div key={p.id}>{p.name}</div>
	})}</div>

	return (
		<div className="">
		<Navbar />
		</div>
	);
}
