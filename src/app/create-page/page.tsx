'use client'
import Link from "next/link"
import x from '../styles/app.module.css'
import y from '../styles/test.module.css'
import AppTable from '../components/app.table'
import { useEffect } from 'react'
import useSWR from "swr"

export default function CreatePage() {

	const fetcher = (url: string) => fetch(url).then((res) => res.json())

	const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
		)
		// console.log(">>> check res:" , data )
		if (!data) {
			return <div>loading...</div>
		}

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch("http://localhost:8000/blogs")
	// 		const data = await res.json()
	// 		console.log(">>> check res:" , data      )
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<div>
			<ul>
				<li className={x['red']}>
					<Link href={"/facebook"}>
						<span className={y['red']}>Facebook</span>
						
					</Link>
				</li>
				<li style={{ margin: "20px 0" }}>
					<Link href={"/youtube"}>
					 Youtube
					</Link>
				</li>
				<li>
					<Link href={"/tiktok"}>
					 Tiktok
					</Link>
				</li>
			</ul>
			<AppTable
				blogs={data?.sort((a: any, b: any) => a.id - b.id)}
			/>
		</div>
	)
}