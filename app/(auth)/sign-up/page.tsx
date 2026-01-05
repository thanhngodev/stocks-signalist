"use client";

import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignUp = () => {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log("Sign up data: ", data);

      // const result = await signUpWithEmail(data);
      // if(result.success) router.push('/');
    } catch (e) {
      console.error(e);
      toast.error("Sign up failed", {
        description:
          e instanceof Error ? e.message : "Failed to create an account.",
      });
    }
  };

  return (
    <div className="w-full">
      <h1 className="form-title">Sign Up & Personalize</h1>

      <div className="max-h-[calc(100vh-500px)] overflow-y-auto pr-2 -mr-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pb-4">
          <InputField
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            register={register}
            error={errors.fullName}
            validation={{ required: "Full name is required", minLength: 2 }}
          />

          <InputField
            name="email"
            label="Email"
            placeholder="contact@jsmastery.com"
            register={register}
            error={errors.email}
            validation={{
              required: "Email name is required",
              pattern: /^\w+@\w+\.\w+$/,
              message: "Email address is required",
            }}
          />

          <InputField
            name="password"
            label="Password"
            placeholder="Enter a strong password"
            type="password"
            register={register}
            error={errors.password}
            validation={{ required: "Password is required", minLength: 8 }}
          />

          <CountrySelectField
            name="country"
            label="Country"
            control={control}
            error={errors.country}
            required
          />

          <SelectField
            name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goal"
            options={INVESTMENT_GOALS}
            control={control}
            error={errors.investmentGoals}
            required
          />

          <SelectField
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your risk level"
            options={RISK_TOLERANCE_OPTIONS}
            control={control}
            error={errors.riskTolerance}
            required
          />

          <SelectField
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your preferred industry"
            options={PREFERRED_INDUSTRIES}
            control={control}
            error={errors.preferredIndustry}
            required
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="yellow-btn w-full mt-5"
          >
            {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
          </Button>
        </form>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <FooterLink
          text="Already have an account?"
          linkText="Sign in"
          href="/sign-in"
        />
      </div>
    </div>
  );
};

export default SignUp;
