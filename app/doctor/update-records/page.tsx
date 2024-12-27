"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function UpdateRecordsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    // Here you would handle the actual update
    setTimeout(() => {
      router.push("/doctor/dashboard")
    }, 1000)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/doctor/dashboard" className="text-purple-600 hover:text-purple-700">
              ← Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-purple-800">Update Existing Patient Records</h1>
        </div>

        <Card className="mx-auto max-w-2xl bg-purple-50">
          <CardContent className="p-6">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="patientId" className="text-purple-700">Patient ID</Label>
                <Input
                  id="patientId"
                  placeholder="Enter patient ID"
                  required
                  disabled={isLoading}
                  className="border-purple-300 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="healthInfo" className="text-purple-700">New Health Information</Label>
                <Textarea
                  id="healthInfo"
                  placeholder="Enter new health information"
                  className="min-h-[200px] border-purple-300 focus:border-purple-500"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white" 
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Patient Data"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

