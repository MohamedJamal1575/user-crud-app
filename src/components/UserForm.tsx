"use client";
import { userSchema } from "@/config/userSchema";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Save, Heart } from 'lucide-react';
import UserDataTable from '@/components/UserDataTable';
import { toast } from "sonner";
import { api } from "@/lib/api";
import { User } from "@/types/user";

export default function UserForm() {
    const [form, setForm] = useState<Record<string, any>>({});
    const [isSaving, setIsSaving] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [editUser, setEditUser] = useState<Record<string, any>>({});

    const load = async () => {
        setUsers(await api.getUsers());
    };

    useEffect(() => {
        load();
    }, []);

    const saveUser = async () => {
        Object.keys(editUser).length > 0 ? await api.updateUser({ ...form, id: editUser.id })
            : await api.createUser(form);
        setEditUser({});
        setForm({})
        load();
    };

    const onDelete = async (id: string) => {
        await api.deleteUser(id);
        load();
    }

    const validate = () => {
        let firstErrorMessage = "";

        userSchema.forEach((field) => {
            const value = form[field.name];

            if (field.required && !value) {
                if (!firstErrorMessage) {
                    firstErrorMessage = `${field.label} is required`;
                }
                return;
            }

            if (field.pattern && value && !field.pattern.test(value)) {
                if (!firstErrorMessage) {
                    firstErrorMessage = `Invalid ${field.label}`;
                }
            }
        });

        if (firstErrorMessage) {
            toast.error(firstErrorMessage);
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        if (validate()) {
            try {
                setIsSaving(true);
                // await new Promise(resolve => setTimeout(resolve, 1000));
                await saveUser();
            } catch (error) {
                console.error(error);
            } finally {
                setIsSaving(false);
            }
        }
    };

    const onEdit = (user:User) =>{
        setEditUser(user);
        setForm(user);
        document.getElementById("firstName")?.focus();
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Content */}
            <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* User Details Form */}
                    <div className="max-w-lg mx-auto space-y-8">
                        <Card className=" bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/15 before:to-transparent before:pointer-events-none relative">
                            <CardHeader className="space-y-3 pb-6">
                                <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
                                    User Details
                                </CardTitle>
                                <CardDescription className="text-center text-base">
                                    Please provide your information below
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 px-6 sm:px-8 pb-8">
                                <div className="grid grid-cols-1 gap-5">

                                    {userSchema.map(field => (
                                        <div className="space-y-2" key={field.name}>
                                            <Label
                                                htmlFor="firstName"
                                                className="text-sm font-semibold text-foreground"
                                            >
                                                {field.label}
                                            </Label>
                                            <Input
                                                id={field.name}
                                                placeholder="Enter your first name"
                                                type={field.type}
                                                value={form[field.name] || ""}
                                                onChange={e =>
                                                    setForm({ ...form, [field.name]: e.target.value })
                                                }
                                                className="h-11 text-base transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>
                                    ))}

                                </div>

                                <div className="pt-4">
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={isSaving}
                                        className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                        size="lg"
                                    >
                                        {isSaving ? (
                                            <>
                                                <span className="animate-spin mr-2">⏳</span>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="mr-2 h-5 w-5" />
                                                Save
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    {/* User Data Table Section */}
                    <Card className="bg-[var(--glass-bg)]
    backdrop-blur-xl
    border border-[var(--glass-border)]
    shadow-xl
    before:absolute before:inset-0
    before:rounded-xl
    before:bg-gradient-to-b
    before:from-white/15 before:to-transparent
    before:pointer-events-none
    relative">
                        <CardHeader className="space-y-3 pb-6">
                            <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
                                User Directory
                            </CardTitle>
                            <CardDescription className="text-base">
                                View and manage all registered users
                            </CardDescription>
                        </CardHeader>
                        <Separator className="mb-6" />
                        <CardContent className="px-6 sm:px-8 pb-8">
                            <UserDataTable onEdit={onEdit} onDelete={onDelete} users={users} />
                        </CardContent>
                    </Card>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 px-4 text-center text-sm text-muted-foreground border-t border-border/40 bg-card/30 backdrop-blur-sm">
                <p className="flex items-center justify-center gap-1.5 flex-wrap">
                    © 2026.
                    <Heart className="h-4 w-4 text-primary fill-primary inline-block" />
                    <a
                        href="https://mohamed-jamal.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline transition-colors"
                    >
                        Mohamed Jamal M
                    </a>
                </p>
            </footer>
        </div>
    );
}
