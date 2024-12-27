"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PatientLoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    // Here you would handle the actual login
    setTimeout(() => {
      router.push("/patient/records")
    }, 1000)
  }

  return (
    <Layout>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-4 bg-gradient-to-b from-purple-100 to-purple-200">
        <Card className="mx-auto w-full max-w-md bg-purple-50">
          <CardContent className="p-6">
            <div className="mb-4 text-center">
              <h1 className="text-2xl font-semibold text-purple-800">Patient Login</h1>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="border-purple-300 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-purple-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                  className="border-purple-300 focus:border-purple-500"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

