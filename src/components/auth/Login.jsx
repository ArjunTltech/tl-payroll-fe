import React, { useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Checkbox,
  Button,
  Spinner,
} from "@material-tailwind/react";
import  useAuthStore  from '../../store/authStore'
import axiosInstance from "../../config/axioInstance"
import { toast } from 'react-toastify';
import { PiCalculatorThin, PiCurrencyCircleDollarLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
  rememberMe: z.boolean().optional(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { setAccessToken } = useAuthStore();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      if (response.data.success) {
        console.log("Login successful:", response.data);
        setLoading(false);
        const { accessToken } = response.data;
        setAccessToken(accessToken);
        toast.success("Login successful!");
        navigate('/' )

      } else {
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Login failed!");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="w-3/5 hidden lg:block bg-cover bg-center"
        style={{
          backgroundImage:
          'url("/payroll-bg.jpg")',
        }}
      ></div>

      <div className="w-full lg:w-2/5 flex items-center justify-center bg-gray-300 p-4">
       
        <PiCalculatorThin className="text-blue-500 w-96 h-96  absolute top-2 right-2  opacity-30" />
        <PiCurrencyCircleDollarLight   className="text-blue-500 w-56 h-56  absolute bottom-2 right-90  opacity-30"/>
        <Card className="w-full max-w-md mx-auto">
          
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-24 sm:h-28 place-items-center"
          >
            <Typography variant="h3" color="white" className="text-2xl sm:text-3xl">
              Payroll Login
            </Typography>
            
          </CardHeader>

          <CardBody className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6 ">
                <div className="relative">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        label="Email"
                        size="lg"
                        color="blue"
                        error={Boolean(errors.email)}
                        className="text-sm sm:text-base"
                      />
                    )}
                  />
                  {errors.email && (
                    <Typography
                      variant="small"
                      color="red"
                      className="absolute mt-1 ml-2 text-xs"
                    >
                      {errors.email.message}
                    </Typography>
                  )}
                </div>

                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          label="Password"
                          size="lg"
                          color="blue"
                          error={Boolean(errors.password)}
                          className="text-sm sm:text-base"
                        />
                        <div
                          className="absolute top-3 right-3 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <FaEyeSlash className="text-gray-600 h-4 w-4 sm:h-5 sm:w-5" />
                          ) : (
                            <FaEye className="text-gray-600 h-4 w-4 sm:h-5 sm:w-5" />
                          )}
                        </div>
                      </div>
                    )}
                  />
                  {errors.password && (
                    <Typography
                      variant="small"
                      color="red"
                      className="absolute mt-1 ml-2 text-xs"
                    >
                      {errors.password.message}
                    </Typography>
                  )}
                </div>

                <div className="mb-2">
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <Checkbox {...field} label="Remember Me" color="blue" />
                    )}
                  />
                </div>
                
              </div>
                <div className="flex justify-center">
              <Button 
                type="submit" 
                variant="gradient" 
                color="blue" 
                
                className="mt-4 h-12 w-full text-md md:w-80 rounded-full"
                
              >
                {loading ? <Spinner color="white" className="mx-auto h-5 w-5"/> : "Login"}
              </Button>
              </div>    

              <Typography variant="small" className="text-center mt-2 sm:mt-3">
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-700 transition-colors text-xs sm:text-sm"
                >
                  Forgot your password?
                </a>
              </Typography>

              <Typography variant="small" className="text-center mt-2">
                <span className="text-gray-600 text-xs sm:text-sm">Don't have an account? </span>
                <a
                  href="/signup"
                  className="text-blue-500 hover:text-blue-700 transition-colors text-xs sm:text-sm"
                >
                  Sign up
                </a>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
      
    </div>
  );
};

export default Login;