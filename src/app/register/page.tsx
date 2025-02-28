"use client"

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>("")

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setError("Your password doesn't match.")
        }
        try{
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });

            const data = res.json();
            if(!res.ok){
                setError("Registration failed");
            }
            router.push("/login");
            
        }catch(error){

        }
    }
  return (
    <div>Register</div>
  )
}

export default Register