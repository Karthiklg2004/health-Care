"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RegisterPatientPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    otp: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleInitialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would handle the actual OTP sending
    // For now, we'll just simulate it with a timeout
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 1500)
  }

  const handleOTPSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would verify the OTP
    // For now, we'll just simulate it with a timeout
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
    }, 1500)
  }

  const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would handle the final submission
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push("/doctor/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/doctor/dashboard" className="text-blue-600 hover:text-blue-700">
              ← Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-blue-800">Register New Patient</h1>
        </div>

        {step === 1 && (
          <Card className="mx-auto max-w-md bg-white">
            <CardHeader>
              <CardTitle className="text-blue-800">Patient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInitialSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-700">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-blue-700">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="mx-auto max-w-md bg-white">
            <CardHeader>
              <CardTitle className="text-blue-800">OTP Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleOTPSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-blue-700">Enter OTP</Label>
                  <Input
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="space-y-8">
            <Card className="bg-blue-50 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-800">Patient Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-blue-700">Name</Label>
                  <p className="font-medium text-blue-900">{formData.name}</p>
                </div>
                <div>
                  <Label className="text-blue-700">Phone Number</Label>
                  <p className="font-medium text-blue-900">{formData.phone}</p>
                </div>
                <div>
                  <Label className="text-blue-700">Email</Label>
                  <p className="font-medium text-blue-900">{formData.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-blue-800">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="aadhar" className="text-blue-700">Aadhar Number</Label>
                  <Input id="aadhar" required className="border-blue-300 focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-blue-700">Gender</Label>
                  <Select>
                    <SelectTrigger id="gender" className="border-blue-300 focus:border-blue-500">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-blue-700">Date of Birth</Label>
                  <Input id="dob" type="date" required className="border-blue-300 focus:border-blue-500" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address" className="text-blue-700">Address</Label>
                  <Textarea id="address" required className="border-blue-300 focus:border-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-blue-800">Medical Device Data</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {["TEMPF", "PULSE", "RESPR", "BPSYS", "BPDIAS", "POPCT"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="text-blue-700">{field}</Label>
                    <Input id={field} type="number" step="0.01" className="border-blue-300 focus:border-blue-500" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-blue-800">Medical Conditions and Practices</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {["Pregnancies", "Glucose", "BloodPressure", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="text-blue-700">{field}</Label>
                    <Input id={field} type="number" step="0.01" className="border-blue-300 focus:border-blue-500" />
                  </div>
                ))}
                {["Smoker", "Stroke", "Alcohol"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="text-blue-700">{field}</Label>
                    <Select>
                      <SelectTrigger className="border-blue-300 focus:border-blue-500">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-blue-800">Physical Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {["Height", "Weight", "Bmi", "BmiClass"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="text-blue-700">{field}</Label>
                    <Input id={field} type={field === "BmiClass" ? "text" : "number"} step="0.01" className="border-blue-300 focus:border-blue-500" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register Patient"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  )
}

