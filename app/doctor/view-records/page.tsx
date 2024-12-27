"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ViewRecordsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    // Here you would handle the actual data fetch
    setTimeout(() => {
      router.push("/doctor/patient-details")
    }, 1000)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/doctor/dashboard" className="text-green-600 hover:text-green-700">
              ← Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-green-800">View Patient Records</h1>
        </div>

        <Card className="mx-auto max-w-2xl bg-green-50">
          <CardContent className="p-6">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="patientId" className="text-green-700">Patient ID</Label>
                <Input
                  id="patientId"
                  placeholder="Enter patient ID"
                  required
                  disabled={isLoading}
                  className="border-green-300 focus:border-green-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white" 
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "View Patient Data"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

