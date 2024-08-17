"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomFromField from "../CustomFromField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFromvalidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA =  'textarea',
  PHONE_INPUT= 'phoneinput',
  CHECKBOX= 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
} 




const Patientform  = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFromvalidation>>({ 
    resolver: zodResolver(UserFromvalidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "", 
    },
  })
    

  async  function onSubmit({ name, email, phone }: z.infer<typeof UserFromvalidation>) {
    setIsLoading(true);

    try {
      // const userData = { name, email, phone }; 

      // const user = await createUser(userData);

      // if(user) router.push(`/patients/${user.$id}/register`)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header ">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>

        </section>

        <CustomFromField
          fieldType={FormFieldType.INPUT}

          control={form.control}

          name="name"
          label="Full name"
          placeholder="Pratik Sinha"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFromField
          fieldType={FormFieldType.INPUT}

          control={form.control}

          name="email"
          label="Email"
          placeholder="your_email@email.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFromField
          fieldType={FormFieldType.PHONE_INPUT}

          control={form.control}

          name="phone"
          label="Phone number"
          placeholder="(+91) 1234567890"
          
        />

        <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
      </form>
    </Form>  
  )
}

export default Patientform