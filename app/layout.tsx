import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for registration management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background p-8">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

