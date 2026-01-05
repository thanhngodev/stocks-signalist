"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";

const SignIn = () => {
  //   const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Sign in data: ", data);
      //   const result = await signInWithEmail(data);
      //   if (result.success) router.push("/");
    } catch (e) {
      console.error("Sign in error: ", e);
      toast.error("Sign in failed", {
        description: e instanceof Error ? e.message : "Failed to sign in.",
      });
    }
  };

  return (
    <div className="w-full">
      <h1 className="form-title">Welcome back</h1>

      <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 -mr-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            name="email"
            label="Email"
            placeholder="contact@jsmastery.com"
            register={register}
            error={errors.email}
            validation={{
              required: "Email is required",
              pattern: /^\w+@\w+\.\w+$/,
            }}
          />

          <InputField
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors.password}
            validation={{ required: "Password is required", minLength: 8 }}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="yellow-btn w-full mt-5"
          >
            {isSubmitting ? "Signing In" : "Sign In"}
          </Button>
        </form>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </div>
    </div>
  );
};
export default SignIn;
