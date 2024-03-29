import { Fira_Code, Gentium_Book_Basic, Gentium_Book_Plus, Gentium_Plus } from "@next/font/google"
import React, { PropsWithChildren, useEffect, useState } from "react"

const FONT_GENTIUM_BOOK_BASIC = Gentium_Book_Basic({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-gentium-book-basic"
})

const FONT_GENTIUM_BOOK_PLUS = Gentium_Book_Plus({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-gentium-book-plus"
})

const FONT_GENTIUM_PLUS = Gentium_Plus({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-gentium-plus"
})

const FONT_FIRA_CODE = Fira_Code({
	weight: ["400", "600"],
	subsets: ["latin"],
	variable: "--font-fira-code",
})

const FONTS = {
	["gentium-book-basic"]: FONT_GENTIUM_BOOK_BASIC,
	["gentium-book-plus"]: FONT_GENTIUM_BOOK_PLUS,
	["gentium-plus"]: FONT_GENTIUM_PLUS,
	["fira-code"]: FONT_FIRA_CODE,
} as const

interface PageProps {
	ratio?: {
		x: number
		y: number
	}
	width?: string
	padding?: string
}

const ResumePage: React.FC<PropsWithChildren<PageProps> & React.HTMLAttributes<HTMLElement>> = ({
	children,
	width,
	padding,
	className
}) => {
	return (
		<section className={`aspect-[8.5/11] print:w-[8.5in] px-[48pt] py-[12px] ${[
			...Object.values(FONTS).map(font => font.variable),
			// "w-[100%]",
			// width ? `w-[${width}]` : "w-[35cm]",
			// padding ? `p-[${padding}]` : "p-[0.25in]",
			className,
		].join(" ")}`}>
			{children}
		</section>
	)
}

export default ResumePage

export type {
	PageProps
}
