import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Layout from './components/layout'
import Navbar from './components/navbar'

const Home: NextPage = () => {
	return (
		<div className="">
			<Navbar />
		</div>
	)
}
export default Home
