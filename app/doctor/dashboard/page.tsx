"use client";

import Link from "next/link"
import { UserPlusIcon, ClipboardEditIcon, FileTextIcon } from 'lucide-react'
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const logoutApiCall = async () => {
    return fetch('/api/logout', { method: 'POST' });
};

export default function DoctorDashboardPage() {
    const handleLogout = async () => {
        try {
            await logoutApiCall();
            window.location.href = '/doctor/login';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-blue-800">Doctor Dashboard</h1>
                    <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <Link href="/doctor/register-patient" className="block text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-blue-300 p-3 group">
                                        <UserPlusIcon className="h-8 w-8 text-blue-700 group-hover:text-blue-900" />
                                    </div>
                                </div>
                                <h2 className="mb-2 text-xl font-semibold text-blue-800">New Patient</h2>
                                <p className="text-sm text-blue-700">Register a new patient in the system</p>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <Link href="/doctor/update-records" className="block text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-purple-300 p-3 group">
                                        <ClipboardEditIcon className="h-8 w-8 text-purple-700 group-hover:text-purple-900" />
                                    </div>
                                </div>
                                <h2 className="mb-2 text-xl font-semibold text-purple-800">Existing Patient</h2>
                                <p className="text-sm text-purple-700">Update records for existing patients</p>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-100 to-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <Link href="/doctor/view-records" className="block text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-green-300 p-3 group">
                                        <FileTextIcon className="h-8 w-8 text-green-700 group-hover:text-green-900" />
                                    </div>
                                </div>
                                <h2 className="mb-2 text-xl font-semibold text-green-800">View Records</h2>
                                <p className="text-sm text-green-700">Access and view patient information</p>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

