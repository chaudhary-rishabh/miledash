'use client'

import Link from 'next/link'

export default function Header() {
    return (
        <header className='fixed top-0 left-0 right-0 z-40'>
            <nav aria-label="Global" className="mx-auto my-3 bg-black backdrop-blur flex shadow-xl max-w-7xl rounded-2xl items-center justify-between p-5 lg:px-8">
                <div className="flex w-1/4 sm:w-2/4">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="text-white">miledash</span>
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="/contact" className="-m-1.5 text-white p-1.5 font-semibold  hover:underline">
                        Coach
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 text-white p-1.5 font-semibold hover:underline">
                        Chat
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 text-white font-semibold hover:underline">
                        Score
                    </Link>
                </div>
            </nav>
        </header>
    )
}