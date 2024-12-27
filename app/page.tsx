import Link from "next/link"
import { LockIcon, ShieldIcon, UserIcon, ActivityIcon } from 'lucide-react'
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
            Secure Healthcare Records
            <br />
            on Blockchain
          </h1>
          <p className="mb-8 text-lg text-purple-600">
            Access and manage medical records securely using dual blockchain technology
          </p>
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <Link href="#learn-more">Learn More</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-100 p-3">
                <UserIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-blue-600">Doctor Login</h2>
            <p className="mb-4 text-blue-600">
              Access patient records and manage healthcare data
            </p>
            <Button asChild variant="outline" className="w-full bg-blue-100 hover:bg-blue-200">
              <Link href="/doctor/login">Login as Doctor</Link>
            </Button>
          </div>

          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-purple-100 p-3">
                <UserIcon className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-purple-600">Patient Login</h2>
            <p className="mb-4 text-purple-600">
              View your medical records and health data
            </p>
            <Button asChild variant="outline" className="w-full bg-purple-100 hover:bg-purple-200">
              <Link href="/patient/login">Login as Patient</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-3 group">
                  <ShieldIcon className="h-6 w-6 text-blue-600 group-hover:glow-blue-500" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-blue-600">Enhanced Security</h3>
              <p className="text-sm text-blue-700">
                Dual blockchain technology ensures the highest level of data protection
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-purple-100 p-3 group">
                  <LockIcon className="h-6 w-6 text-purple-600 group-hover:glow-purple-500" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-purple-600">Privacy Focused</h3>
              <p className="text-sm text-purple-700">
                Your medical data remains private and under your control
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-50">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-pink-100 p-3 group">
                  <ActivityIcon className="h-6 w-6 text-pink-600 group-hover:glow-pink-500" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-pink-600">Efficient Access</h3>
              <p className="text-sm text-pink-700">
                Quick and secure access to medical records for authorized personnel
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

