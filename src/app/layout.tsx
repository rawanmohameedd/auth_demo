import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth_demo"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}